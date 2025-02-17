'use client';

import { Inter, Poppins } from 'next/font/google';
import React from 'react';

const inter = Inter({ 
    weight: [ '400', '500', '600', '700'],
    subsets: ['latin'] 
});
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

const styles = {
  mainBlue: 'rgba(47,92,159,1)',
  textBox: `bg-[rgba(47,92,159,1)] text-white py-7 px-6 rounded-[24px] text-[15px]`,
  planCard: `bg-white border-[4px] border-[rgba(47,92,159,1)] rounded-[24px] p-4 pt-12 flex flex-col items-center shadow-md`,
  planType: `w-[95%] mx-auto bg-[rgba(47,92,159,1)] text-white text-center py-2 rounded-full text-2xl mb-8 font-medium`,
  priceContainer: `text-center mb-10`,
  priceWrapper: `flex items-end justify-center gap-1`,
  dollarSign: `text-[rgba(31,31,31,1)] text-3xl self-end leading-none`,
  priceNumber: `text-[rgba(47,92,159,1)] text-6xl font-bold leading-none translate-y-1`,
  priceYear: `text-[rgba(174,174,174,1)] text-2xl self-end leading-none font-semibold`,
  planButton: `bg-[rgba(47,92,159,1)] text-white px-5 py-2 mb-2 rounded-full hover:bg-[rgba(37,73,127,1)] transition-colors text-center text-m font-medium no-underline`,
  gradientText: `text-2xl font-bold mb-4 bg-gradient-to-r from-[rgba(70,71,88,1)] to-[rgba(13,22,126,1)] text-transparent bg-clip-text`,
  linkText: `underline`
} as const;

const SustainingMembershipsPage: React.FC = () => {
  return (
    <main className={`${inter.className} max-w-6xl mx-auto px-4 py-12`}>
      <h1 className={`${poppins.className} text-5xl font-bold text-[${styles.mainBlue}] mb-12`}>
        Sustaining Memberships
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className={`${poppins.className} ${styles.textBox}`}>
          <p className="mb-6">
          At the highest levels of government, the press is denounced as "the enemy of the people." Media outlets are derided as purveyors of "fake news." Reporters covering events are being threatened with violence and even assaulted.
          </p>
          <p className="mb-6">
          Government officials are impeding press and citizen access to public records. They are withholding vital information about matters of public interest. 
          </p>
          <p>
          NEFAC is pushing back. We invite you to join the fight by becoming a sustaining member of our coalition of journalists, attorneys, educators and concerned citizens working to protect First Amendment freedoms and the public's right know about their government.
          </p>
        </div>

        <div>
          <h2 className={styles.gradientText}>
            Membership Plans
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={styles.planCard}>
              <div className={styles.planType}>
                INDIVIDUAL
              </div>
              <div className={styles.priceContainer}>
                <div className={styles.priceWrapper}>
                  <span className={styles.dollarSign}>$</span>
                  <span className={styles.priceNumber}>50</span>
                  <span className={styles.priceYear}>/year</span>
                </div>
              </div>
              <a 
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C5TZ8H969KLV6"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.planButton}
              >
                Choose Plan
              </a>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planType}>
                STUDENT
              </div>
              <div className={styles.priceContainer}>
                <div className={styles.priceWrapper}>
                  <span className={styles.dollarSign}>$</span>
                  <span className={styles.priceNumber}>20</span>
                  <span className={styles.priceYear}>/year</span>
                </div>
              </div>
              <a 
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A7JYPNF3YK7UA"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.planButton}
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className={styles.gradientText}>Previous Perks</h2>
          <ul className="space-y-3 text-lg list-square pl-4">
            <li>Free Hardcopy of "#FreePress: A Collection of Essays"</li>
            <li>Complimentary Tickets to New England First Amendment Awards</li>
            <li><a href="#" className={styles.linkText}>First Amendment & Free Press</a></li>
            <li><a href="#" className={styles.linkText}>FOI Guides</a></li>
            <li><a href="#" className={styles.linkText}>Legal Briefs, Letters & Statements</a></li>
            <li><a href="#" className={styles.linkText}>NEFAC Mentors</a></li>
            <li><a href="#" className={styles.linkText}>Negri Institute</a></li>
          </ul>
        </div>

        <div>
          <h2 className={styles.gradientText}>Want to gift a membership?</h2>
          <p className="text-lg">
            Just purchase one of the plans above and <span className="font-bold">send the recipient's name and email address to{' '}
            <a href="mailto:justin@nefac.org" className={styles.linkText}>
              justin@nefac.org
            </a>
            .</span>
          </p>
        </div>
      </div>

      <div className="mt-12 text-lg">
        <p>
          Thank you for joining NEFAC and being a part of this important fight to protect our most cherished freedoms. 
          Your annual contribution will provide vital support for NEFAC's programs. By becoming a sustaining member, 
          you will be able to engage with NEFAC in new ways and to network with our members, supporters and Board of Directors.
        </p>
      </div>
    </main>
  );
};

export default SustainingMembershipsPage; 