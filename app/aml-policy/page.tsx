import { EnLayout } from '@/components/EnLayout';
import { LegalShell } from '@/components/LegalShell';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: 'AML & KYC Policy | Pocket Option',
  description: 'Read the Pocket Option Anti-Money Laundering (AML) and Know Your Customer (KYC) Policy. Learn how we prevent financial crime and verify client identities.',
  ...buildSeoMeta('en', 'aml-policy'),
};

type Section = { num: string; title: string; paragraphs: string[]; bullets?: string[] };

const sections: Section[] = [
  {
    num: '1',
    title: 'Policy Statement',
    paragraphs: [
      'It is the policy of pocketoption.com and its affiliates (hereinafter "The Company") to prohibit and actively pursue the prevention of money laundering and any activity that facilitates money laundering or the funding of terrorist or criminal activities.',
      'The Company requires its officers, employees, and affiliates to adhere to these standards in preventing the use of its products and services for money laundering purposes. Compliance with this policy is mandatory for all personnel across all functions and levels of the organization.',
    ],
  },
  {
    num: '2',
    title: 'Definition of Money Laundering',
    paragraphs: [
      'Within this Policy, money laundering is generally defined as engaging in acts designed to conceal or disguise the true origins of criminally derived proceeds so that the unlawful proceeds appear to have been derived from legitimate origins or constitute legitimate assets.',
      'Generally, money laundering occurs in three stages: At the "placement" stage, cash generated from criminal activities is converted into monetary instruments — such as money orders or traveler\'s checks — or deposited into accounts at financial institutions. At the "layering" stage, the funds are transferred or moved into other accounts or financial institutions to further separate the money from its criminal origin. At the "integration" stage, the funds are reintroduced into the economy and used to purchase legitimate assets or to fund other criminal activities or legitimate businesses.',
      'Terrorist financing may not involve the proceeds of criminal conduct, but rather an attempt to conceal the origin or intended use of funds, which will later be used for criminal purposes.',
    ],
  },
  {
    num: '3',
    title: 'Employee Responsibilities',
    paragraphs: [
      'Each employee of The Company whose duties are associated with the provision of products and services and who directly or indirectly deals with clients is expected to know the requirements of the applicable laws and regulations that affect their job responsibilities.',
      'It shall be the affirmative duty of each such employee to carry out their responsibilities at all times in a manner that complies with the requirements of the relevant laws and regulations. Ignorance of applicable laws and regulations will not be accepted as justification for non-compliance.',
    ],
  },
  {
    num: '4',
    title: 'Applicable Laws & Regulations',
    paragraphs: [
      'The applicable laws and regulations include, but are not limited to, the following international frameworks and standards:',
    ],
    bullets: [
      '"Customer Due Diligence for Banks" (2001) and "General Guide to Account Opening and Customer Identification" (2003) of the Basel Committee on Banking Supervision',
      'The Forty + Nine Recommendations for Money Laundering of the Financial Action Task Force (FATF)',
      'USA PATRIOT Act (2001)',
      'Prevention and Suppression of Money Laundering Activities Law (1996)',
    ],
  },
  {
    num: '5',
    title: 'Affiliate Compliance & Record Keeping',
    paragraphs: [
      'Each of the affiliates of The Company is required to comply with AML and KYC policies in their respective jurisdictions. All affiliates must implement appropriate internal controls and procedures consistent with this Policy.',
      'All identification documentation and service records shall be kept for the minimum period of time required by local law. These records must be made available to relevant regulatory authorities upon request.',
    ],
  },
  {
    num: '6',
    title: 'Employee Training',
    paragraphs: [
      'All new employees shall receive anti-money laundering training as part of the mandatory new-hire training program. This training is designed to ensure all staff understand their obligations under applicable AML and KYC regulations.',
      'All applicable employees are required to complete AML and KYC training annually. Participation in additional targeted training programs is required for all employees with day-to-day AML and KYC responsibilities.',
    ],
  },
  {
    num: '7',
    title: 'Client Verification (KYC)',
    paragraphs: [
      'The Company has the right to request from the Client confirmation of registration information at its discretion and at any time. In order to verify the data, the Company may request from the Client notarized copies of: passport, driver\'s license, or national identity card; bank account statements or utility bills to confirm the residence address. In some cases, the Company may ask the Client to provide a photograph holding their identity document close to their face.',
      'The verification procedure is not mandatory unless the Client has received such a request from the Company. However, the Client may voluntarily submit a copy of their passport or other identity document to the Company\'s client support department. The Client must take into account that when depositing or withdrawing funds via bank transfer, full verification of name and address is required.',
    ],
  },
  {
    num: '8',
    title: 'Data Changes & Document Authenticity',
    paragraphs: [
      'If any Client registration data — including full name, address, or phone number — has changed, the Client is obligated to immediately notify the Company\'s client support department of these changes and request that the data be updated, or to make the changes directly in the Client Profile.',
      'To change the phone number on a Client Profile, the Client must provide a document confirming ownership of the new phone number (such as an agreement with a mobile phone service provider) along with a photo of a government-issued ID held close to the Client\'s face. The Client\'s personal data must be consistent across both documents.',
      'The Client is responsible for the authenticity of all submitted documents and their copies, and recognizes the right of the Company to contact the appropriate issuing authorities to validate their authenticity.',
    ],
  },
];

export default function AMLPolicy() {
  return (
    <EnLayout>
      <LegalShell
        lang="en"
        breadcrumbHome="Home"
        breadcrumbPage="AML & KYC Policy"
        title={<>Anti-Money Laundering (AML) &amp;<br />Know Your Customer (KYC) Policy</>}
        updated="Last updated: March 17, 2026"
        tocItems={sections.map(s => ({ num: s.num, title: s.title }))}
      >
        {sections.map(s => (
          <div key={s.num} id={`section-${s.num}`} className="legal-card">
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0D1B2A', marginBottom: 24, fontFamily: "'Montserrat', sans-serif", display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, #0099FA, #0070e0)', color: '#fff', fontSize: 17, fontWeight: 800, flexShrink: 0 }}>{s.num}</span>
              {s.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {s.paragraphs.map((p, i) => (
                <p key={i} style={{ margin: 0, fontSize: 16, color: '#4A5E78', lineHeight: 1.9 }}>{p}</p>
              ))}
              {s.bullets && (
                <ul style={{ margin: '4px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {s.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 14, fontSize: 16, color: '#4A5E78', lineHeight: 1.75 }}>
                      <span style={{ flexShrink: 0, width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(135deg, #0099FA, #0070e0)', marginTop: 10, display: 'block' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </LegalShell>
    </EnLayout>
  );
}
