import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inbox, Target, Rocket } from "lucide-react";

const tabs = [
  {
    id: "capture",
    label: "Capture",
    icon: Inbox,
    title: "Capture everything instantly",
    description:
      "Ideas, bugs, feedback—throw it all at Velon. Our AI categorizes, deduplicates, and prioritizes automatically. Never lose a thought again.",
    visual: (
      <div className="space-y-3">
        {["New feature request from user", "Bug: Login timeout issue", "Design update needed"].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-violet' : i === 1 ? 'bg-red-400' : 'bg-cyan'}`} />
            <span className="text-sm text-slate-200">{item}</span>
            <span className="ml-auto text-xs text-slate-400">Just now</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: "prioritize",
    label: "Prioritize",
    icon: Target,
    title: "AI-powered prioritization",
    description:
      "Stop debating what to work on next. Velon scores every task based on impact, effort, dependencies, and team capacity. The right work rises to the top.",
    visual: (
      <div className="space-y-3">
        {[
          { name: "Critical security patch", score: 98, color: "bg-red-400" },
          { name: "Performance optimization", score: 85, color: "bg-violet" },
          { name: "New onboarding flow", score: 72, color: "bg-cyan" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-200">{item.name}</span>
              <span className="text-sm font-semibold text-foreground">{item.score}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${item.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${item.score}%` }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: "execute",
    label: "Execute",
    icon: Rocket,
    title: "Ship with confidence",
    description:
      "Automated sprint planning, intelligent task assignment, and real-time progress tracking. Velon orchestrates execution so you can focus on building.",
    visual: (
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "To Do", count: 3, color: "border-slate-500" },
          { label: "In Progress", count: 5, color: "border-violet" },
          { label: "Done", count: 12, color: "border-cyan" },
        ].map((col, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`p-4 rounded-xl bg-white/5 border-t-2 ${col.color}`}
          >
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">{col.label}</div>
            <div className="text-3xl font-bold text-foreground">{col.count}</div>
            <div className="mt-3 space-y-2">
              {Array(Math.min(col.count, 3)).fill(0).map((_, j) => (
                <div key={j} className="h-2 bg-white/10 rounded" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
];

export const WorkflowTabs = () => {
  const [activeTab, setActiveTab] = useState("capture");

  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="methodology" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-violet mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            Three steps to
            <span className="gradient-text"> velocity</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-2 mb-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-violet to-cyan text-white shadow-lg shadow-violet/25"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {activeContent.title}
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {activeContent.description}
                </p>
              </div>

              {/* Visual */}
              <div className="p-6 rounded-2xl glass border border-white/10">
                {activeContent.visual}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
