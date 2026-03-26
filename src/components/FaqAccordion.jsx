import { useState } from 'react';

export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-wrapper">
      <div className="faq-header">
        <span className="faq-title">常见问题</span>
      </div>
      <div className="faq-list">
        {items.map((item, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq-arrow">{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && (
              <div className="faq-answer">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
