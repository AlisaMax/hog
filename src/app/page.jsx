'use client'
import './main.scss'
import { useEffect, useState } from "react";
import compareTexts from "./compareTexts";

export default function Home() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [answers, setAnswers] = useState("");

  function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto'; // Сбрасываем высоту до авто
    textarea.style.height = textarea.scrollHeight + 'px'; // Устанавливаем высоту равной высоте содержимого
  }

  const handleCompare = () => {
    const result = compareTexts(value1, value2);
    setAnswers(result); // Устанавливаем строку с результатом сравнения
  }

  return (
    <>

      <div className="mainContainer">

        <div className="formWrap">
          <div className="field">
            <label className="label" htmlFor="input1">Анаграмма</label>
            <textarea
              id="input1"
              placeholder="Введите первое значение"
              value={value1}
              onChange={(e) => {
                setValue1(e.target.value);
                adjustTextareaHeight(e.target);
              }}
            ></textarea>
          </div>

          <div className="field">
            <label className="label" htmlFor="input2">Ответ</label>
            <textarea
              id="input2"
              placeholder="Введите второе значение"
              value={value2}
              onChange={(e) => {
                setValue2(e.target.value);
                adjustTextareaHeight(e.target);
              }}
            ></textarea>
          </div>


          <button className='compareBtn' onClick={handleCompare}>Сравнить</button>
          <div className="answerField">
            <pre>{answers}</pre> {/* Для отображения текста с переносами строк */}
          </div>
        </div>
      </div>
      <footer className="footer">

      </footer>
    </>

  );
}
