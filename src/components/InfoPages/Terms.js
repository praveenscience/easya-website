import React from "react";
import InfoPage from "../Shared/InfoPage/InfoPage";

const Terms = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <InfoPage Heading="Terms">
      <h2>Introduction</h2>
      <p>
      These Terms and Conditions (together with our Privacy Policy) apply to your use of:
      <br/>• The EasyA mobile app (App) and the EasyA website (Website), together Our Services; and
      <br/>• Any of the services accessible through the App (Services) that are available on the Website or other sites of ours (Services Sites).
      <br/><br/>
      Our Services are operated by EasyA Ltd (collectively referred to as EasyA, We, Us or Our in these terms).
      </p>
      
      <h3>Keeping account details safe</h3>
      <p>
      If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential. You must not disclose it to any third party.
      <br/>We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these terms and conditions.
      <br/>
      </p>
      
      <h3>Single-Person Use</h3>
      <p>
      One subscription to Our Services must only be used for one person. No sharing of accounts is permitted.
      </p>
      
      <h3>Cancellation</h3>
      <p>
      You may cancel your EasyA subscription at any time, and you will continue to have access to your EasyA membership until the end of your billing period. However, any payments already made are non-refundable. To ensure you are not charged for a new billing period, please remember to cancel your subscription at least 24 hours before it is renewed.
      </p>
      
      <h2>Responsibility for third party resources</h2>
      <p>
      Where Our Services contain links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them.
      <br/><br/>We have no control over the contents of those sites or resources.
      <br/>
      </p>
      
      <h2>Disclaimer of responsibility</h2>
      <p>
      Please note that we only provide our site for domestic and private use. You agree not to use Our Services for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity. We are not responsible for any losses caused by our negligence or breach of contract.
      </p>
      
      <h2>Misuse of Services</h2>
      <p>
      We do not guarantee that Our Services will be secure or free from bugs or viruses.
      <br/>You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.
      </p>

      <h2>Linking to Our Services</h2>
      <p>
      You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.

      <br/>You must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.

      <br/>You must not establish a link to our site in any website that is not owned by you.

      <br/>We reserve the right to withdraw linking permission without notice.
</p>

      <h2>Choice of law</h2>
      <p>
      These terms and conditions, their subject matter and their formation, are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction.</p>
      
      <h2>Changes to terms</h2>
      <p>
      We amend these terms from time to time.

      <br/>This version was last updated on 16 October 2019. It may change and if it does, these changes will be posted on this page. The new terms may be displayed on-screen and you may be required to read and accept the changes to continue your use of the App or the Services.</p>
    </InfoPage>
  );
};

export default Terms;
