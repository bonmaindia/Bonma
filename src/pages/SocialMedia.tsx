import { motion } from 'motion/react';
import { 
  Share2, 
  CheckCircle2, 
  Zap, 
  Users, 
  Instagram, 
  Facebook, 
  Linkedin, 
  ArrowRight,
  MessageCircle,
  Camera,
  MessageSquare,
  Heart,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const benefits = [
  { title: 'Brand Awareness & Trust', desc: 'Build a strong social presence that makes your small business look professional and trustworthy to Indian customers.' },
  { title: 'Direct Customer Engagement', desc: 'Interact with your audience in real-time, answer their questions, and build lasting relationships.' },
  { title: 'Targeted Social Media Ads', desc: 'Reach your ideal customers on Facebook and Instagram with highly targeted ad campaigns that drive leads.' },
  { title: 'Consistent Content Strategy', desc: 'Never worry about what to post. We handle your content calendar, from graphics to captions.' },
];

const faqs = [
  {
    q: 'Which social media platform is best for my business?',
    a: 'It depends on your industry. For B2C businesses in India, Instagram and Facebook are usually best. For B2B, LinkedIn is more effective. We help you choose the right platforms for your social media marketing for small business India.'
  },
  {
    q: 'Do you create the graphics and videos for posts?',
    a: 'Yes, our creative team handles everything including graphic design, short-form video (Reels), and persuasive copywriting for all your social media posts.'
  },
  {
    q: 'How often will you post on my social media?',
    a: 'We offer various packages ranging from 3 posts per week to daily posting, depending on your goals and budget.'
  },
  {
    q: 'Will social media marketing help me get leads?',
    a: 'Absolutely! Beyond brand building, we use social media ads and lead forms to generate high-quality inquiries directly from platforms like Facebook and Instagram.'
  }
];

export default function SocialMedia() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Social Media Marketing for Small Business India | SMM Agency"
        description="Grow your brand with expert social media marketing for small business India. Bonma provides affordable SMM services, content creation, and lead generation ads."
        canonical="/social-media-marketing"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-purple-100 text-sm font-bold tracking-wide uppercase self-start">
                Creative Social Media Agency
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Grow Your Brand with <span className="text-purple-200">Social Media</span> Marketing
              </h1>
              <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
                Connect with your audience and generate leads on Instagram, Facebook, and LinkedIn. 
                Expert social media marketing for small business India tailored for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center"><Instagram size={16} /></div>
                      <span className="text-xs font-bold text-gray-900">Instagram</span>
                    </div>
                    <div className="h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <img src="https://picsum.photos/seed/insta/200/200" alt="Instagram Post" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 text-pink-600"><Heart size={14} fill="currentColor" /><MessageSquare size={14} /></div>
                      <span className="text-[10px] text-gray-400">2.4k Likes</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col gap-3 mt-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><Facebook size={16} /></div>
                      <span className="text-xs font-bold text-gray-900">Facebook</span>
                    </div>
                    <div className="h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <img src="https://picsum.photos/seed/fb/200/200" alt="Facebook Post" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 text-blue-600"><Share2 size={14} /></div>
                      <span className="text-[10px] text-gray-400">1.2k Shares</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-30 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Social Media is Essential for Small Businesses in India</h2>
            <div className="prose prose-lg text-gray-600 max-w-none flex flex-col gap-6">
              <p>
                India has one of the largest social media user bases in the world. For a small business owner, platforms like 
                Instagram and Facebook are not just for sharing photos—they are powerful <strong>lead generation services India</strong> tools. 
                With the right strategy, you can reach thousands of potential customers in your local area or across the country.
              </p>
              <p>
                At Bonma, we specialize in <strong>social media marketing for small business India</strong>. We know that as a business 
                owner, you don't have the time to create content and manage ads every day. That's where we come in. 
                We act as your extended marketing team, ensuring your brand stays active and engaging. We help you tell your brand story 
                in a way that resonates with the Indian audience, using local trends and cultural nuances to build a loyal following.
              </p>
              <p>
                Our approach combines <strong>creative content creation</strong> with <strong>data-driven social ads</strong>. 
                We don't just focus on "likes"; we focus on building a community of loyal customers and generating 
                consistent inquiries for your products or services. We use advanced audience targeting to ensure your ads are seen 
                by people who are most likely to be interested in what you offer, based on their interests, behaviors, and location.
              </p>
              <p>
                Social media is also a vital tool for customer service. Indian consumers often prefer messaging a brand on Instagram or 
                Facebook over making a phone call. We help you manage these interactions, ensuring that every inquiry is handled 
                professionally and promptly, which significantly boosts your brand's reputation and trust.
              </p>
              <p>
                Whether it's creating viral Reels, managing LinkedIn thought leadership for B2B brands, or running high-converting 
                Facebook lead ads, our team has the expertise to deliver results. We stay updated with the latest algorithm changes 
                so you don't have to, keeping your business ahead of the curve in the ever-evolving social media landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Benefits of Our SMM Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We help you build a brand that people love and follow.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                  <Zap size={24} />
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
                  { icon: Camera, title: 'Content Creation' },
                  { icon: Users, title: 'Community Mgmt' },
                  { icon: Share2, title: 'Viral Strategies' },
                  { icon: Instagram, title: 'Instagram Reels' },
                  { icon: Facebook, title: 'Facebook Ads' },
                  { icon: Linkedin, title: 'LinkedIn B2B' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center gap-3">
                    <item.icon size={32} className="text-purple-600" />
                    <span className="font-bold text-gray-900 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Our Creative Social Media Strategy</h2>
              <p className="text-gray-600 text-lg">
                We believe in quality over quantity. Every post we create is designed to resonate with your target audience 
                and reflect your brand's unique personality.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'Custom Graphic Design & Video Editing',
                  'Strategic Hashtag & Keyword Research',
                  'Monthly Content Calendar & Planning',
                  'Targeted Ad Campaigns for Lead Generation',
                  'Detailed Performance Analytics & Insights',
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
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to Boost Your Social Presence?</h2>
              <p className="text-purple-100 text-lg">Partner with the most creative social media marketing for small business India agency and start growing your community today.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/918850741410" 
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={20} fill="currentColor" /> WhatsApp Us Now
                </a>
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-purple-50 transition-all"
                >
                  Get a Free Audit
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request a Social Media Audit</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
