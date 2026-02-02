
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-vibrant opacity-20 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center text-indigo-400 font-medium mb-8 hover:text-indigo-300 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <span className="text-4xl mb-6 block">{service.icon}</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 font-heading">{service.title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">{service.shortDesc}</p>
            <Link to="/consultation" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 text-sm">✕</span>
                  The Problem
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.problem}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                  The Locolock Solution
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.solution}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-8 font-heading uppercase tracking-wider text-sm opacity-60">What we deliver</h3>
              <ul className="space-y-4">
                {service.features.map(f => (
                  <li key={f} className="flex items-start space-x-3 text-gray-700">
                    <span className="text-indigo-600 mt-1">✨</span>
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Business Impact</p>
                <p className="text-xl font-bold text-gray-900 leading-tight">{service.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-20 bg-indigo-600 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to transform your {service.title}?</h2>
          <Link to="/consultation" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
