import React from 'react';
import { ImageCollageWrapper } from '@/components/mission-page/ImageCollage';
import { gql } from '@apollo/client';
import { getNextServerSideProps } from '@faustwp/core';
import Page from '../[...wordpressNode]';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

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

interface editorBlocks {
  type: string;
  renderedHtml: string;
}
  
const MissionPage = (props: any) => {
  
  const { data } = props

  const heading = data.page.editorBlocks.filter((block: editorBlocks) => block.type === "CoreHeading");
  const paragraphText = data.page.editorBlocks.filter((block: editorBlocks) => block.type === "CoreParagraph");
  
  const title = heading[0].renderedHtml
  const paragraphOne = paragraphText[0].renderedHtml
  const taxInfo = paragraphText[1].renderedHtml

  return (
    <div className="min-h-screen">
      <section className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <div className={styles.title} dangerouslySetInnerHTML={{__html: title}}></div>
            <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: paragraphOne}}></div>
            <div className={styles.taxInfo} dangerouslySetInnerHTML={{__html: taxInfo}}></div>
          </div>
        </div>
        <div className={styles.imageSection}>
            <ImageCollageWrapper />
        </div>
      </section>
    </div>
  );
};

MissionPage.query = gql`
  query GetMissionContents{
    page(id: "about", idType: URI) {
      editorBlocks {
        type
        renderedHtml
      }
    }
}`

export default MissionPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return getNextServerSideProps(context, {
    Page: MissionPage,
  });
}
