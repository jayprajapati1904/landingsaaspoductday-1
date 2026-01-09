import { motion, type Easing } from "framer-motion";
import { Brain, Zap, Moon, Keyboard, BarChart3 } from "lucide-react";

const easeOut: Easing = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export const BentoFeatures = () => {
  return (
    <section id="features" className="py-20 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-violet mb-4 block">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            Intelligence meets
            <span className="gradient-text"> execution</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Velon combines predictive AI with beautiful design to create the
            project management tool you've always wanted.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {/* Large Card - Predictive Planning */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-8 rounded-2xl glass border border-white/10 hover:border-violet/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet to-cyan flex items-center justify-center mb-6 shadow-lg shadow-violet/25">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Predictive Sprint Planning
                  </h3>
                  <p className="text-slate-400 max-w-md">
                    Our AI analyzes team velocity, dependencies, and historical
                    patterns to suggest optimal sprint compositions before you
                    even think about it.
                  </p>
                </div>
              </div>

              {/* Mini UI Mockup */}
              <div className="grid grid-cols-3 gap-3">
                {["Task A", "Task B", "Task C"].map((task, i) => (
                  <motion.div
                    key={task}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          i === 0
                            ? "bg-violet"
                            : i === 1
                            ? "bg-cyan"
                            : "bg-green-400"
                        }`}
                      />
                      <span className="text-xs text-slate-400">
                        AI Suggested
                      </span>
                    </div>
                    <div className="h-3 w-full bg-white/10 rounded mb-1" />
                    <div className="h-2 w-2/3 bg-white/5 rounded" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tall Card - Real-time Velocity */}
          <motion.div
            variants={itemVariants}
            className="row-span-2 group relative p-8 rounded-2xl glass border border-white/10 hover:border-cyan/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center mb-6 shadow-lg shadow-cyan/25">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                Real-time Velocity
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                Watch your team's momentum in real-time with live metrics and
                predictive completion dates.
              </p>

              {/* Animated Chart */}
              <div className="flex-1 flex items-end gap-2">
                {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan/20 to-cyan/60"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      duration: 0.8,
                      ease: easeOut,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small Card - Dark Mode */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Moon className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Dark Mode Native
                </h3>
                <p className="text-sm text-slate-400">
                  Designed for focus, built for night owls.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small Card - Keyboard First */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Keyboard className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Keyboard First
                </h3>
                <p className="text-sm text-slate-400">
                  Command palette for everything. Zero mouse required.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
