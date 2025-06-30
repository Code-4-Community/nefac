import NewsLetter from "@/components/subscribe-page/NewsLetter";
import React from "react";
import { newsletters } from "../../lib/constants/subscribe/newsletters";

export const SubscribePage: React.FC = () => {
  return (
    <div className="px-5 md:px-24 pt-12 flex flex-row flex-wrap gap-4">
      <div className="hidden md:flex flex-row gap-12 items-center mb-12">
        <div className="flex flex-col w-2/3">
          <h1 className="text-nefacblue font-bold text-5xl my-8">Subscribe</h1>
          <p className="font-poppins font-bold text-[20px] leading-[150%] tracking-[0%]">
            Thank you for your help protecting First Amendment freedoms and the
            public’s right to know about government. We want to keep you
            informed about NEFAC advocacy and events in a way that’s most
            convenient for you.
          </p>
          <p className="font-poppins text-[20px] leading-[150%] tracking-[0%] mt-5">
            Already a subscriber but want to change your newsletter preferences?
            Just click the “Change Profile” link at the bottom of any recent
            NEFAC email. You can also view all previous newsletters here.
          </p>
        </div>
        <div className="flex w-1/2">
          <img
            src="/images/subscribe.png"
            alt="subscribe image"
            className="rounded-lg"
          />
        </div>
      </div>
      <div>
        <h1 className="text-nefacblue font-bold text-3xl w-full">
          Newsletters
        </h1>
        <p className="p-0 m-0">
          Below are several newsletter options based on your personal interests:
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
        {newsletters.map(
          ({ title, description, url, extraStyles, variant }, index) => (
            <NewsLetter
              key={index}
              title={title}
              description={description}
              url={url}
              extraStyles={extraStyles}
              variant={variant}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SubscribePage;
