import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import staticPageStyle from "../assets/jss/material-kit-react/components/staticPageStyle";
import { Link } from "react-router-dom";

class TermsAndConditions extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.sectionInner}>
                    <header className={classes.sectionHead}>
                        <Typography variant="h3" className={classes.titleBlue}>Terms of Service.</Typography>
                    </header>

                    <div className="sectionBody">
                        <div className={classes.sectionGroup}>
                            <p>Sell Up is a patent pending, technology-driven company that provides a time-sensitive real estate marketplace and highly specialized brokerage for connecting sellers (“Sellers”) and buyers (“Buyers”) of real property and mortgage notes (“Service” or “Company Service”) via the Company website(s) offered from time to time at www.sellup.co (the “Site”). The Company Service is owned and operated by Sell Up Companies, Inc (“Company”, “we” or “us”).</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p>Your use of the Company Service is subject to the terms and conditions set forth in these Terms of Service (the “Terms of Service”).</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><strong>PLEASE READ THE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING ANY PART OF THE COMPANY SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY ALL THE TERMS OF THE TERMS OF SERVICE. IF YOU DO NOT AGREE TO THESE TERMS OF SERVICE, EXIT THIS PAGE AND DO NOT ACCESS OR USE THE COMPANY SERVICE. USE OF THE COMPANY SERVICE IS EXPRESSLY CONDITIONED UPON YOUR ACCEPTANCE OF THE TERMS OF SERVICE.</strong></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>1.</span><b>Updates to Terms of Service; Integration.</b> We may, in our sole discretion, modify the Terms of Service via email or by posting notice on any part of the Company Service. The “Last Updated” date at the bottom the Terms of Service indicates when the latest modifications were made to the Terms of Service. By continuing to access and use the Company Service you agree to any such modifications. Therefore, you are responsible for reviewing and should become familiar with any such modifications.  You are encouraged to review this Terms of Service periodically and to check the “Last Updated” date at the bottom of the Terms of Service for the most recent version. In addition, when using services or features on the Company Service, you will be subject to any posted guidelines or policies applicable to such services or features that may be posted from time to time, including but not limited to the Privacy Policy as noted below. All such guidelines or policies are hereby incorporated by reference into these Terms of Service.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>2.</span><b>Translation.</b> We may translate these Terms of Service into other languages for your convenience. Nevertheless, the English version governs your relationship with Company, and any inconsistencies among the different versions will be resolved in favor of the English version.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>3.</span><b>Service Availability.</b> The Company Service may be modified, updated, interrupted, suspended or discontinued at any time without notice or liability. If the Company Service were discontinued at any time, all data would be deleted pursuant to the discontinuation process.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>4.</span><b>Privacy Policy.</b> Use of the Company Service is subject to the terms of our <Link to={`${process.env.PUBLIC_URL}/privacy-policy`}>Privacy Policy</Link> which is hereby incorporated into and made part of these Terms of Service.  Please carefully review our Privacy Policy. By using or accessing the Company Service, you agree to be bound by the terms of our Privacy Policy.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>5.</span><b>Age.</b> The Service is meant for those at least eighteen (18) years of age.  Use of the Service by anyone under this age is a violation of the Terms of Service.  You may not use the Service if you are a competitor of the Service, or if we have previously banned you from use of the Service or closed your account.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>6.</span><b>Intellectual Property.</b> You acknowledge that all materials on the Company Service, including, but not limited to, the Website design, Application design, graphics, iconography, text, sounds, pictures, and other files and the selection and arrangement thereof (collectively, “Materials”), are the property of Company and/or its licensors, and are subject to and protected by United States and international copyright and other intellectual property laws and rights. All rights to Materials not expressly granted in these Terms of Service are reserved to their respective copyright owners. Company authorizes you to view, download and/or print the Materials provided that you keep intact all copyright and other proprietary notices contained in the original Materials. Except as expressly authorized by the Terms of Service, you may not copy, reproduce, distribute, republish, download, perform, display, post, transmit, scrape, copy, exploit, create derivative works or otherwise use any of the Materials in any form or by any means, without the prior written authorization of Company or the respective copyright owner.  In the absence of a written agreement, you may not modify or adapt the Materials in any way or otherwise use them for any public or commercial resale purposes. The trademarks, service marks, trade names, trade dress and logos (collectively, “Marks”) contained or described in the Company Service are the sole property of Company and/or its licensors and may not be copied, altered or otherwise used, in whole or in part, without the prior written authorization of Company and/or its licensors. Company reserves the right to enforce its intellectual property rights fully under the law.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p>Your use of the Company Service is solely and exclusively under the limited license granted herein and you will not obtain any ownership interest therein through the Terms of Service or otherwise.  All trademarks, service marks, trade names, domain names, slogans, logos, and other indicia of origin that appear on or in connection with any aspect of the Company Service are either the property of Company, its affiliates or licensors. Company retains the right to rescind and terminate the limited license granted hereunder at any point, for any reason. All rights not expressly granted herein by Company to you are fully reserved by Company, its advertisers and licensors.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p>Some of the company and product names, logos, brands, and other trademarks featured or referred to within the Company Service may not be owned by us and are the property of their respective trademark holders.  These trademark holders are not affiliated with, nor do they sponsor or endorse the Company Service.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>7.</span><b>Third Party Sites & Services. </b></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>7.1</span>Links provided via the Company Service to Third-Party websites, Third-Party APIs and/or and services (the “Third-Party Services) are provided only as a convenience. If you use these Third-Party Services or use links to such websites, you may leave the Company Service. Company does not control nor endorse any such Third-Party Services. You agree that the Company Parties, and Affiliates, as defined below, will not be responsible or liable for any content, goods or services provided by such Third-Party or for your use or inability to use such Third-Party websites. You will use such links at your own risk. You are advised that other websites on the Internet, including Third-Party websites linked from the Company Service, might contain material or information: that some people may find offensive or inappropriate; that is inaccurate, untrue, misleading or deceptive; or that is defamatory, libelous, infringing of others’ rights or otherwise unlawful. Company expressly disclaims any responsibility for the content, legality, decency or accuracy of any information, and for any products and services, that appear on any Third-Party website or in advertisements or content that Third-Party websites may have in the Company Service.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>7.2</span>Your interactions with organizations and/or individuals and Third-Party companies found on or through the Company Service, including payment and delivery of goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and such organizations and/or individuals. You agree and acknowledge that Company shall not under any circumstances be liable for any damages of any kind arising out of, or in connection with, or relating to, the products and services of a Thirty-Party.</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>8.</span><b>Use of the Service. </b></p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>8.1.</span>You may be required to establish an account (the “Account” and you as the “Account Holder”) to use the Company Service and/or take advantage of certain features.  Your Account may be for the purpose of selling real property and/or mortgage notes (in which case you are a “Seller”) or for the purpose of buying real property and/or mortgage notes (in which case you are a “Buyer”) or for some combination of both.  Buyers and Sellers are collectively known as the “Parties.”</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <p><span className={classes.pointNumber}>8.2</span>The Parties agree to:</p>
                        </div>

                        <div className={classes.sectionGroup}>
                            <div className={classes.listAlpha}>
                                <p><span className={classes.pointNumber}>a.</span>provide true, accurate, current and complete information about yourself as prompted by the Company Service;</p>
                                <p><span className={classes.pointNumber}>b.</span>as permitted, maintain and promptly update such information. If you provide any information that is false, inaccurate or outdated, or Company has reasonable grounds to suspect that such information is false, inaccurate or outdated, Company has the right to suspend or terminate your account and prohibit all current or future use of the Company Service by you; </p>
                                <p><span className={classes.pointNumber}>c.</span>You agree and acknowledge that Company shall not be liable for any losses that occur due to the submission of invalid, incorrect or inaccurate Information.</p>
                                <p><span className={classes.pointNumber}>d.</span>that your account is for your own personal and/or business use.  </p>
                                <p><span className={classes.pointNumber}>e.</span>by creating an account, you agree to receive certain communications in connection with the Company Service. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>8.3</span>You are responsible for maintaining the confidentiality of the password and account and are fully responsible for all activities that occur under your account. Your account is meant to be private and you shall not share accounts for any reason. You agree to immediately notify us of any unauthorized use of your password or account or any other breach of security. You agree to be responsible for all charges resulting from the use of your account via the Company Service, including charges resulting from unauthorized use of your account.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>8.4</span>You may not impersonate someone else (e.g., adopt the identity of another party), create or use an account for anyone other than yourself, provide an email address other than your own, or create multiple accounts</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>8.5</span>You agree to use the Company Service only for lawful purposes and that you are responsible for your use of and communications and content you may post via the Company Service. You agree not to use the Company Service in any manner that interferes with its normal operation or with any other user’s use of the Company Service.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>8.6</span>You may not do any of the following while accessing or using the Company Service: </p>
                                <div className={classes.listAlpha}>
                                    <p><span className={classes.pointNumber}>a</span>access, tamper with, or use non-public areas of the Company Service, our computer systems, or the technical delivery systems of our providers; </p>
                                    <p><span className={classes.pointNumber}>b</span>probe, scan, or test the vulnerability of any system or network or breach or circumvent any security or authentication measures; </p>
                                    <p><span className={classes.pointNumber}>c</span>access or search or attempt to access or search the Company Service by any means other than through our currently available, published interfaces that are provided by us, unless you have been specifically allowed to do so in a separate agreement with us; </p>
                                    <p><span className={classes.pointNumber}>d</span>forge any TCP/IP packet header or any part of the header information in any email or posting, or in any way use the Company Service to send altered, deceptive or false source-identifying information; or </p>
                                    <p><span className={classes.pointNumber}>e</span>disrupt or interfere with the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, mail-bombing the Company Service, or otherwise creating an undue burden on the Company Service.</p>
                                </div>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>8.7</span>You may not use manual or automated software, devices, or other processes to “crawl,” “scrape,” or “spider” any page of the Company Service. You will not decompile, reverse engineer, or otherwise attempt to obtain the source code of any part of the Company Service.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>8.8</span>You further agree that you will not access the Company Service by any means except through the interface provided by Company for access to the Company Service. Creating or maintaining any link from another application to any page at the Company Service without the prior authorization of Company is prohibited. Running or displaying the Company Service, or any information or material displayed via the Company Service in frames or through similar means on another website or application without the prior authorization of Company is prohibited. Any permitted links to the Company Service must comply with all applicable laws, rule and regulations.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>8.9</span>Company makes no representation that Materials contained, described or offered via the Company Service are accurate, appropriate or available for use in jurisdictions outside the United States, or that these Terms of Service comply with the laws of any other country. Visitors who use the Company Service and reside outside the jurisdiction contained herein do so on their own initiative and are responsible for compliance with all applicable law. You agree that you will not access the Company Service from any territory where its contents are illegal, and that you, and not the Company Parties, are responsible for compliance with applicable law.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>8.10</span>Your use of the Company Service is at your own risk, including the risk that you might be exposed to Content that is offensive, indecent, inaccurate, objectionable, or otherwise inappropriate.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>8.11</span> Furthermore, you herein agree not to make use of the Services for:</p>
                                <div className={classes.listAlpha}>
                                    <p><span className={classes.pointNumber}>a</span>interfering with or disrupting any of the Services, servers and/or networks that may be connected or related to our website, including, but not limited to, the use of any software and/or routine to bypass the robot exclusion headers;</p>
                                    <p><span className={classes.pointNumber}>b</span>intentionally or unintentionally violating any local, state, federal, national or international law, including, but not limited to, rules, guidelines, and/or regulations decreed by the Securities and Exchange Commission, in addition to any rules of any nation or other securities exchange, that would include without limitation, the New York Stock Exchange, the American Stock Exchange, or the NASDAQ, and any regulations having the force of law;</p>
                                    <p><span className={classes.pointNumber}>c</span>providing informational support or resources, concealing and/or disguising the character, location, and or source to any organization delegated by the United States government as a "foreign terrorist organization" in accordance to Section 219 of the Nationality Act;</p>
                                </div>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>9.</span><b>Non-Circumvent. </b> Buyer agrees not to contact or initiate contact with the Seller or any representative of the Seller, at any time for any purpose, either directly or indirectly, as may be related to the purchase of real property or mortgage note, of which Buyer became aware of via the Services without the prior written approval of Company.</p>
                                <div className={classes.listAlpha}>
                                    <p><span className={classes.pointNumber}>a</span>Buyer’s Account Terminated: Any attempt at, or actual contact of, may result in Buyer’s Account being permanently closed, in addition to any other actions Company may take in accordance with the law or as otherwise may be stated herein.</p>
                                    <p><span className={classes.pointNumber}>b</span>Liquated Damages: In case of circumvention, the Buyer agrees and guarantees that they will pay a legal monetary penalty that is equal to ten (10) times the commission and/or fees the Company should have realized in such transactions, by the person(s) or entity(ies) engaged on the circumvention for each occurrence.</p>
                                    <p><span className={classes.pointNumber}>c</span>Attorney Fees: If either Parties (the Buyer or Company) commences legal proceedings to interpret or enforce this terms of service, the prevailing Party, will be entitled to recover court costs and reasonable attorney fees from the non-prevailing Party in addition to any liquidated damages awarded by the court. </p>
                                    <p><span className={classes.pointNumber}>d</span>Choice of Law: The Parties will construe this Agreement in accordance with the laws of the State of New York.  If any provision of this Agreement is deemed void by any court of competent jurisdiction, the remaining provisions shall remain in force and effect.</p>
                                </div>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>10.</span><b>Suggestions and Improvements.</b> By sending us any ideas, suggestions, documents or proposals (“Feedback”), you agree that (i) your Feedback does not contain the confidential or proprietary information of third parties, (ii) we are under no obligation of confidentiality, express or implied, with respect to the Feedback, (iii) we may have something similar to the Feedback already under consideration or in development, and (iv) you grant us an irrevocable, non-exclusive, royalty-free, perpetual, worldwide license to use, modify, prepare derivative works, publish, distribute and sublicense the Feedback, and you irrevocably waive, and cause to be waived, against Company and its users any claims and assertions of any moral rights contained in such Feedback.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>11.</span><b>Content.</b> All Content is the sole responsibility of the person who originated such content. You acknowledge that all Content transmitted or accessed by you using the Company Service, is at your own risk and you will be solely responsible and liable for any damage or loss to you or any other party resulting therefrom. You remain solely responsible for all Content that you transmit in connection with the Company Service, and you warrant that you possess all rights necessary to provide such Content and that you do not violate any third party’s rights in providing such Content. We reserve the right to remove, and to allow certain users to remove, any objectionable Content in our sole discretion.  </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>12.</span><b>Termination.</b> You may terminate your use of the Company Service at any time.  You agree that Company may terminate or suspend your access to all or part of the Company Service, with or without notice, in our reasonable discretion, at any time.  Company reserves the right to modify or discontinue the Company Service (or any part thereof) with or without notice, at any time. Following the termination or cancellation of your subscription to the Company Service and/or your account, we reserve the right to delete all your data in the normal course of operations.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>13.</span><b>Representations.</b> You expressly represent, warrant, and/or acknowledge that: </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>13.1</span> Company does not warrant or guarantee the suitability, accuracy or availability of any materials or content, including without limitation any, data, products or services, property listings, descriptions of property or mortgage notes, terms contained therein, or any other data or information found through the Company Service (the “Materials”). </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>13.2</span> Company does not screen the authenticity or quality of any Materials or any provider of Materials, including, data, products or services found through the Company Service. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>13.3</span> Company makes no representations or promises regarding any of the Materials, and that Materials provided via the Company Service may be owned or licensed by third parties. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>13.4</span> Company is not a party to any transaction between you and any provider of products or services via the Company Service.  Any dispute shall be resolved between yourself and the provider of Materials or your customer. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>13.5</span> Any information, including any Materials on the Company Service, including on any Facebook, Instagram or Twitter page, are for informational purposes only. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>13.6</span> You assume all risk when using the Company Service, including all the risks associated with any online or offline interactions with other users, providers of products and services, and from additional fees or charges from your mobile carrier. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>13.7</span> You are of legal age to form a binding contract and are at least the age as noted in paragraph 5 herein, or of age or you have the authority of such legal entity to form a binding contract; all registration information you submit is accurate and truthful; you will maintain the accuracy of such information; and you are legally permitted to use and access the Company Service and take full responsibility for the selection and use of and access to the Company Service. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>14.</span><b>Warranties, Disclaimers and Limitations of Liability. </b>  </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT:</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p>YOUR USE OF THE COMPANY SERVICE IS AT YOUR SOLE RISK. THE COMPANY SERVICE AND THE ASSOCIATED MATERIALS AND CONTENT ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. EXCEPT AS OTHERWISE EXPRESSLY PROVIDED IN THESE TERMS OF SERVICE, COMPANY, ITS PARENT, SUBSIDIARY AND OTHER AFFILIATED COMPANIES, AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS AND OTHER REPRESENTATIVES (COLLECTIVELY, THE “COMPANY PARTIES”), EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PURPOSE AND NON-INFRINGEMENT. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, THE COMPANY PARTIES MAKE NO WARRANTY THAT: (I) THE COMPANY SERVICE WILL MEET YOUR REQUIREMENTS; (II) THE COMPANY SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (III) INFORMATION THAT MAY BE OBTAINED VIA THE COMPANY SERVICE WILL BE ACCURATE OR RELIABLE; (IV) THE QUALITY OF ANY AND ALL PRODUCTS, SERVICES, INFORMATION OR OTHER MATERIAL, INCLUDING ALL MERCHANDISE, GOODS AND SERVICES, OBTAINED OR PURCHASED BY YOU DIRECTLY OR INDIRECTLY THROUGH THE COMPANY SERVICE WILL MEET YOUR EXPECTATIONS OR NEEDS; AND (V) ANY ERRORS IN THE COMPANY SERVICE WILL BE CORRECTED. </p>
                            </div>
                            <div className={classes.sectionGroup}>
                                <p>THE COMPANY PARTIES SHALL NOT UNDER ANY CIRCUMSTANCES BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING OUT OF, IN CONNECTION WITH OR RELATING TO THE USE OF OR INABILITY TO USE THE COMPANY SERVICE, INCLUDING ANY LIABILITY: (I) AS A PUBLISHER OF INFORMATION; (II) FOR ANY INCORRECT OR INACCURATE INFORMATION OR ANY ‘BUG’ OF THE COMPANY SERVICE; (III) FOR ANY UNAUTHORIZED ACCESS TO OR DISCLOSURE OF YOUR TRANSMISSIONS OR DATA; (IV) FOR STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON OR VIA THE COMPANY SERVICE; (V) FOR ANY DISPUTES BETWEEN USERS OF THE COMPANY SERVICE OR BETWEEN A USER OF THE COMPANY SERVICE AND A THIRD PARTY; OR (VI) FOR ANY OTHER MATTER RELATING TO THE COMPANY SERVICE OR ANY THIRD PARTY. THIS IS A COMPREHENSIVE LIMITATION OF LIABILITY THAT APPLIES TO ALL DAMAGES OF ANY KIND, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES, WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR OTHERWISE, EVEN IF AN INDIVIDUAL ADVISES THE COMPANY PARTIES OF THE POSSIBILITY OF SUCH DAMAGES. THE LIMITATIONS OF LIABILITY SET FORTH HEREIN ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN COMPANY AND YOU. THE PRODUCTS, INFORMATION AND SERVICES OFFERED ON AND THROUGH THE COMPANY SERVICE WOULD NOT BE PROVIDED TO YOU WITHOUT SUCH LIMITATIONS.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p>NOTWITHSTANDING THE FOREGOING, THE SOLE AND ENTIRE MAXIMUM LIABILITY OF THE COMPANY PARTIES FOR ANY REASON, AND YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY CAUSE OR CLAIM WHATSOEVER, SHALL BE LIMITED TO THE CHARGES PAID BY YOU DIRECTLY TO COMPANY VIA THE COMPANY SERVICE FOR SERVICES PROVIDED SOLELY AND DIRECTLY BY COMPANY TO YOU IN THE SIX MONTHS PRIOR TO SUCH CAUSE OR CLAIM.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p>SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR CERTAIN TYPES OF DAMAGES. ACCORDINGLY, SOME OF THE ABOVE DISCLAIMERS AND LIMITATIONS MAY NOT APPLY TO YOU.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p>If you are a California resident, you shall and hereby do waive California Civil Code Section 1542, which says: “A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which, if known by him must have materially affected his settlement with the debtor.” </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>15.</span><b>Indemnification.</b> You agree to indemnify, defend and hold harmless the Company Parties against all claims, demands, causes of action, losses, expenses, damages and costs (including any reasonable attorneys’ fees), resulting or arising from or relating to your use of the Company Service, any activity related to your account by you or any other person permitted by you, any Content that you submit to, post on or transmit through the Company Service, your breach of these Terms of Service, your infringement or violation of any rights of another, or termination of your access to the Company Service. We reserve the right to assume, at our sole expense, the exclusive defense and control of any such claim or action and all negotiations for settlement or compromise, and you agree to fully cooperate with us in the defense of any such claim, action, settlement or compromise negotiations, as requested by us.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>16.</span><b>Fees.</b> Company may collect a transaction fee in the event of a transaction taking place between Buyers and Sellers in accordance with the Terms and Conditions elsewhere contained on the Site.</p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.</span><b>Memberships and Subscriptions.</b> </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.1</span> Memberships: Company may from time to time offer Membership and/or Subscription Plans (the “Plan”).  In such an event your participation in a Plan may require identity validation as part of creating an account.  Company may ask you for credit card data as part of that validation process. Your contract for the purchase of a Plan is completed once you confirm your purchase and performance of this contract begins as soon as the purchase is complete. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.2</span> Term: The Member's access to the site, services and content is based upon Member's express agreement and adherence to these Terms of Service and to Member's fully paid membership and/or other fees. Member's membership to the Site shall be for the initial term (e.g., daily, monthly, quarterly, semi-annually or annually) as may be agreed by Member and Company through online registration, telephone order or otherwise, and shall automatically renew for indefinite successive renewal terms for the same period as the initial term or on a month to month basis, depending on agreed upon terms, unless terminated by Member or Company in accordance with the provisions of these Terms of Service.  </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.3</span> Promotional Offers: Company may from time to time make promotional offers to New Members only for a one-time use. Existing Members may not participate on new promotions nor will be able to price match their existing plans to ongoing promotional offers. If a New Member accepts a special or introductory promotional offer for a membership, then at the conclusion of the initial term specified in such special introductory promotional offer, the membership shall automatically renew and Member hereby authorizes Company to charge Member's credit card in advance on a month-to-month basis for indefinite successive renewal terms at the then prevailing regular published monthly retail rate at the time of such renewal until terminated in accordance with the provisions of these Terms of Service. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.4</span> Auto-Renewal: Member’s Plan shall auto-renew each thirty (30) days and/or on its initial term (e.g., daily, monthly, quarterly, semi-annually, or annually) and shall continue until terminated in accordance with Section 17.2 herein. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.5</span> Plan Downgrades: Member acknowledges and agrees that NO refund, offset or credit will be given for any membership or subscription downgrades. The Company may prorate the new plan price for the remainder of the initial term (e.g., daily, monthly, quarterly, semi-annually or annually) on any lower priced plan change. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.6</span> Plan Upgrades: The Company may prorate the new plan price for the remainder of the initial term (e.g., daily, monthly, quarterly, semi-annually or annually) on any higher plan price change.  </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.7</span> Cancel Plan: Member acknowledges and agrees that NO refund, offset or credit will be given for any membership or subscription before, during, or at the time of cancelation. If Member registers through a promotional offer, Member agrees to be enrolled into a month-to-month plan and/or initial term membership at the end of the promotional period if Member has not canceled the Membership prior to the expiration thereof. You may terminate your Plan at any time, such termination to be effective on the last day prior to the next billing cycle.  You shall continue to have access to the Plan until that date. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.8</span> Plan Types & Costs: Company may from time to time create new Plan Types (including, but not limited to: Basic Investor, Preferred Investor, First-Mover Investor, etc.) with select offerings and with privileged information and time-sensitive membership access.</p>
                                <div className={classes.listAlpha}>
                                    <p><span className={classes.pointNumber}>a.</span>Basic Investor: Plan offerings are displayed on the Site. Plan costs are non-refundable.</p>
                                    <p><span className={classes.pointNumber}>b.</span>Preferred Investor: Plan offerings are displayed on the Site. Plan costs are non-refundable.</p>
                                    <p><span className={classes.pointNumber}>c.</span>First-Mover Investor: Plan offerings are displayed on the Site. Plan costs are non-refundable.</p>
                                </div>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>17.9</span> Pricing: Pricing and availability of all Plans displayed through the Site are subject to change at any time before you click the button indicating that you want to purchase such Plan. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>18</span><b>Procedure for Notifying the Company of Copyright Infringement.</b> Those who believe that their copyrighted work has been infringed or are aware of other infringing material, should contact our Copyright Agent at the address listed below and provide us with the following information: </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <div className={classes.sbAddress}>
                                    <p>Sell Up Companies, Inc.<br />
                                    Copyright Action - Legal Dept.<br />
                                    154 Grand Street<br />
                                    New York, NY 10013<br />
                                    Email: info [a] sellup.co</p>
                                </div>
                                <div className={classes.listAlpha}>
                                    <p><span className={classes.pointNumber}>a.</span>An electronic or physical signature of a person authorized to act on behalf of the owner of the copyrighted work that has allegedly been infringed.</p>
                                    <p><span className={classes.pointNumber}>b.</span>Identification of the copyrighted work claimed to have been infringed.</p>
                                    <p><span className={classes.pointNumber}>c.</span>Information describing where the allegedly infringing material is located on the Company Service.</p>
                                    <p><span className={classes.pointNumber}>d.</span>Your address, telephone number, and email address.</p>
                                    <p><span className={classes.pointNumber}>e.</span>A written statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</p>
                                    <p><span className={classes.pointNumber}>f.</span>A statement by you that the above information in your notification is accurate and that, under penalty of perjury, you are the copyright owner or authorized to act on the copyright owner’s behalf.  The foregoing information may be emailed or mailed to our Copyright Agent at the addresses listed at the end of this Terms of Service.<br />Following receipt of the information listed above, we will remove or disable access to the infringing material and take reasonable steps to notify the user responsible for posting said material. The posting of infringing copyrighted material may result in the termination of user privileges of such user.</p>
                                </div>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>19.</span><b>U.S. Export Controls.</b> The Company Service may be subject to United States export controls. No part of the Company Service may be exported or re-exported into any country to which the U.S. has embargoed goods or to anyone on the U.S. Treasury Department’s list of Specially Designated Nationals or the U.S. Commerce Department’s Table of Deny Orders. By using the Company Service, you represent and warrant that you are not located in, under the control of, or a national or resident of any such country or on any such list. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>20.</span><b>Miscellaneous.</b> These Terms of Service constitute the entire agreement between Company and each user of the Company Service with respect to the subject matter of these Terms of Service. </p>
                                <div className={classes.listAlpha}>
                                    <p><span className={classes.pointNumber}>a.</span>If any provision of these Terms of Service shall be deemed unlawful, void or for any reason unenforceable by a court of competent jurisdiction, the validity and enforceability of any remaining provisions will not be affected.</p>
                                    <p><span className={classes.pointNumber}>b.</span>The failure of the Company Parties to insist upon strict adherence to any term of these Terms of Service shall not constitute a waiver of such term and shall not be considered a waiver or limit that party’s right thereafter to insist upon strict adherence to that term or any other term contained in these Terms of Service.  You may not assign your obligations or rights hereunder to another entity or individual. We may transfer, assign or delegate these Terms of Service and its rights and obligations without your consent.</p>
                                    <p><span className={classes.pointNumber}>c.</span>We shall have no liability to you hereunder if we are prevented from or delayed in performing our obligations, or from carrying on our business, by acts, events, omissions or accidents beyond our reasonable control, including, without limitation, strikes, lock-outs or other industrial disputes (whether involving the workforce of us or any other party), failure of a utility service or transport or telecommunications network, act of God, war, riot, civil commotion, malicious damage, compliance with any law or governmental order, rule, regulation or direction, accident, breakdown of plant or machinery, fire, flood or storm.</p>
                                    <p><span className={classes.pointNumber}>d.</span>Except as may be otherwise stated herein, no agency, partnership, joint venture, or employment is created as a result of these Terms of Service and you do not have any authority of any kind to bind us in any respect whatsoever.</p>
                                    <p><span className={classes.pointNumber}>e.</span>The Parties acknowledge that Company may be acting in its capacity as a dual agent wherein the Broker works for both the Buyer and Seller simultaneously for the purposes of any real estate property closings in accordance with the New York State Real Estate License Law (“Dual Agency”).    By using the Services, both Parties hereby consent to the dual agency relationship Company may have with the Parties.</p>
                                    <p><span className={classes.pointNumber}>f.</span>No action arising out of these Terms of Service or your use of the Company Service, regardless of form or the basis of the claim, may be brought by you more than one (1) year after the cause of action has arisen (or if multiple causes, from the date the first such cause arose).</p>
                                </div>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>21</span><b>Applicable Law and Jurisdiction. </b>  </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>21.1</span>Your use of the Company Service is governed by and will be enforced under the laws of the State of New York without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within this stated Jurisdiction.  You agree that printed copies of any and all agreements and/or notices in electronic form are admissible in any legal or regulatory proceedings.  Any controversy, claim, suit, injury or damage arising from or in any way related to the Company Service or these Terms of Service shall be settled by binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association then in effect and before a single arbitrator chosen by Company. Any such controversy, claim, suit, injury or damage shall be arbitrated on an individual basis and shall not be consolidated in any arbitration with any controversy, claim, suit, injury or damage of any other party. Company may seek any interim or preliminary relief from a court of competent jurisdiction in the State listed above necessary to protect its rights pending the completion of arbitration. Each party shall assume its own costs of arbitration. IN ANY CLAIM, ACTION OR PROCEEDING TO ENFORCE ANY RIGHT OR OBLIGATION OF THE PARTIES UNDER THE TERMS OF SERVICE INCLUDING, WITHOUT LIMITATION, RELATING TO YOUR USE OF THE COMPANY SERVICE, YOU HEREBY WAIVE ANY RIGHT YOU MAY NOW HAVE OR HEREAFTER POSSESS TO A TRIAL BY JURY. </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>21.2</span>No Class Arbitration, Class Action or Representative Actions. Any dispute arising out of or related to this Agreement is personal to you and the Company and will be resolved solely through individual arbitration and will not be brought as a class arbitration, class action or any other type of representative proceeding. There will be no class arbitration or arbitration in which an individual attempt to resolve a dispute as a representative of another individual or group of individuals. Further, a dispute cannot be brought as a class or other type of representative action, whether within or outside of arbitration, or on behalf of any other individual or group of individuals.  </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><span className={classes.pointNumber}>22</span><b>Customer Service.</b> If you have any comments or questions regarding these Terms of Service or wish to report any violation of these Terms of Service, you may contact us at Sell Up Companies, Inc. 154 Grand Street, New York, NY 10013 or at info [a] sellup.co.  </p>
                            </div>

                            <div className={classes.sectionGroup}>
                                <p><strong><i>Last Updated:  August 1, 2019</i></strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(staticPageStyle)(TermsAndConditions);