
import React, { useState } from 'react';
import { SERVICES, EMAIL, PHONE } from '../constants';

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Content side */}
          <div className="lg:w-1/2 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
              The First Step
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-8 font-heading">
              Let's Map Your <span className="gradient-text">Success Roadmap</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Our free consultation is a strategic session where we dive deep into your requirements and provide immediate technical feedback on how to scale your vision.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Expert Analysis</h3>
                  <p className="text-gray-600">Get insights from senior architects who understand the startup landscape and technical challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Tailored Proposal</h3>
                  <p className="text-gray-600">Receive a customized project plan focused on your specific business goals and measurable outcomes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Rapid Onboarding</h3>
                  <p className="text-gray-600">Our agile process ensures we move from initial discussion to development in record time.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 opacity-60">
              <p className="text-sm font-medium text-gray-500 italic">Ready to transform your vision into a scalable digital asset? Start by filling out the project brief.</p>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100%] z-0"></div>
              
              {submitted ? (
                <div className="relative z-10 text-center py-20">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl animate-bounce">✓</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Request Received!</h2>
                  <p className="text-gray-600 mb-8 max-w-sm mx-auto">We're reviewing your brief. Expect a call or email from our team within the next business day.</p>
                  <button onClick={() => setSubmitted(false)} className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold">Submit Another Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 font-heading">Project Briefing Form</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Full Name</label>
                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Enter your full name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Work Email</label>
                        <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Enter your email address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Phone Number</label>
                        <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Phone with country code" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Service Required</label>
                        <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                          <option value="">Choose expertise...</option>
                          {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">What can we help with?</label>
                      <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Briefly describe your goals, vision, or current technical bottlenecks..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-vibrant text-white font-bold py-4 rounded-xl shadow-xl hover:shadow-indigo-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] text-lg">
                    Book Free Session
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Your data is safe under our <a href="#/nda" className="underline">NDA Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
