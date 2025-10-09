'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer_html: string;
}

interface FAQProps {
  items: FAQItem[];
  pageKey?: string;
}

export default function FAQ({ items, pageKey = 'default' }: FAQProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer_html,
      },
    })),
  };

  return (
    <div className="space-y-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div key={item.id} className="card overflow-hidden mx-2 md:mx-0">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus-visible"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <h3 className="font-semibold text-anthracite pr-3 md:pr-4 text-sm md:text-base leading-tight">
                {item.question}
              </h3>
              {isOpen ? (
                <ChevronUp className="w-4.5 h-4.5 md:w-5 md:h-5 text-or flex-shrink-0" />
              ) : (
                <ChevronDown className="w-4.5 h-4.5 md:w-5 md:h-5 text-or flex-shrink-0" />
              )}
            </button>
            
            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-4 md:px-6 pb-3 md:pb-4 text-gray-700 leading-relaxed animate-fade-in text-sm md:text-base"
              >
                <div dangerouslySetInnerHTML={{ __html: item.answer_html }} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}