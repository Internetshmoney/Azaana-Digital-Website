import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiEdit3, FiGlobe, FiGrid, FiLayers } from 'react-icons/fi';
import { Button } from '../common/Button';
import { Container } from '../common/Container';

const proof = ['Premium websites', 'Automation-ready systems', 'Brand-led growth'];

const previews = [
  { label: 'Websites', icon: FiGlobe, metric: 'Lead clarity', value: '92%', bars: [88, 64, 76] },
  { label: 'Design', icon: FiEdit3, metric: 'Visual polish', value: '30d', bars: [72, 82, 60] },
  { label: 'Branding', icon: FiLayers, metric: 'Trust signals', value: '18+', bars: [62, 70, 86] },
  { label: 'Social Media Management', icon: FiGrid, metric: 'Content flow', value: '5x', bars: [74, 66, 84] },
];

const tags = ['Websites', 'Design', 'Branding', 'Social Media Management'];

export function Hero() {
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const current = previews[active];
  const Icon = current.icon;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % previews.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="mb-5 inline-flex rounded-full border border-deep/10 bg-white/60 px-4 py-2 text-sm font-bold text-deep shadow-sm">
            Premium digital systems for ambitious brands
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
            We Build Digital Experiences That Grow Businesses.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Azaana Digital helps startups, businesses and professionals build high-performing websites, automate repetitive work, strengthen their brand, and grow online with modern digital solutions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/book" className="gap-2">
              Book Free Consultation <FiArrowRight aria-hidden="true" />
            </Button>
            <Button href="/services" variant="secondary">View Our Services</Button>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {proof.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-deep">
                <FiCheckCircle className="text-teal" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto min-h-[300px] w-full max-w-[30rem] sm:min-h-[500px] sm:max-w-[36.875rem]"
          aria-label="Animated laptop mockup showing Azaana Digital services"
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              className={`absolute inline-flex rounded-full border border-white/70 bg-white/80 px-3 py-2 text-[0.68rem] font-bold text-deep shadow-card backdrop-blur sm:px-4 sm:text-xs ${
                [
                  'left-0 top-0 sm:top-8',
                  'right-0 top-9 sm:right-2 sm:top-10',
                  'left-1 bottom-14 sm:left-8 sm:bottom-24',
                  'right-0 bottom-5 max-w-[10rem] sm:bottom-20 sm:max-w-none',
                ][index]
              }`}
              animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
              transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {tag}
            </motion.span>
          ))}

          <motion.div
            className="absolute inset-x-0 top-8 mx-auto w-[min(100%,26rem)] sm:top-20 sm:w-[min(100%,36.875rem)]"
            style={{ transformPerspective: 900, rotateX: tilt.y, rotateY: tilt.x }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="rounded-t-[1.35rem] border border-black/15 bg-gradient-to-b from-[#2b3032] to-[#080b0c] p-2 shadow-soft sm:rounded-t-[1.9rem] sm:p-3">
              <div className="mx-auto mb-1.5 h-1.5 w-1.5 rounded-full bg-white/35 shadow-inner sm:mb-2" />
              <div className="relative overflow-hidden rounded-[1rem] border border-white/10 bg-paper p-3 shadow-inner sm:rounded-[1.25rem] sm:p-4">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-cyan/10" />
                <div className="relative flex items-center justify-between gap-2 border-b border-deep/10 pb-2 sm:gap-3 sm:pb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-deep text-cyan sm:h-10 sm:w-10">
                      <Icon aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink sm:text-xs">Now showing</p>
                      <motion.h2
                        key={current.label}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="truncate font-display text-sm font-bold text-ink sm:text-xl"
                      >
                        {current.label}
                      </motion.h2>
                    </div>
                  </div>
                  <img src="/logo.png" alt="" className="h-6 w-auto shrink-0 rounded-md bg-white p-1 sm:h-10" loading="lazy" />
                </div>
                <motion.div key={current.label} initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} className="relative grid gap-2 py-2 sm:grid-cols-[1.1fr_0.9fr] sm:gap-4 sm:py-5">
                  <div className="rounded-lg bg-white p-3 shadow-sm sm:rounded-2xl sm:p-5">
                    <p className="text-xs font-semibold text-muted sm:text-sm">{current.metric}</p>
                    <p className="mt-1 font-display text-2xl font-extrabold text-ink sm:mt-2 sm:text-4xl">{current.value}</p>
                    <div className="mt-3 grid gap-2 sm:mt-6 sm:gap-3">
                      {current.bars.map((bar, index) => (
                        <div key={index} className="h-2 rounded-full bg-cream sm:h-3">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-teal to-cyan sm:h-3"
                            initial={{ width: 0 }}
                            animate={{ width: `${bar}%` }}
                            transition={{ duration: 0.7 }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-3">
                    {['Websites', 'Design', 'Branding', 'Social Media Management'].map((item, index) => (
                      <div key={item} className="rounded-md border border-deep/10 bg-white/75 p-2 sm:rounded-xl sm:p-4">
                        <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-ink sm:text-xs sm:tracking-[0.18em]">0{index + 1}</p>
                        <p className="mt-1 font-display text-[0.68rem] font-bold leading-tight text-ink sm:text-base">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative mx-auto h-5 w-[90%] rounded-b-[1rem] bg-gradient-to-b from-[#d7dbdc] via-[#a9b0b2] to-[#70787b] shadow-card sm:h-7 sm:rounded-b-[1.4rem]">
              <div className="absolute left-1/2 top-1 h-1.5 w-20 -translate-x-1/2 rounded-b-xl bg-black/20 sm:h-2 sm:w-28" />
              <div className="absolute inset-x-6 bottom-1 grid grid-cols-12 gap-1 sm:inset-x-8">
                {Array.from({ length: 36 }).map((_, index) => (
                  <span key={index} className="h-0.5 rounded-full bg-black/18 sm:h-1" />
                ))}
              </div>
            </div>
            <div className="mx-auto h-2 w-[98%] rounded-b-full bg-gradient-to-r from-[#565b5d] via-[#f2f4f4] to-[#565b5d] sm:h-3" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
