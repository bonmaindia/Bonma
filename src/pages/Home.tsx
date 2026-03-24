import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Search, 
  Share2, 
  ShoppingBag, 
  TrendingUp, 
  Zap, 
  Users, 
  ShieldCheck, 
  Clock,
  MessageCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const services = [
  {
    title: 'Website Development',
    description: 'Get an SEO-friendly website that converts visitors into customers. Perfect for small businesses in India.',
    icon: Globe,
    path: '/website-development',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Google Ads Management',
    description: 'Drive instant traffic and high-quality leads with ROI-focused PPC campaigns tailored for the Indian market.',
    icon: Search,
    path: '/google-ads-management',
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Social Media Marketing',
    description: 'Build your brand presence on Instagram, Facebook, and LinkedIn with engaging content and targeted ads.',
    icon: Share2,
    path: '/social-media-marketing',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Shopify Store Development',
    description: 'Launch your eCommerce business with a professional Shopify store designed for high conversion rates.',
    icon: ShoppingBag,
    path: '/shopify-development',
    color: 'bg-green-50 text-green-600',
  },
];

const testimonials = [
  {
    name: 'Amit Patel',
    business: 'Patel Electronics, Ahmedabad',
    text: 'Bonma helped us double our inquiries in just 3 months. Their Google Ads management services in India are truly top-notch and affordable.',
  },
  {
    name: 'Priya Sharma',
    business: 'Luxe Boutique, Delhi',
    text: 'As a small business owner, I needed a website developer for small business India who understood my budget. Bonma delivered a stunning site!',
  },
  {
    name: 'Vikram Singh',
    business: 'Organic Harvest, Bangalore',
    text: 'Their social media marketing for small business India strategy has given our brand a huge boost. Highly recommended for lead generation.',
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    "name": "Bonma",
    "url": "https://bonma.top",
    "logo": "https://bonma.top/logo.png",
    "description": "Leading digital marketing agency in India providing affordable website development, Google Ads, and lead generation services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhiwandi, Mumbai",
      "addressCountry": "IN",
      "streetAddress": "Office 111, 1st Floor, Above pp Gas agency, Priya Complex, Anjur Kaman Road, Anjur Phata"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8850741410",
      "contactType": "customer service"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Digital Marketing Agency in India | Website Developer for Small Business"
        description="Bonma is a premier digital marketing agency in India. We offer affordable website development, Google Ads management, and lead generation services for small businesses."
        canonical="/"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6">
                #1 Digital Marketing Agency in India
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                Get <span className="text-blue-600">Instant Inquiries</span> for Your Business
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Stop wasting money on marketing that doesn't work. We help small businesses in India grow with 
              <span className="font-bold text-gray-900"> ROI-focused lead generation</span> and 
              <span className="font-bold text-gray-900"> SEO-friendly website development</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
            >
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Get Free Audit <ArrowRight size={20} />
              </Link>
              <a 
                href="https://wa.me/918850741410" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-green-200 hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} fill="currentColor" /> Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-8 mt-12"
            >
              <div className="flex items-center gap-2 text-gray-400 font-bold text-lg">
                <ShieldCheck size={24} className="text-blue-600" />
                <span>Google Partner</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-bold text-lg">
                <ShieldCheck size={24} className="text-purple-600" />
                <span>Meta Partner</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-bold text-lg">
                <ShieldCheck size={24} className="text-green-600" />
                <span>Shopify Expert</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted by 200+ Small Businesses in India</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't just provide services; we deliver results that help your business thrive in the competitive Indian market.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col gap-6"
              >
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Comprehensive Lead Generation Services India</h2>
              <p className="text-gray-600 text-lg">We provide everything you need to dominate your local market and grow your business online.</p>
            </div>
            <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-200 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${s.color}`}>
                  <s.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{s.description}</p>
                <Link to={s.path} className="text-sm font-bold text-blue-600 flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Bonma */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Why We Are the Best Digital Marketing Agency in India</h2>
              <p className="text-gray-600 text-lg">We understand the unique challenges faced by small business owners in India. Our approach is built on transparency, results, and affordability.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Affordable Pricing', desc: 'High-quality services that fit your budget.', icon: Zap },
                  { title: 'ROI-Focused', desc: 'We focus on leads and sales, not just clicks.', icon: TrendingUp },
                  { title: 'Fast Delivery', desc: 'Get your website or campaign live in days.', icon: Clock },
                  { title: 'Dedicated Support', desc: 'Direct access to our expert team.', icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600" alt="Digital Marketing Agency Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full -z-10 blur-2xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600 rounded-full -z-10 blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Simple 4-Step Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We've streamlined our workflow to ensure you get the best results in the shortest time possible.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>
            
            {[
              { step: '01', title: 'Discovery', desc: 'We understand your business goals and target audience.' },
              { step: '02', title: 'Strategy', desc: 'We create a custom plan to generate high-quality leads.' },
              { step: '03', title: 'Execution', desc: 'Our experts build your site or launch your campaigns.' },
              { step: '04', title: 'Growth', desc: 'We monitor, optimize, and scale your business growth.' },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-900/50">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">Start Getting High-Quality Leads Today</h2>
                <p className="text-blue-100 text-lg">Don't let your competitors take your customers. Partner with the best website developer for small business India and grow your revenue.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/918850741410" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all"
                  >
                    <MessageCircle size={20} fill="currentColor" /> WhatsApp Us Now
                  </a>
                  <Link 
                    to="/contact" 
                    className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all"
                  >
                    Request a Callback
                  </Link>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={20} className="text-blue-300" />
                    <span className="text-sm font-medium">100% Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-blue-300" />
                    <span className="text-sm font-medium">Free Consultation</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-12">
                <ContactForm />
              </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
