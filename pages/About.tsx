
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-8 font-heading">
                We are <span className="gradient-text">Locolock</span>. Digital Architects for Growth.
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a mission to bridge the gap between complex technology and business growth, Locolock Technologies serves as the technical backbone for startups and scale-ups globally.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We don't just write code; we build assets. Our team combines innovative engineering with strategic design to ensure every pixel and line of code serves a purpose: your bottom line.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-100">
                <div>
                  <h4 className="text-3xl font-bold text-indigo-600">5+</h4>
                  <p className="text-sm font-medium text-gray-500 uppercase">Years of Expertise</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-indigo-600">50+</h4>
                  <p className="text-sm font-medium text-gray-500 uppercase">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
               <div className="absolute -inset-4 bg-indigo-500 rounded-3xl blur-3xl opacity-10"></div>
               <img src="https://picsum.photos/seed/about-locolock/800/600" alt="Our Team" className="relative rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The core principles that drive every project we touch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: 'Extreme Ownership', d: 'We take full responsibility for the outcomes of our work, treating your business like our own.', i: '🏆' },
              { t: 'Innovation by Default', d: 'We constantly evolve our processes to leverage the latest in AI and web engineering.', i: '💡' },
              { t: 'Trust & Transparency', d: 'No hidden agendas. We maintain clear, honest communication at every stage of the journey.', i: '🤝' }
            ].map((v) => (
              <div key={v.t} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="text-4xl mb-6">{v.i}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{v.t}</h3>
                <p className="text-gray-600 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
