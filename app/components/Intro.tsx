"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("seen_intro");

    if (!seen) {
      localStorage.setItem("seen_intro", "1");
      setShow(true);

      const t = setTimeout(() => setShow(false), 1600);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[color:var(--background)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative flex items-center gap-4"
            initial={{ scale: 0.85, opacity: 0, y: 6 }}
            animate={{ scale: 1.35, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Glow (breathing) */}
            <motion.div
             className="pointer-events-none absolute -inset-10 -z-10 rounded-full blur-3xl"
             style={{
                background:
                 "radial-gradient(circle, var(--warm-accent-glow) 0%, rgba(200,122,138,0.2) 40%, transparent 70%)",
            }}
             initial={{ opacity: 0.35, scale: 0.98 }}
             animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.98, 1.08, 0.98] }}
             transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Geometric blocks */}
            <div className="grid grid-cols-2 gap-1.5 relative">
              <motion.div
                className="h-4 w-4 rounded-sm bg-[color:var(--accent)]"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
              <motion.div
                className="h-4 w-4 rounded-sm bg-[color:var(--accent)]"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
              />
              <motion.div
                className="h-4 w-4 rounded-sm bg-[color:var(--warm-accent)]"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              />
              <div className="h-4 w-4" />
            </div>

            {/* Initials */}
            <motion.span
              className="text-4xl font-semibold tracking-tight text-[color:var(--accent)] relative"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              SP
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}