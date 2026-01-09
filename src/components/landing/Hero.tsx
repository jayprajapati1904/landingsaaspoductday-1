import { motion, type Easing } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const easeOut: Easing = [0.16, 1, 0.3, 1];

const wordAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

export const Hero = () => {
  const headline = "The AI Project Manager that actually manages.";
  const words = headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan/15 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm text-slate-300">Now in Private Beta</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
                className={`inline-block mr-3 ${
                  word === "AI" ? "gradient-text" : "text-foreground"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 text-balance"
          >
            Stop dragging cards. Start shipping code. Velon automates your
            workflow entirely.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gradient" size="xl" className="group">
              Get Early Access
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: easeOut }}
            className="mt-16 sm:mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            
            {/* Dashboard Mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto max-w-4xl"
            >
              <div className="glass rounded-2xl p-1 glow-violet">
                <div className="bg-card rounded-xl overflow-hidden">
                  {/* Mockup Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 rounded-md bg-white/5 text-xs text-slate-400">
                        velon.app/dashboard
                      </div>
                    </div>
                  </div>
                  
                  {/* Mockup Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-4 w-32 bg-white/10 rounded" />
                        <div className="h-3 w-24 bg-white/5 rounded" />
                      </div>
                      <div className="flex gap-2">
                        <div className="px-3 py-1.5 rounded-md bg-violet/20 text-xs text-violet">Sprint 24</div>
                        <div className="px-3 py-1.5 rounded-md bg-cyan/20 text-xs text-cyan">On Track</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {/* Column 1 */}
                      <div className="space-y-3">
                        <div className="text-xs text-slate-400 uppercase tracking-wider">To Do</div>
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 + i * 0.1 }}
                            className="p-3 rounded-lg bg-white/5 border border-white/5"
                          >
                            <div className="h-3 w-full bg-white/10 rounded mb-2" />
                            <div className="h-2 w-2/3 bg-white/5 rounded" />
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Column 2 */}
                      <div className="space-y-3">
                        <div className="text-xs text-slate-400 uppercase tracking-wider">In Progress</div>
                        {[1, 2].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6 + i * 0.1 }}
                            className="p-3 rounded-lg bg-violet/10 border border-violet/20"
                          >
                            <div className="h-3 w-full bg-white/10 rounded mb-2" />
                            <div className="h-2 w-1/2 bg-white/5 rounded" />
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Column 3 */}
                      <div className="space-y-3">
                        <div className="text-xs text-slate-400 uppercase tracking-wider">Done</div>
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.8 + i * 0.1 }}
                            className="p-3 rounded-lg bg-cyan/10 border border-cyan/20"
                          >
                            <div className="h-3 w-full bg-white/10 rounded mb-2" />
                            <div className="h-2 w-3/4 bg-white/5 rounded" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
