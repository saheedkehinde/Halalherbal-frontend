import { useState } from 'react';
import { Leaf, CheckCircle, Package } from 'lucide-react';
import { Carousel } from '@/components/Carousel';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ContactForm';
import { Link } from 'wouter';

interface TestimonialImage {
  id: string;
  image: string;
  alt: string;
}

interface ContactFormProps {
  onClose: () => void;
}

export default function Home() {
  const [showContactForm, setShowContactForm] = useState<boolean>(false);

  const testimonialImages: TestimonialImage[] = [
    { id: '1', image: '/testimonials/IMG-20251027-WA0181.jpg', alt: 'Testimonial 1' },
    { id: '2', image: '/testimonials/IMG-20251027-WA0182.jpg', alt: 'Testimonial 2' },
    { id: '3', image: '/testimonials/IMG-20251027-WA0183.jpg', alt: 'Testimonial 3' },
    { id: '4', image: '/testimonials/IMG-20251027-WA0184.jpg', alt: 'Testimonial 4' },
    { id: '5', image: '/testimonials/IMG-20251027-WA0185.jpg', alt: 'Testimonial 5' },
    { id: '6', image: '/testimonials/IMG-20251027-WA0186.jpg', alt: 'Testimonial 6' },
    { id: '7', image: '/testimonials/IMG-20251027-WA0187.jpg', alt: 'Testimonial 7' },
    { id: '8', image: '/testimonials/IMG-20251027-WA0188.jpg', alt: 'Testimonial 8' },
    { id: '9', image: '/testimonials/IMG-20251027-WA0189.jpg', alt: 'Testimonial 9' },
    { id: '10', image: '/testimonials/IMG-20251027-WA0190.jpg', alt: 'Testimonial 10' },
    { id: '11', image: '/testimonials/IMG-20251027-WA0191.jpg', alt: 'Testimonial 11' },
    { id: '12', image: '/testimonials/IMG-20251027-WA0192.jpg', alt: 'Testimonial 12' },
    { id: '13', image: '/testimonials/IMG-20251027-WA0193.jpg', alt: 'Testimonial 13' },
    { id: '14', image: '/testimonials/IMG-20251027-WA0194.jpg', alt: 'Testimonial 14' },
    { id: '15', image: '/testimonials/IMG-20251027-WA0195.jpg', alt: 'Testimonial 15' },
    { id: '16', image: '/testimonials/IMG-20251027-WA0196.jpg', alt: 'Testimonial 16' },
  ];

  const handleWhatsAppClick = () => {
    try {
      const phoneNumber = '08137446923';
      const message = encodeURIComponent('Hello, I am interested in the Ulcer Cure Powder. Please tell me more about it.');
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-pulse">🌿</div>
          <div className="absolute top-10 right-10 text-6xl animate-pulse">🌿</div>
          <div className="absolute bottom-20 right-20 text-5xl animate-pulse delay-1000">🌿</div>
          <div className="absolute top-1/3 right-10 text-4xl animate-pulse delay-500">🌿</div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent">
            🌿 Have You Been Completely Freed from Ulcer?
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-muted-foreground leading-relaxed">
            Studies now reveal why these overlooked threats might be what's keeping you from that final freedom — and the little-known natural remedy over 80 people have used to reverse it from the root.
            But there’s hope…
          </p>
        
          <p className="text-xl md:text-2xl font-semibold mb-10 text-accent">
            Your relief story can begin today.
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-8 text-accent">
            And the hope is here...
          </p>
          <Link to="/product">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🛒 Show Me the Ulcer Cure Powder →
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 bg-muted/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent">
                About Halal Herbal
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Halal Herbal & PMH is a trusted herbal wellness brand in Lagos, Nigeria — dedicated to producing science-backed natural remedies that heal from the root, not just the surface.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                We believe healing should restore your entire well-being — not leave you chained to pills and side effects.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Our flagship formula, the Ulcer Cure Powder, is crafted from rare herbs and natural extracts that target ulcer pain, acid reflux, and inflammation directly — helping your body rebuild its strength and immunity naturally.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">100% Herbal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="text-accent flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Root-Level Healing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="text-accent flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Made in Nigeria</span>
                </div>
              </div>

              <Link to="/product">
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-8 border-accent text-accent hover:bg-accent hover:text-white"
                >
                  🔘 Discover the Science Behind It
                </Button>
              </Link>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-sm flex justify-center">
                <img 
                  src="/natural-herbs.jpg" 
                  alt="Natural Herbs" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="w-full py-20 bg-accent/10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
            The Problem: Why Ulcer Lingers So Long
          </h2>
           <p className="text-lg md:text-2xl text-center font-semibold mb-10 text-accent">
              You've taken every recommendation — pharma drugs, unripe plantain, cabbage juice, aloe vera, ginger, fermented pawpaw — yet, the pain always returns.
          </p>
           <p className="text-md md:text-md text-center font-semibold  mb-10 text-accent">
             
For instance, anxiety could also come from being broke financially, it could come from having low sales, or just the way inflation is dealing with many of us.

Meaning? Any symptoms or pains should have been limited more to the area of your stomach or intestine,

And not something that now seems like multiple health issues (like you see today).<br></br>
<br></br>
More like,

It shouldn't have been something that now feels like a heart attack.
It shouldn't have been something that now feels like your breath is about to be cut off.
It shouldn't have been something that now raises your blood pressure so high like a debtor with no hope.

Although, you should have known this earlier.
<br></br>

Especially if you could wind back to the first time you noticed you had ulcer,

And you compare it with what has been going on now, with the sharp invisible pain in your chest, the regular headache, the fast heartbeat, the sudden weight loss, the cold arms and legs (even under hot weather), the unusual dizziness, the tightened throat as if it has been handcuffed…

As in,

That tiny pain of then has grown bigger, spreading and tormenting other parts of your body.

It felt like you've been exploited, like a betrayal, like you've been let down, even after using a lot of so-called medications.
<br></br><br></br>
 <p className="text-lg md:text-2xl font-semibold mb-8 text-accent">
So, you ask, "Why is this happening to me?. <br></br>
So what could be wrong?.
          </p>

 <p className="text-lg md:text-2xl font-semibold mb-8 text-accent">
The truth is, there are hidden threats you never paid attention to,<br></br><br></br>
You're probably paying the price for overlooking these threats.
          </p>

<br></br>

These are threats you failed to ignore just because you're in dire need of fast and complete solution.

As a result, you keep testing out medication after medication like you have nothing to lose,

But deep down, you could tell how your health has been exposed to more attacks that create panic, palpitations, anxiety and other risks you never had at first.

<br></br><br></br>

Look, this is expected when you only see those fickle signs of hope, those illusional recovery,

Thinking they won't fade away as you move closer to the exit door of that hellish ulcer,
Thinking those positive signs are finally here to stay, when in reality,

They're only signs that the natural strength in you has been silently stolen away.
Signs that your muscles are slowly being torn apart.
Signs that your memory now loses count of things that are simple to remember.
<br></br><br></br>

Signs that show how every single attack has crumbled your immune system, 

Making it become (more) weak, fragile, and vulnerable to even the smallest threat.

You'd even try some supplements but won't be enough to replenish that prime energy, that in-built vitality God has given you. 

Honestly, looking out for solutions is not entirely a bad thing.

Because as the saying goes, “if you hide your problem, your problem will hide you”.
<br></br><br></br>

Meanwhile, it's heartbreaking when you look back at those recommendations you've tried in the past,

And realise they have not only suck from your hard earned money, your prime energy or your time… 

But also left you with more pains than they met you.

You can name them. Pharma drugs, garlic, ginger and honey, honey and grinded avocado seed

And even medications like aloe vera, carrots, fermented pawpaw, unripe plantain, while some will say cabbage juice.



To be honest, it's not because they do not work at all.

But because people only gave them out without mentioning the dark sides of these medications. 

As in, you've not also been told that;

They're generally known as contrary solutions.

These are solutions that only worked for some people and not for others.

          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="./ulcer1.jpg" 
                  alt="Stomach Pain" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="w-full">
             
              <p className="text-lg mb-6 leading-relaxed">
              
              </p>
              <p className="text-lg mb-8 leading-relaxed font-semibold text-accent">
                Truth is, many of these are "contrary solutions." They only offer momentary relief while quietly slowing healing and leaving deeper scars inside.
              </p>
              <p className="text-lg mb-8 leading-relaxed font-semibold text-accent">
                
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                That's why your ulcer keeps reappearing…
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">💢</span>
                  <p className="text-lg">That sharp invisible pain in your chest.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">💓</span>
                  <p className="text-lg">That fast heartbeat that mimics a panic attack.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🌙</span>
                  <p className="text-lg">Those sleepless nights where breathing feels like a struggle.</p>
                </div>
              </div>

              <p className="text-lg mb-8 leading-relaxed">
                What's worse? You start to lose your natural strength. Your muscles weaken. Your memory slips. And those "side effects" become a new battle on their own.
              </p>

              <p className="text-xl font-semibold text-accent mb-8 p-6 bg-white rounded-lg border-l-4 border-accent">
                It's not your fault. You've been trying to survive. But now, it's time to heal — completely.
              </p>

              <Link to="/product">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  🔘 See What Makes Our Formula Different →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A Message of Hope Section */}
      <section className="w-full py-20 bg-muted/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent">
                A Message of Hope
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Think back to when your ulcer first began — how the pain was smaller, limited to your stomach.
                Now, it spreads like wildfire: chest, throat, back, even your head.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                It's as if your body is crying out, "Enough!"
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                And it's right. You weren't created to live on medication forever.
              </p>

              <p className="text-lg mb-8 leading-relaxed font-semibold text-accent">
                This is where the Halal Herbal Ulcer Cure Powder changes the story.
              </p>

              <p className="text-lg mb-8 leading-relaxed">
                Unlike drugs that only silence symptoms, this blend penetrates deep, slicing through the real culprits (like H. pylori bacteria), healing the wound from the root, and protecting your stomach lining from further attack.
              </p>

              <Link to="/product">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  🛒 Yes, I'm Ready to Be Completely Healed
                </Button>
              </Link>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="/ulcer2.jpg" 
                  alt="Healing and Wellness" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-accent/10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-accent">
            Testimonial Highlights
          </h2>
          <p className="text-center text-2xl md:text-md font-bold text-muted-foreground mb-12">
            Real stories from real people who've been healed
          </p>
           <p className="text-center text-2xl md:text-md font-bold text-muted-foreground mb-12">
            Over 80 Nigerians have reclaimed their health and freedom from ulcer using our Ulcer Cure Powder. Here are some highlights from their journeys:
          </p>
           <p className="text-center text-lg md:text-md font-bold text-muted-foreground mb-12">
            


          </p>

          <div className="w-full mb-12 h-96">
            <Carousel items={testimonialImages} height="h-96" />
          </div>

          <div className="text-center">
            <Link to="/product">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🔘 Join the 80+ Nigerians Who Are Now Ulcer-Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-accent to-accent/90">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            You've suffered long enough
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Pain, anxiety, sleepless nights — you can end it today.
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-12 text-white">
            The Ulcer Cure Powder costs just ₦9,000 — not ₦25,000 or ₦15,000 — yet it delivers root-level healing and restores your energy naturally.
          </p>
          <p className="text-2xl font-bold mb-12 text-white">
            Stop managing the pain. Start curing it.
          </p>

          <Link to="/product">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-accent px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🛒 Yes, I'm Ready to Be Completely Healed
            </Button>
          </Link>
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
                aria-label="Close modal"
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
