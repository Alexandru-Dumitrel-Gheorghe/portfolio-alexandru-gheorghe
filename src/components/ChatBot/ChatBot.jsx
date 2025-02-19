import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./ChatBot.module.css";
import { FaPaperPlane, FaMicrophone, FaPlus } from "react-icons/fa";

/** Indicator de tastare */
const TypingIndicator = () => (
  <div className={styles.typingIndicator}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

/** Item pentru lista de sesiuni de chat */
const ChatSessionItem = ({ session, isActive, onClick }) => {
  return (
    <button
      className={`${styles.chatSession} ${isActive ? styles.activeSession : ""}`}
      onClick={() => onClick(session.id)}
      aria-current={isActive ? "true" : "false"}
    >
      {session.title}
    </button>
  );
};

/** Sidebar cu lista de sesiuni de chat */
const ChatSessionList = ({ sessions, activeSessionId, onSelectSession, onNewChat }) => {
  return (
    <aside className={styles.sidebar}>
      <button className={styles.newChatButton} onClick={onNewChat}>
        <FaPlus /> Neuer Chat
      </button>
      <div className={styles.chatList}>
        {sessions.map((session) => (
          <ChatSessionItem
            key={session.id}
            session={session}
            isActive={session.id === activeSessionId}
            onClick={onSelectSession}
          />
        ))}
      </div>
    </aside>
  );
};

/** Fereastra de chat (mesaje) */
const ChatWindow = ({ chat, chatboxRef }) => {
  return (
    <motion.div
      className={styles.chatbot}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className={styles.chatHeader}>
        <h2>{chat?.title || "Kein Chat ausgewählt"}</h2>
      </header>
      <ul className={styles.chatbox} ref={chatboxRef}>
        {chat?.messages.map((msg) => (
          <motion.li
            key={msg.id}
            className={`${styles.chat} ${styles[msg.sender]}`}
            initial={{
              opacity: 0,
              x: msg.sender === "outgoing" ? 50 : -50,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {msg.sender === "incoming" && (
              <span className={styles.iconBot} title="Chatbot">
                🤖
              </span>
            )}
            {typeof msg.text === "object" ? msg.text : <p>{msg.text}</p>}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

/** Componenta pentru inputul de chat și sugestii */
const ChatInput = ({
  inputText,
  onInputChange,
  onSend,
  onKeyDown,
  onVoiceInput,
  isListening,
  suggestions,
  onSelectSuggestion,
}) => {
  return (
    <>
      <div className={styles.suggestions}>
        {suggestions.map((sugg, index) => (
          <button
            key={index}
            className={styles.suggestionButton}
            onClick={() => onSelectSuggestion(sugg)}
          >
            {sugg}
          </button>
        ))}
      </div>
      <div className={styles.chatInput}>
        <textarea
          placeholder="Nachricht eingeben..."
          spellCheck="false"
          value={inputText}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
        ></textarea>
        <button
          onClick={onSend}
          className={styles.sendButton}
          aria-label="Send Message"
          disabled={!inputText.trim()}
        >
          <FaPaperPlane className={styles.animatedIcon} />
        </button>
        <button onClick={onVoiceInput} className={styles.voiceButton} aria-label="Voice Input">
          <FaMicrophone
            className={`${styles.animatedIcon} ${isListening ? styles.listening : ""}`}
          />
        </button>
      </div>
    </>
  );
};

const ChatBot = () => {
  const [chatSessions, setChatSessions] = useState([
    {
      id: Date.now(),
      title: "Chat #1",
      messages: [
        {
          id: Date.now(),
          sender: "incoming",
          text: "Hallo, wie kann ich Ihnen heute helfen?",
        },
      ],
    },
  ]);
  const [activeChatId, setActiveChatId] = useState(chatSessions[0].id);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const chatboxRef = useRef(null);
  const recognitionRef = useRef(null);

  const suggestions = [
    "Wie ist das Wetter?",
    "Erzähl mir einen Witz.",
    "Was ist dein Lieblingsfilm?",
  ];

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const currentChat = chatSessions.find((chat) => chat.id === activeChatId);

  /** Inițializare recunoaștere vocală */
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "de-DE";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  /** Auto-scroll când apar mesaje noi */
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [currentChat]);

  /** Adaugă mesaj nou în sesiunea curentă */
  const addMessageToCurrentChat = useCallback(
    (message) => {
      setChatSessions((prevSessions) =>
        prevSessions.map((chat) =>
          chat.id === activeChatId ? { ...chat, messages: [...chat.messages, message] } : chat
        )
      );
    },
    [activeChatId]
  );

  /** Actualizează textul unui mesaj după ID */
  const updateMessageText = useCallback(
    (msgId, newText) => {
      setChatSessions((prevSessions) =>
        prevSessions.map((chat) => {
          if (chat.id !== activeChatId) return chat;
          return {
            ...chat,
            messages: chat.messages.map((msg) =>
              msg.id === msgId ? { ...msg, text: newText } : msg
            ),
          };
        })
      );
    },
    [activeChatId]
  );

  /** Simulează răspunsul API */
  const generateResponse = async (incomingId, userMessage) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      }),
    };

    try {
      const res = await fetch(API_URL, requestOptions);
      const data = await res.json();
      const reply =
        data.choices?.[0]?.message?.content.trim() ||
        "Fehler beim Abrufen der Antwort.";
      updateMessageText(incomingId, reply);
    } catch (error) {
      console.error("Fehler beim Abrufen der Antwort:", error);
      updateMessageText(
        incomingId,
        "Hoppla! Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."
      );
    }
  };

  /** Trimiterea mesajului */
  const handleSend = () => {
    const trimmedMessage = inputText.trim();
    if (!trimmedMessage) return;

    const outgoingMessage = {
      id: Date.now(),
      sender: "outgoing",
      text: trimmedMessage,
    };
    addMessageToCurrentChat(outgoingMessage);
    setInputText("");

    // Adaugă mesajul placeholder cu indicator de tastare
    const incomingId = Date.now() + 1;
    const placeholderMessage = {
      id: incomingId,
      sender: "incoming",
      text: <TypingIndicator />,
    };
    addMessageToCurrentChat(placeholderMessage);

    // Simulează întârzierea de "gândire"
    setTimeout(() => {
      generateResponse(incomingId, trimmedMessage);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handleNewChat = () => {
    const newId = Date.now();
    setChatSessions((prev) => [
      ...prev,
      {
        id: newId,
        title: `Chat #${prev.length + 1}`,
        messages: [
          {
            id: Date.now() + 10,
            sender: "incoming",
            text: "Hallo, wie kann ich Ihnen helfen?",
          },
        ],
      },
    ]);
    setActiveChatId(newId);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Chatbot</h1>
      <p className={styles.description}>
        Ein moderner Chatbot mit Verlaufsübersicht. Stellen Sie Ihre Fragen und erhalten Sie in Echtzeit
        Antworten. Klicken Sie auf <strong>Neuer Chat</strong>, um eine neue Konversation zu starten.
      </p>
      <div className={styles.chatLayout}>
        <ChatSessionList
          sessions={chatSessions}
          activeSessionId={activeChatId}
          onSelectSession={setActiveChatId}
          onNewChat={handleNewChat}
        />
        <div className={styles.chatContainer}>
          <ChatWindow chat={currentChat} chatboxRef={chatboxRef} />
          <ChatInput
            inputText={inputText}
            onInputChange={(e) => setInputText(e.target.value)}
            onSend={handleSend}
            onKeyDown={handleKeyDown}
            onVoiceInput={startListening}
            isListening={isListening}
            suggestions={suggestions}
            onSelectSuggestion={(sugg) => setInputText(sugg)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
