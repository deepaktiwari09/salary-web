import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { DOWNLOAD_LINKS } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Download = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="download" className="py-20 lg:py-32 bg-gradient-to-br from-primary-500 via-purple-600 to-secondary-500 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Plan Your Financial Future?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Download Salary Projection: AI Coach today and start making smarter career decisions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href={DOWNLOAD_LINKS.android} target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-3.75c0-.621.504-1.125 1.125-1.125H6V8c0-4.125 3.375-7.5 7.5-7.5s7.5 3.375 7.5 7.5v7.625h1.875c.621 0 1.125.504 1.125 1.125V20.5c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2z"/>
                </svg>
                Download for Android
              </a>
            </Button>
            
            <Button
              disabled
              size="lg"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 font-semibold px-8 py-4 text-lg rounded-full opacity-60 cursor-not-allowed"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2H9v2a6 6 0 0 0 6 6h2a4.38 4.38 0 0 0-3.06-4.81zM9 22H16a4 4 0 0 0 0-8H9v8z"/>
              </svg>
              iOS Coming Soon
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;