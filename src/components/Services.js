import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  CogIcon, 
  LightBulbIcon, 
  ChatBubbleBottomCenterTextIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "Process Optimization",
    description: "Analyze and optimize your business processes using advanced AI algorithms to improve efficiency and reduce costs.",
    icon: ChartBarIcon,
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI solutions into your existing systems and workflows to enhance productivity.",
    icon: CogIcon,
  },
  {
    title: "Intelligent Automation",
    description: "Automate repetitive tasks and decision-making processes with smart AI-powered solutions.",
    icon: LightBulbIcon,
  },
  {
    title: "AI Consultation",
    description: "Get expert advice on how to leverage AI technology to transform your business operations.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive AI integration services to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
