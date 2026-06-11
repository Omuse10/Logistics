import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Logo from '../assets/Logo1.png';
import {
  ArrowRight,
  Plane,
  Ship,
  Truck as TruckIcon,
  Warehouse,
  Brain,
  FileCheck,
  Crown,
  CheckCircle2,
  Star,
  ChevronLeft,
  ChevronRight,
  Globe,
  Shield,
  Clock,
  Users,
  Quote,
  ClipboardList,
  CreditCard,
  PackageCheck,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Stats data
const stats = [
  { value: 120, suffix: '+', label: 'Countries Served', icon: Globe },
  { value: 50, suffix: 'K+', label: 'Deliveries Made', icon: PackageCheck },
  { value: 99.8, suffix: '%', label: 'On-Time Accuracy', icon: Shield },
  { value: 24, suffix: '/7', label: 'Expert Support', icon: Clock },
];

// Services data — now includes Customs Clearance and Private Jet Charter from reference site
const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    description:
      'Fast and reliable air cargo services worldwide with real-time tracking and competitive rates.',
    color: 'from-orange/10 to-orange/5',
    tag: 'Most Popular',
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    description:
      'Cost-effective ocean shipping for large volumes across continents — FCL, LCL, and project cargo.',
    color: 'from-accent-blue/10 to-accent-blue/5',
    tag: null,
  },
  {
    icon: TruckIcon,
    title: 'Road Transport',
    description:
      'Efficient ground transportation for regional logistics with flexible FTL and LTL options.',
    color: 'from-navy/10 to-navy/5',
    tag: null,
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description:
      'Secure storage solutions with advanced inventory management at strategic locations worldwide.',
    color: 'from-orange/10 to-orange/5',
    tag: null,
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance',
    description:
      'Specialized customs brokerage and compliance services ensuring smooth cross-border cargo movement.',
    color: 'from-accent-blue/10 to-accent-blue/5',
    tag: null,
  },
  {
    icon: Crown,
    title: 'Private Jet Charter',
    description:
      'Luxury travel and charter flight solutions for executives and premium cargo worldwide.',
    color: 'from-navy/10 to-navy/5',
    tag: 'Premium',
  },
];

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechFlow Inc.',
    content:
      'IntelWise transformed our supply chain. Their AI-powered optimization reduced our shipping costs by 32% while improving delivery times significantly.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Operations Director, GlobalMart',
    content:
      'The real-time tracking and proactive communication set IntelWise apart. We always know exactly where our shipments are at every stage.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Supply Chain Manager, FreshFoods Co.',
    content:
      'Reliability is everything in food logistics. IntelWise has never missed a delivery window for us in two years of partnership.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Founder, UrbanStyle',
    content:
      'From small startup to global brand, IntelWise scaled with us every step of the way. Their team truly understands growing businesses.',
    rating: 5,
  },
];

// Why choose us data
const whyChooseUs = [
  { icon: Globe, title: 'Global Network', description: 'Presence in 120+ countries with on-the-ground local expertise' },
  { icon: Shield, title: 'Real-Time Visibility', description: 'Track every shipment at each stage of transit, live' },
  { icon: Brain, title: 'AI-Powered Routes', description: 'Smart route optimization that cuts costs and improves speed' },
  { icon: Users, title: '24/7 Expert Support', description: 'Dedicated logistics team available around the clock' },
];

// How it works steps
const howItWorks = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Place Your Enquiry',
    description: 'Tell us about your shipment needs — origin, destination, cargo type, and timeline. Our team responds within 2 hours.',
  },
  {
    icon: CreditCard,
    step: '02',
    title: 'Confirm & Pay',
    description: 'Review your custom quote, approve the service, and complete payment securely. We handle all documentation.',
  },
  {
    icon: PackageCheck,
    step: '03',
    title: 'Track & Receive',
    description: 'We handle pickup, transit, customs, and last-mile delivery. You track everything live through our platform.',
  },
];

// Partner brands (dummy logos using styled text)
const partners = [
  { name: 'DHL', category: 'Logistics Partner' },
  { name: 'FedEx', category: 'Delivery Partner' },
  { name: 'Maersk', category: 'Shipping Partner' },
  { name: 'Emirates', category: 'Air Partner' },
  { name: 'Kuehne+Nagel', category: 'Freight Partner' },
  { name: 'MSC', category: 'Ocean Partner' },
];

// Animated counter component
const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  useState(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current * 10) / 10);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  });

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};

// Hero network lines background
const NetworkLines = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Animated route paths */}
    {[
      'M 100 300 Q 300 100 500 250 T 800 200',
      'M 0 400 Q 200 200 400 350 T 800 300',
      'M 150 500 Q 350 250 600 350 T 800 250',
      'M 0 200 Q 200 400 400 250 T 750 400',
    ].map((d, i) => (
      <motion.path
        key={i}
        d={d}
        stroke="#FF6A00"
        strokeWidth="1"
        fill="none"
        strokeDasharray="8 16"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{
          pathLength: { duration: 3 + i * 0.5, repeat: Infinity, ease: 'linear', delay: i * 0.8 },
          opacity: { duration: 1, delay: i * 0.8 },
        }}
      />
    ))}
    {/* Nodes */}
    {[
      { cx: 100, cy: 300 }, { cx: 300, cy: 180 }, { cx: 500, cy: 250 }, { cx: 700, cy: 210 },
      { cx: 200, cy: 400 }, { cx: 400, cy: 330 }, { cx: 600, cy: 350 }, { cx: 750, cy: 290 },
    ].map((pos, i) => (
      <motion.circle
        key={i}
        cx={pos.cx}
        cy={pos.cy}
        r="4"
        fill="#FF6A00"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
      />
    ))}
  </svg>
);

// Globe animation component
const AnimatedGlobe = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Orbital rings */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx="200"
            cy="200"
            r={60 + i * 30}
            stroke={i % 2 === 0 ? '#FF6A00' : '#2F80ED'}
            strokeOpacity={0.5 - i * 0.06}
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 12"
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 25 + i * 6, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '200px 200px' }}
          />
        ))}
      </svg>

      {/* Main logo as globe */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-2xl">
          <img
            src={Logo}
            alt="IntelWise Logistics"
            className="w-72 md:w-80 h-72 md:h-80 rounded-full object-cover"
          />
        </div>

        {/* Orbiting transport icons — counter-rotate inner icon to stay upright */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
          style={{ transformOrigin: 'center center' }}
        >
          <div
            style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}
            className="bg-navy/80 backdrop-blur-sm rounded-full p-2 border border-white/10"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <Plane className="w-5 h-5 text-orange" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
          style={{ transformOrigin: 'center center' }}
        >
          <div
            style={{ position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)' }}
            className="bg-navy/80 backdrop-blur-sm rounded-full p-2 border border-white/10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            >
              <Ship className="w-5 h-5 text-accent-blue" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
          style={{ transformOrigin: 'center center' }}
        >
          <div
            style={{ position: 'absolute', top: '50%', right: '-12px', transform: 'translateY(-50%)' }}
            className="bg-navy/80 backdrop-blur-sm rounded-full p-2 border border-white/10"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <TruckIcon className="w-5 h-5 text-white/80" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating data pills */}
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] left-[8%] bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/20"
      >
        <div className="text-[10px] text-white/60 uppercase tracking-wider">Shipment</div>
        <div className="text-orange text-sm font-semibold">#IW-2847</div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          <span className="text-[10px] text-white/70">In Transit</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[15%] right-[8%] bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/20"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-400" />
          <div>
            <div className="text-[10px] text-white/60">Customs</div>
            <div className="text-white text-xs font-semibold">Cleared</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[55%] left-[4%] bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/20"
      >
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-orange" />
          <div>
            <div className="text-[10px] text-white/60">AI Optimized</div>
            <div className="text-white text-xs font-semibold">Route Active</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── Hero Section ────────────────────────────────────────────────────────────
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#071628] via-navy to-[#0D2545] overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/8 rounded-full blur-[120px]" />
      </div>

      {/* Animated logistics network lines */}
      <motion.div style={{ y }} className="absolute inset-0">
        <NetworkLines />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-7rem)]">
          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            {/* Brand tagline badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-sm rounded-full border border-white/12 mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-sm text-white/75 font-medium tracking-wide">
                Smart Solutions &bull; Global Reach &bull; Delivering Excellence
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6"
            >
              Smarter Global Logistics,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-300 to-accent-blue">
                Powered by IntelWise
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/65 mb-10 max-w-xl leading-relaxed"
            >
              Your expert in full integrated shipping &amp; logistics. We connect
              continents with fast, secure, and intelligent solutions — air, sea, road,
              and beyond.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="btn-primary text-base px-8 py-4 gap-2 group"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/tracking"
                className="btn-secondary-light text-base px-8 py-4"
              >
                Track Shipment
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/8"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm text-white/55">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-orange" />
                </div>
                <span className="text-sm text-white/55">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-accent-blue" />
                </div>
                <span className="text-sm text-white/55">10K+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white/70" />
                </div>
                <span className="text-sm text-white/55">120+ Countries</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Animated globe with logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="hidden lg:block h-[540px]"
          >
            <AnimatedGlobe />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ─── Stats Section ────────────────────────────────────────────────────────────
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-0 bg-white relative overflow-hidden">
      {/* Top orange accent */}
      <div className="h-1 bg-gradient-to-r from-orange/0 via-orange to-orange/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-navy/8 border border-navy/8 rounded-3xl overflow-hidden bg-gradient-to-br from-background to-white shadow-soft"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center p-8 md:p-10 group hover:bg-orange/3 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                <stat.icon className="w-6 h-6 text-orange" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-navy/55 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ─── Services Section ─────────────────────────────────────────────────────────
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full mb-4"
          >
            <Zap className="w-4 h-4 text-orange" />
            <span className="text-sm font-semibold text-orange uppercase tracking-wider">What We Do</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title">
            Full-Integrated Logistics Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
            Specialized in diversified fields in logistics — from freight to concierge solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className={`relative bg-white rounded-2xl p-8 border border-navy/6 shadow-card hover:shadow-card-hover cursor-pointer group overflow-hidden`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              {/* Tag badge */}
              {service.tag && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 bg-orange/10 text-orange rounded-full">
                  {service.tag}
                </span>
              )}

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                  <service.icon className="w-7 h-7 text-orange" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-navy/60 leading-relaxed">{service.description}</p>

                <div className="flex items-center gap-2 mt-6 text-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom hover line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange to-accent-blue origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 btn-primary px-8 py-3 group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// ─── How It Works Section ────────────────────────────────────────────────────
const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 rounded-full mb-4"
          >
            <CheckCircle2 className="w-4 h-4 text-accent-blue" />
            <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">Simple Process</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title">
            How It Works
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
            Getting started with IntelWise is simple. From enquiry to delivery in three steps.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-orange via-accent-blue to-orange opacity-20" />

          {howItWorks.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="bg-background rounded-3xl p-8 border border-navy/6 hover:border-orange/30 hover:shadow-card transition-all duration-300">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange to-orange-400 flex items-center justify-center shadow-lg shadow-orange/20 group-hover:scale-105 transition-transform">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-navy/8 leading-none">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-navy/60 leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow between steps */}
              {index < howItWorks.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-orange/30 flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-4 h-4 text-orange" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/contact" className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-4 transition-all">
            Submit an Enquiry Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Tracking UI Section ─────────────────────────────────────────────────────
const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const trackingSteps = [
    { label: 'Order Placed', date: 'Jun 5, 2024', completed: true },
    { label: 'In Transit', date: 'Jun 6, 2024', completed: true },
    { label: 'Customs Cleared', date: 'Jun 8, 2024', completed: true },
    { label: 'Delivered', date: 'Jun 10, 2024', completed: false },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#071628] via-navy to-[#0D2545] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="text-white"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/10 rounded-full mb-6">
              <Clock className="w-4 h-4 text-orange" />
              <span className="text-sm font-medium">Real-Time Updates</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Track Your Shipment
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-300">
                Anytime, Anywhere
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/65 text-lg mb-8 leading-relaxed">
              Stay informed at every stage. Monitor your cargo's journey from pickup
              through customs to final delivery with live GPS tracking.
            </motion.p>

            {/* Tracking input */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter tracking ID — e.g. IW-2024-2847"
                className="flex-1 px-5 py-4 bg-white/8 border border-white/15 rounded-xl text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-sm"
              />
              <Link to="/tracking" className="btn-primary whitespace-nowrap">
                Track Now
              </Link>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-white/35 text-xs mt-3">
              Try sample ID: <span className="text-orange">IW-2024-2847</span>
            </motion.p>
          </motion.div>

          {/* Right: Timeline card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/6 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Tracking ID</p>
                <p className="text-white font-mono font-semibold text-lg">IW-2024-2847</p>
              </div>
              <div className="flex items-center gap-2 bg-green-500/15 border border-green-500/25 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Active</span>
              </div>
            </div>

            {/* Route */}
            <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 rounded-xl">
              <div className="flex-1">
                <p className="text-white/40 text-xs">Origin</p>
                <p className="text-white font-semibold text-sm">Shanghai, CN</p>
              </div>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 text-orange" />
              </motion.div>
              <div className="flex-1 text-right">
                <p className="text-white/40 text-xs">Destination</p>
                <p className="text-white font-semibold text-sm">New York, US</p>
              </div>
            </div>

            {/* Progress Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/8" />
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: '72%' } : { height: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute left-4 top-4 w-0.5 bg-gradient-to-b from-orange to-orange/40"
              />

              {trackingSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-5 mb-7 last:mb-0"
                >
                  <div
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.completed
                        ? 'bg-orange shadow-lg shadow-orange/30'
                        : 'bg-white/8 border border-white/15'
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : (
                      <div className="w-2 h-2 bg-white/30 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <p className={`font-medium text-sm ${step.completed ? 'text-white' : 'text-white/35'}`}>
                      {step.label}
                    </p>
                    <p className={`text-xs ${step.completed ? 'text-white/50' : 'text-white/25'}`}>
                      {step.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Why Choose Us Section ────────────────────────────────────────────────────
const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-soft">
              <img
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Global Logistics Operations"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Stats overlay card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-card border border-navy/6 flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-navy/55">On-time Delivery Rate</p>
                <p className="text-3xl font-bold text-navy mt-0.5">99.8%</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex gap-1">
                  {[4, 8, 6, 9, 7].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-2 bg-orange rounded-sm"
                      style={{ height: `${h * 4}px` }}
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    />
                  ))}
                </div>
                <span className="text-xs text-navy/40">Last 12 months</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="pt-6 lg:pt-0"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-orange fill-orange" />
              <span className="text-sm font-semibold text-orange uppercase tracking-wider">Why IntelWise</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="section-title mb-4">
              Why Choose Us
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle mb-10">
              We combine cutting-edge technology with deep logistics expertise to
              deliver unmatched reliability and value.
            </motion.p>

            <div className="space-y-5">
              {whyChooseUs.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-orange/3 transition-colors group cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors">
                    <item.icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-base mb-0.5">{item.title}</h4>
                    <p className="text-navy/55 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-4 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Testimonials Section ─────────────────────────────────────────────────────
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full mb-4"
          >
            <Star className="w-4 h-4 text-orange fill-orange" />
            <span className="text-sm font-semibold text-orange uppercase tracking-wider">Client Stories</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
            Trusted by thousands of businesses worldwide to move their world faster
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="overflow-hidden"
          >
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-2 md:px-8">
                  <div className="max-w-3xl mx-auto bg-white border border-navy/6 rounded-3xl p-8 md:p-12 shadow-card">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-orange fill-orange" />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-orange/20 mb-4" />
                    <p className="text-lg md:text-xl text-navy/75 mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-accent-blue flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-navy">{testimonial.name}</p>
                        <p className="text-navy/55 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-navy/8 shadow-card hover:shadow-card-hover hover:border-orange/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-orange w-6 h-2' : 'bg-navy/15 w-2 h-2'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-navy/8 shadow-card hover:shadow-card-hover hover:border-orange/30 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Partners Section ────────────────────────────────────────────────────────
const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 bg-white border-t border-navy/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-10"
        >
          <p className="text-navy/40 text-sm uppercase tracking-[0.2em] font-medium">
            Trusted by Industry Leaders &amp; Global Partners
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-12 w-max"
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-1 group cursor-default flex-shrink-0"
              >
                <div className="px-6 py-3 bg-background rounded-xl border border-navy/6 group-hover:border-orange/30 group-hover:shadow-md transition-all duration-300">
                  <span className="text-navy/70 font-bold text-lg group-hover:text-navy transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
                <span className="text-navy/30 text-xs">{partner.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── CTA Section ─────────────────────────────────────────────────────────────
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#071628] via-navy to-[#0D2545] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/15 rounded-full blur-3xl" />
        <NetworkLines />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {/* Logo in CTA */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <div className="bg-white/8 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10 inline-block">
              <img
                src={Logo}
                alt="IntelWise Logistics"
                className="h-12 w-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Let's Move Your World
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-300">
              Faster
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-lg md:text-xl mb-4 max-w-2xl mx-auto"
          >
            Ready to optimize your logistics? Get a personalized quote and discover
            how IntelWise can transform your supply chain.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-white/35 text-sm mb-10 uppercase tracking-[0.2em]"
          >
            Smart Solutions &bull; Global Reach &bull; Delivering Excellence
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="btn-primary text-base px-10 py-4 gap-2 group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="btn-secondary-light text-base px-10 py-4"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Main Home Page ───────────────────────────────────────────────────────────
const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HowItWorksSection />
      <TrackingSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
