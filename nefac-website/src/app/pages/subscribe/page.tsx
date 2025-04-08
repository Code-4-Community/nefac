import NewsLetter from '@/app/components/NewsLetter';
import React from 'react';


export const SubscribePage: React.FC = () => {
    return (
        <>
            <div className="px-36 pt-12 flex flex-row flex-wrap gap-4">
                <h1 className="text-nefacblue font-bold text-5xl">Subscribe</h1>
                <div className="flex gap-8">
                    <div className="flex-1">
                        <p className="font-poppins font-bold text-[20px] leading-[150%] tracking-[0%]">
                            Thank you for your help protecting First Amendment freedoms and the public’s right to know about government. We want to keep you informed about NEFAC advocacy and events in a way that’s most convenient for you.
                        </p>
                        <p className="font-poppins text-[20px] leading-[150%] tracking-[0%] mt-5">
                            Already a subscriber but want to change your newsletter preferences? Just click the “Change Profile” link at the bottom of any recent NEFAC email. You can also view all previous newsletters here.
                        </p>
                    </div>
                    <div className="flex-1">
                        <img src="/public/images/subscribe.png" alt='subscribe image' className='rounded-lg'/>
                    </div>
                </div>
                <h1 className="text-nefacblue font-bold text-3xl mt-4 mb-4">Newsletters</h1>
                <div className="grid grid-cols-4 gap-4">
                    <NewsLetter
                        title="All NEFAC Mailings"
                        description="Receive all NEFAC news and programming updates including our commentary and news coverage, monthly NEFAC Advocacy report, state bulletins and our First Amendment and Sunshine News briefing."
                        url="https://lp.constantcontactpages.com/sl/YlNDCRU/allnefacmailings"
                    />
                    <NewsLetter
                        title="NEFAC Advocacy"
                        description="Our monthly roundup of coalition advocacy throughout the region. Stay on top of the issues leading NEFAC’s agenda in New England and how we’re moving the needle in each state."
                        url="https://lp.constantcontactpages.com/sl/MrulG8H/nefacadvocacy"
                    />
                    <NewsLetter
                        title="NEFAC Commentary and Coverage"
                        description="Our expert commentary appears across the country. This is a monthly summary of where our advocacy is appearing and an easy way for you to keep in tune with current First Amendment and open government concerns."
                        url="https://lp.constantcontactpages.com/sl/EH0YjCf/commentaryandcoverage"
                    />
                    <NewsLetter
                        title="NEFAC Community"
                        description="Join our growing community of journalists, attorneys, academics and other curious, democracy-minded folks. Each month, we’ll let you know how you can attend the coalition’s many events, classes and presentations."
                        url="https://lp.constantcontactpages.com/sl/SaSzTzC/nefaccommunity"
                    />

                    <NewsLetter
                        title="First Amendment and Sunshine News"
                        description="Receive our monthly roundup of all First Amendment and open government news within New England and across the country."
                        url="https://lp.constantcontactpages.com/sl/Ymsk67y/firstamendmentandsunshine"
                    />
                </div>
            </div>
        </>
    );
}

export default SubscribePage;