import React from 'react';
import { ImageCollageWrapper } from '@/components/mission-page/ImageCollage';

const styles = {
  container: `flex flex-row py-8 md:py-12 items-center`,
  contentWrapper: `flex flex-col w-2/3 px-24 md:flex-row`,
  textSection: `w-full space-y-4 text-md`,
  title: `text-3xl font-bold text-[rgba(47,92,159,1)] mb-8 font-poppins`,
  paragraph: `text-gray-700 font-inter text-lg`,
  highlight: `font-semibold text-[rgba(47,92,159,1)]`,
  imageSection: `w-full md:w-1/2 flex justify-center md:justify-end bg-nefacblue p-16 rounded-l-lg`,
  taxInfo: `mt-4 text-gray-600 font-inter`,
} as const;

const MissionPage = () => {
  return (
    <div className="min-h-screen">
      <section className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>NEFAC's MISSION</h2>
            
            <p className={styles.paragraph}>
              The New England First Amendment Coalition <strong>defends, promotes</strong>, and <strong>expands</strong>{' '}
              public access to government and the work it does. The 
              coalition is a broad-based organization of people who believe in the 
              power of transparency in a democratic society. Its members include{' '}
              <strong>lawyers, journalists, historians, librarians, and academicians</strong>, as well as 
              private citizens and organizations whose core beliefs include the 
              principles of the First Amendment.
            </p>
            
            <p className={styles.paragraph}>
              The coalition aspires to advance and <strong>protect the five freedoms of the 
              First Amendment</strong>, and the principle of the public's right to know, in{' '}
              <strong>Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont</strong>. 
              In collaboration with other like-minded advocacy 
              organizations, NEFAC also seeks to <strong>advance understanding of the 
              First Amendment</strong> across the nation and freedom of speech and press 
              issues around the world.
            </p>
            
            <p className={styles.taxInfo}>
              NEFAC is a 501(c)(3) non-profit organization. Tax ID: 20-4826233.
            </p>
          </div>
        </div>
        <div className={styles.imageSection}>
            <ImageCollageWrapper />
        </div>
      </section>
    </div>
  );
};

export default MissionPage;