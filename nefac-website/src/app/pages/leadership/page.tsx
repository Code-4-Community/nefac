import { useState } from "react";

// Member cards 
const Member: React.FC<{ name: string; title: string }> = ({ name, title }) => {
    return (
      <div className="p-4 bg-gray-100 w-72 rounded-md">
        <p className="font-inter font-bold">{name}</p>
        {title && <p className="text-md">{title}</p>}
      </div>
    );
  };

const LeadershipPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Executive Committee");

  const tabs = ["Executive Committee", "Board of Directors", "Advisors"];

  return (
    <div className="flex p-8 gap-8">
      <div className="w-269px flex flex-col space-y-2">
        {tabs.map((item) => (
          <div
            key={item}
            onClick={() => setActiveTab(item)}
            className={`p-3 cursor-pointer font-semibold border-l-4 ${
              activeTab === item
                ? "border-black bg-white text-black"
                : "border-transparent bg-white text-black hover:bg-gray-200"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex-1">
        <h2 className="text-xl text-[#464758] font-bold mb-4">{activeTab.toUpperCase()}</h2>
        {activeTab === "Executive Committee" && (
          <div className="flex gap-8">
            <div className="flex flex-col space-y-4">
              <Member name="Justin Silverman, Esq." title="Executive Director" />
              <Member name="Gregory V Sullivan, Esq." title="President" />
              <Member name="Maggie Mulvihill" title="First Vice President" />
              <Member
                name='Christopher "Topher" Hamblett'
                title="Second Vice President"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <Member
                name="Justin Silverman, Esq."
                title="Treasurer and Clerk"
              />
              <Member name="Shirley Leung" title="" />
              <Member name="Emily Sweeney" title="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadershipPage;
