import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my data secure with Velon?",
    answer:
      "Absolutely. We use enterprise-grade encryption (AES-256) for all data at rest and in transit. We're SOC 2 Type II certified and GDPR compliant. Your data is stored in isolated environments and never shared with third parties.",
  },
  {
    question: "Can I import from Jira or Linear?",
    answer:
      "Yes! We have one-click importers for Jira, Linear, Asana, Monday, and Trello. Most teams are fully migrated within 24 hours. We'll even help you map your custom fields and workflows.",
  },
  {
    question: "How does the AI actually work?",
    answer:
      "Velon's AI analyzes your team's historical patterns—velocity, task types, time estimates vs actuals, and dependencies. It learns from thousands of successful sprints to predict optimal task compositions and flag potential blockers before they happen.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. If you cancel, you'll retain access until the end of your billing period. We also offer a 14-day money-back guarantee, no questions asked.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! Every paid plan comes with a 14-day free trial. No credit card required to start. You'll have access to all features during your trial so you can fully evaluate Velon.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-violet mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            Frequently asked
            <span className="gradient-text"> questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
