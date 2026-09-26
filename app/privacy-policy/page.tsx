import { EnLayout } from '@/components/EnLayout';
import { LegalShell } from '@/components/LegalShell';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: 'Privacy Policy | Pocket Option',
  description: 'Read the Pocket Option Privacy Policy. Learn how we collect, use, and protect your personal data when you use our trading platform.',
  ...buildSeoMeta('en', 'privacy-policy'),
};

const sections = [
  {
    num: '1',
    title: 'Introduction',
    paragraphs: [
      'We recognize the importance of safeguarding your personal information and respecting your privacy. We understand that you value discretion and expect your data to be handled with care. That is why we are fully committed to protecting the privacy of every user of our services.',
      'This Privacy Policy describes how we collect, use, and disclose your personal information when you access or interact with our websites, applications, and any other digital platforms through which we deliver our services (collectively referred to as the "Services").',
      'This Policy forms an integral part of our Service Agreement and is incorporated into it by reference. We strongly encourage you to read this Privacy Policy thoroughly. By using our Services, you acknowledge and agree to the terms outlined in this Privacy Policy. Continued use of the Services following any updates constitutes your acceptance of the revised Policy.',
    ],
  },
  {
    num: '2',
    title: 'Data We Collect & How We Use It',
    paragraphs: [
      'We may collect, use, store and transfer different kinds of personal data about you and for different purposes. The main categories of data we process include: identity data (name, date of birth, government-issued ID), contact data (email address, phone number, residential address), financial data (payment details, transaction history, account balance), technical data (IP address, browser type, device identifiers, operating system), and usage data (pages visited, features used, trading activity).',
      'We process this data in compliance with applicable laws and regulations in order to: provide and maintain the trading platform; process transactions and send related confirmations; verify your identity and comply with legal obligations (KYC/AML); detect and prevent fraud, abuse, and security risks; analyze platform usage and improve our services; communicate important service updates and security alerts.',
      'Personal data is processed based on the following legal bases: performance of a contract (providing the Services you requested); compliance with legal obligations; legitimate business interests; and, where applicable, your explicit consent. Please note that applicable laws may require us to store certain data even after account termination or deletion.',
    ],
  },
  {
    num: '3',
    title: 'Leaderboard & Social Trading',
    paragraphs: [
      'By using the platform, you acknowledge and agree to participate in the leaderboard system and share your trading strategies and performance results. You grant us permission to display your personal data — including your name, experience points, and related statistics — as part of the leaderboard available on the platform.',
      'You also authorize us to generate trading signals based on your activities and to share generalized information derived from your trades. If you appear on the leaderboard, you agree that other users may view and replicate your successful trades. The data processed for this purpose is strictly limited to: username or display name, ROI metric (percentage of successful trades), experience level, and ranking position.',
      'Note: The actual monetary amount of your trades is never made public. Only the ROI metric — representing the percentage of successful trades relative to total trades — is used to determine your leaderboard placement.',
    ],
  },
  {
    num: '4',
    title: 'Cookies & Tracking Technologies',
    paragraphs: [
      'We, along with our trusted partners, use cookies and similar tracking technologies in connection with our services — including when you visit our website or access any part of our platform. A cookie is a small data file placed on your device while browsing a website. Cookies serve various useful purposes such as improving your browsing experience, enabling key features, remembering your preferences, and making your interaction with our Services faster and smoother.',
      'Our website uses the following categories of cookies: strictly necessary cookies (required for the platform to function); functional cookies (remember your preferences and settings); analytics cookies (understand how users interact with our Services); and advertising cookies (deliver relevant advertisements). Although cookies do not contain information that directly identifies you, we may link data collected through cookies to the personal information we store about you.',
      'You may instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some features of our Services may not function properly.',
    ],
  },
  {
    num: '5',
    title: 'Information Sharing & Disclosure',
    paragraphs: [
      'We do not rent, sell, or share your personal or corporate information with third parties, except as specifically described in this Privacy Policy. We may share your personal information with: subsidiaries or affiliated entities as part of normal business operations; reliable third-party service providers (payment processors, identity verification services, hosting providers, customer support tools); and professional advisors including lawyers and auditors.',
      'We may disclose your personal information if we have a good faith belief that disclosure is reasonably necessary to: comply with applicable law, regulation, or legal process; enforce our Terms and Conditions; protect the rights, property, or safety of Pocket Option, our users, or the public; detect, prevent, or address fraud, security, or technical issues.',
      'Any third party with whom we share your information is obligated to uphold standards of data protection equivalent to those outlined in this Privacy Policy and is prohibited from using your data for unauthorized purposes.',
    ],
  },
  {
    num: '6',
    title: 'Third-Party Links & Services',
    paragraphs: [
      'This Privacy Policy applies solely to the information we collect and manage directly. If you choose to share your information with third parties — for example, by clicking on a link to another website or application via our Services — please be aware that different privacy practices may apply.',
      'Third-party websites, apps, or services accessed through our platform may have their own privacy policies and terms of use. We strongly encourage you to review those documents carefully before disclosing any personal information or engaging with those services. The presence of a link to a third-party resource does not imply our endorsement or recommendation.',
      'We disclaim any responsibility or liability for the content, privacy practices, or data handling of external websites or services. This Privacy Policy does not extend to your activities on such external platforms.',
    ],
  },
  {
    num: '7',
    title: 'Analytics & Advertising',
    paragraphs: [
      'We use Google Analytics to better understand how users interact with our Services. Google Analytics collects anonymized data such as how often users visit our site, which pages they access, and other aggregated usage metrics. This tool collects your IP address on the date of your visit, but not your name or any personally identifiable information. We do not combine Google Analytics data with any information that could identify you personally.',
      'We may employ advertising technologies to deliver ads — including interest-based and targeted advertisements — when you access or use our Services. These technologies help tailor ad content to better align with your preferences and online behavior. We may also engage third-party advertising partners and share with them non-personal information to assist in measuring ad campaign performance and retargeting users.',
      'You have the option to opt out of many third-party advertising networks. Please note that opting out does not mean you will stop seeing ads altogether — but the ads you see may be less relevant to your interests.',
    ],
  },
  {
    num: '8',
    title: 'Your Rights & Data Management',
    paragraphs: [
      'You have the right to request the correction of inaccurate personal data at any time. You may also request the deletion of your personal data, excluding transaction history and other information we are legally required to retain. Requests can be submitted in free form and must include your full name and contact details for faster processing. We reserve the right to deny requests if we are not satisfied with your identity verification.',
      'By default, we delete personal data when it is no longer required for legitimate processing purposes or when storage is no longer necessary under applicable legal obligations. Unless instructed otherwise, we retain collected data for as long as needed to provide our Services and to fulfill legal obligations (up to 7 years), resolve disputes, and enforce our agreements.',
      'You may delete your account using the in-app interface or by sending a blank email with the subject "delete account". Please note that, even after deletion, we may retain certain data (such as transaction records) as required by law to prevent fraud and maintain platform security. To request account restoration, send a blank email with the subject "restore account". Some accounts may not be restorable depending on the reason for deletion or the time elapsed.',
    ],
  },
  {
    num: '9',
    title: 'Data Security',
    paragraphs: [
      'We implement industry-standard security measures to protect the integrity and confidentiality of your information. Our security practices include SSL/TLS encryption for all data in transit, encrypted storage for sensitive data, optional two-factor authentication, regular security audits, and strict access controls limiting data access to authorized personnel only.',
      'While we make every effort to secure our Services, no method of internet transmission or electronic storage is 100% secure. We cannot guarantee absolute protection against unauthorized access and disclaim liability for third-party misuse. If you believe your privacy has been compromised or our Services have been misused, please contact us immediately.',
    ],
  },
  {
    num: '10',
    title: 'Marketing Communications',
    paragraphs: [
      'We may use your personal information — such as your name, email address, and phone number — either directly or via authorized third-party partners to provide you with promotional materials related to our Services. You may opt out of receiving marketing communications at any time by sending a blank email with the word "remove" in the subject line.',
      'Upon receiving your request, we will remove your contact from our distribution lists. Please note that you may need to unsubscribe separately from any communications sent directly by our marketing partners. Even after unsubscribing, you may still receive essential service-related notifications such as security alerts and account updates.',
    ],
  },
  {
    num: '11',
    title: 'Policy Updates',
    paragraphs: [
      'We may update this Privacy Policy at our discretion. When we make material changes, we will notify you through the platform or via the email address associated with your account. The latest version will always be available on our website.',
      'We recommend reviewing this Policy regularly to stay informed about how your data is managed. Continued use of our Services after any changes to this Privacy Policy constitutes your acceptance of the updated terms.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <EnLayout>
      <LegalShell
        lang="en"
        breadcrumbHome="Home"
        breadcrumbPage="Privacy Policy"
        title="Privacy Policy"
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
            </div>
          </div>
        ))}
      </LegalShell>
    </EnLayout>
  );
}
