import { motion, type Easing } from "framer-motion";
import { AlertTriangle, Clock, Hand } from "lucide-react";

const easeOut: Easing = [0.16, 1, 0.3, 1];

const problems = [
  {
    icon: AlertTriangle,
    title: "Chaos",
    description:
      "Scattered tasks across tools. No single source of truth. Teams waste hours searching for updates.",
  },
  {
    icon: Clock,
    title: "Slow",
    description:
      "Manual prioritization kills velocity. By the time you plan, the market has moved.",
  },
  {
    icon: Hand,
    title: "Manual",
    description:
      "Endless status meetings. Drag-and-drop busywork. Project managers as bottlenecks.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const ProblemSection = () => {
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
          <span className="text-sm uppercase tracking-widest text-slate-400 mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            Why traditional project
            <br />
            management fails
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-card border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
