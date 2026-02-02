
import React from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-heading">Our Work</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">A showcase of digital assets we've built that drive real revenue and user engagement.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PORTFOLIO.map((p, idx) => (
          <div 
            key={p.id} 
            className="group overflow-hidden rounded-[2.5rem] bg-white shadow-lg border border-gray-100 animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div className="p-10">
              <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest">{p.category}</span>
              <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-6 font-heading">{p.title}</h3>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100">
                <p className="text-indigo-900 font-bold text-sm uppercase tracking-wide mb-1">Key Outcome</p>
                <p className="text-lg font-semibold text-gray-800">{p.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
