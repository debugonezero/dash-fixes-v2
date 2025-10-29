'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

export default function MultiChannelChat() {
  const [isOpen, setIsOpen] = useState(false);

  // Contact information
  const phoneNumber = '16266220196'; // 626-622-0196
  const email = 'web@dashfixes.com';
  const whatsappMessage = 'Hi! I need help with a device repair quote.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:${phoneNumber}`;
  const emailUrl = `mailto:${email}?subject=Device Repair Quote&body=Hi! I need help with a device repair quote.`;

  const contactOptions = [
    {
      name: 'Live Chat',
      icon: MessageCircle,
      url: '#', // Will trigger live chat widget
      color: 'bg-solarized-blue hover:bg-solarized-blue/90',
      description: 'Instant chat for quotes (recommended)',
      external: false,
      action: 'livechat'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: whatsappUrl,
      color: 'bg-green-500 hover:bg-green-600',
      description: 'WhatsApp messaging',
      external: true
    },
    {
      name: 'Phone Support',
      icon: Phone,
      url: phoneUrl,
      color: 'bg-orange-500 hover:bg-orange-600',
      description: 'Direct support calls only',
      external: false
    },
    {
      name: 'Email',
      icon: Mail,
      url: emailUrl,
      color: 'bg-gray-500 hover:bg-gray-600',
      description: 'Send us a message',
      external: false
    }
  ];

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-solarized-blue hover:bg-solarized-blue/90 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Contact us - multiple options available"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Contact Options Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white dark:bg-solarized-dark2 rounded-lg shadow-xl border border-gray-200 dark:border-solarized-dark3 p-4 max-w-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-solarized-blue rounded-full flex items-center justify-center mr-3">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-solarized-dark3 dark:text-solarized-light">Dash Fixes</div>
              <div className="text-sm text-green-600">● Online</div>
            </div>
          </div>

          <p className="text-sm text-solarized-dark3 dark:text-solarized-light3 mb-4">
            Get a repair quote instantly:
          </p>

          <div className="space-y-3">
            {contactOptions.map((option) => {
              const IconComponent = option.icon;

              const handleClick = () => {
                setIsOpen(false);
                if (option.action === 'livechat') {
                  // Trigger live chat widget here
                  // This will be replaced with actual live chat integration
                  alert('Live chat will be integrated soon! For now, please use WhatsApp or email.');
                }
              };

              return (
                <button
                  key={option.name}
                  onClick={option.action === 'livechat' ? handleClick : undefined}
                  className={`flex items-center p-3 rounded-lg text-white transition-colors ${option.color} w-full text-left ${option.action !== 'livechat' ? 'cursor-pointer' : ''}`}
                >
                  {option.action !== 'livechat' ? (
                    <a
                      href={option.url}
                      target={option.external ? "_blank" : undefined}
                      rel={option.external ? "noopener noreferrer" : undefined}
                      className="flex items-center w-full"
                    >
                      <IconComponent className="w-5 h-5 mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{option.name}</div>
                        <div className="text-xs opacity-90">{option.description}</div>
                      </div>
                    </a>
                  ) : (
                    <>
                      <IconComponent className="w-5 h-5 mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{option.name}</div>
                        <div className="text-xs opacity-90">{option.description}</div>
                      </div>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-solarized-dark3">
            <p className="text-xs text-solarized-dark3 dark:text-solarized-light3 text-center">
              Live chat: Instant response • WhatsApp: ~5 min • Email: ~2 hours
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}