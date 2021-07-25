import "./PalindromoInput.css";
import React, { useState } from "react";

export default function PalindromoInput(props) {
  const [isPalimdromo, setIsPalimdromo] = useState("");

  const handleInputChange = (value) => {
    let invertedText = value.target.value.split("").reverse().join("");
    setIsPalimdromo(value.target.value === invertedText);
  };

  return (
    <div className="body">
      <label>{props.titulo}</label>
      <input onChange={handleInputChange} className="input"></input>
      {isPalimdromo ? (
        <div className="true">Verdadeiro</div>
      ) : (
        <div className="false">Falso</div>
      )}
    </div>
  );
}
