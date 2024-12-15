import "./index.css";

const privacyPolicy = `

Last Updated: December 14, 2024

1. Introduction

Welcome to Team 2658! We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, store, and safeguard your information when you interact with our services. By using our services, you agree to the terms outlined in this policy.

2. Information We Collect

2.1. Personal Information

When you create or manage your account with Team 2658, we collect the following personal information and potentially more:
	•	First Name & Last Name: Your given and family names.
	•	Email Address: Used for account-related communications and notifications.
	•	Password: Secured credentials for accessing your account.
	•	Phone Number: A 10-digit number for contact purposes.
	•	Student ID: A 7-character identifier (if applicable).
	•	Subteam Affiliations: The specific subteams you join (e.g., software, electrical, build, marketing, design).
	•	Grade Level: Your current grade (options include 9, 10, 11, 12, or N/A).

Note: We may collect additional information as needed to provide our services effectively.

2.2. Non-Personal Information

In addition to personal data, we collect non-personal information to enhance your experience and improve our services:
	•	Telemetry Data: We use Sentry to collect telemetry data, including but not limited to:
	•	Usage Data: Information about how you interact with our services, such as pages visited, features used, and actions taken.
	•	Error Reports: Details about any errors or issues encountered while using our services, including stack traces and device information.
	•	Performance Metrics: Data on application performance, response times, and system health.

2.3. Information Automatically Collected

We may also collect certain information automatically when you access our services:
	•	Device Information: Details about the device you are using, including model, operating system, and browser type.
	•	Log Data: Server logs that include your IP address, browser type, referring/exit pages, and other usage statistics.

3. How We Use Your Information

We use the collected information to:
	•	Provide and Maintain Services: Facilitate account creation, login, and management.
	•	Improve User Experience: Analyze usage patterns to enhance functionality and performance.
	•	Communicate with You: Send important updates, security alerts, and support messages.
	•	Ensure Security: Monitor for fraudulent activities and protect against unauthorized access.
	•	Customize Content: Tailor content and features based on your preferences and interactions.
	•	Compliance: Fulfill legal obligations and enforce our terms of service.

4. Data Storage and Security
	•	Data Storage: All personal data is stored securely on our internal servers. We employ industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
	•	Access Control: Access to personal data is restricted to authorized Team 2658 personnel who require it to perform their job functions.
	•	Data Encryption: Sensitive information, such as passwords, is encrypted both in transit and at rest to ensure maximum security.

5. Use of Third-Party Services
	•	Sentry: We utilize Sentry for telemetry and error tracking purposes. Sentry collects non-personal information to help us identify and resolve issues within our services. For more information on how Sentry handles data, please refer to Sentry’s Privacy Policy.

6. Data Sharing and Disclosure
	•	No Sharing with Third Parties: We do not share, sell, or disclose your personal information to third parties, except in the following circumstances:
	•	Legal Requirements: If required by law or in response to valid legal requests.
	•	Protection of Rights: To protect our rights, privacy, safety, or property, and that of our users and the public.
	•	Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the new owner.

7. User Rights

You have the following rights regarding your personal information:
	•	Access: Request access to the personal data we hold about you.
	•	Correction: Request correction of any inaccurate or incomplete personal data.
	•	Deletion: Request deletion of your personal data when it is no longer necessary for the purposes it was collected.
	•	Restriction of Processing: Request restriction of processing your personal data under certain conditions.
	•	Data Portability: Request a copy of your personal data in a structured, commonly used, and machine-readable format.

To exercise any of these rights, please contact a Team 2658 lead using the contact information provided below.

8. Data Retention
	•	Active Accounts: We retain your personal data for as long as your account is active.
	•	Inactive Accounts: Upon account deletion, we permanently delete your personal data from our servers.
	•	Legal Obligations: We may retain certain information as required by law or for legitimate business purposes.

9. Children’s Privacy

Our services are intended for individuals who are at least 13 years old. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information without parental consent, please contact us so that we can take appropriate actions.

10. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.

11. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact a Team 2658 lead at:
	•	Email: your-email@example.com
	•	Phone: +1 (123) 456-7890

12. Consent

By using our services, you hereby consent to our Privacy Policy and agree to its terms.

13. Miscellaneous
	•	International Transfers: If you are accessing our services from outside the United States, please be aware that your data may be transferred to and processed in the United States.
	•	Third-Party Links: Our services may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
`

export default function PrivacyPolicy() {
    return (
        <main>
            <h1>Privacy Policy</h1>
            <p>
                {privacyPolicy}
            </p>
        </main>
    );
}
