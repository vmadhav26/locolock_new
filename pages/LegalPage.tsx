
import React from 'react';
import { useLocation } from 'react-router-dom';

const LegalPage: React.FC = () => {
  const location = useLocation();
  const type = location.pathname.substring(1);

  const content = {
    privacy: {
      title: 'Privacy Policy',
      content: 'At Locolock Technologies, we prioritize the privacy of our clients and website visitors. This policy outlines how we collect, use, and protect your information when you use our services. We collect personal information only for project collaboration and communication purposes. We never sell your data to third parties. Our systems utilize industry-standard encryption to ensure your data remains secure.'
    },
    terms: {
      title: 'Terms & Conditions',
      content: 'By accessing the Locolock Technologies website or utilizing our services, you agree to comply with our professional terms. Projects are governed by specific service agreements signed during onboarding. All intellectual property remains the property of the client upon full payment. Locolock reserves the right to showcase projects in its portfolio unless a Non-Disclosure Agreement is in place.'
    },
    nda: {
      title: 'NDA & Data Security Policy',
      content: 'We understand the sensitivity of your startup’s vision. Locolock Technologies is committed to maintaining the highest standards of data security. We offer standard Non-Disclosure Agreements for all prospective clients during the discovery phase. Our internal workflows are designed to isolate client data and source code, ensuring that your trade secrets and innovations remain strictly confidential.'
    }
  }[type as 'privacy' | 'terms' | 'nda'];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-heading">{content?.title}</h1>
        <div className="prose prose-indigo max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>{content?.content}</p>
          <p>
            For any specific inquiries regarding our legal policies, please reach out to us at <strong>info@locolock.in</strong>.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-12">
            <h3 className="font-bold text-gray-900 mb-2">Last Updated</h3>
            <p className="text-sm">May 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
