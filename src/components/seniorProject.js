import React, { Component } from 'react';
import './seniorProject.css';

class seniorProject extends Component {
  render() {
    return (
      <div className="sp-content">
        <br></br>
        <p>Converting Sign Language from Pictures
          to Text and Spoken Arabic.
        </p>
        <p><br></br></p>
        Introduction:
        <p>
          The inability to speak is a massive hindrance to everyday life activities. Even simple tasks such as shopping can
          become a chore since communicating with others is a crucial part of anything we do. Sign language is the usage of
          body gestures to convey thoughts and expressions to others, used by people who are unable to speak. The purpose of
          our project is to further enhance sign language by transforming it into spoken text through artificial
          intelligence technologies.</p>
        <br></br>
        Problem Statement:
        <p>Most people are not familiar with sign language, especially in Arabic-speaking countries. This increases the gap
          between mute people and the rest of the world. Our project aims to solve this issue by translating from Arabic
          Sign Language (ArSL) to text and then to spoken Arabic.

          We will use the publicly available Arabic sign language dataset to train the AI model and then implement a program
          that can read the sign language gestures from images, then translate it using the model to text, and use a TTS
          library to translate it to spoken text.

          We will also use agile software development practice, combined with dependency inversion, single responsibility,
          and interface segregation principles.
        </p>
        <br></br>
        Team Members:
        <p>1. Ahmed Shaghouri</p>
        <p>2. Sulaiman Alkurbi</p>
        <p>3. Faisal Aljuhani</p>
      </div>
    )
  }
}
export default seniorProject