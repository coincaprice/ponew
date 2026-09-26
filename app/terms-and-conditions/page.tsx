import { EnLayout } from '@/components/EnLayout';
import { LegalShell } from '@/components/LegalShell';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: 'Terms and Conditions | Pocket Option',
  description: 'Read the Pocket Option Terms and Conditions. Learn the rules governing the use of our trading platform, accounts, deposits, withdrawals, and dispute resolution.',
  ...buildSeoMeta('en', 'terms-and-conditions'),
};

const definitions = [
  { term: 'Client\'s Profile', def: 'A workspace created in the web-interface, used by the Client for Trading and Non-Trading Operations and for entering personal information.' },
  { term: 'Client', def: 'Any person over 18 years of age, using the services of the Company in accordance with this Agreement.' },
  { term: 'Company', def: 'A legal entity referred to as "Pocket Option", which provides, in accordance with the provisions of this Agreement, the conduct of arbitrage operations for the purchase and sale of CFD contracts.' },
  { term: 'Non-Trading Operation', def: 'Any operation related to top-up of the Client\'s Trading Account with necessary funds or withdrawal of funds from the Client\'s Trading Account.' },
  { term: 'Client Data', def: 'A set of personal data about the Client, provided by the Client during registration and verification process within the Client\'s Profile, and stored on the Company\'s server.' },
  { term: 'Client\'s Trading Account', def: 'A specialized account on the Company\'s server that enables the Client to conduct Trading Operations.' },
  { term: 'Trading Operation', def: 'An arbitration operation for the purchase and sale of trade contracts performed by the Client via the Trading Terminal available in the Client\'s Profile.' },
  { term: 'Company\'s Trading Server', def: 'A server owned by the Company with specialized software installed on it, which serves for conducting Trading and Non-Trading Operations and tracking the statistics of these operations.' },
  { term: 'Trading Terminal', def: 'A specialized interface located in the Client\'s Profile, connected to the Company\'s Trading Server and used by the Client to conduct Trading Operations.' },
];

const sections = [
  {
    num: '1',
    title: 'General Provisions',
    items: [
      'The service provided by the Company is an Internet service that uses the official website of the Company to conduct Trading Operations. The use of the service implies the availability of a sustainable high-speed Internet connection on the Client\'s side.',
      'In its activities, the Company is guided by existing Legislation on anti-money laundering and terrorist financing. The Company requires the Client to correctly enter personal data, and reserves the right to verify the Client\'s identity using the following methods: upload scanned copies of documents confirming the Client\'s identity and actual place of residence to the Client\'s Profile; a phone call to the Client at the specified phone number; or other means necessary at the discretion of the Company.',
      'A Client, regardless of legal status (legal or natural person), is prohibited from having more than one Client\'s Profile. The Company reserves the right to terminate this Agreement or reset the results of Trading Operations in the event of re-registration of the Client or in the case of multiple Trading Accounts being used by the same Client.',
      'The Client\'s Profile is registered in the secured space of the Company on its official website. The Company guarantees confidentiality of the Client\'s personal data in accordance with the provisions of the Confidentiality section of this Agreement.',
      'The Client is responsible for the safety of authentication data received from the Company. In case of loss of access to the Client\'s Profile, the Client must immediately notify the Company in order to block access to the funds in the Client\'s Trading Account.',
      'The Company carries quoting of the Client using its own paid sources of quotations, applying processing of the quote flow in accordance with the needs of ensuring the liquidity of contracts opened by Clients. Quotes of any other companies, and/or quotes taken from other paid sources, cannot be taken into account when considering disputes.',
      'The Client is prohibited from resorting to any type of fraudulent activity that may be considered by the Company as actions aimed at gaining profit using operations not instructed by the Company, vulnerabilities in the official website(s), bonus speculation, and abusive trading, including but not limited to hedging transactions from different accounts, speculation on assets with troubled liquidity, etc. In this case, the Company reserves the right to terminate this Agreement or to reset the results of Trading Operations.',
      'The Company reserves the right to terminate this Agreement or to suspend any communication with the Client in cases of detecting an unfair attitude towards the Company as a whole and to the products and services provided, including (but not limited to) insulting employees and partners of the Company, slandering, publishing unreliable information about the Company, negative reviews, or attempted blackmail or extortion.',
      'The Client shall ensure that their activities fully comply with the legislation of the country where they are conducted. The Client acknowledges and accepts responsibility for the payment of all taxes and fees which may arise from the performance of Trading Operations.',
      'The Company agrees to provide services subject to the Client not being a citizen or permanent resident of the countries specified in the "Restricted Countries" section of this Agreement. The Company reserves the right to limit the availability of offered services in these countries.',
    ],
  },
  {
    num: '2',
    title: 'Procedure of Non-Trading Operations',
    items: [
      'Non-Trading Operations include operations performed by the Client to deposit funds into the Client\'s Trading Account as well as withdraw funds from it.',
      'Non-Trading Operations are performed by the Client with the help of the Client\'s Profile functionality. The Company does not carry out Non-Trading Operations requested using conventional means of communication (email, live chat, etc.).',
      'While performing Non-Trading Operations, the Client is only allowed to use personal funds held in electronic and bank payment accounts owned by the Client.',
      'The Client independently selects the currency of their Trading Account from the available list of options. The balance of funds in the Client\'s Trading Account is displayed in the selected currency.',
      'In case of currency conversion, the Company uses exchange rate in accordance with the quotes received from supported electronic payment providers at the time of the Non-Trading Operation.',
      'The Company sets the following minimum amounts for Non-Trading Operations (unless specified otherwise): Deposit — 0.1 USD; Withdrawal — 10 USD.',
      'If the Client uses different methods for a deposit top-up, the withdrawal of funds to these methods will be carried out in the same proportion in which the deposit was made.',
      'If the Client uses bank cards to replenish the Trading Account, the Client guarantees that they use only personal funds and agrees that the Company can save the bank card payment details in order to implement the quick top-up feature.',
      'In order to ensure compliance with generally accepted Legislative standards, as well as to protect Client funds, the withdrawal of funds shall be performed using the same payment method that was previously used for depositing.',
      'The Company does not allow the use of provided services as a means to extract profits from Non-Trading Operations, or in any way other than the intended purpose.',
    ],
  },
  {
    num: '3',
    title: 'Procedure of Trading Operations',
    items: [
      'Trading Operations include arbitrage operations for sale and purchase of trade contracts with the trading instruments provided by the Company. These operations are executed via the Trading Terminal. The processing of all Client\'s Trading Operations is carried out by the Company\'s Trading Server.',
      'The Company provides quotes in the Trading Terminal using Market Execution methodology — the price that exists at the time of the Client\'s request processing in the queue of the Company\'s Trading Server.',
      'The maximum deviation of the price indicated in the Client\'s Trading Terminal from the price existing on the Company\'s Trading Server does not exceed the value of two average spreads for the given trading instrument in periods corresponding to the average volatility of that instrument.',
      'The Company reserves the right to refuse the Client\'s Trading Operation if, at the moment of placing a contract request, the Company does not have enough liquidity in the chosen trading instrument by the time the contract expires.',
      'The amount of funds paid to the Client in the event of a positive outcome of a trade contract is determined by the Company as a percentage of the amount of collateral at the time of execution of the trade contract using the corresponding interface element of the Trading Terminal.',
      'The Client has the possibility to keep any number of simultaneously opened Trading Operations for any expiration date of any class of trade contracts available. The total volume of all newly opened Trading Operations cannot exceed the amount of the Client\'s Trading Account balance.',
      'Under normal market conditions, a Client\'s request is typically processed within 0–4 seconds. Under abnormal market conditions the processing time may be increased.',
      'For a "Call" type contract: if the closing price exceeds the opening price, the contract is considered executed and profit is credited to the Client\'s Trading Account. If the closing price is less than the opening price, the contract is unfulfilled and the margin amount is debited.',
      'For a "Put" type contract: if the closing price is less than the opening price, the contract is considered executed and profit is credited to the Client\'s Trading Account. If the closing price is more than the opening price, the contract is unfulfilled and the margin amount is debited.',
      'If the closing price of a contract equals its opening price, the contract is considered unexecuted and the previously fixed margin amount is returned to the Client\'s Trading Account without loss.',
    ],
  },
  {
    num: '4',
    title: 'Bonuses and Promotions',
    items: [
      'The Company has the right to provide the Client with a bonus on the Client\'s Trading Account. The bonus amount and conditions are determined by the Company at its sole discretion.',
      'The Client is prohibited from withdrawing a bonus until the required trading turnover is achieved. The required trading turnover is calculated based on the terms of the specific bonus offer communicated to the Client.',
      'The Company reserves the right to cancel, modify, or withdraw any bonus or promotional offer at any time without prior notice.',
      'Abuse of bonus programs, including creating multiple accounts to receive multiple bonuses, engaging in hedging strategies to lock in bonuses, or any other manipulative behavior, will result in immediate termination of the Agreement and forfeiture of all funds, including the bonus amount.',
      'Social trading bonuses and copying bonuses are subject to the same restrictions as standard deposit bonuses unless otherwise specifically stated in the promotional terms.',
    ],
  },
  {
    num: '5',
    title: 'Dispute Resolution',
    items: [
      'A dispute is any disagreement between the Company and the Client arising in connection with the execution of a Trading or Non-Trading Operation, or arising from other circumstances related to this Agreement.',
      'To resolve a dispute, the Client must submit a complaint to the Company\'s Customer Support within 5 business days of the disputed event. Complaints submitted after this deadline may not be considered.',
      'When considering a dispute, the Company uses data from the Company\'s Trading Server as the primary source of truth. Data from the Client\'s Trading Terminal may be used as supplementary evidence only.',
      'The Company will review and respond to a Client\'s complaint within a reasonable time period. During the consideration of a complaint, the Company may temporarily restrict the Client\'s access to Non-Trading Operations.',
      'If a technical failure of the Trading Server or Trading Terminal affected the outcome of a Trading Operation, the Company has the right to cancel the results of the affected operation and restore the previously fixed margin amount to the Client\'s Trading Account.',
      'Decisions made by the Company in disputes are final. Failure to comply with a Company decision may result in termination of the Agreement.',
    ],
  },
  {
    num: '6',
    title: 'Confidentiality',
    items: [
      'The Company guarantees non-disclosure of the Client\'s personal data to third parties, except in cases where the disclosure is required by applicable law or at the Client\'s direct request.',
      'The Company collects, stores, and processes Client Data for the purpose of providing the services outlined in this Agreement, complying with legal obligations, and preventing fraud and money laundering.',
      'The Client consents to the Company processing their personal data, including sharing it with payment processors, identity verification providers, and regulatory authorities as required by law.',
      'The Company employs industry-standard security measures to protect Client Data from unauthorized access, alteration, disclosure, or destruction.',
      'The Company may use the Client\'s email address and other contact details to send information about products, services, promotions, and platform updates. The Client may opt out of marketing communications at any time.',
    ],
  },
  {
    num: '7',
    title: 'Limitation of Liability and Risk Disclosure',
    items: [
      'Trading in financial instruments involves significant risk of loss. The Client acknowledges that they fully understand the risks associated with trading and accepts responsibility for any financial losses incurred.',
      'The Company shall not be liable for losses arising from: market volatility and adverse trading conditions; system outages, technical failures, or disruptions to the internet or communications networks; force majeure events beyond the Company\'s reasonable control; unauthorized access to the Client\'s account by third parties.',
      'The Company does not guarantee the accuracy, completeness, or timeliness of market data or pricing information displayed in the Trading Terminal. Minor discrepancies in data may occur due to technical reasons.',
      'The Client acknowledges that past trading results do not guarantee future performance and that the outcome of each trade is uncertain at the time of opening.',
      'The Company\'s total liability to the Client for any claim shall not exceed the balance of the Client\'s Trading Account at the time the claim arises.',
    ],
  },
  {
    num: '8',
    title: 'Restricted Countries',
    items: [
      'The Company does not provide services to residents or citizens of the following countries and territories: United States of America (USA), Canada, Australia, United Kingdom (UK), European Economic Area (EEA) member states, Israel, Japan, Brazil, Philippines, and any other jurisdictions where the provision of such services is prohibited by applicable law.',
      'The Client represents and warrants that they are not a resident or citizen of any of the restricted countries listed above. If the Company determines that the Client is a resident or citizen of a restricted jurisdiction, the Company reserves the right to immediately terminate the Agreement and freeze the Client\'s Trading Account pending compliance review.',
      'The Company reserves the right to update the list of restricted countries at any time in accordance with changes in applicable law or Company policy. Clients affected by any such changes will be notified and given a reasonable opportunity to withdraw their available funds.',
      'Use of VPNs, proxies, or other means to circumvent geographic restrictions is strictly prohibited and constitutes a breach of this Agreement, which may result in termination and forfeiture of funds.',
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <EnLayout>
      <LegalShell
        lang="en"
        breadcrumbHome="Home"
        breadcrumbPage="Terms and Conditions"
        title="Public Offer Agreement"
        updated="Last updated: March 17, 2026"
        tocItems={[
          { num: 'def', title: 'Terms & Definitions', href: '#definitions' },
          ...sections.map(s => ({ num: s.num, title: s.title })),
        ]}
      >
        {/* Preamble */}
        <div className="legal-card">
          <div style={{ borderLeft: '4px solid #0099FA', paddingLeft: 24, color: '#4A5E78', fontSize: 17, lineHeight: 1.9 }}>
            The Client automatically affirms the full acceptance of this Agreement by registering a Client&apos;s Profile at the Company&apos;s website. The Agreement remains valid until it is terminated by either party in accordance with the provisions set forth herein.
          </div>
        </div>

        {/* Definitions */}
        <div id="definitions" className="legal-card">
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0D1B2A', marginBottom: 28, fontFamily: "'Montserrat', sans-serif" }}>Terms and Definitions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {definitions.map((d, i) => (
              <div key={d.term} className="legal-def-row" style={{ borderBottom: i < definitions.length - 1 ? '1px solid #F0F4F8' : 'none' }}>
                <div style={{ fontWeight: 700, color: '#0D1B2A', fontSize: 16 }}>{d.term}</div>
                <div style={{ color: '#4A5E78', fontSize: 16, lineHeight: 1.85 }}>{d.def}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Numbered sections */}
        {sections.map(s => (
          <div key={s.num} id={`section-${s.num}`} className="legal-card">
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0D1B2A', marginBottom: 28, fontFamily: "'Montserrat', sans-serif", display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, #0099FA, #0070e0)', color: '#fff', fontSize: 17, fontWeight: 800, flexShrink: 0 }}>{s.num}</span>
              {s.title}
            </h2>
            <ol style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 18, listStyle: 'none' }}>
              {s.items.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 16, fontSize: 16, color: '#4A5E78', lineHeight: 1.9 }}>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: '#F0F7FF', border: '1px solid #CBE4FF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#0099FA', marginTop: 2 }}>
                    {s.num}.{i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </LegalShell>
    </EnLayout>
  );
}
