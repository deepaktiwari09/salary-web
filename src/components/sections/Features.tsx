import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FEATURES } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import * as LucideIcons from 'lucide-react';

const iconMap: Record<string, React.ComponentType> = {
  'chart-area': LucideIcons.TrendingUp,
  'robot': LucideIcons.Bot,
  'bullseye': LucideIcons.Target,
  'globe': LucideIcons.Globe,
  'shield-alt': LucideIcons.Shield,
  'chart-bar': LucideIcons.BarChart3,
};

const FeatureCard = ({ feature, index }: { feature: typeof FEATURES[0]; index: number }) => {
  const { ref, controls } = useScrollAnimation();
  const IconComponent = iconMap[feature.icon] || LucideIcons.Star;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
          },
        },
      }}
      whileHover={{
        y: -8,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="h-full"
    >
      <Card className="h-full bg-white border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <CardHeader className="pb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
            {feature.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
          <ul className="space-y-3">
            {feature.features.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.1) + (i * 0.05) + 0.3 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Features = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="features" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Career Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced tools powered by AI to help you make informed career decisions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;