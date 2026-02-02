
import React from 'react';
import { INDUSTRIES } from '../constants';
import { Link } from 'react-router-dom';

const Industries: React.FC = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-heading">Industries We Scale</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">While we are tech-agnostic, our strategic focus lies in these key high-growth sectors.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INDUSTRIES.map((i, idx) => (
          <div 
            key={i.name} 
            className="p-10 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <span className="text-5xl mb-6 block transform hover:rotate-12 transition-transform w-fit">{i.icon}</span>
            <h3 className="text-2xl font-bold mb-4 font-heading">{i.name}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{i.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-24 p-12 bg-vibrant rounded-[3rem] text-center text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Don't see your industry?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">We specialize in solving custom business logic problems regardless of the vertical. Let's discuss your unique requirements.</p>
          <Link to="/consultation" className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all">Get in Touch</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Industries;
