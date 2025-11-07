'use client';

import React, { useState, useRef } from 'react';
import {
  Clock,
  DollarSign,
  Users,
  Heart,
  CheckCircle,
} from 'lucide-react';
import { jobOpenings } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';
import { API_URL } from '../config/api';

const TRANSLATIONS = {
  en: {
    joinTeam: "Join Our Team",
    joinTeamDesc: "Build your career with Louisiana's leading construction company. We offer competitive benefits, professional growth, and a commitment to safety.",
    whyWork: "Why Work With Us?",
    culturePara1: "Southern Underground believes employees are its greatest asset. We’re more than just a construction company — we’re a team that cares about the people we work with and the communities we help build. We provide the tools, training, and environment needed to build a long-term career in construction and infrastructure development.",
    culturePara2: "When you work with Southern Underground, you get a reliable partner who values respect, trust, and hard work — every step of the way.",
    employeeBenefits: "Employee Benefits",
    employeeBenefitsDesc: "We offer comprehensive benefits to support you and your family",
    b1: "Competitive Salary", b1d: "Industry-leading pay with performance bonuses",
    b2: "Health & Wellness", b2d: "Medical, dental, and vision coverage",
    b3: "Paid Time Off", b3d: "Vacation, sick leave, and holidays",
    b4: "Professional Development", b4d: "Training & career advancement programs",
    b5: "Job Security", b5d: "Stable growth-oriented company",
    applyFor: "Apply",
    fullName: "Full Name *", 
    email: "Email Address *", 
    phone: "Phone Number *",
    exp: "Years of Experience", 
    selectExp: "Select experience level",
    exp1: "0-2 years", 
    exp2: "3-5 years", 
    exp3: "6-10 years", 
    exp4: "10+ years",
    resume: "Resume/CV *", 
    resumeFormats: "Accepted formats: PDF, DOC, DOCX (Max 5MB)",
    coverLetter: "Cover Letter / Additional Information",
    coverLetterPH: "Tell us why you're interested in this position and what makes you a great fit...",
    submitting: "Submitting...", 
    submit: "Submit Application",
    appSuccess: "Application submitted successfully!",
    appFailed: "Submission failed. Please try again.",
    serverError: "Server error. Please try again later.",
    noOpenings: "No Current Openings",
    noOpeningsDesc: "We are not actively hiring for specific roles at the moment, but we are always looking for talented individuals to join our team. If you are interested in future opportunities, please submit your application.",
    currentOpenings: "Current Openings",
    currentOpeningsDesc: "Explore exciting career opportunities with our growing team",
    interestedIn: "I am interested in...",
    selectPosition: "Select a position",
    other: "Other",
    specifyPosition: "Please specify the position you're interested in *",
    specifyPositionPH: "Enter the role or position you'd like to apply for...",
  },
  es: {
    joinTeam: "Únete a Nuestro Equipo",
    joinTeamDesc: "Construye tu carrera con la principal empresa de construcción de Louisiana. Ofrecemos beneficios competitivos, crecimiento profesional y un compromiso con la seguridad.",
    whyWork: "¿Por qué Trabajar con Nosotros?",
    culturePara1: "Southern Underground cree que los empleados son su mayor activo. Somos más que una empresa de construcción: somos un equipo que se preocupa por las personas con las que trabajamos y por las comunidades que ayudamos a construir. Proporcionamos las herramientas, la capacitación y el entorno necesarios para desarrollar una carrera a largo plazo en construcción e infraestructura.",
    culturePara2: "Cuando trabajas con Southern Underground, cuentas con un socio confiable que valora el respeto, la confianza y el trabajo duro en cada paso del camino.",
    employeeBenefits: "Beneficios para Empleados",
    employeeBenefitsDesc: "Ofrecemos beneficios integrales para apoyarte a ti y a tu familia",
    b1: "Salario Competitivo", b1d: "Pago líder en la industria con bonificaciones por desempeño",
    b2: "Salud y Bienestar", b2d: "Cobertura médica, dental y de visión",
    b3: "Tiempo Libre Pagado", b3d: "Vacaciones, licencias por enfermedad y días festivos",
    b4: "Desarrollo Profesional", b4d: "Programas de capacitación y avance profesional",
    b5: "Estabilidad Laboral", b5d: "Empresa estable orientada al crecimiento",
    applyFor: "Aplicar",
    fullName: "Nombre Completo *", 
    email: "Correo Electrónico *", 
    phone: "Número de Teléfono *",
    exp: "Años de Experiencia", 
    selectExp: "Seleccione nivel de experiencia",
    exp1: "0-2 años", 
    exp2: "3-5 años", 
    exp3: "6-10 años", 
    exp4: "10+ años",
    resume: "Currículum *", 
    resumeFormats: "Formatos aceptados: PDF, DOC, DOCX (Máx 5MB)",
    coverLetter: "Carta de Presentación / Información Adicional",
    coverLetterPH: "Cuéntanos por qué te interesa este puesto y qué te hace un gran candidato...",
    submitting: "Enviando...", 
    submit: "Enviar Solicitud",
    appSuccess: "¡Solicitud enviada con éxito!",
    appFailed: "Error al enviar. Por favor inténtalo de nuevo.",
    serverError: "Error del servidor. Por favor inténtalo más tarde.",
    noOpenings: "No Hay Vacantes Actuales",
    noOpeningsDesc: "No estamos contratando activamente para roles específicos en este momento, pero siempre estamos buscando personas talentosas para unirse a nuestro equipo. Si estás interesado en futuras oportunidades, por favor envía tu solicitud.",
    currentOpenings: "Vacantes Actuales",
    currentOpeningsDesc: "Descubre emocionantes oportunidades de carrera con nuestro equipo en crecimiento",
    interestedIn: "Estoy interesado en...",
    selectPosition: "Seleccione un puesto",
    other: "Otro",
    specifyPosition: "Por favor especifique el puesto que le interesa *",
    specifyPositionPH: "Ingrese el rol o puesto al que le gustaría aplicar...",
  },
};

// Helper function to pick the correct language value with fallback to English
function pick(val: any, locale: 'en' | 'es'): string {
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && val !== null) {
    return val[locale] ?? val.en ?? '';
  }
  return '';
}

const Careers: React.FC = () => {
  const { lang } = useLanguage();
  const t = (key: keyof typeof TRANSLATIONS['en']) => TRANSLATIONS[lang][key] || key;
  
  const applicationFormRef = useRef<HTMLDivElement>(null);
  const [applicationData, setApplicationData] = useState({
    name: '', 
    email: '', 
    phone: '', 
    position: '', 
    customPosition: '',
    experience: '', 
    message: '', 
    resume: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [formMsg, setFormMsg] = useState('');

  const benefits = [
    { icon: DollarSign, title: t('b1'), description: t('b1d') },
    { icon: Heart, title: t('b2'), description: t('b2d') },
    { icon: Clock, title: t('b3'), description: t('b3d') },
    { icon: Users, title: t('b4'), description: t('b4d') },
    { icon: CheckCircle, title: t('b5'), description: t('b5d') },
  ];

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMsg(''); 
    setSubmitting(true);
    
    try {
      const payload = new FormData();
      Object.entries(applicationData).forEach(([k, v]) => {
        if (k === 'resume') return; 
        payload.append(k, v as string);
      });
      if (applicationData.resume) payload.append('resume', applicationData.resume);
      
      const res = await fetch(`${API_URL}/job-apply`, { 
        method: 'POST', 
        body: payload 
      });
      const data = await res.json();
      
      if (res.ok) {
        setFormMsg(t('appSuccess'));
        setTimeout(() => {
          setFormMsg('');
          setApplicationData({ 
            name: '', 
            email: '', 
            phone: '', 
            position: '', 
            customPosition: '',
            experience: '', 
            message: '', 
            resume: null 
          });
        }, 3000);
      } else {
        setFormMsg(data.msg || t('appFailed'));
      }
    } catch {
      setFormMsg(t('serverError'));
    }
    setSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
    
    // Clear custom position when selecting a non-"other" option
    if (name === 'position' && value !== 'other') {
      setApplicationData((prev) => ({ ...prev, customPosition: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData((prev) => ({ ...prev, resume: file }));
  };

  const scrollToForm = () => {
    applicationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/Jack&Bore-Tunneling/down-net_http20250912-130-mbgxq6.jpg)' }}>
          {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-secondary-900/90" /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/85 via-primary-600/75 to-secondary-600/80 dark:from-gray-200/80 dark:via-gray-400/90 dark:to-gray-700/90" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white  leading-tight pb-2">
              {t('joinTeam')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('joinTeamDesc')}
            </p>
            <button 
              onClick={scrollToForm} 
              className="px-8 py-4 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-colors"
            >
              {t('applyFor')}
            </button>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{t('whyWork')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t('culturePara1')}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{t('culturePara2')}</p>
          </div>
          <div className="relative">
            <img 
              src="/Deep Foundation/IMG_4365.JPG" 
              alt="Construction team at work" 
              className="rounded-2xl shadow-xl w-full h-64 object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('employeeBenefits')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t('employeeBenefitsDesc')}</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{b.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{b.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={applicationFormRef} className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {jobOpenings.filter((job) => job.isActive).length === 0 ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('noOpenings')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">{t('noOpeningsDesc')}</p>
            </div>
          ) : (
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('currentOpenings')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t('currentOpeningsDesc')}</p>
            </div>
          )}

          <form onSubmit={handleApplicationSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name" 
                placeholder={t('fullName')} 
                value={applicationData.name} 
                onChange={handleInputChange} 
                required 
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder={t('email')} 
                value={applicationData.email} 
                onChange={handleInputChange} 
                required 
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500" 
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder={t('phone')} 
                value={applicationData.phone} 
                onChange={handleInputChange} 
                required 
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500" 
              />
              <select 
                name="experience" 
                value={applicationData.experience} 
                onChange={handleInputChange} 
                required 
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500"
              >
                <option value="">{t('selectExp')}</option>
                <option value="0-2">{t('exp1')}</option>
                <option value="3-5">{t('exp2')}</option>
                <option value="6-10">{t('exp3')}</option>
                <option value="10+">{t('exp4')}</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('interestedIn')}
              </label>
              <select 
                id="position" 
                name="position" 
                value={applicationData.position} 
                onChange={handleInputChange} 
                required 
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500"
              >
                <option value="">{t('selectPosition')}</option>
                {jobOpenings.filter((job) => job.isActive).map((job) => (
                  <option key={job.id} value={pick(job.title, lang)}>
                    {pick(job.title, lang)}
                  </option>
                ))}
                <option value="other">{t('other')}</option>
              </select>
            </div>

            {/* Custom Position Input - Shows when "Other" is selected */}
            {applicationData.position === 'other' && (
              <div>
                <label htmlFor="customPosition" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('specifyPosition')}
                </label>
                <input 
                  type="text" 
                  id="customPosition"
                  name="customPosition" 
                  placeholder={t('specifyPositionPH')} 
                  value={applicationData.customPosition} 
                  onChange={handleInputChange} 
                  required={applicationData.position === 'other'}
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500" 
                />
              </div>
            )}
            
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('resume')}
              </label>
              <input 
                type="file" 
                id="resume" 
                name="resume" 
                onChange={handleFileChange} 
                required 
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100" 
              />
              <p className="text-xs text-gray-500 mt-1">{t('resumeFormats')}</p>
            </div>
            
            <div>
              <textarea 
                name="message" 
                placeholder={t('coverLetterPH')} 
                value={applicationData.message} 
                onChange={handleInputChange} 
                rows={4} 
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                disabled={submitting} 
                className="px-8 py-4 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-colors disabled:bg-gray-400"
              >
                {submitting ? t('submitting') : t('submit')}
              </button>
            </div>
            
            {formMsg && (
              <p className={`text-center ${formMsg.includes('success') || formMsg.includes('éxito') ? 'text-green-500' : 'text-red-500'}`}>
                {formMsg}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;