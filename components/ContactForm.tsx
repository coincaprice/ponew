'use client';

import { useState } from 'react';

interface Props {
  labels: {
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sent: string;
  };
}

export function ContactForm({ labels }: Props) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#0D1B2A' }}>{labels.sent}</h2>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {[
        { label: labels.name, type: 'text', placeholder: labels.name },
        { label: labels.email, type: 'email', placeholder: labels.email },
        { label: labels.subject, type: 'text', placeholder: labels.subject },
      ].map(field => (
        <div key={field.label}>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1A2B42', marginBottom: 8 }}>{field.label}</label>
          <input type={field.type} placeholder={field.placeholder} required style={{ width: '100%', height: 48, borderRadius: 8, border: '1px solid #C8D5E8', padding: '0 16px', fontSize: 16, color: '#0D1B2A', boxSizing: 'border-box' }} />
        </div>
      ))}
      <div>
        <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1A2B42', marginBottom: 8 }}>{labels.message}</label>
        <textarea placeholder={labels.message} required rows={5} style={{ width: '100%', borderRadius: 8, border: '1px solid #C8D5E8', padding: '12px 16px', fontSize: 16, color: '#0D1B2A', resize: 'vertical', boxSizing: 'border-box' }} />
      </div>
      <button type="submit" style={{ height: 52, borderRadius: 8, background: 'linear-gradient(to right, #0099FA, #0052cc)', color: '#fff', fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer' }}>{labels.send}</button>
    </form>
  );
}
