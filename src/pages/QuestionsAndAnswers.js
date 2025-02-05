import React, { useState } from 'react';
import './QuestionsAndAnswers.css';

const QuestionsAndAnswers = () => {
  const [openIndex, setOpenIndex] = useState(null); // Para manejar qué pregunta está abierta
  const [questions, setQuestions] = useState([
    {
      question: "¿Cómo cuidar a un gato persa?",
      answer: "El gato persa necesita cepillados diarios, baños mensuales y también limpieza ocular diaria."
    },
    {
      question: "¿Qué alimentar a un gato persa?",
      answer: "Los gatos persas deben comer alimentos balanceados, un pienso que contenga las suficientes proteínas y también comida blanda."
    },
    {
      question: "¿Cuánto vive un gato persa?",
      answer: "Los gatos persas pueden vivir entre 12 y 15 años, dependiendo de su salud y cuidados."
    },
  ]);

  const [newQuestion, setNewQuestion] = useState(''); // Para nueva pregunta
  const [newAnswer, setNewAnswer] = useState('');     // Para nueva respuesta

  // Abre o cierra la pregunta seleccionada
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Agrega una nueva pregunta SIN respuesta
  const handleAddQuestion = () => {
    if (newQuestion) {
      setQuestions([...questions, { question: newQuestion, answer: "" }]);
      setNewQuestion('');
    }
  };

  // Agrega una respuesta a una pregunta existente
  const handleAddAnswer = (index) => {
    if (newAnswer) {
      const updatedQuestions = questions.map((item, i) => {
        if (i === index) {
          return { ...item, answer: newAnswer }; // Agrega la respuesta a la pregunta
        }
        return item;
      });
      setQuestions(updatedQuestions);
      setNewAnswer('');
      setOpenIndex(null); // Cierra la pregunta después de responder
    }
  };

  return (
    <div className="questions-container">
      <h1>Preguntas Frecuentes</h1>

      {questions.map((item, index) => (
        <div key={index} className="question-item">
          <button
            className="question"
            onClick={() => handleToggle(index)} // Despliega o oculta la respuesta
          >
            {item.question}
          </button>

          <div className={`answer ${openIndex === index ? 'open' : ''}`}>
            {item.answer ? (
              <p>{item.answer}</p>
            ) : (
              // Si no hay respuesta, muestra el formulario para agregar una
              openIndex === index && (
                <div>
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

      <div className="add-question-section">
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
  );
};

export default QuestionsAndAnswers;
