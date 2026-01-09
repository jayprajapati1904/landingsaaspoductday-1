import { motion } from "framer-motion";

const logos = [
  { name: "Acme", width: 100 },
  { name: "Bolt", width: 80 },
  { name: "Sphere", width: 90 },
  { name: "Nova", width: 85 },
  { name: "Apex", width: 95 },
  { name: "Orbit", width: 90 },
];

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-12 opacity-40 hover:opacity-100 transition-opacity duration-300 group cursor-pointer">
    <span className="text-xl font-bold tracking-tight text-slate-300 group-hover:text-foreground transition-colors">
      {name}
    </span>
  </div>
);

export const SocialProof = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-widest text-slate-400 mb-12"
        >
          Powering the world's fastest teams
        </motion.p>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-16 sm:gap-24"
            >
              {/* First set */}
              <div className="flex gap-16 sm:gap-24 animate-marquee">
                {logos.map((logo) => (
                  <LogoPlaceholder key={logo.name} name={logo.name} />
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-16 sm:gap-24 animate-marquee" aria-hidden="true">
                {logos.map((logo) => (
                  <LogoPlaceholder key={`${logo.name}-dup`} name={logo.name} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
