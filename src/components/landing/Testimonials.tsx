import { motion, type Easing } from "framer-motion";
import { Star } from "lucide-react";

const easeOut: Easing = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    quote:
      "Velon cut our sprint planning time by 80%. We used to spend half a day every two weeks just figuring out what to work on. Now it takes 20 minutes.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "Stripe",
    rating: 5,
  },
  {
    quote:
      "The predictive task generation is mind-blowing. Velon suggested exactly what we needed to build before our product team even wrote the specs.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "Figma",
    rating: 5,
  },
  {
    quote:
      "Finally, a project management tool that respects my time. Dark mode, keyboard shortcuts, zero learning curve. It just works.",
    author: "Emily Rodriguez",
    role: "Senior Developer",
    company: "Vercel",
    rating: 5,
  },
  {
    quote:
      "We scaled from 10 to 100 engineers without adding a single project manager. Velon is our secret weapon.",
    author: "David Park",
    role: "Head of Product",
    company: "Linear",
    rating: 5,
  },
];

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

export const Testimonials = () => {
  return (
    <section id="customers" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-violet mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            Loved by
            <span className="gradient-text"> world-class teams</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl glass border border-white/10 hover:border-violet/20 transition-all duration-500"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-violet text-violet"
                      />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-slate-200 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center text-white font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
