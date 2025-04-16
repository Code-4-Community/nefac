import NewsStory from "./NewsStory"
import { RightOutlined } from '@ant-design/icons';

const Sidebar = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-4 flex-1 max-w-xs bg-nefacblue rounded-md">
    {children}
  </div>
);

export const NewsSection = () => {
    return (
        <div className="mb-5">
            <div className="flex flex-col gap-4 pb-0 px-6 bg-white h-100 relative" >
                <div className="flex items-center">
                    <h2 className="text-nefacblue font-bold text-3xl whitespace-nowrap">NEFAC News</h2>
                    <div className="flex-grow h-2 bg-nefacblue rounded ml-4" />
                    <a href="/nefac-news"><p className="ml-4 text-nefacblue font-bold whitespace-nowrap">Latest News <RightOutlined/></p></a>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 p-6">
                
                {/* Left Sidebar */}
                <Sidebar>
                    <NewsStory imageSrc="public/images/filler.jpeg" title="Other relevant initiative titles for user to navigate through" date="February 5, 2025" />
                    <NewsStory imageSrc="public/images/filler.jpeg" title="Other relevant initiative titles for user to navigate through" date="February 5, 2025" />
                </Sidebar>

                {/* Center Content */}
                <div className="flex-[2] min-w-0">
                        <img src="public/images/filler.jpeg" alt="Main" className="rounded-md mb-4 w-full object-cover" />
                        <h2 className="text-xl font-bold mb-2">
                        NEFAC, R.I. Open Government Groups Renew Call for Changes to Police Body Camera Policies
                        </h2>
                        <p className="text-gray-700">
                        Over the years, government officials and politicians have established so-called “First Amendment areas”...
                        </p>
                </div>

                {/* Right Sidebar */}
                <Sidebar>
                    <NewsStory imageSrc="public/images/filler.jpeg" title="Other relevant initiative titles for user to navigate through" date="February 5, 2025" />
                    <NewsStory imageSrc="public/images/filler.jpeg" title="Other relevant initiative titles for user to navigate through" date="February 5, 2025" />
                </Sidebar>
            </div>

        </div>
    )
}