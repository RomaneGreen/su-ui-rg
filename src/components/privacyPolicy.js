import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import staticPageStyle from "../assets/jss/material-kit-react/components/staticPageStyle";
import { Link } from "react-router-dom";

class PrivacyPolicy extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.sectionInner}>
                    <header className={classes.sectionHead}>
                        <Typography variant="h3" className={classes.titleBlue}>Privacy Policy.</Typography>
                    </header>

                    <div className="sectionBody">
                        <div className={classes.sectionGroup}>
                            <p>Sell Up is a patent pending, technology-driven company that provides a time-sensitive real estate marketplace and highly specialized brokerage for connecting sellers (“Sellers”) and buyers (“Buyers”) of real property and mortgage notes (“Service” or “Company Service”) via the Company website(s) offered from time to time at www.sellup.co (the “Site”). The Company Service is owned and operated by Sell Up Companies, Inc (“Company”, “we” or “us”).</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p>Your use of the Company Service is subject to the terms and conditions set forth in this Privacy Policy (the “Privacy Policy”).</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><strong>PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY ACCESSING OR USING THE COMPANY SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY ALL THE TERMS OF THIS PRIVACY POLICY AND OUR TERMS OF SERVICE. IF YOU DO NOT AGREE TO SUCH TERMS, EXIT THIS PAGE AND DO NOT ACCESS OR USE THE COMPANY SERVICE.</strong></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p>We are committed to respect and protect the privacy of the personal information we obtain from you through the Company Service and we have created this Privacy Policy to inform you about how we collect, use and share your personal information, and about our privacy practices in general.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p>We are always ready to address your questions and concerns regarding this policy and our privacy practices. If you would like to contact customer service, please contact us at the email address at the end of this Privacy Policy.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p>We continually strive to find new ways to enhance your experience with the Company Service and we may modify this Privacy Policy from time to time to reflect changes in our privacy practices.  You are encouraged to review this Privacy Policy periodically and to check the “Last Updated” date at the bottom of the Privacy Policy for the most recent version.  If we make changes to this Privacy Policy, we will notify you here, by email, or by means of notice through the Website, the Application, or any other part of the Company Service. </p>
                        </div>
                
                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>1.</span><b>Terms of Service.</b> Use of the Company Service is subject to the terms of our <Link to={`${process.env.PUBLIC_URL}/terms-and-conditions`}>Terms of Service</Link> through our online form, which is hereby incorporated and made part of this Privacy Policy. By using the Company Service, you agree to be bound by our Terms of Service. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>2.</span><b>Types and Uses of Collected Information.</b> Company collects two types of information about you: </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>2.1</span>Personally Identifiable Information. Personally Identifiable Information is information that identifies a specific person. When you engage in certain activities via the Company Service, including but not limited to creating an account, sending feedback, or otherwise participating in the Company Service (collectively, “Identification Activities”), we may ask you to provide certain information about yourself.  If you elect to engage in an Identification Activity we may ask you to provide us with certain personal information about yourself, such as your name, address, email address, telephone number and/or any other information you provide to us, to create your account of profile, send communications about them to you, and populate forms for future transactions.  When you enroll in the Company Service, we may also ask you to provide us with additional information, such as credit card information to process transactions. Depending on the Identification Activity, some of the information we ask you to provide may be identified as mandatory and some identified as voluntary.  If you do not provide mandatory information for an Identification Activity, you will not be permitted to engage in that Identification Activity with the Company Service.  Depending on the Identification Activity, Company might not re-ask you for Personally Identifiable Information if such are already stored with us.  If you enroll in the Company Service through a third party (such as Facebook or Google) then Company may receive Personally Identifiable Information from such third party and by using the Company Service, you consent to such receipt of Personally Identifiable Information and its use pursuant to this Privacy Policy by Company.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p>We may use or share Personally Identifiable Information to provide products and/or services to you, to enable Third-Party advertisers to provide products and/or services to you, enhance the operation of the Company Service, improve our marketing and promotional efforts, analyze use of the Company Service, and tailor your experience with third parties as provided below in this Privacy Policy. We may also use Personally Identifiable Information to troubleshoot, resolve disputes, accomplish administrative tasks, contact you, enforce our agreements with you, including our Terms of Service and this Privacy Policy, comply with applicable law, and cooperate with law enforcement activities.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>2.2</span>Non-Personally Identifiable Information. Non-Personally Identifiable Information is information that does not identify a specific person. This type of information may include things like the Uniform Resource Locator (“URL”) of the website you visited before coming to the Company Service or otherwise participating in the Company Service, the URL of the website you visit after leaving the Company Service, the type of browser you are using, your Internet Protocol (“IP”) address, mobile carrier information, mobile device information, or general and/or aggregated location data that does constitute Personally Identifiable Information. We, and/or our authorized Third-Party Service Providers, may automatically collect this information when you visit or use the Company Service using electronic tools like Cookies and Web beacons or Pixel tags, as described below in this Privacy Policy.  Most of the other information we collect for mobile, such as your mobile device identification and mobile device type, the request type, your mobile carrier, your mobile carrier user identification, and the content of your request, does not by itself identify you to Company, though it may be unique or consist of or contain information that you consider personal. We use Non-Personally Identifiable Information to troubleshoot, administer the Company Service, analyze trends, gather demographic information, comply with applicable law, and cooperate with law enforcement activities. We may also share this information with our authorized Third-Party Service Providers to measure the overall effectiveness of our products and services.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.</span><b>How we use your personal data.</b></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.1</span>In this Section 3 we have set out:</p>
                            <div className={classes.listAlpha}>
                                <p><span className={classes.pointNumber}>(a)</span>the general categories of personal data that we may process, and</p>
                                <p><span className={classes.pointNumber}>(b)</span>the purposes for which we may process personal data.</p>
                            </div>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.2</span>We may process data about your use of our website and services ("usage data"). The usage data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use. The source of the usage data is our analytics tracking system. This usage data may be processed for the purposes of analyzing the use of the website and services.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.3</span>We may process your account data ("account data").  The account data may include your name and email address. The source of the account data is you. The account data may be processed for the purposes of operating our website, providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.4</span>We may process your information included in your personal profile on our website ("profile data").  The profile data may include your name, address, telephone number, email address, profile pictures, gender, date of birth, relationship status, interests and hobbies, educational details and employment details.  The profile data may be processed for the purposes of enabling and monitoring your use of our website and services. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.5</span>We may process information that you post for publication on our website or through our services ("publication data"). The publication data may be processed for the purposes of enabling such publication and administering our website and services.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.6</span>We may process information contained in any inquiry you submit to us regarding goods and/or services ("inquiry data"). The inquiry data may be processed for the purposes of offering, marketing and selling relevant goods and/or services to you. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.7</span>We may process information relating to transactions, including purchases of goods and services, that you enter into with us and/or through our website ("transaction data"). The transaction data may include first and last names, an email address to be used as a login, billing contact information, credit card number and a password. The transaction data may be processed for the purpose of supplying the purchased goods and services and keeping proper records of those transactions. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.8</span>We may process information that you provide to us for the purpose of subscribing to our email notifications and/or newsletters ("notification data"). When you sign up for an account or use certain features, you are opting to receive messages and/or phone calls from other users of the Company Service, businesses, and Company itself.  You cannot opt-out of Administrative Emails. “Administrative Emails” relate to your activity on the Company Service and include but are not limited to emails regarding your account, requests or inquiries, and purchases of products and services, if applicable.  If you do not want to receive promotional emails from us, you may elect to opt-out of receiving promotional emails at any time after registering by e-mailing us at the email listed at the end of this Privacy Policy or by hitting the “unsubscribe” button at the bottom of any of our e-mails. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.9</span>We may process information contained in or relating to any communication that you send to us ("correspondence data"). The correspondence data may include the communication content and metadata associated with the communication.  Our website will generate the metadata associated with communications made using the website contact forms. The correspondence data may be processed for the purposes of communicating with you and record-keeping. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.10</span>If you exchange messages with others through the Company Service, we may store them to process and deliver them, allow you to manage them, and we may review and disclose them in connection with investigations related to the operation and use of the Company Service. We may not deliver messages that we believe are objectionable, such as spam messages or requests to exchange reviews for compensation. If you send or receive messages through the Company Service via SMS text message, we may log phone numbers, phone carriers, and the date and time that the messages were processed. Carriers may charge recipients for texts that they receive. We may also store information that you provide through communications to us, including from phone calls, letters, emails and other electronic messages, or in person. If you are a representative of a business listed on the Company Service, we may contact you, including by phone or email, using the contact information you provide us, make publicly available, or that we have on record for your business. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.11</span>We may process any of your personal data identified in this police where necessary for the establishment, exercise or defense of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.12</span>In addition to the specific purposes for which we may process your personal data set out in this Section 3, we may also process any of your personal data where such processing is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.13</span>Please do not supply any other person's personal data to us unless we prompt you to do so and have that person or person’s authorization to do so.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>4.</span><b>Providing your personal data to others.</b></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>4.1</span>We will not sell your Personally Identifiable Information with other parties, except as may be required by law. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>4.2</span>We may disclose your personal data to any member of our group of companies, this means our subsidiaries, our ultimate holding company and all its subsidiaries insofar as reasonably necessary for the purposes, and on the legal bases, set out in this policy.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>4.3</span>Financial transactions relating to our website and services may be handled by our payment services providers. We will share transaction data with our payment services providers only to the extent necessary for the purposes of processing your payments, refunding such payments and dealing with complaints and queries relating to such payments and refunds. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>4.4</span>We may disclose your inquiry data to one or more of those selected third-party suppliers of services via APIs identified on our website for the purpose of enabling them to connect your account with their Services. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>4.5</span>In addition to the specific disclosures of personal data set out in this Section 4, we may disclose your personal data where such disclosure is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person. We may also disclose your personal data where such disclosure is necessary for the establishment, exercise or defense of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>5.</span><b>Release of Non-Personally Identifiable Information. </b></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>5.1</span>We may disclose or share Non-Personally Identifiable Information with Third Party Service Providers and the public. For example, we may share aggregated demographic information (which does not include any Personally Identifiable Information) or use Third Party Service Providers to track and analyze Non-Personally Identifiable usage and volume statistical information from our users to administer the Company Service. We may also publish this aggregated information for promotional purposes. Such data is collected on our behalf and is owned and used by us.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>5.2</span>We may use Third Party Service Providers to serve ads when you participate in the Company Service. These companies may use Non-Personally Identifiable Information about your visits and use of the Company Service, and visits to other websites or locations to provide, through the use of network tags, advertisements about goods and services that may be of interest to you. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>6</span><b>Updating Information.</b> If you are enrolled in the Company Service and have created an account or a profile, you may change any of your Personally Identifiable Information by logging into your account and accessing the “Member Profile Page” or similar section of the Company Service. We encourage you to promptly update your Personally Identifiable Information if it changes, as out-of-date Personally Identifiable Information may negatively affect the quality of your Company Service experience.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>7</span><b>Choices on Collection/Use of Information.</b> You can always choose not to provide certain information, although a certain level of information is required to engage and participate in the Company Service. Other users may be able to identify you, or associate you with your account, if you include personal information in the content you post publicly. You can reduce the risk of being personally identified by using the Company Service pseudonymously, though doing so could detract from the credibility of your contributions to the Company Service.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>8.</span><b>About cookies.</b></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>8.1</span>A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>8.2</span>Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.
</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>8.3</span>Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>8.4</span>We use cookies for the following purposes:</p>
                            <div className={classes.listAlpha}>
                                <p><span className={classes.pointNumber}>(a)</span>authentication - we use cookies to identify you when you visit our website and as you navigate our website.</p>
                                <p><span className={classes.pointNumber}>(b)</span>status - we use cookies to help us to determine if you are logged into our website.</p>
                                <p><span className={classes.pointNumber}>(c)</span>personalization - we use cookies [to store information about your preferences and to personalize the website for you.</p>
                                <p><span className={classes.pointNumber}>(d)</span>security - we use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials, and to protect our website and services generally.</p>
                                <p><span className={classes.pointNumber}>(e)</span>advertising - we use cookies to help us to display advertisements that will be relevant to you.</p>
                                <p><span className={classes.pointNumber}>(f)</span>analysis - we use cookies [to help us to analyze the use and performance of our website and services; and</p>
                                <p><span className={classes.pointNumber}>(g)</span>cookie consent - we use cookies [to store your preferences in relation to the use of cookies more generally.</p>
                            </div>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>9.</span><b>Cookies used by our service providers.</b></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>9.1</span>Our service providers use cookies and those cookies may be stored on your computer when you visit our website.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>9.2</span>We may use Google Analytics or similar tools to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered relating to our website is used to create reports about the use of our website. Google's privacy policy is available at: https://www.google.com/policies/privacy/.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>10</span><b>Managing cookies.</b></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>10.1</span>Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:</p>
                            <div className={classes.listAlpha}>
                                <p><span className={classes.pointNumber}>(a)</span>https://support.google.com/chrome/answer/95647?hl=en (Chrome);</p>
                                <p><span className={classes.pointNumber}>(b)</span>https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences (Firefox);</p>
                                <p><span className={classes.pointNumber}>(c)</span>http://www.opera.com/help/tutorials/security/cookies/ (Opera);</p>
                                <p><span className={classes.pointNumber}>(d)</span>https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies (Internet Explorer);</p>
                                <p><span className={classes.pointNumber}>(e)</span>https://support.apple.com/kb/PH21411 (Safari); and</p>
                                <p><span className={classes.pointNumber}>(f)</span>https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy (Edge).</p>
                            </div>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>10.2</span>Blocking all cookies will have a negative impact upon the usability of many websites.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>10.3</span>If you block cookies, you will not be able to use all the features on our website.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>11.</span><b>Security of Information. </b></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>11.1</span>You may be able to access your Personally Identifiable Information via the Company Service with your password and username. This password is encrypted. We advise against sharing your password with anyone.  If you access your account via a third-party site or service, you may have additional or different sign-in protections via that third-party site or service. You need to prevent unauthorized access to your account and Personal Information by selecting and protecting your password and/or other sign-in mechanism appropriately and limiting access to your computer, browser, or mobile device by signing off after you have finished accessing your account. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of user information at any time. If we believe that the security of your information may have been compromised, we may seek to notify you of that development. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>11.2</span>We are committed to taking all reasonable precautions to safeguard the privacy of personal information which has been provided by its users. We use technical, contractual, administrative and physical security steps to protect your personal information. Security measures such as restricted access and the use of passwords and encryption have been adopted to protect your personal information against loss or theft, as well as unauthorized access, disclosure, copying, use or modification. Our employees have been trained to respect your privacy at all times and those employees with access to your personal information shall use your personal information strictly in accordance with this Privacy Policy. We will protect your credit card information by using industry standard encryption technology.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>11.3</span>Please be aware that no data transmission over the Internet or via e-mail is completely secure and therefore we cannot guarantee protection of all personal information in all cases. For example, we cannot guarantee protection against interception, misappropriation, misuse, or alteration, or that your information will not be disclosed or accessed by the unauthorized acts of others. Consequently, we cannot ensure or warrant the security of any information you transmit to us, and you do so at your own risk. If you provide us with your credit card number, you should not send it electronically unless the email is encrypted, or your browser indicates that the access to our website is secure. Materials posted to online forums such as bulletin boards or chat rooms are public, not secure, and may be viewed by anyone. Any personal information you post may be collected and used by anyone and may result in unsolicited messages from other parties.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>12.</span><b>Data Retention and Account Termination.</b> We will remove your public posts from view and/or dissociate them from your account profile, but we may retain information about you for the purposes authorized under this Privacy Policy unless prohibited by law. For example, we may retain information to prevent, investigate, or identify possible wrongdoing in connection with the Company Service or to comply with legal obligations. Please note that businesses cannot remove their business listings, ratings, or reviews by closing their accounts.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>13.</span><b>Public Areas.</b> We may provide areas on the Company Service where you can publicly post information about yourself or can communicate with others such as on forums. This information may be accessible by other users and companies and may appear on other websites or web searches, and therefore this information could be read, collected, and used by others. We have no control over who reads your postings or what other users may do with the information you voluntarily post, so please use caution when posting any content or providing anything that could be deemed personal information. </p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>14.</span><b>Notice of Privacy Rights to California Residents.</b> California law requires that we provide you with a summary of your privacy rights under the California Online Privacy Protection Act (“COPPA”) and the California Business and Professions Code. As required by COPPA, we will provide you with the categories of Personally Identifiable Information that we collect through the Company Service and the categories of third party persons or entities with whom such Personally Identifiable Information may be shared for direct marketing purposes at your request. California law requires us to inform you, at your request, (1) the categories of Personally Identifiable Information we collect and what third parties we share that information with; (2) the names and addresses of those third parties; and (3) examples of the products marketed by those companies. COPPA further requires us to allow you to control who you do not want us to share that information with. To obtain this information, please send a request by email or physical mail to the address found below. When contacting us, please indicate your name, address, email address, and what Personally Identifiable Information you do not want us to share with our marketing partners. The request should be sent to the attention of our legal department and labeled “California Customer Choice Notice.” Please allow 30 days for a response. Also, please note that there is no charge for controlling the sharing of your Personally Identifiable Information or requesting this notice.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>15.</span><b>Children.</b> The Company Service are not directed to people under the age of eighteen (18). If you become aware that your child has provided us with personal information without your consent, please contact us at the email address listed below. If we become aware that a child under this age has provided us with personal information, we take steps to remove such information and terminate the child’s account.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>16.</span><b>Customer Service.</b> For assistance or questions regarding this Privacy Policy or the Company Service, you may contact us at Sell Up Companies, Inc. 154 Grand Street, New York, NY 10013 or at info [a] sellup.co</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><strong><i>Last Updated:  August 1, 2019</i></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(staticPageStyle)(PrivacyPolicy);