interface Newsletters {
  title: string;
  description: string;
  url: string;
  extraStyles?: string;
  variant: "generalNewsletter" | "stateNewsletter";
}

export const newsletters: Newsletters[] = [
  {
    title: "All Mailings",
    description:
      "Receive all NEFAC news and programming updates including our commentary and news coverage, monthly NEFAC Advocacy report, state bulletins and our First Amendment and Sunshine News briefing.",
    url: "https://lp.constantcontactpages.com/sl/YlNDCRU/allnefacmailings",
    extraStyles: "flex-col md:flex-row col-span-2 md:col-span-4",
    variant: "generalNewsletter",
  },
  {
    title: "First Amendment & Sunshine News",
    description:
      "Receive our monthly roundup of all First Amendment and open government news within New England and across the country.",
    url: "https://lp.constantcontactpages.com/sl/Ymsk67y/firstamendmentandsunshine",
    variant: "generalNewsletter",
  },
  {
    title: "Advocacy",
    description:
      "Our monthly roundup of coalition advocacy throughout the region. Stay on top of the issues leading NEFAC’s agenda in New England and how we’re moving the needle in each state.",
    url: "https://lp.constantcontactpages.com/sl/MrulG8H/nefacadvocacy",
    variant: "generalNewsletter",
  },
  {
    title: "Commentary & Coverage",
    description:
      "A monthly summary of where our advocacy is appearing & a way to stay updated on First Amendment and open government concerns.",
    url: "https://lp.constantcontactpages.com/sl/EH0YjCf/commentaryandcoverage",
    variant: "generalNewsletter",
  },
  {
    title: "Community",
    description:
      "Join our community of curious, democracy-minded folks. Each month, learn how to attend our events, classes, and presentations.",
    url: "https://lp.constantcontactpages.com/sl/SaSzTzC/nefaccommunity",
    variant: "generalNewsletter",
  },
  {
    title: "State\nNewsletters",
    description:
      "In addition to the newsletters above, \n you can receive bulletins specific to each New England state:",
    url: "https://lp.constantcontactpages.com/sl/Ymsk67y/firstamendmentandsunshine",
    extraStyles: "flex-col md:flex-row col-span-2 md:col-span-4 flex-1",
    variant: "stateNewsletter",
  },
];
