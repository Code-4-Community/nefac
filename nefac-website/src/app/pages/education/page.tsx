import PastRecordingsSection from "@/app/components/education/past-recordings/PastRecordingsSection";
import { PastRecording } from "@/app/components/education/past-recordings/PastRecordingInterface";
import EducationInitiativeWrapper from "@/app/components/education/EducationInitiativeWrapper";
import InitiativeDescription from "@/app/components/education/InitiativeDescription";

const mockRecordings: PastRecording[] = [
    {
        publishedDate: new Date("2022-05-20"),
        recordingUrl: "https://www.youtube.com/watch?v=oYzYTWe31Ng",
        thumbnailUrl: "/images/mock1.png",
        title: "A Cyberattack Against RIPTA: Using Public Records to Complete the Story",
        description: "Tolly Taylor, a journalist at WPRI in Providence, describes how he reported on a recent cyberattack against the Rhode Island Public Transit Authority and the role public records played.",
        notesUrl: "https://x.com/FiveFreedoms/status/1528788463318929410"
    },
    {
        publishedDate: new Date("2022-01-06"),
        recordingUrl: "https://www.youtube.com/watch?v=nHZLqvLsKaw",
        thumbnailUrl: "/images/lennon.png",
        title: "Secret Courts in Massachusetts",
        description: "Anastasia Lennon, a reporter for the New Bedford Light, discusses her attempts to access a criminal court proceeding that's closed to the public. Secret 'show cause' hearings occur throughout the state typically with no notice to the public. Massachusetts is the only state in the country where these types of hearings occur.",
        notesUrl: "https://x.com/FiveFreedoms/status/1479454468907454471"
    },
    {
        publishedDate: new Date("2022-05-10"),
        recordingUrl: "https://www.youtube.com/watch?v=QpRoXECG5ms",
        thumbnailUrl: "/images/wildeman.png",
        title: "Medical Costs in Connecticut: Turning Large Datasets Into Compelling Stories",
        description: "Mary Katherine Wildeman of Hearst Connecticut Media Group discusses her recent investigation into hospital pricing and shares her reporting process. Over the course of six months, Wildeman collected publicly available documents on what hospitals charged their patients, created a database to manage that information, and reported on the inequities she found within Connecticut communities.",
        notesUrl: "https://x.com/FiveFreedoms/status/1524002264138006530"
    },
    {
        publishedDate: new Date("2021-12-23"),
        recordingUrl: "https://www.youtube.com/watch?v=UrbWdyqcAxc",
        thumbnailUrl: "/images/del-valle.png",
        title: "Reporting on Traumatic Events: A Look at Hearst Connecticut’s ‘Lost to Abuse’",
        description: "Reporter Verónica Del Valle describes a recent series on domestic violence, the importance of public records and the challenges of covering tragedies. Verónica spoke to NEFAC as part of its First Amendment and Free Press program.",
        notesUrl: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazBMUTZpX250cEQwMHhxSWFtSnFZSzJJRFREZ3xBQ3Jtc0tuZjFhVFZ4UEZxY2VneEg2Vzd6emttOXJhUjJYdXpLMWF5cXdMcFlLOTNMSkVIZUc4bTNWakQzOTVwUWVRYWNOSE5NR1hqRTVMUzdqOUtObTVXM3BDSHBNdl9MLTBvYjB3cFJRRktnZmpVQjJOWG9CNA&q=https%3A%2F%2Ftwitter.com%2FFiveFreedoms%2Fstatus%2F1475455466494963715&v=UrbWdyqcAxc"
    },
    {
        publishedDate: new Date("2021-09-29"),
        recordingUrl: "https://www.youtube.com/watch?v=md71oyZ7D4c",
        thumbnailUrl: "/images/cassidy-jensen.png",
        title: "An Executive Privilege for New Hampshire's Governor?",
        description: "Cassidy Jensen, a reporter at The Concord Monitor, discusses a public records request she and her colleagues made of Gov. Sununu and the unexpected response they received. Jensen breaks down the governor's claim of 'executive privilege' and the consequences such a privilege could have on the public's right to know about government.",
        notesUrl: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFR5WmJYalBUNUVLUzJURUItc25Ea042bWgyQXxBQ3Jtc0tteHhEV3QtMFc3V1BBMkNsb0VTR2hxOGxqVVlNRnpjVmRuNWpVakkxSGppa2lXZS0tdXFMTmxMZ2g2YlVFdVZLRjhOdU9xRHRBNmZhQXF5YzdMODNON1FURFFad0gyM3F6NnI3dnphVGJXd0ZxZ3BsSQ&q=https%3A%2F%2Ftwitter.com%2FFiveFreedoms%2Fstatus%2F1445001265352790023&v=md71oyZ7D4c"
    },
    {
        publishedDate: new Date("2021-02-13"),
        recordingUrl: "https://www.youtube.com/watch?v=PfeI8gshoQs",
        thumbnailUrl: "/images/meyer-1.png",
        title: "Maine Judicial Records: A First Amendment Right to Access",
        description: "NEFAC's Judy Meyer, executive editor at the Sun Journal, Kennebec Journal and Morning Sentinel, discusses a recent lawsuit to protect the First Amendment right to judicial documents in Maine and what could happen if that access continues to be denied.",
        notesUrl: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2tyS0N3cUs0RHNHM1JzS1RYT0ZHUDVSelVSd3xBQ3Jtc0tsM0xRYmhvSXJVa2JWY0lLVXVHMHhxa1NTbUdwcXRjN3RsTEdzMXFyQ0hGZzZweEZzRVNtT2VVMjRyTkpXdXVUZzZ0TFBsOVdJUVN6RmtlY05fUHBoZVhXbkEzUVFtcGtWM3dKQkozQUdfOGpzcVg3QQ&q=https%3A%2F%2Ftwitter.com%2FFiveFreedoms%2Fstatus%2F1361330416502906882&v=PfeI8gshoQs"
    },
    {
        publishedDate: new Date("2021-02-18"),
        recordingUrl: "https://www.youtube.com/watch?v=rYBy7GaNnhQ",
        thumbnailUrl: "/images/local-protests.png",
        title: "Reporting on Local Protests: How Newsrooms Cover Political Demonstrations",
        description: "With political demonstrations occurring throughout the country and weekly protests held at the Maine State House, citizens are asking: why are these events covered the way they are? This program helps pull back the newsroom curtain and focuses on recent news coverage.",
    },
    {
        publishedDate: new Date("2021-03-05"),
        recordingUrl: "https://youtu.be/NQtgN3LoBwo",
        thumbnailUrl: "/images/dahl.png",
        title: "Reconsidering News Coverage: A Look at The Boston Globe's Fresh Start Initiative",
        description: "David Dahl at The Boston Globe discusses the Fresh Start initiative, an attempt to reevaluate the newsworthiness of old stories and weigh the effect those stories have on an individual's reputation versus the value they serve by remaining online. Dahl recently met with NEFAC's Board of Directors to answer questions about the program. This recording is an edited version of that conversation, focusing on Dahl's description of the program and his answers to commonly asked questions.",
        notesUrl: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbl9hdThmdVY2bHdWMmdsY25hT3YwRjc3Q1BWZ3xBQ3Jtc0tsMXllTk1tdWJmLWZyMGtScHhRZEk4cFB1YUs2djVhN3dSTEkxdXBnLW1MS2V0NHJnTV8taU1YaktDZ21ORmk3ZXZScDVERnF5Q1BIQ0s2YVlUNzJ5aDZfTENKZVRGRTVDcEktY2dOdi14UjFnU0ZTSQ&q=https%3A%2F%2Ftwitter.com%2FFiveFreedoms%2Fstatus%2F1368925292601999363&v=NQtgN3LoBwo"
    },
    {
        publishedDate: new Date("2021-03-13"),
        recordingUrl: "https://www.youtube.com/watch?v=MjFIk2E-sjM",
        thumbnailUrl: "/images/IMG_2156.png",
        title: "National Association of Hispanic Journalists and Challenges Facing Latinos in New England Newsrooms",
        description: "Karina Cuevas, a producer at Telemundo in Boston, and Kevin Adrade, a freelancer based in Providence, describe their work at NAHJ's New England chapter and explain the most pressing issues facing Latino journalists in the region.",
        notesUrl: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbEd6TFhJTHIyVW1CcVllSFNGV1NVRDNlLVBQQXxBQ3Jtc0trcFpkOFFMTnBiUTlDRXVmQUM2V0swbF96VC1JOEc3LXVZZ1l6X0kyd2VIVDlrdDdKRDU5cEpvTE96eVpINmxEeXh0WnRGcWIxYnVVYTFsdkhHUnI1RmltQ28xclhObGY3UGxSOV83WUluYjFOZXlwSQ&q=https%3A%2F%2Ftwitter.com%2FFiveFreedoms%2Fstatus%2F1371427256497807360&v=MjFIk2E-sjM"
    },
    {
        publishedDate: new Date("2021-03-22"),
        recordingUrl: "https://www.youtube.com/watch?v=VH_JVPzAzb0",
        thumbnailUrl: "/images/image0.png",
        title: "Local Journalism and Transparency in Massachusetts",
        description: "NEFAC and the Medfield Insider celebrated Sunshine Week on March 19 with an expert panel discussion about local journalism and the need for transparency in Massachusetts. Speakers include attorney Peter Caruso, Kay Lazar of The Boston Globe, Morgan C. Mullings of The Bay State Banner, and Charles Sennott of The GroundTruth Project."
    },
    {
        publishedDate: new Date("2021-04-15"),
        recordingUrl: "https://www.youtube.com/watch?v=kgLdgUf-9rM",
        thumbnailUrl: "/images/040921.png",
        title: "Reconsidering Newsworthiness: Balancing the Reputational Harm Caused By Crime Coverage",
        description: "NEFAC led a conversation on how local newsrooms are reevaluating the newsworthiness of old stories in response to concerns about individual privacy interests. The discussion was part of the New England Newspaper & Press Association‘s 2021 spring convention."
    },
    {
        publishedDate: new Date("2021-05-18"),
        recordingUrl: "https://www.youtube.com/watch?v=PkasQ4GoH7k",
        thumbnailUrl: "/images/mq2.png",
        title: "Launching a Non-Profit Newsroom: The New Bedford Light and Local Journalism",
        description: "Barbara Roessner, founding editor of the New Bedford Light, discusses the need for more local journalism and how those in other communities can form their own non-profit news organizations.",
        notesUrl: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazJ0bzFhN2RRTmZJYVk2RC1keFRoMTRvbml6Z3xBQ3Jtc0trdnBJWGtCOWlhREp2WERwWjU3OUJzd2tpWm5xVDVzTW5WNURncEZTeVV0QVNUM0RoS0tmazBhM3dNYzdGNDJXbHkySXI1M21JYXNKUV9IZ1NWX0V3VHg0cHNTQ0RzV09SVU1hZ3pDd1BOcE9LbXlWYw&q=https%3A%2F%2Ftwitter.com%2FFiveFreedoms%2Fstatus%2F1394734563298058248&v=PkasQ4GoH7k"
    },
    {
        publishedDate: new Date("2021-06-21"),
        recordingUrl: "https://www.youtube.com/watch?v=cl9sZPJ1bk4",
        thumbnailUrl: "/images/sundqvist.png",
        title: "Using Public Records in Connecticut to Shine a Light on Superintendent Pay",
        description: "Viktoria Sundqvist, newsroom data analyst for Hearst Connecticut Media Group, explains how she used the state's public records law to gather superintendent payroll information. This conversation is part of NEFAC's First Amendment and Free Press program where the newsroom curtain is pulled back to show how journalists do their job and why their work is vital to local communities.",
        notesUrl: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFFPcWxCNU9WdDhsczgya0JDSWRyRWZQbmN6d3xBQ3Jtc0tsRjI0b0QyVEN4WENrVGlzd1NtTzFnZHgwUHNXaU9hWGxRLXROeU0wWm92Nl85eXQzRWplQ1VjTF9CV0g3Znc4eHRBZ09sLVhwcWhUWUpzXzVhM1g2SWhtN2ViZUFfdmZrcEw4OWkzdVJXZTdWeFJCWQ&q=https%3A%2F%2Ftwitter.com%2FFiveFreedoms%2Fstatus%2F1408458594643763211&v=cl9sZPJ1bk4"
    }
];

// for testing no recordings message
const mockRecordingsEmpty: PastRecording[] = [];

const EducationPage: React.FC = () => {
    return (
        <EducationInitiativeWrapper>
            <InitiativeDescription 
                header="First Amendment and Free Press" 
                description="Lorem ipsum dolor sit amet"
                thumbnailUrl="/images/nefac-conference.png"
            />
            <PastRecordingsSection recordings={mockRecordings} />
        </EducationInitiativeWrapper>
    )
};

export default EducationPage;