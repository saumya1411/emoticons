import React, { useState } from "react";
import "./styles.css";

var color = "yellow";

const emojiDictionary = {
  "😂": "Laughing",
  "😾": "pouting cat",
  "🐤": "Hello Chicken Singh🌝",
  "😿": "Billi khin  ke",
  "🐢": "You are my Turtle",
  "🥰": "My Cuteyy",
  "🥺": "Missing you alot😞",
  "❤️": " I Love You",
  "😉": "See you soon🤗"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    console.log(meaning);

    if (meaning === undefined) {
      meaning = "I dont know";
    }
    setMeaning(meaning);
  }

  // const [likeCounter, setLikeCounter] = useState(0);
  // function likeClickHandler(){
  //  var newlikeCounter = likeCounter + 1;
  //  setLikeCounter(newlikeCounter);
  // function inputChangeHandler(event){

  //   console.log(event.target.value)
  //   setUserInput(event.target.value)
  // }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Inside outt</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3 style={{ fontSize: "2rem" }}>Click on emoji </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
