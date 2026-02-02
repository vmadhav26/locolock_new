
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PORTFOLIO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200 rounded-full blur-[120px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
              Empowering the Next Generation of Founders
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              We build high-performing <span className="gradient-text">websites, apps, and AI agents</span> that scale businesses.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Outcome-driven digital solutions engineered for growth. From custom development to intelligent automations, we turn your vision into a technical powerhouse.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/consultation" className="w-full sm:w-auto bg-vibrant text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1">
                Get a Free Consultation
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                Book a Call
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-500">Projects Delivered</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-500">Data Security Assured</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-500">Priority Support</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-10"></div>
              <img
                src="https://picsum.photos/seed/techhero/800/800"
                alt="Digital Innovation"
                className="relative rounded-3xl shadow-2xl border border-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end IT services designed to solve complex business challenges and drive measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.shortDesc}</p>
                <div className="flex items-center text-indigo-600 font-bold text-sm">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Transparency */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">How We Work</h2>
            <p className="text-lg text-gray-600">A transparent 5-step process from concept to deployment.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {[
                { n: '01', t: 'Discovery', d: 'Understanding your goals and market landscape.' },
                { n: '02', t: 'Strategy', d: 'Architecting the roadmap for technical success.' },
                { n: '03', t: 'Design', d: 'Crafting pixel-perfect, high-converting UIs.' },
                { n: '04', t: 'Development', d: 'Engineering robust, scalable, and clean code.' },
                { n: '05', t: 'Deployment', d: 'Ensuring a smooth launch and ongoing support.' }
              ].map((p) => (
                <div key={p.n} className="text-center group">
                  <div className="w-16 h-16 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-indigo-600 shadow-md group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {p.n}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 font-heading">{p.t}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Snippet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">Recent Projects</h2>
              <p className="text-lg text-gray-600">Explore how we helped our clients achieve digital dominance.</p>
            </div>
            <Link to="/portfolio" className="text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1 hover:text-indigo-700 transition-colors">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO.slice(0, 2).map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/3]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">{item.category}</span>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-indigo-300 font-medium">Outcome: {item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-vibrant">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 font-heading">Let’s build something powerful together.</h2>
          <p className="text-xl text-indigo-100 mb-12">
            Ready to take your project from concept to market leader? Our team is standing by to help you scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
              Start Your Project
            </Link>
            <a href={`tel:${"+918897469310"}`} className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-400 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-800/50 transition-all">
              Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
