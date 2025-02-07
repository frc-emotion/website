import React from "react";
import ReactMarkdown from "react-markdown";
import "./index.css";

const privacyPolicy = `
Privacy Policy
Last Updated: December 14, 2024

1. Introduction

Welcome to Team 2658! We are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy outlines how we collect, use, store, and safeguard your information when you interact with our services. By using our services, you agree to the terms outlined in this policy.

2. Information We Collect

2.1 Personal Information

When you create or manage your account with Team 2658, we collect the following personal information and may collect additional details as needed to provide and improve our services:
	•	First Name & Last Name: Your given and family names.
	•	Email Address: Used for account-related communications and notifications.
	•	Password: Secured credentials for accessing your account.
	•	Phone Number: A 10-digit number for contact purposes.
	•	Student ID: A 7-character identifier (if applicable).
	•	Subteam Affiliations: The specific subteams you join (e.g., software, electrical, build, marketing, design).
	•	Grade Level: Your current grade (options include 9, 10, 11, 12, or N/A).

Note: We may collect additional personal information as necessary to deliver and enhance our services.

2.2 Non-Personal and Diagnostic/Telemetry Data

We collect non-personal information to help improve your experience and the performance of our services. This includes:
	•	Telemetry Data: We use Sentry to gather telemetry data such as usage statistics, error reports, and performance metrics. This data may include identifiable details (for example, IP addresses and incidental location information) used exclusively for monitoring, troubleshooting, and enhancing our services.
	•	Diagnostic Information: Any identifiable data included in diagnostic or telemetry reports is used for technical purposes only. Please note that location data captured as part of these processes is not anonymized and is stored in its original form.

2.3 Information Automatically Collected

When you access our services, certain information is automatically collected, including:
	•	Device Information: Details about your device (e.g., model, operating system, browser type).
	•	Log Data: Server logs that may include your IP address, browser type, referring/exit pages, and other usage statistics.

2.4 Location Data

Our app does not actively offload or collect precise user location data. However, in cases where location data is incidentally captured as part of diagnostic or telemetry processes:
	•	This information is collected in its original form without anonymization.
	•	It is used solely for troubleshooting, system performance improvements, and to help diagnose issues.
	•	While such data may be combined with other diagnostic information to enhance our services, it is not used to personally track or profile you beyond these technical purposes.

2.5 Additional Data Collection

To continually enhance our services and address evolving needs, we reserve the right to collect further information beyond what is explicitly detailed in this Privacy Policy.
	•	Purpose: Any additional data collected may be used for service enhancement, security, troubleshooting, or to support new features.
	•	Compliance: All additional data will be processed in accordance with this Privacy Policy, and you will be informed of any significant changes to our data collection practices.

3. How We Use Your Information

We use the collected information to:
	•	Provide and Maintain Services: Facilitate account creation, login, and management.
	•	Improve User Experience: Analyze usage patterns to enhance functionality and performance.
	•	Communicate with You: Send important updates, security alerts, and support messages.
	•	Ensure Security: Monitor for fraudulent activities and protect against unauthorized access.
	•	Customize Content: Tailor features based on your preferences and interactions.
	•	Compliance: Fulfill legal obligations and enforce our terms of service.

4. Data Storage and Security
	•	Data Storage: All personal data is stored securely on our internal servers using industry-standard security measures.
	•	Access Control: Access is limited to authorized Team 2658 personnel who require it for their roles.
	•	Data Encryption: Sensitive information, such as passwords, is encrypted both in transit and at rest.

5. Use of Third-Party Services
	•	Sentry: We use Sentry for telemetry and error tracking purposes. Sentry collects non-personal and diagnostic data, including identifiable details (such as location telemetry data that is not anonymized), solely to help us identify and resolve issues within our services. For more information, please review Sentry’s Privacy Policy.

6. Data Sharing and Disclosure

We do not share, sell, or disclose your personal information to third parties, except under the following circumstances:
	•	Legal Requirements: When required by law or in response to valid legal requests.
	•	Protection of Rights: To safeguard our rights, privacy, safety, or property, as well as that of our users and the public.
	•	Business Transfers: In the event of a merger, acquisition, or sale of all or part of our assets, where your information may be transferred to the new owner.
	•	Third-Party Service Providers: Any diagnostic or telemetry data shared with third-party service providers is subject to strict confidentiality agreements and is used solely for service improvement and troubleshooting.

7. User Rights

You have the following rights regarding your personal information:
	•	Access: Request access to the data we hold about you.
	•	Correction: Request correction of any inaccurate or incomplete information.
	•	Deletion: Request deletion of your personal data when it is no longer needed.
	•	Restriction of Processing: Request that we restrict the processing of your personal data under certain conditions.
	•	Data Portability: Request a copy of your data in a structured, commonly used, and machine-readable format.

To exercise any of these rights, please contact a Team 2658 lead using the contact information provided below.

8. Data Retention
	•	Active Accounts: We retain your data for as long as your account is active.
	•	Inactive Accounts: Upon account deletion, your personal data is permanently removed from our servers.
	•	Legal Obligations: We may retain certain information as required by law or for legitimate business purposes.

9. Children’s Privacy

Our services are intended for individuals aged 13 or older. We do not knowingly collect personal information from children under 13. If you become aware that a child under 13 has provided us with personal information without parental consent, please contact us immediately so we can take appropriate action.

10. Changes to This Privacy Policy

We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly to stay informed about how we are protecting your information.

11. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact a Team 2658 lead.

12. Consent

By using our services, you hereby consent to this Privacy Policy and agree to its terms.

13. Miscellaneous
	•	International Transfers: If you access our services from outside the United States, please be aware that your data may be transferred to and processed in the United States.
	•	Third-Party Links: Our services may include links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
	•	Future Data Collection: We reserve the right to adjust and expand the types of data we collect in order to enhance our services. Any additional data collected in the future will be processed in accordance with this Privacy Policy.

FRC Team 2658 - Rancho Bernardo High School
13010 Paseo Lucido – San Diego, CA 92128
`;

export default function PrivacyPolicy() {
    return (
        <main className="privacy-policy">
            <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
        </main>
    );
}
