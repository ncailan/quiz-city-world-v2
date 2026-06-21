import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Compass, Clock, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { CIDADES, PERGUNTAS, UI_TRANSLATIONS } from './data';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [screen, setScreen] = useState<'language' | 'intro' | 'quiz' | 'result'>('language');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(15).fill(null));
  const [stars, setStars] = useState<{ id: number; size: number; left: number; top: number; dur: number; delay: number }[]>([]);

  // Generate background starry coordinates on mount to prevent server hydration mismatches
  useEffect(() => {
    const starArray = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      dur: 2 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
    setStars(starArray);
  }, []);

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setScreen('intro');
  };

  const startQuiz = () => {
    setScreen('quiz');
    setCurrentQuestion(0);
    setAnswers(new Array(15).fill(null));
  };

  const selectOption = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (answers[currentQuestion] === null) return;
    if (currentQuestion < PERGUNTAS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen('result');
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setAnswers(new Array(15).fill(null));
    setCurrentQuestion(0);
    setScreen('language');
    setLanguage(null);
  };

  // Process score calculations
  const calculateResult = () => {
    const scores: Record<string, number> = {};
    CIDADES.forEach((c) => {
      scores[c.id] = 0;
    });

    PERGUNTAS.forEach((p, idx) => {
      const respIndex = answers[idx];
      if (respIndex === null) return;
      const optionScores = language === 'pt' ? p.pt.opcoes[respIndex].pontos : p.en.opcoes[respIndex].pontos;

      CIDADES.forEach((cidade) => {
        let matchScore = 0;
        Object.entries(optionScores).forEach(([key, val]) => {
          if (cidade.perfil[key] !== undefined) {
            matchScore += (val as number) * (cidade.perfil[key] as number);
          }
        });
        scores[cidade.id] = (scores[cidade.id] || 0) + matchScore;
      });
    });

    const ranking = CIDADES.map((c) => ({
      ...c,
      score: scores[c.id] || 0,
    })).sort((a, b) => b.score - a.score);

    return ranking;
  };

  // Get localized strings
  const t = language ? UI_TRANSLATIONS[language] : null;

  // Render Language Selection Screen
  const renderLanguageSelection = () => (
    <motion.div
      key="language"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[75vh] w-full text-center p-6 relative z-10"
      id="lang-screen"
    >
      <div className="z-10 text-center mb-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-[0.25em] text-blue-400 uppercase">
          Interactive Quiz
        </div>
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-5xl sm:text-8xl font-serif font-extrabold tracking-tighter bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent leading-none select-none">
            THE BEST CITY
          </h1>
          <span className="font-cursive text-3xl sm:text-4xl text-blue-400 mt-2 select-none">
            for me!
          </span>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed uppercase tracking-widest font-mono">
          Selecione seu idioma / Select your language
        </p>
      </div>

      <div className="z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-4 sm:px-12">
        <button
          onClick={() => selectLanguage('en')}
          id="btn-lang-en"
          className="group relative flex flex-col items-center p-8 sm:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 shadow-2xl cursor-pointer select-none active:scale-95 text-center"
        >
          <div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-600 to-rose-600 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] transform group-hover:scale-105 transition-transform duration-300">
            <svg className="w-12 h-12 drop-shadow-lg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="22" fill="#1E40AF" stroke="#3B82F6" strokeWidth="2.5" />
              <path d="M24 6V42" stroke="#EF4444" strokeWidth="5.5" strokeLinecap="round" />
              <path d="M6 24H42" stroke="#EF4444" strokeWidth="5.5" strokeLinecap="round" />
              <path d="M24 6V42" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M6 24H42" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 12L36 36" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 12L36 36" stroke="#EF4444" strokeWidth="1" strokeLinecap="round" />
              <path d="M36 12L12 36" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              <path d="M36 12L12 36" stroke="#EF4444" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-white">ENGLISH</span>
          <span className="text-red-400 text-xs font-semibold tracking-widest uppercase">Global Edition</span>
          <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-500/20 pointer-events-none" />
        </button>

        <button
          onClick={() => selectLanguage('pt')}
          id="btn-lang-pt"
          className="group relative flex flex-col items-center p-8 sm:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300 shadow-2xl cursor-pointer select-none active:scale-95 text-center"
        >
          <div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-emerald-600 via-green-500 to-amber-400 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] transform group-hover:scale-105 transition-transform duration-300">
            <svg className="w-12 h-12 drop-shadow-lg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="22" fill="#047857" stroke="#34D399" strokeWidth="2.5" />
              <path d="M24 10L38 24L24 38L10 24Z" fill="#FBBF24" />
              <circle cx="24" cy="24" r="6.5" fill="#1D4ED8" stroke="#FBBF24" strokeWidth="1" />
              <path d="M19.5 24.5C21 23.5 24.5 23.5 26.5 24.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-white font-sans">PORTUGUÊS</span>
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Edição Brasil</span>
          <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-emerald-500/20 pointer-events-none" />
        </button>
      </div>

      <div className="z-10 absolute bottom-4 sm:bottom-12 text-center hidden md:block">
        <div className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold mb-4">System Status: Optimal</div>
        <div className="flex gap-4 items-center justify-center opacity-40">
          <div className="w-12 h-px bg-white/20"></div>
          <div className="w-2 h-2 rounded-full border border-white/40"></div>
          <div className="w-12 h-px bg-white/20"></div>
        </div>
      </div>
    </motion.div>
  );

  // Render Intro Screen
  const renderIntro = () => (
    <motion.div
      key="intro"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[75vh] text-center p-6 relative z-10 w-full"
      id="intro-screen"
    >
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-8 shadow-[0_0_35px_rgba(59,130,246,0.25)] relative overflow-hidden">
        <Compass size={36} className="text-white animate-pulse" />
      </div>

      <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-[0.25em] text-blue-400 uppercase">
        {t?.eyebrow}
      </div>

      <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-6 max-w-3xl leading-tight bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
        {language === 'pt' ? (
          <>Onde no mundo você <em>deveria</em> viver?</>
        ) : (
          <>Where in the world <em>should</em> you live?</>
        )}
      </h1>

      <p className="text-gray-400 text-sm sm:text-base max-w-xl mb-12 leading-relaxed font-light">
        {t?.desc}
      </p>

      <button
        onClick={startQuiz}
        id="btn-discover"
        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] uppercase tracking-wider text-xs sm:text-sm select-none active:scale-95 cursor-pointer"
      >
        {t?.btnStart}
      </button>

      <div className="flex flex-col sm:flex-row gap-6 mt-12 text-gray-500 text-xs font-light tracking-wide uppercase">
        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/10 rounded-full">
          <Clock size={13} className="text-blue-400" /> {t?.durationLabel}
        </span>
        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/10 rounded-full">
          <Globe size={13} className="text-blue-400" /> {t?.citiesCountLabel}
        </span>
        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/10 rounded-full">
          <RotateCcw size={13} className="text-blue-400" /> {t?.questionsCountLabel}
        </span>
      </div>
    </motion.div>
  );

  // Render Quiz Screen
  const renderQuiz = () => {
    const q = PERGUNTAS[currentQuestion];
    const data = language === 'pt' ? q.pt : q.en;
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

    return (
      <motion.div
        key="quiz"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="max-w-3xl mx-auto px-4 py-8 relative z-10 w-full"
        id="quiz-container"
      >
        {/* Header progression */}
        <div className="flex items-center justify-between gap-6 mb-12 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl">
          <span className="font-serif text-xs sm:text-sm text-blue-400 tracking-wider font-semibold flex items-center gap-2 uppercase">
            <Compass size={16} className="animate-spin-slow" /> {t?.headerTitle}
          </span>
          <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden mx-4">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(139,92,246,0.6)]"
              style={{ width: `${((currentQuestion + 1) / PERGUNTAS.length) * 100}%` }}
            />
          </div>
          <span className="font-mono text-xs sm:text-sm text-gray-400 font-semibold whitespace-nowrap">
            {currentQuestion + 1} / {PERGUNTAS.length}
          </span>
        </div>

        {/* Question block */}
        <div className="mb-10 text-center sm:text-left" id={`question-box-${currentQuestion}`}>
          <span className="text-5xl mb-4 block filter drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">{q.icone}</span>
          <p className="text-blue-400 font-semibold text-xs tracking-widest uppercase mb-2">
            {language === 'pt' ? `Pergunta ${currentQuestion + 1} de 15` : `Question ${currentQuestion + 1} of 15`}
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl text-white font-extrabold tracking-tight mb-4 leading-tight bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
            {data.texto}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            {data.subtexto}
          </p>
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {data.opcoes.map((op, opIdx) => {
            const isSelected = answers[currentQuestion] === opIdx;
            return (
              <button
                key={opIdx}
                onClick={() => selectOption(opIdx)}
                className={`text-left p-5 rounded-2xl border text-sm sm:text-base transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isSelected
                    ? 'border-blue-500/80 bg-blue-500/10 text-white shadow-[0_0_25px_rgba(59,130,246,0.15)]'
                    : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 text-gray-300 hover:text-white hover:translate-x-1'
                }`}
              >
                {/* Visual marker left border */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 to-purple-600 transform transition-transform duration-200 ${
                    isSelected ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                  }`}
                />

                <span
                  className={`inline-flex items-center justify-center w-6 h-6 border rounded font-mono text-xs font-semibold mr-3 transition-colors ${
                    isSelected
                      ? 'border-blue-400 text-blue-400 bg-blue-500/25 shadow-[0_0_8px_rgba(59,130,246,0.3)]'
                      : 'border-white/30 text-gray-400 group-hover:border-blue-400 group-hover:text-blue-400'
                  }`}
                >
                  {alphabet[opIdx]}
                </span>
                <span className="align-middle font-light leading-relaxed">{op.texto}</span>
              </button>
            );
          })}
        </div>

        {/* Navigation bottom */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 font-semibold text-xs tracking-widest uppercase transition-all duration-200 ${
              currentQuestion === 0
                ? 'opacity-30 cursor-not-allowed text-gray-600'
                : 'text-gray-400 hover:text-blue-400 cursor-pointer'
            }`}
          >
            <ArrowLeft size={16} /> {t?.btnBack}
          </button>

          <button
            onClick={nextQuestion}
            disabled={answers[currentQuestion] === null}
            className={`flex items-center gap-2 font-semibold text-xs tracking-widest uppercase py-4 px-8 cursor-pointer select-none active:scale-95 transition-all duration-300 rounded-full ${
              answers[currentQuestion] === null
                ? 'bg-transparent text-gray-600 border border-white/5 opacity-40 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]'
            }`}
          >
            {currentQuestion === PERGUNTAS.length - 1 ? t?.btnResult : t?.btnNext} <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    );
  };

  // Render Result Screen
  const renderResult = () => {
    const ranking = calculateResult();
    const winningCity = ranking[0];
    const topMatch = language === 'pt' ? winningCity.pt : winningCity.en;
    const secondaryCities = ranking.slice(1, 4);

    return (
      <motion.div
        key="result"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 py-12 relative z-10 w-full"
        id="result-box"
      >
        <div className="text-center mb-10">
          <p className="text-blue-400 tracking-[0.25em] text-xs font-semibold uppercase mb-3">
            {t?.resultEyebrow}
          </p>
          <span className="text-7xl sm:text-8xl block mb-6 filter drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform duration-300">
            {winningCity.emoji}
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-extrabold tracking-tight leading-none mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
            {topMatch.nome}
          </h1>
          <p className="text-blue-400 font-semibold text-xs tracking-[0.25em] uppercase">
            {topMatch.pais}
          </p>
        </div>

        <div className="w-16 h-[2.5px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10" />

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[80px]" />

          <p className="text-gray-200 text-base sm:text-xl font-light leading-relaxed mb-8 text-center italic relative z-10">
            "{topMatch.desc}"
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 relative z-10">
            {topMatch.tags.map((tag, idx) => (
              <span key={idx} className="bg-white/5 border border-white/10 text-blue-300 px-4 py-2 rounded-full text-xs tracking-wider uppercase font-semibold hover:border-blue-500/30 transition-all">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 font-semibold text-xs tracking-[0.25em] text-center uppercase mb-6 relative z-10">
            {t?.resultDividerText}
          </p>

          {/* Bento box Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
            {topMatch.destaques.map((h, idx) => (
              <div key={idx} className="bg-white/5 hover:bg-white/10 p-5 rounded-2xl border border-white/10 text-center hover:border-blue-500/30 transition-all shadow-md">
                <span className="text-3xl block mb-2">{h.i}</span>
                <p className="text-blue-400 text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-1">{h.l}</p>
                <p className="text-gray-200 text-sm font-light leading-tight">{h.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary options matches */}
        <div className="mb-12">
          <h3 className="font-serif text-lg sm:text-2xl text-gray-300 text-center italic mb-6">
            {t?.alternativeTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
            {secondaryCities.map((sec, idx) => {
              const secMatch = language === 'pt' ? sec.pt : sec.en;
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center flex items-center justify-center gap-3 shadow-md hover:border-purple-500/30 transition-all hover:scale-102">
                  <span className="text-3xl">{sec.emoji}</span>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm leading-none">{secMatch.nome}</p>
                    <span className="text-xs text-gray-500 font-light uppercase tracking-wider">{secMatch.pais}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Restart trigger */}
        <div className="text-center pt-4">
          <button
            onClick={resetQuiz}
            className="border border-white/20 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 text-white font-semibold px-8 py-4 rounded-full text-xs tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <RotateCcw size={14} /> {t?.btnReset}
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      
      {/* Immersive background glowing circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
      
      {/* Immersive background Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.015) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.015) 60px)
          `
        }}
      />

      {/* Decorative starry night map sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-blue-400 opacity-30 animate-pulse"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDuration: `${star.dur}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating high-end Language Switcher for premium accessibility */}
      <header className="relative z-20 w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between border-b border-white/5 bg-[#030014]/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={resetQuiz}>
          <Compass className="text-blue-400 animate-spin-slow" size={20} />
          <span className="font-serif text-sm tracking-[0.15em] uppercase font-bold text-white hover:text-blue-400 transition-colors">
            Map_Destiny
          </span>
        </div>

        {language && (
          <div className="flex items-center gap-2 text-xs font-semibold bg-white/5 p-1 px-3 rounded-full border border-white/10 shadow-sm">
            <Globe size={13} className="text-blue-400" />
            <button
              onClick={() => {
                setLanguage('pt');
                if (screen === 'language') setScreen('intro');
              }}
              className={`hover:text-white transition-colors cursor-pointer ${language === 'pt' ? 'text-blue-400' : 'text-gray-400'}`}
            >
              PT
            </button>
            <span className="text-white/10">|</span>
            <button
              onClick={() => {
                setLanguage('en');
                if (screen === 'language') setScreen('intro');
              }}
              className={`hover:text-white transition-colors cursor-pointer ${language === 'en' ? 'text-blue-400' : 'text-gray-400'}`}
            >
              EN
            </button>
          </div>
        )}
      </header>

      {/* Content screen router with motion animations */}
      <main className="flex-grow flex items-center justify-center relative w-full max-w-6xl mx-auto py-8">
        <AnimatePresence mode="wait">
          {screen === 'language' && renderLanguageSelection()}
          {screen === 'intro' && renderIntro()}
          {screen === 'quiz' && renderQuiz()}
          {screen === 'result' && renderResult()}
        </AnimatePresence>
      </main>

      {/* Humble aesthetic footer */}
      <footer className="relative z-10 w-full text-center py-6 border-t border-white/5 text-white/20 text-[10px] font-mono tracking-widest uppercase flex flex-col gap-2 items-center justify-center">
        <div>
          © 2026 Map of Your Destiny • {language === 'pt' ? 'Todos os caminhos levam ao seu lar.' : 'All paths lead to your home.'}
        </div>
        <div className="text-blue-400/40 text-[9px] tracking-[0.2em] font-sans font-semibold">
          {language === 'pt' ? 'Desenvolvido por Nicolas Cailan' : 'Developed by Nicolas Cailan'}
        </div>
      </footer>
    </div>
  );
}
