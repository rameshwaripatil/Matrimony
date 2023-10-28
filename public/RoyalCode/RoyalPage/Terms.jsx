import React from 'react'
import { useEffect } from 'react'

const Terms = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [])
    return (
        <div className="container ">
            <div className="row row-cols-md-7 row-cols-1  align-items-center">
                <div className="col m-5 p-5">
                    <h2 className='mb-5'>Terms & Conditions: </h2>
                    <p className='m-2'>

                        <span>Welcome to royalmarriagebureau.com, a matrimonial project owned and operated by royalmarriagebureau.com. By using this website, you agree to comply with the following terms and conditions:</span>

                        <span>1. Information Accuracy: The information provided about matrimonial candidates is based on the data supplied by the candidates themselves. We do not guarantee the truthfulness or accuracy of the information received. Users are advised to verify and satisfy themselves about the information through other means of their choice.</span>

                        <span>2. Accessibility: The accessibility of the website may vary depending on factors beyond our control. We do not guarantee uninterrupted accessibility from all locations.</span>

                        <span>3. Misuse of Information: The candidate's information and photographs are available on the internet, and we do not guarantee that they will not be misused by others. We may also utilize your profile on social media platforms for your benefit.
                        </span>

                        <span>4. Member Information: After registration, member information will be accessible to all registered candidates. Please exercise caution while sharing personal information on the website.</span>

                        <span>5. Registration Charges: Registration charges are collected solely for the purpose of displaying your profile on our website. These charges are non-refundable.

                        </span>
                        <span>6. Database Protection: We take care of the member database on royalmarriagebureau.com, but in the event of any technical errors or loss of data, we will not be held responsible.</span>

                        <span>7. Approval of Profiles: Approvals from the company side will be granted once payment is received or clearance of the provided payment method. We reserve the right to approve or reject profiles at our discretion.</span>

                        <span>8. Franchise Members: Profiles of franchise members will be listed on royalmarriagebureau.com for a specified period according to the scheme. The availability of the website is subject to various factors and external agencies beyond our control. We do not guarantee 24x7 availability.</span>

                        <span>9. Profile Data Responsibility: Franchise members are responsible for the accuracy and data of the profiles they upload until the profile holder edits or changes the data.</span>

                        <span>10. Profile Security: Profile holders should change their passwords regularly and avoid sharing them with others to ensure the security of their data.</span>

                        <span>11. Email Communication: Profile holders will receive emails as long as their profiles are active on royalmarriagebureau.com.</span>

                        <span>12. Profile Contact Details: Profile holders can view a maximum of 6 profile contact details within a span of 3 days.</span>

                        <span>13. Disputes: Any dispute relating to the site or service will be governed by the laws of India. You agree to the exclusive jurisdiction of the courts of Baramati, Tal - Baramati, Dist - Pune, India.</span>

                        <span>14. Admin Approval: The right to approve or reject profiles rests with the admin of royalmarriagebureau.com. Profile holders are not compelled to seek approval from any third party.</span>

                        <span>15. Misuse and Deletion of Profiles: In case of complaints or misuse of the website, the website admin reserves the right to delete the profile in question.</span>

                        <span>16. Profile Validity: The profile holder's profile will remain valid on the website for a maximum period of one year.</span>

                        By using royalmarriagebureau.com, you acknowledge and agree to abide by these terms and conditions.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Terms;
