import NewsStory from "./NewsStory"
import { ChevronRight } from "@mui/icons-material";

const Sidebar = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-4 flex-1 max-w-xs bg-nefacblue rounded-md">
    {children}
  </div>
);

export const NewsSection = () => {
    return (
        <div className="mb-16 px-6 md:px-20 max-w-full">
            <div className="flex flex-col gap-4 pb-0 px-6 bg-white h-100 relative" >
                <div className="flex items-center">
                    <h2 className="text-nefacblue font-bold text-3xl whitespace-nowrap">NEFAC News</h2>
                    <div className="flex-grow h-2 bg-nefacblue rounded ml-4" />
                    <a href="/nefac-news">
                      <p className="ml-4 text-nefacblue font-bold whitespace-nowrap flex items-center">
                        Latest News <ChevronRight fontSize="large"/>
                      </p>
                    </a>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 p-6 overflow-hidden">
                {/* Left Sidebar */}
                <Sidebar>
                    <NewsStory imageSrc="/images/filler.jpeg" title="Other relevant initiative titles for user to navigate through" date="February 5, 2025" />
                    <NewsStory imageSrc="/images/filler.jpeg" title="Other relevant initiative titles for user to navigate through" date="February 5, 2025" />
                </Sidebar>

                {/* Center Content */}
                <div className="flex-[2] min-w-0">
                    <img src="/images/filler.jpeg" alt="Main" className="rounded-md mb-4 w-full object-cover" />
                    <h2 className="text-xl font-bold mb-2">
                      NEFAC, R.I. Open Government Groups Renew Call for Changes to Police Body Camera Policies
                    </h2>
                    <p className="text-gray-700">
                      Over the years, government officials and politicians have established so-called "First Amendment areas"...
                    </p>
                </div>

                {/* Right Sidebar */}
                <Sidebar>
                    <NewsStory imageSrc="/images/filler.jpeg" title="Other relevant initiative titles for user to navigate through" date="February 5, 2025" />
                    <NewsStory imageSrc="/images/filler.jpeg" title="Other relevant initiative titles for user to navigate through" date="February 5, 2025" />
                </Sidebar>
            </div>
        </div>
    )
}