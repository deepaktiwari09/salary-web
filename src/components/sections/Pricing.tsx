import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FREE_FEATURES = [
  "20-year salary forecasting",
  "Multiple career scenarios",
  "AI career advisor",
  "Advanced goal management",
  "All 6 languages",
  "Multi-currency support",
  "Advanced analytics & reports",
  "100% offline functionality",
  "No data collection",
  "Complete privacy",
];

const PREMIUM_FEATURES = [
  "Cloud sync & backup",
  "Advanced AI insights",
  "Team collaboration",
  "White-label reports",
  "API access",
  "Priority support",
  "Advanced integrations",
];

const Pricing = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, upgrade when you're ready to unlock premium features
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="relative h-full bg-white border-2 border-primary-500 shadow-xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary-500 text-white px-4 py-1">
                    Currently Free
                  </Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-bold mb-2">Free Forever</CardTitle>
                  <div className="text-4xl font-bold text-gray-900">
                    $0<span className="text-lg text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4 mb-8">
                    {FREE_FEATURES.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-primary-500 hover:bg-primary-600"
                    onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full bg-white border-gray-200 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold mb-2">Premium</CardTitle>
                  <div className="text-4xl font-bold text-gray-900">Coming Soon</div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4 mb-8">
                    {PREMIUM_FEATURES.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;