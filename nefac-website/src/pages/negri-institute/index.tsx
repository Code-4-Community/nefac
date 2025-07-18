import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Profile from "@/components/negri-institute/Profile";

type EventProfile = {
  imageUrl?: string;
  subjectName: string;
  recognitionName?: string;
  subjectShortDescription?: string;
  subjectLongDescription: string;
};

const GET_EVENT_PROFILES_PAGE = gql`
  query GetEventProfilesPage {
    page(id: "/test-event-featured-profile", idType: URI) {
      title
      editorBlocks {
        __typename
        name
        ... on NefacEventFeaturedProfile {
          attributes {
            imageUrl
            subjectName
            recognitionName
            subjectShortDescription
            subjectLongDescription
          }
        }
      }
    }
  }
`;

function StatusMessage(message: string) {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
  );
}

const EventProfilesTestPage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_EVENT_PROFILES_PAGE, {
    fetchPolicy: "no-cache",
  });

  const [allProfiles, setAllProfiles] = useState<EventProfile[]>([]);

  useEffect(() => {
    if (data?.page?.editorBlocks) {
      const profileBlocks = data.page.editorBlocks.filter(
        (block: any) => block.name === "nefac/event-featured-profile"
      );

      const profiles: EventProfile[] = profileBlocks.map((block: any) => ({
        imageUrl: block.attributes.imageUrl,
        subjectName: block.attributes.subjectName,
        recognitionName: block.attributes.recognitionName,
        subjectShortDescription: block.attributes.subjectShortDescription,
        subjectLongDescription: block.attributes.subjectLongDescription,
      }));

      setAllProfiles(profiles);
    }
  }, [data]);

  if (loading) {
    return StatusMessage("Loading event profiles...");
  }

  if (error || !data?.page) {
    return StatusMessage(error?.message || "Page not found");
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto p-6">
        <div className="w-full">
          {allProfiles.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🎭</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">No profiles found</h2>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {allProfiles.map((profile, i) => (
                <Profile 
                  key={i} 
                  imageUrl={profile.imageUrl}
                  subjectName={profile.subjectName}
                  recognitionName={profile.recognitionName}
                  subjectShortDescription={profile.subjectShortDescription}
                  subjectLongDescription={profile.subjectLongDescription}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default EventProfilesTestPage;