'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { SlArrowRight } from "react-icons/sl";

const links = [
  {
    title: '30 Minute Skills',
    href: '/30-minute-skills'
  },
  {
    title: 'Commentary & Coverage',
    href: '/commentary-coverage'
  },
  {
    title: 'First Amendment & Free Press',
    href: '/first-amendment'
  },
  {
    title: 'FOI Guides',
    href: '/foi-guides'
  },
  {
    title: 'Legal Briefs, Letters & Statements',
    href: '/legal-briefs'
  },
  {
    title: 'NEFAC Mentors',
    href: '/mentors'
  },
  {
    title: 'Negri Institute',
    href: '/negri-institute'
  }
];

const styles = {
  container: `bg-nefacblue text-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-8 md:p-12 font-inter overflow-hidden`,
  titleWrapper: `relative mb-8`,
  title: `text-4xl font-bold`,
  whiteLine: `absolute top-1/2 -translate-y-1/2 h-[5px] bg-white rounded-full left-[300px] right-[-100px]`,
  contentGrid: `grid md:grid-cols-[1.0fr,0.7fr] gap-12`,
  video: `w-full aspect-video rounded-lg`,
  learnSection: ``,
  learnTitle: `text-xl mb-6`,
  linksList: `space-y-2`,
  linkItem: `flex items-center gap-2`,
  bulletPoint: `w-[5px] h-[5px] bg-white shrink-0`,
  link: `flex items-center justify-between w-full text-lg hover:opacity-80 transition-opacity group`,
  arrow: `w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1`
} as const;

export const WhatIsNefacVideo: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>What is NEFAC?</h2>
        <div className={styles.whiteLine}></div>
      </div>
      
      <div className={styles.contentGrid}>
        <div>
          <iframe 
            className={styles.video}
            src="https://www.youtube.com//embed/XMNjXuZ8OBA"
            title="What is NEFAC?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className={styles.learnSection}>
          <h3 className={styles.learnTitle}>Learn About Our Work</h3>
          <ul className={styles.linksList}>
            {links.map((link) => (
              <li key={link.href} className={styles.linkItem}>
                <span className={styles.bulletPoint}></span>
                <Link 
                  to={link.href}
                  className={styles.link}
                >
                  <span>{link.title}</span>
                  <SlArrowRight className={styles.arrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
