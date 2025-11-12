import { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ContactForm';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Can pregnant or breastfeeding women use this ulcer cure powder?',
    answer: 'Yes, but it\'s best to share your condition with us first for proper guidance.',
  },
  {
    question: 'How long before it works?',
    answer: 'Some people heal in 3–5 days; others within 1–2 weeks depending on severity.',
  },
  {
    question: 'Any side effects?',
    answer: 'Only 1% report mild nausea; 99% experience full recovery and renewed strength.',
  },
  {
    question: 'How long is delivery?',
    answer: 'Between 1–24 hours depending on your location.',
  },
];

export default function Product() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '07082209763';
    const message = encodeURIComponent('Hello, Halal Herbal, Ive gone through your website and with what i have seen, I know Im now close to moving out COMPLETELY! from the list of those who are labeled as ulcer patients..  But before then, is there any other thing that you can give more explanation on regarding this  Ulcer Powder.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-pulse">🌿</div>
          <div className="absolute bottom-20 right-20 text-5xl animate-pulse delay-1000">🌿</div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-accent">
                🌿 The Ulcer Cure Powder
              </h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
                The fast-acting, root-healing herbal formula trusted by 80+ Nigerians.
              </p>
              <p className="text-lg md:text-xl mb-12 leading-relaxed">
                From chest burns to sleepless nights, it restores your peace by targeting ulcer wounds from within — not masking symptoms like conventional drugs.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowContactForm(true)}
              >
                🛒 Order / Make Enquiry Now
              </Button>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="/product-bottle.jpg" 
                  alt="Ulcer Cure Powder Bottle" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 bg-muted/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="/herbal-medicine.jpg" 
                  alt="Herbal Medicine Ingredients" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="w-full space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Heals from the Root</h3>
                  <p className="text-lg text-muted-foreground">Attacks ulcer-causing bacteria (H. pylori) directly.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Protects Your Lining</h3>
                  <p className="text-lg text-muted-foreground">Shields your stomach and intestines from acid burns.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Restores Strength</h3>
                  <p className="text-lg text-muted-foreground">Rebuilds your immunity and energy.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">100% Herbal</h3>
                  <p className="text-lg text-muted-foreground">No synthetic chemicals or harsh side effects.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Fast Relief</h3>
                  <p className="text-lg text-muted-foreground">Most users notice results within 3–5 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="w-full py-20 bg-accent/10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
            Real Stories, Real Healing
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="w-full">
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-accent">
                <p className="text-lg mb-4 leading-relaxed">
                  "I can finally eat spicy food without fear. No pain for 4 months now."
                </p>
                <p className="text-accent font-bold text-lg">— Aisha, Kano</p>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-accent">
                <p className="text-lg mb-4 leading-relaxed">
                  "Even my doctor was shocked. It's been a year, no ulcer attack."
                </p>
                <p className="text-accent font-bold text-lg">— David, Ogun</p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-sm">
              <img 
                src="/healthy-digestion.jpg" 
                alt="Healthy Digestion" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowContactForm(true)}
            >
              🔘 I Want to Experience This Too
            </Button>
          </div>
        </div>
      </section>

      {/* Price & Order Options Section */}
      <section className="w-full py-20 bg-muted/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-accent">
            Price & Order Options
          </h2>
          <p className="text-center text-2xl font-bold text-accent mb-12">
            Your Healing Journey Starts for Just ₦9,000
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Option 1: Bank Transfer */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-accent/20 hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-accent mb-4">💵 Bank Transfer</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Pay directly to our account
              </p>
              <div className="bg-accent/10 rounded-lg p-4 mb-6">
                <p className="font-semibold text-accent mb-2">Account Details:</p>
                <p className="text-sm">Account: 8137446923</p>
                <p className="text-sm">Name: Sheriff Ademola Waheed</p>
                <p className="text-sm">Platform: OPAY</p>
              </div>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                onClick={() => setShowContactForm(true)}
              >
                Confirm Payment
              </Button>
            </div>

            {/* Option 2: WhatsApp */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-accent/20 hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-accent mb-4">💬 Talk to Us First</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Ask questions or confirm your condition
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Get personalized guidance before ordering
              </p>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={handleWhatsAppClick}
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Option 3: Pickup */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-accent/20 hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-accent mb-4">📦 Pickup in Lagos</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Visit us directly
              </p>
              <div className="bg-accent/10 rounded-lg p-4 mb-6">
                <p className="font-semibold text-accent mb-2">Address:</p>
                <p className="text-sm">6, Kumuyi Street</p>
                <p className="text-sm">Post Office, Mushin</p>
                <p className="text-sm">Lagos State</p>
              </div>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                onClick={() => setShowContactForm(true)}
              >
                Schedule Pickup
              </Button>
            </div>
          </div>

          <p className="text-center text-lg text-muted-foreground">
            Deliveries available nationwide. Delivery fee depends on your location.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-accent/10">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border-2 border-accent/20 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-accent text-left">{item.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="text-accent flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-accent flex-shrink-0" size={24} />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 bg-accent/5 border-t-2 border-accent/20">
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-accent to-accent/90">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            🌿 Join the 80+ Nigerians Who Beat Ulcer Naturally
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Say goodbye to heartburn, sleepless nights, restricted diets, and endless pills.
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-12 text-white">
            With the Halal Herbal Ulcer Cure Powder, you can finally live free.
          </p>

          <Button
            size="lg"
                className="bg-white hover:bg-accent/90 text-accent hover:text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => setShowContactForm(true)}
          >
            🛒I'm Ready to Be Completely Healed
          </Button>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-accent">Get Your Ulcer Cure Powder</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <ContactForm onClose={() => setShowContactForm(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
