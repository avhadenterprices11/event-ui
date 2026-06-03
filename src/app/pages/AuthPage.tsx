import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, ChevronLeft, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Mouse Parallax Logic for Cinematic Depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 40);
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B0B0D]">
      
      {/* 1. Cinematic Background Layer */}
      <motion.div 
        className="absolute inset-x-[-5%] inset-y-[-5%] z-0"
        style={{ x: springX, y: springY }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
          alt="Cinematic Background"
          className="w-full h-full object-cover brightness-[0.2]"
        />
        {/* Advanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B0D] via-transparent to-[#C6A75E]/5" />
      </motion.div>

      {/* 2. Side Narrative Pillar (Desktop Only) */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute left-0 top-0 bottom-0 w-[35%] bg-[#111114] border-r border-white/5 z-10"
      >
        <div className="h-full flex flex-col justify-between p-20">
          <Link to="/" className="group flex items-center gap-4">
             <div className="w-12 h-12 bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] rounded-full flex items-center justify-center shadow-lg shadow-[#C6A75E]/20">
                <span className="text-[#0B0B0D] font-serif italic text-xl font-bold">E</span>
             </div>
             <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">Eventique.</span>
          </Link>

          <div className="space-y-12">
             <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#C6A75E]" />
                <span className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.4em]">The Signature Entry</span>
             </div>
             <h2 className="text-6xl font-light text-white leading-[0.9] tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
               Where Vision <br/> meets <i className="font-serif italic text-[#C6A75E]">Legacy.</i>
             </h2>
             <p className="text-white/40 text-base font-light leading-relaxed max-w-sm">
               Step into our exclusive circle of worldwide celebration architects and visionary clients.
             </p>
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            ESTABLISHED IN 2024
          </div>
        </div>
      </motion.div>

      {/* 3. Main Glass Action Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 w-full max-w-[560px] px-8 lg:ml-[25%]"
      >
        <div className="bg-[#111114]/60 backdrop-blur-[40px] border border-white/5 p-10 md:p-16 rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C6A75E]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="mb-14">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
              {isLogin ? 'Welcome Back' : 'Create Legacy'}
            </h1>
            <p className="text-white/30 text-sm font-light uppercase tracking-[0.2em]">
               Curating masterpieces of celebration
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="inline-flex bg-white/5 rounded-2xl p-1 mb-12 border border-white/5">
             <button 
                onClick={() => setIsLogin(true)}
                className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${isLogin ? 'bg-[#C6A75E] text-[#0B0B0D]' : 'text-white/40 hover:text-white'}`}
             >
                Login
             </button>
             <button 
                onClick={() => setIsLogin(false)}
                className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${!isLogin ? 'bg-[#C6A75E] text-[#0B0B0D]' : 'text-white/40 hover:text-white'}`}
             >
                Join
             </button>
          </div>

          <AnimatePresence mode="wait">
             <motion.form 
                key={isLogin ? 'login' : 'register'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5"
                onSubmit={(e) => { e.preventDefault(); navigate('/'); }}
             >
                {!isLogin && (
                   <div className="relative group h-14">
                      <div className="absolute inset-0 bg-white/[0.02] rounded-xl border border-white/5 group-focus-within:border-[#C6A75E]/30 group-focus-within:bg-white/[0.04] transition-all duration-500 pointer-events-none" />
                      <input 
                         type="text" 
                         className="relative w-full h-full bg-transparent px-6 text-sm text-white focus:outline-none transition-all placeholder:text-white/20 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]"
                         placeholder="Full Name"
                         required
                      />
                      <User className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#C6A75E] transition-colors pointer-events-none" size={18} />
                   </div>
                )}

                <div className="relative group h-14">
                   <div className="absolute inset-0 bg-white/[0.02] rounded-xl border border-white/5 group-focus-within:border-[#C6A75E]/30 group-focus-within:bg-white/[0.04] transition-all duration-500 pointer-events-none" />
                   <input 
                      type="email" 
                      className="relative w-full h-full bg-transparent px-6 text-sm text-white focus:outline-none transition-all placeholder:text-white/20 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]"
                      placeholder="Email Address"
                      required
                   />
                   <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#C6A75E] transition-colors pointer-events-none" size={18} />
                </div>

                <div className="relative group h-14">
                   <div className="absolute inset-0 bg-white/[0.02] rounded-xl border border-white/5 group-focus-within:border-[#C6A75E]/30 group-focus-within:bg-white/[0.04] transition-all duration-500 pointer-events-none" />
                   <input 
                      type="password" 
                      className="relative w-full h-full bg-transparent px-6 text-sm text-white focus:outline-none transition-all placeholder:text-white/20 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]"
                      placeholder="Password"
                      required
                   />
                   <Lock className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#C6A75E] transition-colors pointer-events-none" size={18} />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="relative w-full rounded-xl py-5 font-bold uppercase tracking-[0.4em] text-[10px] transition-all duration-500 flex items-center justify-center gap-4 group/btn overflow-hidden shadow-[0_0_40px_rgba(198,167,94,0.1)] hover:shadow-[0_0_60px_rgba(198,167,94,0.25)]"
                  >
                     <div className="absolute inset-0 bg-gradient-to-r from-[#C6A75E] via-[#E5C97A] to-[#C6A75E] bg-[length:200%_auto] hover:bg-right transition-all duration-700" />
                     <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                     
                     <span className="relative z-10 text-[#0B0B0D]">
                        {isLogin ? 'Enter Archive' : 'Establish Legacy'}
                     </span>
                     <ArrowRight size={14} className="relative z-10 text-[#0B0B0D] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
             </motion.form>
          </AnimatePresence>

          {/* Alternative Authentication */}
          <div className="mt-12 pt-8 border-t border-white/5">
             <button className="relative w-full flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-[#C6A75E]/5 border border-white/5 hover:border-[#C6A75E]/30 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C6A75E]/0 via-[#C6A75E]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#C6A75E]/30 group-hover:bg-[#C6A75E]/10 transition-all duration-500">
                      <Lock size={14} className="text-white/50 group-hover:text-[#C6A75E] transition-colors" />
                   </div>
                   <div className="flex flex-col items-start">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-[#C6A75E] transition-colors">
                         Enterprise SSO
                      </span>
                      <span className="text-[9px] text-white/30 tracking-[0.2em] uppercase mt-1">
                         Secure Corporate Access
                      </span>
                   </div>
                </div>
                
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-[#C6A75E] bg-transparent group-hover:bg-[#C6A75E] transition-all duration-500">
                   <ArrowRight size={14} className="text-white/40 group-hover:text-[#0B0B0D] -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                </div>
             </button>
          </div>
        </div>
      </motion.div>

      {/* Back Shortcut (Mobile) */}
      <Link 
        to="/" 
        className="lg:hidden absolute top-10 left-8 z-30 w-12 h-12 bg-[#111114] border border-white/10 rounded-full flex items-center justify-center text-white"
      >
        <ChevronLeft size={20} />
      </Link>
    </div>
  );
}
