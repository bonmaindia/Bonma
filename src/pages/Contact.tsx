import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Contact Us | Best Digital Marketing Agency in India"
        description="Get in touch with Bonma, the leading digital marketing agency in India. Contact us for affordable website development, Google Ads, and lead generation services."
        canonical="/contact"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Let's Grow Your <span className="text-blue-600">Business</span> Together
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600"
            >
              Have a project in mind? Or just want to say hello? We'd love to hear from you. 
              Our team of experts is ready to help you generate more leads and sales.
            </motion.p>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50"></div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                <p className="text-gray-600 text-lg">
                  We are based in Mumbai, but we serve small businesses across India. 
                  Whether you are in Delhi, Bangalore, Ahmedabad, or anywhere else, we are just a call or message away.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <a href="tel:+918850741410" className="text-gray-600 hover:text-blue-600 transition-colors">+91 8850741410</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">WhatsApp</h4>
                    <a href="https://wa.me/918850741410" className="text-gray-600 hover:text-green-600 transition-colors">+91 8850741410</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <a href="mailto:hello@bonma.top" className="text-gray-600 hover:text-purple-600 transition-colors">hello@bonma.top</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 10 AM - 7 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-gray-900">Why Contact Us?</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    'Free Website & SEO Audit',
                    'Custom ROI-Focused Marketing Plan',
                    'No-Obligation Consultation',
                    'Transparent Pricing & No Hidden Fees',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 size={20} className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h3>
                <ContactForm />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-3xl overflow-hidden shadow-xl h-96 bg-gray-200 relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <MapPin size={48} className="text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Office Location</h3>
              <p className="text-gray-600 max-w-md">While we serve clients pan-India, our main office is located in Mumbai.</p>
              <p className="font-bold text-gray-900 mt-4">Bonma Digital Agency</p>
              <p className="text-gray-600 text-sm">Office 111, 1st Floor, Above pp Gas agency, Priya Complex, Anjur Kaman Road, Anjur Phata, Bhiwandi, Mumbai-421302</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
          <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck size={32} /> Secure Payments</div>
          <div className="flex items-center gap-2 font-bold text-xl"><CheckCircle2 size={32} /> Verified Agency</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Clock size={32} /> 24/7 Support</div>
        </div>
      </section>
    </div>
  );
}
