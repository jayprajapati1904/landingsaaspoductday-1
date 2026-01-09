import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Methodology", href: "#methodology" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#" },
    { name: "Roadmap", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Community", href: "#" },
    { name: "Help Center", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="text-2xl font-bold tracking-tighter text-foreground inline-block mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="gradient-text">Velon</span>
            </motion.a>
            <p className="text-slate-400 text-sm max-w-xs mb-6">
              The AI-native project management platform that predicts work
              before humans assign it.
            </p>

            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-sm text-slate-300">Subscribe to updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-slate-500 focus:outline-none focus:border-violet/50 transition-colors text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet to-cyan text-white"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Velon Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "GitHub", "LinkedIn", "Discord"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-slate-400 hover:text-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
