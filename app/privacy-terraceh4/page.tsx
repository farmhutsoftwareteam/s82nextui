import React from 'react';
import Head from 'next/head';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Terrace H4</title>
      </Head>
      <div className="p-4">
        <h1 className="text-xl font-bold">Privacy Policy for Terrace H4</h1>
        <p>Last Updated: 4 December 2023</p>

        <h2 className="text-lg font-semibold mt-4">Introduction</h2>
        <p>Welcome to Terrace H4! Our commitment is to protect your privacy and ensure a positive experience while using our app. This Privacy Policy applies to the Terrace H4 app available on iOS and outlines our practices regarding the non-collection of personal information.</p>
        
        <h2 className="text-lg font-semibold mt-4">1. No Collection of Personal Information</h2>
        <p>Terrace H4 does not collect, store, or process any personal information from our users. As a user of Terrace H4, you can enjoy our services without concerns about your personal data being collected or used.</p>

        <h2 className="text-lg font-semibold mt-4">2. No Tracking or Analytics</h2>
        <p>Our app does not use any form of tracking or analytics tools. We do not monitor your app usage, and we do not analyze user behavior within the app.</p>

        <h2 className="text-lg font-semibold mt-4">3. No Third-Party Sharing</h2>
        <p>Since we do not collect any personal information, there is no data to share with third parties. Terrace H4 is committed to ensuring your privacy and will not engage in any form of data sharing.</p>

        <h2 className="text-lg font-semibold mt-4">4. Data Security</h2>
        <p>Even though Terrace H4 does not collect personal information, we still prioritize the security of our app and its users. Our development team implements industry-standard security measures to protect the app and its infrastructure.</p>

        <h2 className="text-lg font-semibold mt-4">5. Children's Privacy</h2>
        <p>As we do not collect any personal information, our app is suitable for users of all ages. However, we recommend that children under the age of 13 use the app under parental supervision.</p>

        <h2 className="text-lg font-semibold mt-4">6. Changes to This Privacy Policy</h2>
        <p>We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon the posting of the updated policy on the app or our website. We encourage you to periodically review this page for the latest information on our privacy practices.</p>

        <h2 className="text-lg font-semibold mt-4">7. Contact Us</h2>
        <p>If you have any questions or concerns about our Privacy Policy, please feel free to contact us at <a href="mailto:enquiries@s82.studio" className="text-blue-600">enquiries@s82.studio</a>.</p>

        <p className="mt-4">By using Terrace H4, you acknowledge that you have read and understood this Privacy Policy. Thank you for choosing Terrace H4, and we hope you enjoy using our app!</p>
      </div>
    </>
  );
}
