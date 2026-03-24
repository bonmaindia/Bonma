import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  CheckCircle2, 
  Zap, 
  CreditCard, 
  Truck, 
  Smartphone, 
  ArrowRight,
  MessageCircle,
  Layout,
  Settings,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const benefits = [
  { title: 'Custom Store Design', desc: 'Get a unique Shopify store that reflects your brand and stands out from the competition in the Indian market.' },
  { title: 'Conversion Optimization', desc: 'We design your store with a focus on user experience and conversion rate optimization (CRO) to maximize sales.' },
  { title: 'Payment & Logistics Setup', desc: 'We help you integrate popular Indian payment gateways like Razorpay and logistics partners for smooth operations.' },
  { title: 'SEO-Friendly eCommerce', desc: 'Our Shopify stores are built with SEO in mind, helping your products rank higher on Google search results.' },
];

const faqs = [
  {
    q: 'Why should I choose Shopify for my eCommerce business?',
    a: 'Shopify is the most reliable and user-friendly platform for eCommerce. It offers great security, easy management, and powerful tools to grow your business in India.'
  },
  {
    q: 'How much does it cost to hire a Shopify website developer India?',
    a: 'The cost varies based on the complexity of your store. At Bonma, we offer affordable Shopify development packages tailored for small and medium businesses in India.'
  },
  {
    q: 'Can you migrate my existing store to Shopify?',
    a: 'Yes, we specialize in migrating stores from platforms like WooCommerce, Magento, or custom sites to Shopify without losing your data or SEO rankings.'
  },
  {
    q: 'Do you provide ongoing support after the store is live?',
    a: 'Absolutely! We provide training on how to manage your store and offer ongoing maintenance and support packages to ensure your business runs smoothly.'
  }
];

export default function Shopify() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Shopify Website Developer India | eCommerce Store Development"
        description="Looking for an expert Shopify website developer India? Bonma provides high-converting Shopify store development services for small businesses. Launch your store today!"
        canonical="/shopify-development"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-green-600 to-emerald-700 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-green-100 text-sm font-bold tracking-wide uppercase self-start">
                Shopify eCommerce Experts
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Expert <span className="text-green-200">Shopify Website</span> Developer India
              </h1>
              <p className="text-lg md:text-xl text-green-100 leading-relaxed">
                Launch your online store with a high-converting, professional Shopify design. 
                We help Indian entrepreneurs build successful eCommerce businesses from scratch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-green-50 transition-all flex items-center justify-center gap-2"
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
                  src="https://picsum.photos/seed/shopify-store/800/600" 
                  alt="Shopify Store Design Preview" 
                  className="rounded-2xl w-full h-auto shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl opacity-30 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Shopify is the Best Choice for eCommerce in India</h2>
            <div className="prose prose-lg text-gray-600 max-w-none flex flex-col gap-6">
              <p>
                The eCommerce landscape in India is growing rapidly. To succeed, you need a platform that is reliable, 
                secure, and easy to manage. Shopify is the world's leading eCommerce platform, and for good reason. 
                As an expert <strong>Shopify website developer India</strong>, Bonma helps you leverage the full power 
                of Shopify to build a store that not only looks great but also sells.
              </p>
              <p>
                We understand the specific needs of Indian eCommerce businesses, from integrating <strong>local payment gateways</strong> 
                like Razorpay, PayU, and Cashfree to setting up <strong>shipping and logistics</strong> with partners 
                like Shiprocket or Delhivery. We ensure that your store is fully optimized for the Indian market, 
                including support for Cash on Delivery (COD) and local currency displays.
              </p>
              <p>
                Our <strong>Shopify development services</strong> focus on creating a seamless shopping experience for your 
                customers. We optimize your store for mobile devices, ensure fast loading speeds, and implement 
                conversion-focused design elements to help you grow your revenue. We also help you with 
                <strong>eCommerce SEO</strong> to ensure your products rank high on Google search results.
              </p>
              <p>
                One of the biggest challenges for new eCommerce brands in India is building trust. We help you implement 
                trust badges, customer reviews, and secure checkout processes that make your customers feel safe 
                shopping with you. A professional Shopify store acts as a solid foundation for your brand's growth.
              </p>
              <p>
                Whether you're starting a new fashion brand, selling electronics, or launching a niche food product, 
                our Shopify experts will guide you through the entire process. From theme selection and customization 
                to app integration and marketing setup, we provide a complete solution for your eCommerce success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Benefits of Our Shopify Development</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We help you build an eCommerce brand, not just a store.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
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
                  { icon: Layout, title: 'Custom Themes' },
                  { icon: Settings, title: 'App Integration' },
                  { icon: CreditCard, title: 'Payment Setup' },
                  { icon: Truck, title: 'Shipping Setup' },
                  { icon: Smartphone, title: 'Mobile Ready' },
                  { icon: Globe, title: 'Multi-Currency' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center gap-3">
                    <item.icon size={32} className="text-green-600" />
                    <span className="font-bold text-gray-900 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Our Comprehensive Shopify Strategy</h2>
              <p className="text-gray-600 text-lg">
                We handle everything from store setup and theme customization to app integration and product uploads. 
                Our goal is to provide you with a turnkey eCommerce solution so you can focus on growing your business.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'Custom Shopify Theme Development & Design',
                  'Seamless Integration with Indian Payment Gateways',
                  'Logistics & Inventory Management Setup',
                  'eCommerce SEO & Product Page Optimization',
                  'Shopify App Recommendations & Integration',
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
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ready to Launch Your Online Store?</h2>
              <p className="text-green-100 text-lg">Don't wait. Partner with the top Shopify website developer India and start selling your products online today.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/918850741410" 
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={20} fill="currentColor" /> WhatsApp Us Now
                </a>
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-50 transition-all"
                >
                  Get a Free Audit
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request a Shopify Proposal</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
