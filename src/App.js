import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800">Your Name</div>
            <div className="space-x-6">
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Hello, I'm [Your Name]</h1>
          <p className="text-xl mb-8">Full Stack Developer & Problem Solver</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate developer who loves creating amazing web experiences. 
                I specialize in React, Node.js, and modern web technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">React</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded">Node.js</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded">JavaScript</span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;