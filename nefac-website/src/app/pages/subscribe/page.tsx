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
                
            </div>
        </>
    );
}

export default SubscribePage;