import { motion } from 'motion/react';
import { 
  Globe, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  ArrowRight,
  MessageCircle,
  Layout,
  Code,
  Gauge,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const benefits = [
  { title: 'SEO-Friendly Structure', desc: 'We build websites that Google loves, helping you rank higher and get more organic traffic.' },
  { title: 'Mobile-First Design', desc: 'Over 80% of Indian users browse on mobile. We ensure your site looks perfect on every screen.' },
  { title: 'Fast Loading Speed', desc: 'Slow sites lose customers. We optimize every image and line of code for lightning-fast performance.' },
  { title: 'Conversion-Focused', desc: 'Our designs are built to guide visitors toward taking action—whether it\'s a call or a form fill.' },
];

const faqs = [
  {
    q: 'How much does a website cost for a small business in India?',
    a: 'The cost depends on your requirements (number of pages, features, etc.). At Bonma, we offer affordable website development India packages starting from very competitive rates, specifically designed for small business budgets.'
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A standard business website typically takes 7-14 days to complete, depending on the complexity and how quickly we receive content from your side.'
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Absolutely! Every website we build is 100% responsive and mobile-friendly, ensuring a seamless experience for your customers on smartphones, tablets, and desktops.'
  },
  {
    q: 'Do you provide SEO with website development?',
    a: 'Yes, we follow SEO best practices during the development phase, including proper heading structures, meta tags, and fast loading speeds to give your site a head start on Google.'
  }
];

export default function WebDev() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Website Developer for Small Business India | Affordable Web Development"
        description="Looking for an affordable website developer for small business India? Bonma provides SEO-friendly, high-converting website development services in India. Get a free quote today!"
        canonical="/website-development"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-100 text-sm font-bold tracking-wide uppercase self-start">
                Professional Web Design
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Expert <span className="text-blue-300">Website Developer</span> for Small Business India
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Get a high-converting, SEO-friendly website that works as a 24/7 salesperson for your business. 
                We specialize in affordable website development India for startups and local businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                >
                  Get a Free Quote <ArrowRight size={20} />
                </Link>
                <a 
                  href="https://wa.me/918850741410" 
                  className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} fill="currentColor" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/webdev/800/600" 
                  alt="Modern Website Design Preview" 
                  className="rounded-2xl w-full h-auto shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-30 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Your Business Needs a Professional Website in India</h2>
            <div className="prose prose-lg text-gray-600 max-w-none flex flex-col gap-6">
              <p>
                In today's digital age, your website is often the first point of contact between your business and potential customers. 
                For small businesses in India, having a strong online presence is no longer optional—it's a necessity. 
                As a leading <strong>website developer for small business India</strong>, Bonma understands that you need more than just a 
                pretty design; you need a tool that generates leads and revenue.
              </p>
              <p>
                Many small business owners struggle with <strong>affordable website development India</strong>. They either end up with 
                expensive agencies that don't understand their needs or cheap freelancers who deliver slow, broken sites. 
                Bonma bridges this gap by providing premium, SEO-optimized websites at prices that make sense for Indian entrepreneurs.
              </p>
              <p>
                Our <strong>SEO-friendly websites</strong> are built from the ground up to rank on Google. We focus on technical SEO, 
                mobile responsiveness, and user experience to ensure that when people search for your services, they find you first. 
                A well-designed website acts as your silent salesperson, working 24/7 to showcase your expertise and build trust with your audience.
              </p>
              <p>
                In the Indian market, where competition is fierce, a professional website gives you a significant edge. It allows you to compete 
                with larger corporations by presenting a professional image and making it easy for customers to find your contact details, 
                view your portfolio, and read testimonials from other satisfied clients.
              </p>
              <p>
                We don't just use templates. Every project starts with a deep dive into your business goals. We analyze your competitors, 
                identify your unique selling propositions, and design a user journey that leads directly to your conversion goals. 
                Whether you're a local plumber in Delhi or a startup in Bangalore, our websites are tailored to your specific market dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Benefits of Our Web Development Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't just build sites; we build growth engines for your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Layout, title: 'Custom UI/UX' },
                  { icon: Code, title: 'Clean Code' },
                  { icon: Gauge, title: 'Speed Optimized' },
                  { icon: Lock, title: 'SSL Secured' },
                  { icon: Smartphone, title: 'Responsive' },
                  { icon: Search, title: 'SEO Ready' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center gap-3">
                    <item.icon size={32} className="text-blue-600" />
                    <span className="font-bold text-gray-900 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Technical Excellence in Every Pixel</h2>
              <p className="text-gray-600 text-lg">
                Our development process follows industry-leading standards to ensure your website is secure, fast, and scalable. 
                Whether you need a simple landing page or a complex corporate portal, we have the expertise to deliver.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'React & Modern Tech Stack',
                  'Lightning-fast Page Speed (90+ Score)',
                  'Integrated WhatsApp & Lead Forms',
                  'Google Analytics & Search Console Setup',
                  'Free SSL Certificate & Hosting Setup',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <ShieldCheck size={20} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Our Web Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: 'Planning', desc: 'Sitemap & wireframing' },
              { title: 'Design', desc: 'Visual UI concepts' },
              { title: 'Development', desc: 'Coding & integration' },
              { title: 'Testing', desc: 'Quality assurance' },
              { title: 'Launch', desc: 'Go live & optimize' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to Build Your Dream Website?</h2>
              <p className="text-blue-100 text-lg">Don't settle for a generic site. Get a custom-built, lead-generating machine from the top website developer for small business India.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/918850741410" 
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={20} fill="currentColor" /> WhatsApp Us Now
                </a>
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all"
                >
                  Get a Free Audit
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request a Free Proposal</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
