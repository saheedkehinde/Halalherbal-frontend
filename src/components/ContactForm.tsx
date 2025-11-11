import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface ContactFormProps {
  onClose?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/meovjnkw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          location: '',
          message: '',
        });

        setTimeout(() => {
          onClose?.();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const whatsappLink = 'https://wa.link/nf56f9';
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="w-full">
      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-accent mb-4">Thank You!</h3>
          <p className="text-lg text-muted-foreground mb-4">
            Your enquiry has been received. We'll contact you shortly at {formData.phone}.
          </p>
          <p className="text-lg text-accent font-semibold">
            Check your WhatsApp or email for updates!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-accent mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-accent mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-accent mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your location"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-accent mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your inquiry"
              rows={5}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-accent hover:bg-accent/90 text-background font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Enquiry'
              )}
            </Button>
            <Button
              type="button"
              onClick={handleWhatsAppDirect}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold"
            >
              Chat on WhatsApp
            </Button>
          </div>

          {submitStatus === 'error' && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              Failed to send your enquiry. Please try again or contact us via WhatsApp.
            </div>
          )}
        </form>
      )}
    </div>
  );
};
