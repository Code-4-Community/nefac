import React from 'react';
import { ImageCollageWrapper } from '../app/components/ImageCollage';

const styles = {
  container: `max-w-6xl mx-auto px-4 py-12 md:py-16`,
  contentWrapper: `flex flex-col md:flex-row gap-8 md:gap-12`,
  textSection: `w-full md:w-2/3 space-y-4 text-md`,
  title: `text-2xl font-bold text-[rgba(47,92,159,1)] mb-8 font-poppins`,
  paragraph: `text-gray-700 font-inter`,
  highlight: `font-semibold text-[rgba(47,92,159,1)]`,
  imageSection: `w-full md:w-1/2 flex justify-center md:justify-end`,
  taxInfo: `mt-4 text-gray-600 font-inter`,
} as const;


export default function NefacMission() {
  return (
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
        
        <div className={styles.imageSection}>
          <ImageCollageWrapper />
        </div>
      </div>
    </section>
  );
} 