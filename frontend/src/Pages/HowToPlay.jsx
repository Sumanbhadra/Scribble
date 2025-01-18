import React from 'react';

const HowToPlay = () => {
  return (
    <div className="min-h-screen  text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-600 mb-6">How to Play</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-500 mb-4">Objective</h2>
          <p className="text-lg text-gray-700">
            The goal of the game is to draw and guess words as quickly as possible. Each round, one player will draw a word, while the other players try to guess what the word is based on the drawing. 
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-500 mb-4">Gameplay</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li className="text-lg text-gray-700">Each player takes turns drawing and guessing.</li>
            <li className="text-lg text-gray-700">You’ll have a limited time to draw your word, and others will guess based on the drawing.</li>
            <li className="text-lg text-gray-700">Once someone guesses the word, the round ends, and a new word is drawn.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-500 mb-4">Game Rules</h2>
          <ul className="list-decimal pl-8 space-y-2">
            <li className="text-lg text-gray-700">No using letters or numbers in your drawing.</li>
            <li className="text-lg text-gray-700">Be creative and try to think outside the box!</li>
            <li className="text-lg text-gray-700">The game ends when a set number of rounds are completed, or players choose to quit.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-500 mb-4">Controls</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-purple-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Drawing Controls</h3>
              <ul className="space-y-2">
                <li className="text-lg text-gray-700">Use your mouse or touchpad to draw on the canvas.</li>
                <li className="text-lg text-gray-700">Click and hold the mouse to start drawing.</li>
                <li className="text-lg text-gray-700">Release to stop drawing.</li>
              </ul>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Guessing Controls</h3>
              <ul className="space-y-2">
                <li className="text-lg text-gray-700">Type your guess in the text input box.</li>
                <li className="text-lg text-gray-700">Press "Enter" to submit your guess.</li>
                <li className="text-lg text-gray-700">Try to guess as fast as possible for extra points!</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-purple-500 mb-4">Winning</h2>
          <p className="text-lg text-gray-700">
            The player with the most points at the end of the game wins! Points are earned by guessing correctly and drawing accurately. Enjoy the game!
          </p>
        </section>
      </div>
    </div>
  );
};

export default HowToPlay;
