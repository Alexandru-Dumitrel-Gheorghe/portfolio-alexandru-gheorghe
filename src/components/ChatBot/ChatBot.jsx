import React, { useState, useRef, useEffect } from "react"; 
import { motion } from "framer-motion";
import styles from "./ChatBot.module.css";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

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
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      sender: "incoming",
      text: "Hallo, wie kann ich Ihnen heute helfen?",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const chatboxRef = useRef(null);
  const suggestions = [
    "Wie ist das Wetter?",
    "Erzähl mir einen Witz.",
    "Was ist dein Lieblingsfilm?",
  ];
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

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

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const updateMessage = (id, newText) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, text: newText } : msg))
    );
  };

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
      updateMessage(incomingId, reply);
    } catch (error) {
      console.error("Fehler beim Abrufen der Antwort:", error);
      updateMessage(
        incomingId,
        "Hoppla! Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."
      );
    }
  };

  const handleSend = () => {
    const trimmedMessage = inputText.trim();
    if (!trimmedMessage) return;

    const outgoingMessage = {
      id: Date.now(),
      sender: "outgoing",
      text: trimmedMessage,
    };
    addMessage(outgoingMessage);
    setInputText("");

    const incomingId = Date.now() + 1;
    const placeholderMessage = {
      id: incomingId,
      sender: "incoming",
      text: <TypingIndicator />,
    };
    addMessage(placeholderMessage);

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

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Chatbot</h1>
      <p className={styles.description}>
        Dieser Chatbot basiert auf OpenAI GPT-3.5-Turbo und modernen Webtechnologien.
        Stellen Sie Ihre Fragen und erhalten Sie in Echtzeit Antworten.
      </p>

      <motion.div
        className={styles.chatbot}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styles.chatHeader}>
          <h2>Willkommen!</h2>
        </header>

        <ul className={styles.chatbox} ref={chatboxRef}>
          {messages.map((msg) => (
            <motion.li
              key={msg.id}
              className={`${styles.chat} ${styles[msg.sender]}`}
              initial={{ opacity: 0, x: msg.sender === "outgoing" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg.sender === "incoming" && (
                <span className="material-symbols-outlined">smart_toy</span>
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
          <button onClick={handleSend} className={styles.sendButton} aria-label="Send Message">
            <FaPaperPlane />
          </button>
          <button onClick={startListening} className={styles.voiceButton} aria-label="Voice Input">
            <FaMicrophone className={isListening ? styles.listening : ""} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatBot;
