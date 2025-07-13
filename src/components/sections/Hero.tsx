import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HERO_STATS } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const appIcon = '/appIcon.png';
const screenshot = '/screenshot.png';

interface CounterProps {
  target: string;
  duration?: number;
}

const AnimatedCounter = ({ target, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useScrollAnimation();

  useEffect(() => {
    if (!inView) return;

    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
    const increment = numericTarget / (duration / 30);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {target.replace(/[0-9]/g, '')}
    </span>
  );
};

const PhoneMockup = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto max-w-sm"
      initial={{ opacity: 0, rotateY: 15, rotateX: -5 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          rotateY: -5,
          rotateX: 2,
          transition: { duration: 0.8, delay: 0.2 }
        }
      }}
      whileHover={{
        rotateY: 0,
        rotateX: 0,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Phone Frame */}
      <div className="relative w-80 h-[650px] mx-auto">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-secondary-500/30 to-accent-500/30 rounded-[2.5rem] blur-xl opacity-75 animate-pulse" />
        
        {/* Phone Body */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-2 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="h-8 bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <div className="w-16 h-1 bg-white/30 rounded-full" />
            </div>
            
            {/* App Content */}
            <div className="p-6 h-full flex flex-col">
              {/* App Header */}
              <div className="text-center mb-6">
                <img
                  src={appIcon}
                  alt="App Icon"
                  className="w-16 h-16 mx-auto rounded-2xl mb-3 shadow-lg"
                />
                <h3 className="text-lg font-bold text-primary-600 mb-1">
                  Salary Projection: AI Coach
                </h3>
                <p className="text-sm text-gray-500">20-Year Forecast</p>
              </div>

              {/* Screenshot */}
              <div className="flex-1 relative">
                <img
                  src={screenshot}
                  alt="App Screenshot"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>

              {/* AI Insight */}
              <motion.div
                className="mt-4 bg-gray-50 rounded-xl p-4 flex items-center space-x-3"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Bot className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-medium text-gray-700">
                  AI Coach recommends: 8.5/10 career score
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const { ref, controls } = useScrollAnimation();

  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <polygon fill="currentColor" points="0,1000 1000,0 1000,1000" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-6">
                <Bot className="w-4 h-4 mr-2" />
                AI-Powered Career Planning
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Plan Your{' '}
              <span className="gradient-text">
                Financial Future
              </span>{' '}
              with AI Coach
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Get 20-year salary projections, AI-powered career advice, and comprehensive goal management.
              Join 50,000+ professionals making smarter career decisions.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {HERO_STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">
                    <AnimatedCounter target={stat.number} />
                  </div>
                  <div className="text-sm lg:text-base opacity-80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={scrollToDownload}
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-3.75c0-.621.504-1.125 1.125-1.125H6V8c0-4.125 3.375-7.5 7.5-7.5s7.5 3.375 7.5 7.5v7.625h1.875c.621 0 1.125.504 1.125 1.125V20.5c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2z"/>
                </svg>
                Download for Android
              </Button>
              
              <Button
                onClick={scrollToFeatures}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;