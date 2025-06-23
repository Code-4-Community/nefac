import React, { ReactNode } from "react";
import { states } from "../lib/constants/subscribe/states";
interface NewsLetterProps {
  title: string;
  description: string;
  url: string;
  extraStyles?: string;
  variant: "generalNewsletter" | "stateNewsletter";
}

const styles = {
  // Container Borders
  containerBorderless: `border-0 md:border-[4px] shadow-none md:shadow-md`,
  containerBorder: `border-[4px] shadow-md`,

  // General Newletter
  generalTitle: `inline-block min-h-[39px] font-bold text-[20px] leading-[100%] tracking-[0%] font-[Poppins]`,
  generalContainer: `bg-white border-[rgba(47,92,159,1)] rounded-[10px] p-4 pt-6 flex justify-around`,
  generalButton: `w-fit bg-[rgba(47,92,159,1)] text-white px-5 py-2 mx-4 my-4 rounded-[10px] hover:bg-[rgba(37,73,127,1)] transition-colors text-center text-m font-semibold text-[14px] no-underline font-inter`,

  // State Newsletter
  statesTitle: `font-bold text-[#2F5C9F] text-[36px] leading-[100%] tracking-[0%] font-[Roboto] md:whitespace-pre-line`,
  statesButton: `bg-[rgba(47,92,159,1)] text-[16px] text-white px-5 py-2 rounded-[10px] hover:bg-[rgba(37,73,127,1)] transition-colors text-center md:text-[24px] font-semibold no-underline self-center w-[220px]] text-nowrap`,

  // Generic Description
  descriptionContainer:
    "font-thin text-[14px] leading-[150%] tracking-[0%] font-[Poppins] mt-2 whitespace-pre-line block",
};

const NewsLetter: React.FC<NewsLetterProps> = ({
  title,
  description,
  url,
  extraStyles = "flex-col",
  variant,
}) => {
  return (
    <div
      className={`${
        variant === "stateNewsletter"
          ? styles.containerBorderless
          : styles.containerBorder
      } ${styles.generalContainer} ${extraStyles}`}
    >
      <div>
        <span
          className={
            variant === "generalNewsletter"
              ? styles.generalTitle
              : styles.statesTitle
          }
        >
          {title}
        </span>
        <span className={`${styles.descriptionContainer} mb-5 md:mb-0`}>
          {description}
        </span>
      </div>
      {variant == "generalNewsletter" ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.generalButton} ${
            title === "All Mailings" ? `self-end` : `self-center`
          }`}
        >
          Subscribe
        </a>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {states.map(({ state, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.statesButton}
            >
              {state}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsLetter;
