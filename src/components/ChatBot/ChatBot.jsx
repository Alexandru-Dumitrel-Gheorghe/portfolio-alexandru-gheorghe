import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ChatBot.module.css";
import { FaPaperPlane, FaMicrophone, FaPlus } from "react-icons/fa";

/** Componentă pentru indicatorul de tastare */
const TypingIndicator = () => {
  return (
    <div className={styles.typingIndicator}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

const ChatBot = () => {
  /** 
   * Sesiunile de chat vor fi stocate sub forma:
   * [
   *   {
   *     id: string/number,
   *     title: string (un titlu simplu, ex: "Chat #1"),
   *     messages: [...],
   *   },
   *   ...
   * ]
   */
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

  /** ID-ul chat-ului curent */
  const [activeChatId, setActiveChatId] = useState(chatSessions[0].id);

  /** Returnează chat-ul curent */
  const currentChat = chatSessions.find((c) => c.id === activeChatId);

  /** Textul introdus de utilizator */
  const [inputText, setInputText] = useState("");

  /** Flag pentru recunoaștere vocală */
  const [isListening, setIsListening] = useState(false);

  /** Referințe pentru chatbox (scroll) și recunoaștere vocală */
  const chatboxRef = useRef(null);
  const recognitionRef = useRef(null);

  /** Sugestii simple */
  const suggestions = [
    "Wie ist das Wetter?",
    "Erzähl mir einen Witz.",
    "Was ist dein Lieblingsfilm?",
  ];

  /** Simulare: Cheie API */
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  /** Inițializare recunoaștere vocală */
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
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

  /** Scroll automat când se actualizează mesajele */
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [currentChat]);

  /** Funcție: Adaugă mesaj nou în chatul curent */
  const addMessageToCurrentChat = (message) => {
    setChatSessions((prevSessions) =>
      prevSessions.map((chat) =>
        chat.id === activeChatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      )
    );
  };

  /** Funcție: Actualizează textul unui mesaj */
  const updateMessageText = (msgId, newText) => {
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
  };

  /** Funcție: Trimite cerere la API (similat) */
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

  /** Funcție: Trimite mesaj */
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

    // Placeholder message (incoming)
    const incomingId = Date.now() + 1;
    const placeholderMessage = {
      id: incomingId,
      sender: "incoming",
      text: <TypingIndicator />,
    };
    addMessageToCurrentChat(placeholderMessage);

    // Emulare "gândire"
    setTimeout(() => {
      generateResponse(incomingId, trimmedMessage);
    }, 600);
  };

  /** Trimite la Enter (fără Shift) */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /** Start recunoaștere vocală */
  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  /** Creare nou chat */
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
        Ein moderner Chatbot mit Verlaufsübersicht. Stellen Sie Ihre Fragen und
        erhalten Sie in Echtzeit Antworten. Klicken Sie auf <strong>Neuer Chat</strong>, 
        um eine neue Konversation zu starten.
      </p>

      <div className={styles.chatLayout}>
        {/* SIDEBAR: Lista chat-urilor */}
        <aside className={styles.sidebar}>
          <button className={styles.newChatButton} onClick={handleNewChat}>
            <FaPlus /> Neuer Chat
          </button>
          <div className={styles.chatList}>
            {chatSessions.map((session) => (
              <div
                key={session.id}
                className={`${styles.chatSession} ${
                  session.id === activeChatId ? styles.activeSession : ""
                }`}
                onClick={() => setActiveChatId(session.id)}
              >
                {session.title}
              </div>
            ))}
          </div>
        </aside>

        {/* Zona principală: Chat */}
        <motion.div
          className={styles.chatbot}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className={styles.chatHeader}>
            <h2>
              {currentChat?.title || "Kein Chat ausgewählt"}
            </h2>
          </header>

          <ul className={styles.chatbox} ref={chatboxRef}>
            {currentChat?.messages.map((msg) => (
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

          <div className={styles.suggestions}>
            {suggestions.map((sugg, index) => (
              <button
                key={index}
                className={styles.suggestionButton}
                onClick={() => setInputText(sugg)}
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
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
            ></textarea>
            <button
              onClick={handleSend}
              className={styles.sendButton}
              aria-label="Send Message"
            >
              <FaPaperPlane className={styles.animatedIcon} />
            </button>
            <button
              onClick={startListening}
              className={styles.voiceButton}
              aria-label="Voice Input"
            >
              <FaMicrophone
                className={`${styles.animatedIcon} ${
                  isListening ? styles.listening : ""
                }`}
              />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatBot;
