import { EnLayout } from '@/components/EnLayout';
import { LegalShell } from '@/components/LegalShell';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: 'Payment Policy | Pocket Option',
  description: 'Read the Pocket Option Payment Policy. Learn about deposits, withdrawals, processing times, verification requirements, and one-click payment terms.',
  ...buildSeoMeta('en', 'payment-policy'),
};

const sections = [
  {
    num: '1',
    title: 'General Financial Responsibility',
    items: [
      'The Company is financially responsible for the client\'s account balance at any particular moment.',
      'The Company\'s financial responsibility starts with the first record of a customer\'s deposit and continues up to a full withdrawal of funds.',
      'The client has the right to demand from the Company any amount of funds which is available in his/her account at the time of the enquiry.',
      'The only official methods of deposits and withdrawals are the methods which appear on the Company\'s official website. The client assumes all the risks related to the usage of these payment methods since the payment methods are not the Company\'s partners and not the Company\'s responsibility. The Company is not responsible for any delay or cancellation of a transaction caused by the payment method.',
      'The Company does not assume any responsibility for the activity of any third-party service providers which the customer may use to make a deposit or withdrawal. The Company\'s financial responsibility for the client\'s funds starts when the funds have been loaded to the Company\'s bank account or any other account related to the payment methods on the Company\'s website. In case any fraud is detected during or after a financial transaction, the Company reserves the right to cancel such a transaction and freeze the client\'s account.',
      'In case of any technical mistakes related to financial transactions, the Company reserves the right to cancel such transactions and their results.',
      'The client may have only one registered account on the Company\'s website. In case the Company detects any duplication of the customer\'s accounts, the Company reserves the right to freeze the customer\'s accounts and funds without the right of withdrawal.',
    ],
  },
  {
    num: '2',
    title: 'Client Registration & Verification',
    items: [
      'Client registration is based on two main steps: (1) Client\'s web registration, and (2) Client\'s identity verification. To complete registration, the client must provide the Company with their real identity and contact details and accept the Company\'s agreements and their appendices.',
      'The Company carries out an identity and data verification procedure to confirm the correctness and completeness of data specified by the Client during registration. To carry out this procedure, the Company is obliged to require — and the Client is obliged to provide — a scan or digital photo of their identification document, including a full copy of all pages of the ID document showing the photo and personal details.',
      'The Company reserves the right to demand from the client any other documents, such as payment bills, bank confirmation, bank card scans, or any other document that may be necessary during the identification process. The identification process must be completed within 10 business days of the Company\'s request. In some cases the Company may extend the identification period up to 30 working days.',
    ],
  },
  {
    num: '3',
    title: 'Deposits',
    items: [
      'To make a deposit, the client shall submit an inquiry through their Personal Cabinet. To complete the inquiry, the client must choose any of the payment methods from the list, fill in all the necessary details, and proceed with the payment.',
      'Any transactions made by the Client must be executed through a payment source belonging exclusively to the Client, who carries out the payment using their own funds. The Company is not responsible for any delay or cancellation of a deposit transaction caused by the payment provider.',
      'The Company\'s financial responsibility for the client\'s funds begins only when the funds have been successfully loaded to the Company\'s bank account or any other account related to the payment methods listed on the Company\'s website.',
    ],
  },
  {
    num: '4',
    title: 'Withdrawal Processing',
    items: [
      'Withdrawal request processing time depends on the payment method and may vary from one method to another. The Company cannot regulate the processing time of third-party payment providers.',
      'In case of using electronic payment methods, the transaction time can vary from seconds to days. In case of using direct bank wire transfer, the transaction time can range from 3 up to 45 business days.',
      'The withdrawal, refund, compensation, and other payments carried out from the Client\'s account can only be made using the same account — bank or payment card — that was used to deposit the funds. Withdrawal from the Account may be carried out only in the same currency in which the corresponding deposit was made.',
      'The Company is not a tax agent and does not provide the clients\' financial information to any third parties. This information can only be provided in case of an official demand from government agencies.',
    ],
  },
  {
    num: '5',
    title: 'Withdrawal Regulations',
    items: [
      'At any time a Client can withdraw a part or all funds from their Account by sending the Company a Request for Withdrawal. The Company will execute the withdrawal order, which will be limited by the remaining balance of the Client\'s Account at the time of order execution. If the amount withdrawn exceeds the account balance, the Company may reject the order after explaining the reason for rejection.',
      'The Client\'s order to withdraw money must comply with the requirements and restrictions set forth by current legislation and other applicable regulations in the jurisdiction where such transaction is made.',
      'Funds from the Client\'s Account must be withdrawn to the same payment system with the same wallet/account ID that was previously used by the Client to deposit funds. The Company may limit the withdrawal amount to a payment system proportionally to the deposits received from that system.',
      'A Request for Withdrawal is executed by transferring the funds to the Client\'s External Account by an Agent authorized by the Company.',
      'The Client shall make a Request for Withdrawal in the currency of the deposit. If the deposit currency differs from the transfer currency, the Company will convert the transfer amount at the exchange rate established by the Company at the time the funds are debited from the Client\'s Account.',
      'The conversion rate, commission, and other expenses related to each withdrawal method are set by the Company and may be changed at any time at the Company\'s sole discretion.',
      'The Company reserves the right to set minimum and maximum withdrawal amounts depending on the withdrawal method. These restrictions will be displayed in the Client\'s Dashboard.',
      'The funds will be withdrawn from the Client\'s account within five (5) business days. If the funds have not arrived in the Client\'s External Account after five (5) business days, the Client may ask the Company to investigate the transfer.',
      'If the Client has made an error in the payment information when drawing up a Request for Withdrawal that resulted in a failure to transfer money, the Client will be responsible for covering the commission for resolving the situation.',
      'The Client\'s profit in excess of the funds deposited may be transferred to the Client\'s External Account only by a method agreed upon by the Company and the Client.',
    ],
  },
  {
    num: '6',
    title: 'Bank Wire & Electronic Transfers',
    items: [
      'Bank wire withdrawals: The Client may send a Request for Withdrawal by bank wire transfer at any time if the Company accepts this method at the time of funds transfer. The Client may make a Request for Withdrawal only to a bank account opened in their name. The Company will not accept or execute orders to transfer money to a bank account of a third party. The Client understands and agrees that the Company assumes no liability for the time a bank transfer takes.',
      'Electronic transfers: The Client may send a Request for Withdrawal by electronic transfer at any time if the Company uses this method when the transfer is made. The Client may make a Request for Withdrawal only to their personal electronic payment system wallet. The Company must send money to the Client\'s electronic account in accordance with the information in the Request for Withdrawal.',
      'The Client understands and acknowledges that the Company is not responsible for the time an electronic transfer takes or for circumstances resulting in a technical failure during the transfer if they occurred through no fault of the Company. The Company may, at its discretion, offer the Client other methods for withdrawing money, which will be posted in the Dashboard.',
    ],
  },
  {
    num: '7',
    title: 'One-Click Payment Service',
    items: [
      'By completing the payment form with your bank card information, selecting the "Save the card" option, and clicking the payment confirmation button, you provide your full consent to the rules of the One-Click Payment service (recurring payments). You authorize the payment service provider to automatically debit funds from your bank card to replenish your account balance without requiring you to re-enter your card details.',
      'You acknowledge and agree that a confirmation of your use of the One-Click Payment service will be sent to your email within two (2) business days.',
      'By using the One-Click Payment service, you agree to cover all costs associated with this service, including any additional expenses such as taxes, duties, and other fees.',
      'By using the One-Click Payment service, you confirm that you are the rightful owner or authorized user of the bank card used for this service. You also agree not to dispute any payments made from your bank card to the Company for replenishing your account balance.',
      'You assume full responsibility for all payments made to replenish your account balance with the Company. The Company and/or the payment service provider will process payments only for the amount specified by you and are not responsible for any additional amounts you may incur.',
      'Once the payment confirmation button is clicked, the payment is considered processed and irrevocable. By clicking the payment confirmation button, you agree that you cannot rescind the payment or request a refund.',
      'You confirm that the One-Click Payment service will remain active until you cancel it. To deactivate the One-Click Payment service, you can do so by accessing the Dashboard and removing your bank card information from the list of saved cards.',
      'The payment service provider is not responsible for any refusal or inability to process your payment card information, including situations where the issuing bank declines authorization. The payment service provider is also not liable for the quality or scope of the Company\'s services.',
    ],
  },
];

export default function PaymentPolicy() {
  return (
    <EnLayout>
      <LegalShell
        lang="en"
        breadcrumbHome="Home"
        breadcrumbPage="Payment Policy"
        title="Payment Policy"
        updated="Last updated: March 17, 2026"
        tocItems={sections.map(s => ({ num: s.num, title: s.title }))}
      >
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
