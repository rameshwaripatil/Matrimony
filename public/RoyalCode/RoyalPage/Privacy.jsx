import React, { useEffect } from 'react'

const Privacy = () => {
    useEffect(()=>{  
        window.scrollTo({
        top: 0,
        behavior: "smooth",
      })},[]);
    return (
        <div className="container ">
            <div className="row row-cols-md-8 row-cols-1  align-items-center">
                <div className="col m-5 p-5">
                    <h2 className='mb-5'>Privacy Policy: </h2>
                    <p className='m-2'>
                        <span> At royalmarriagebureau.com, we value the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your personal information. By using our website, you consent to the practices described herein.</span>

                        <span>1. Collection of Information:
                            We collect personal information provided by you during the registration process, including but not limited to your name, contact details, and demographic information. Additionally, we may gather information through cookies and similar technologies to enhance your browsing experience.
                        </span>

                        <span>2. Use of Information:
                            We utilize the information you provide to facilitate matrimonial matches, personalize your experience, and communicate with you regarding our services. We may also use your information for internal analysis and to improve our website and services.</span>

                        <span>3. Data Sharing:
                            We may share your personal information with registered candidates or other trusted third parties involved in the matrimonial process. However, we do not sell or rent your information to third-party advertisers. We take reasonable measures to ensure that these third parties maintain the confidentiality and security of your information.
                        </span>

                        <span>4. Website Security:
                            We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</span>

                        <span>5. Third-Party Links:
                            Our website may contain links to third-party websites for your convenience. However, we do not endorse or have control over the content, privacy practices, or security of these linked websites. We encourage you to review the privacy policies of these third-party sites before providing any personal information.</span>

                        <span>6. Advertising:
                            We do not endorse any advertisers on our website, and any interactions or transactions with advertisers are solely between you and the advertiser. We recommend verifying the accuracy of the information provided by advertisers before relying on it.</span>


                        <span>7. Changes to the Privacy Policy:
                            We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website. We encourage you to review the Privacy Policy periodically to stay informed about how we collect, use, and protect your information.</span>

                        <span>8. Contact Us:
                            If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us through the provided contact information on our website.</span>

                        By using royalmarriagebureau.com, you acknowledge and agree to the terms outlined in this Privacy Policy.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Privacy;
