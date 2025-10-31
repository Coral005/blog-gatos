import React, { useState } from 'react';
import './QuestionsAndAnswers.css';

const QuestionsAndAnswers = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [questions, setQuestions] = useState([
    {
      question: "¿Cómo cuidar a un gato persa?",
      answer: "El gato persa necesita cepillados diarios, baños mensuales y también limpieza ocular diaria."
    },
    {
      question: "¿Qué alimentar a un gato persa?",
      answer: "Los gatos persas deben comer alimentos balanceados, un pienso que contenga suficientes proteínas y también comida blanda."
    },
    {
      question: "¿Cuánto vive un gato persa?",
      answer: "Los gatos persas pueden vivir entre 12 y 15 años, dependiendo de su salud y cuidados."
    },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, { question: newQuestion, answer: "" }]);
      setNewQuestion('');
    }
  };

  const handleAddAnswer = (index) => {
    if (newAnswer.trim()) {
      const updatedQuestions = questions.map((item, i) =>
        i === index ? { ...item, answer: newAnswer } : item
      );
      setQuestions(updatedQuestions);
      setNewAnswer('');
      setOpenIndex(null);
    }
  };

  return (
    <div className="faq-page">
      {/* 🌈 HEADER */}
      <header className="faq-header">
        <div className="overlay">
          <h1>❓ Preguntas Frecuentes</h1>
          <p>
            Encuentra respuestas a las dudas más comunes sobre el cuidado y la alimentación
            de los gatos persas. También puedes añadir tus propias preguntas.
          </p>
        </div>
      </header>

      {/* 💬 SECCIÓN DE PREGUNTAS */}
      <div className="faq-container">
        {questions.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => handleToggle(index)}>
              {item.question}
              <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
            </button>

            <div className="faq-answer">
              {item.answer ? (
                <p>{item.answer}</p>
              ) : (
                openIndex === index && (
                  <div className="answer-form">
                    <textarea
                      placeholder="Escribe tu respuesta aquí..."
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                    />
                    <button onClick={() => handleAddAnswer(index)}>Agregar Respuesta</button>
                  </div>
                )
              )}
            </div>
          </div>
        ))}

        {/* ✍️ Añadir nueva pregunta */}
        <div className="add-question">
          <h2>Agrega tu propia pregunta</h2>
          <input
            type="text"
            placeholder="Escribe tu pregunta..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <button onClick={handleAddQuestion}>Agregar Pregunta</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;
