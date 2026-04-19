import React, { useState, useEffect } from 'react';
// import { Dumbbell, Target, Clock, TrendingUp, Calendar, Mail, Phone, MapPin, Instagram, MessageCircle, ArrowRight, Check } from 'lucide-react';

import { Dumbbell, Target, Clock, TrendingUp, Calendar, Mail, Phone, MapPin, MessageCircle, ArrowRight, Check } from 'lucide-react';
import './animations.css';

// Import images
import crossfitImg from './images/crossfit.jpg';
import yogaImg from './images/yoga.jpg';
import boxingImg from './images/boxing.jpg';
import nutritionImg from './images/nutrition.jpg';
import trainer1Img from './images/trainer1.jpg';
import trainer2Img from './images/trainer2.jpg';
import trainer3Img from './images/trainer3.jpg';
import heroBgImg from './images/hero-bg.jpg';

export default function FitnessLanding() {
  const [activePlan, setActivePlan] = useState(1);

  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.dataset.animation;
          if (animationClass) {
            entry.target.classList.add(animationClass);
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with data-animation attribute
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    { icon: Dumbbell, title: 'Coaching Personnalisé', desc: 'Programme sur mesure adapté à vos objectifs' },
    { icon: Target, title: 'Nutrition & Diète', desc: 'Plans alimentaires équilibrés et réalistes' },
    { icon: Clock, title: 'Flexibilité Horaire', desc: 'Sessions tôt le matin, midi ou soir' },
    { icon: TrendingUp, title: 'Suivi de Progrès', desc: 'Mesures et analyses hebdomadaires' },
  ];

  const plans = [
    {
      name: 'DÉBUTANT',
      price: '599',
      period: '4 semaines',
      features: [
        '8 sessions de coaching (2/semaine)',
        'Plan nutritionnel de base',
        'Accès groupe WhatsApp',
        'Évaluation initiale incluse'
      ]
    },
    {
      name: 'TRANSFORMATION',
      price: '1,499',
      period: '12 semaines',
      popular: true,
      features: [
        '24 sessions de coaching (2/semaine)',
        'Plan nutritionnel personnalisé',
        'Suivi quotidien WhatsApp',
        'Évaluations bimensuelles',
        'Plan de suppléments',
        'Recettes & meal prep'
      ]
    },
    {
      name: 'ATHLÈTE',
      price: '2,999',
      period: '6 mois',
      features: [
        '48 sessions de coaching (2/semaine)',
        'Nutrition avancée + timing',
        'Support 7j/7',
        'Évaluations mensuelles',
        'Programming personnalisé',
        'Accès salle partenaire',
        'Consultation posturale'
      ]
    }
  ];

  const testimonials = [
    { name: 'Fatima Z.', result: '-12kg en 3 mois', text: 'Youssef a changé ma vie. Approche professionnelle et motivante!' },
    { name: 'Karim M.', result: '+8kg muscle', text: 'Résultats incroyables. Le meilleur investissement que j\'ai fait.' },
    { name: 'Sara L.', result: 'Marathon accompli', text: 'M\'a préparé pour mon premier marathon. Programme parfait!' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-zinc-950">
              YF
            </div>
            <div>
              <div className="font-bold text-lg leading-none">YOUSSEF FITNESS</div>
              <div className="text-xs text-emerald-400 font-semibold">PERSONAL COACH</div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 font-semibold text-sm">
            <a href="#services" className="hover:text-emerald-400 transition-colors">SERVICES</a>
            <a href="#plans" className="hover:text-emerald-400 transition-colors">TARIFS</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">CONTACT</a>
          </div>
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
          >
            COMMENCER
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBgImg})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        {/* Animated Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/85 via-zinc-950/75 to-cyan-950/85"></div>
        
        {/* Animated Background Effects */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="text-emerald-400 font-bold text-sm">🔥 TRANSFORMEZ VOTRE CORPS EN 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="block">ATTEIGNEZ VOS</span>
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              OBJECTIFS FITNESS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Coaching personnalisé à Casablanca • Plans nutrition • Résultats garantis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="#plans" 
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-bold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              VOIR LES PROGRAMMES
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="https://wa.me/212600000000" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-bold rounded-full hover:bg-emerald-500/10 transition-all flex items-center gap-2"
            >
              <MessageCircle size={20} />
              CONSULTATION GRATUITE
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-zinc-500 text-sm font-semibold">CLIENTS TRANSFORMÉS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                7+
              </div>
              <div className="text-zinc-500 text-sm font-semibold">ANNÉES D'EXPÉRIENCE</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-zinc-500 text-sm font-semibold">TAUX DE RÉUSSITE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animation="animate-fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              CE QUE VOUS <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">OBTENEZ</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour des résultats durables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const serviceImages = [
                boxingImg,
                nutritionImg,
                yogaImg,
                crossfitImg
              ];
              return (
                <div 
                  key={idx}
                  data-animation="animate-fade-in-up"
                  className="group bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
                  style={{ 
                    opacity: 0,
                    animationDelay: `${idx * 100}ms`
                  }}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={serviceImages[idx]} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="text-emerald-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-zinc-100">{service.title}</h3>
                    <p className="text-zinc-500">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16" data-animation="animate-fade-in-down" style={{ opacity: 0 }}>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              CHOISISSEZ VOTRE <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">PLAN</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Programmes adaptés à tous les niveaux et objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
                <div 
                  key={idx}
                  data-animation="animate-scale-in"
                  className={`relative bg-zinc-900 border-2 rounded-2xl transition-all hover:-translate-y-2 ${
                    plan.popular 
                      ? 'border-emerald-500 shadow-2xl shadow-emerald-500/20' 
                      : 'border-zinc-800 hover:border-emerald-500/50'
                  }`}
                  style={{ 
                    opacity: 0,
                    animationDelay: `${idx * 150}ms`
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 px-4 py-1 rounded-full text-sm font-bold z-50">
                      ⭐ POPULAIRE
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-emerald-400 font-bold text-sm mb-2">{plan.name}</h3>
                      <div className="text-5xl font-black mb-2">{plan.price} <span className="text-2xl text-zinc-500">DH</span></div>
                      <div className="text-zinc-500 text-sm">{plan.period}</div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <Check className="text-emerald-400 flex-shrink-0 mt-1" size={18} />
                          <span className="text-zinc-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a 
                      href="#contact"
                      className={`block w-full text-center py-3 rounded-full font-bold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 hover:shadow-lg hover:shadow-emerald-500/50'
                          : 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
                      }`}
                    >
                      COMMENCER MAINTENANT
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animation="animate-fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              ILS ONT <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">RÉUSSI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">              {testimonials.map((testimonial, idx) => {
              const testimonialImages = [
                trainer2Img,
                trainer1Img,
                trainer3Img
              ];
              return (
                <div 
                  key={idx}
                  data-animation="animate-fade-in-up"
                  className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300"
                  style={{ 
                    opacity: 0,
                    animationDelay: `${idx * 100}ms`
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonialImages[idx]} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
                    />
                    <div>
                      <div className="font-bold text-zinc-100">{testimonial.name}</div>
                      <div className="text-yellow-400 text-sm">★★★★★</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-emerald-400 font-bold text-xl mb-2">{testimonial.result}</div>
                  </div>
                  <p className="text-zinc-300 italic">"{testimonial.text}"</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16" data-animation="animate-fade-in-down" style={{ opacity: 0 }}>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              PRÊT À <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">COMMENCER?</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Contactez-moi pour une consultation gratuite
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6" data-animation="animate-fade-in-left" style={{ opacity: 0 }}>
              <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                  <a href="tel:+212600000000" className="text-emerald-400 hover:text-emerald-300">+212 600 000 000</a>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <a href="https://wa.me/212600000000" className="text-emerald-400 hover:text-emerald-300">Envoyer un message</a>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Instagram</h3>
                  <a href="#" className="text-emerald-400 hover:text-emerald-300">@youssef.fitness</a>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Localisation</h3>
                  <p className="text-zinc-400">Maarif, Casablanca</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" data-animation="animate-fade-in-right" style={{ opacity: 0 }}>
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Numéro WhatsApp"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors"
              />
              <select className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 focus:border-emerald-500 focus:outline-none transition-colors">
                <option>Objectif principal</option>
                <option>Perte de poids</option>
                <option>Prise de masse</option>
                <option>Tonification</option>
                <option>Performance sportive</option>
                <option>Bien-être général</option>
              </select>
              <textarea
                placeholder="Parlez-moi de votre situation actuelle et vos objectifs..."
                rows="4"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-bold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-105"
              >
                ENVOYER MA DEMANDE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-zinc-950">
              YF
            </div>
            <div className="font-bold text-lg">YOUSSEF FITNESS</div>
          </div>
          <p className="text-zinc-500 text-sm">© 2026 Youssef Fitness. Transformez votre corps, transformez votre vie.</p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
