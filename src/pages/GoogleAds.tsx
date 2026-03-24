import { motion } from 'motion/react';
import { 
  Search, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Target, 
  BarChart3, 
  ArrowRight,
  MessageCircle,
  MousePointer2,
  PieChart,
  Settings,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const benefits = [
  { title: 'Instant Targeted Traffic', desc: 'Stop waiting for SEO to kick in. Get your business in front of customers exactly when they are searching for your services.' },
  { title: 'High-Quality Lead Generation', desc: 'We optimize your campaigns to attract high-intent leads, ensuring you get the best ROI for your advertising spend.' },
  { title: 'Data-Driven Optimization', desc: 'We don\'t guess. We use real-time data to refine your keywords, ads, and landing pages for maximum performance.' },
  { title: 'Transparent Reporting', desc: 'Get detailed monthly reports showing exactly where your money went and how many leads you generated.' },
];

const faqs = [
  {
    q: 'What is the minimum budget for Google Ads in India?',
    a: 'There is no fixed minimum, but we recommend starting with at least ₹15,000 - ₹20,000 per month to see meaningful results. Our Google Ads management services India are designed to work with various budget levels.'
  },
  {
    q: 'How soon will I start getting leads?',
    a: 'Google Ads can generate leads almost instantly once the campaign is live. Most of our clients see their first inquiries within 24-48 hours of launching a new campaign.'
  },
  {
    q: 'Do you manage both Search and Display ads?',
    a: 'Yes, we manage Search, Display, YouTube, and Remarketing ads. We create a custom mix based on your business goals and target audience in India.'
  },
  {
    q: 'Will you create the ad copy and landing pages?',
    a: 'Absolutely! We handle everything from keyword research and ad copywriting to landing page optimization to ensure the highest possible conversion rate.'
  }
];

export default function GoogleAds() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Google Ads Management Services India | PPC Agency for Small Business"
        description="Get high-quality leads with the best Google Ads management services India. Bonma is a leading PPC agency helping small businesses grow with ROI-focused campaigns."
        canonical="/google-ads-management"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-red-600 to-orange-600 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-red-100 text-sm font-bold tracking-wide uppercase self-start">
                Google Ads Certified Experts
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                ROI-Focused <span className="text-red-200">Google Ads</span> Management India
              </h1>
              <p className="text-lg md:text-xl text-red-100 leading-relaxed">
                Stop wasting your budget on clicks that don't convert. Our expert Google Ads management services India 
                focus on generating high-quality leads and sales for your small business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-red-50 transition-all flex items-center justify-center gap-2"
                >
                  Get a Free Audit <ArrowRight size={20} />
                </Link>
                <a 
                  href="https://wa.me/918850741410" 
                  className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} fill="currentColor" /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <h4 className="font-bold text-gray-900">Campaign Performance</h4>
                    <span className="text-green-500 font-bold text-sm">+42% ROI</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Total Leads</p>
                      <p className="text-2xl font-bold text-gray-900">124</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Cost Per Lead</p>
                      <p className="text-2xl font-bold text-gray-900">₹85</p>
                    </div>
                  </div>
                  <div className="h-32 bg-red-50 rounded-xl flex items-end p-4 gap-2">
                    {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-red-500 rounded-t-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-400 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-30 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Google Ads is the Best Lead Generation Tool for Indian Businesses</h2>
            <div className="prose prose-lg text-gray-600 max-w-none flex flex-col gap-6">
              <p>
                In the competitive Indian market, being visible on the first page of Google is crucial. 
                While SEO takes time, <strong>Google Ads management services India</strong> allow you to jump to the top of search results 
                immediately. Whether you are a local service provider or a national eCommerce brand, Google Ads (PPC) 
                is the fastest way to reach customers who are ready to buy.
              </p>
              <p>
                At Bonma, we specialize in <strong>lead generation services India</strong> through highly optimized Google Ads campaigns. 
                We understand that every rupee counts for a small business owner. That's why our approach is focused on 
                minimizing wasted spend and maximizing conversions. We don't just look at clicks; we look at the quality of those clicks 
                and how they translate into actual business inquiries.
              </p>
              <p>
                Our team of certified experts handles everything from <strong>keyword research</strong> and <strong>competitor analysis</strong> 
                to <strong>ad copywriting</strong> and <strong>landing page optimization</strong>. We ensure that your ads are shown to the 
                right people at the right time, leading to higher quality inquiries and better sales. We use advanced targeting techniques 
                including location-based targeting, demographic filtering, and remarketing to ensure your budget is used effectively.
              </p>
              <p>
                One of the biggest advantages of Google Ads is the ability to track everything. We provide you with clear data on which 
                keywords are driving calls, which ads are getting the most clicks, and what your actual cost per lead is. This transparency 
                allows us to continuously refine your strategy and scale your growth as your business expands.
              </p>
              <p>
                In India, where mobile search is dominant, we optimize your ads specifically for mobile users, ensuring that "Call" buttons 
                and "Get Directions" links are prominent. This is especially vital for local businesses like doctors, lawyers, 
                and home service providers who need immediate inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Benefits of Our Google Ads Management</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We focus on the metrics that matter: Leads, Sales, and ROI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                  <TrendingUp size={24} />
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
                  { icon: Target, title: 'Precise Targeting' },
                  { icon: MousePointer2, title: 'High CTR Ads' },
                  { icon: PieChart, title: 'Conversion Tracking' },
                  { icon: Settings, title: 'A/B Testing' },
                  { icon: BarChart3, title: 'ROI Analysis' },
                  { icon: Search, title: 'Keyword Research' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center gap-3">
                    <item.icon size={32} className="text-red-600" />
                    <span className="font-bold text-gray-900 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Our Data-Driven PPC Strategy</h2>
              <p className="text-gray-600 text-lg">
                We don't just set and forget your campaigns. We continuously monitor and optimize your ads to ensure 
                you stay ahead of the competition and get the lowest possible cost per lead.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'Comprehensive Keyword & Competitor Research',
                  'Persuasive Ad Copywriting that Drives Clicks',
                  'Strategic Bidding to Maximize Your Budget',
                  'Landing Page Optimization for Higher Conversions',
                  'Remarketing to Re-engage Interested Visitors',
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

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to Get More Inquiries?</h2>
              <p className="text-red-100 text-lg">Join hundreds of successful small businesses in India who are growing with our expert Google Ads management services India.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/918850741410" 
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={20} fill="currentColor" /> WhatsApp Us Now
                </a>
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-all"
                >
                  Get a Free Audit
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request a Free PPC Audit</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
