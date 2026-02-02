
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesOverview: React.FC = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-heading">Our Expertise</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">From concept to code, we build the digital future for ambitious brands. We focus on business outcomes, not just technical tasks.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s, idx) => (
          <div 
            key={s.id} 
            className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <span className="text-5xl mb-6 block transform hover:scale-125 transition-transform duration-300 w-fit">{s.icon}</span>
            <h3 className="text-2xl font-bold mb-4 font-heading">{s.title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">{s.shortDesc}</p>
            <Link 
              to={`/services/${s.slug}`} 
              className="inline-flex items-center text-indigo-600 font-bold hover:gap-2 transition-all"
            >
              View Strategic Impact
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesOverview;
