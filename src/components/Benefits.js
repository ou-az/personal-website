import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowTrendingUpIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Reduce manual work and streamline processes with AI-powered automation",
    Icon: ClockIcon,
    stat: "40%",
    statText: "Average time saved"
  },
  {
    title: "Cost Reduction",
    description: "Minimize operational costs through intelligent process optimization",
    Icon: CurrencyDollarIcon,
    stat: "30%",
    statText: "Cost reduction"
  },
  {
    title: "Revenue Growth",
    description: "Drive business growth with data-driven decision making",
    Icon: ArrowTrendingUpIcon,
    stat: "25%",
    statText: "Revenue increase"
  },
  {
    title: "Better Insights",
    description: "Gain valuable insights from your data with advanced analytics",
    Icon: ChartBarIcon,
    stat: "90%",
    statText: "Accuracy rate"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" data-testid="benefits-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AIIntegrator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI solutions deliver measurable results that drive business success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.Icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.stat}</h3>
                <p className="text-sm text-gray-500 mb-4">{benefit.statText}</p>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
