import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2.5, suffix: "x", label: "Faster Shipping" },
  { value: 4, suffix: "hrs", label: "Saved / Day" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 10, suffix: "k+", label: "Teams" },
];

interface CounterProps {
  value: number;
  suffix: string;
  inView: boolean;
}

const Counter = ({ value, suffix, inView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  const displayValue =
    value % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet/5 via-transparent to-cyan/5" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter gradient-text mb-2">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </div>
                <div className="text-sm sm:text-base text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
