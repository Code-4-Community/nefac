import React from 'react';
import NewsBubble from '@/app/components/news-bubble';

const newsItems = [
  {
    image: '/images/filler.jpeg',
    title: 'Proposed Maine Public Records Deadline Too Long and Will Invite Abuse',
    date: 'February 5, 2025',
    link: "/",
    header: false,
    headerPreview: "Coalition, Opposes LD 152 Which Would Allow Agencies 30 Days to Respond to Public Record Requests Under Freedom of Access Act The New England First Amendment Coalition submitted testimony today against a Maine bill that would allow state and local agencies 30 days to respond to public record requests."
  },
  {
    image: '/images/computer.png',
    title: 'Mass. Open Government Groups: Governor’s Proposal Will Close the Open Meeting Law',
    date: 'February 5, 2025',
    link: "/",
    header: false
  },
  {
    image: '/images/computer.png',
    title: 'Press Groups Argue Against Forced Disclosure of Reporter’s Notes in Karen Read Case',
    date: 'February 5, 2025',
    link: "/",
    header: false
  },
  {
    image: '/images/computer.png',
    title: 'Rhode Island Partners Again Offer Guidance as State Prepares Launch of Online Court Records System',
    date: 'February 5, 2025',
    link: "/",
    header: false
  },
  {
    image: '/images/filler.jpeg',
    title: 'Mass. Open Government Groups: Governor’s Proposal Will Close the Open Meeting Law',
    date: 'February 5, 2025',
    link: "/",
    header: false
  },
  {
    image: '/images/filler.jpeg',
    title: 'Mass. Open Government Groups: Governor’s Proposal Will Close the Open Meeting Law',
    date: 'February 5, 2025',
    link: "/",
    header: false
  },
  {
    image: '/images/filler.jpeg',
    title: 'Mass. Open Government Groups: Governor’s Proposal Will Close the Open Meeting Law',
    date: 'February 5, 2025',
    link: "/",
    header: false
  },
  {
    image: '/images/filler.jpeg',
    title: 'Mass. Open Government Groups: Governor’s Proposal Will Close the Open Meeting Law',
    date: 'February 5, 2025',
    link: "/",
    header: false
  },
]
export const NewsPage: React.FC = () => {
    return (
        <div className="px-36 pt-12 flex flex-row flex-wrap gap-4">
          <h1 className="text-nefacblue font-bold text-5xl">NEFAC News</h1>
          <NewsBubble
            image='/images/filler.jpeg'
            title="Proposed Maine Public Records Deadline Too Long and Will Invite Abuse"
            date="February 5, 2025"
            link="/"
            header={true}
            headerPreview="Coalition, Opposes LD 152 Which Would Allow Agencies 30 Days to Respond to Public Record Requests Under Freedom of Access Act The New England First Amendment Coalition submitted testimony today against a Maine bill that would allow state and local agencies 30 days to respond to public record requests."
          />
          <h2 className="text-nefacblue font-semibold text-4xl mb-4">Latest News</h2>
          <div className="grid grid-flow-row grid-cols-4 gap-8 gap-y-4 mb-6">
            {newsItems.map((newsItem) => (
              <NewsBubble
                image={newsItem.image}
                title={newsItem.title}
                date={newsItem.date}
                link={newsItem.link}
                header={newsItem.header}
                headerPreview={newsItem.headerPreview}
              />
            ))}
          </div> 
          <div className="flex justify-center w-full mb-32">
            <div className="bg-nefacblue text-white rounded-lg p-2 px-20 font-semibold items-center">
                <p>Show More</p>
            </div>
          </div>     
        </div>
      );
}

export default NewsPage;