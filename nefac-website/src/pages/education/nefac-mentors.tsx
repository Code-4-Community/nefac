import ApplicationStep from '@/components/education/education-initatives/ApplicationStep'
import Testimonial from '@/components/education/education-initatives/Testimonial'
import EducationInitiativeWrapper from '@/components/education/EducationInitiativeWrapper'
import React from 'react'

// Dummy date till we start pulling actual testimonials
let testimonials = [
    "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
]

// Custom component to render individual leadership cards
// TODO: Already exists in 60-faustify-leadership page. To be removed eventually before merging
const LeadershipCard: React.FC<{ name: string; description: string; section: string}> = ({ name, description, section }) => {
  return (
      <div className="p-4 bg-gray-100 w-[260px] rounded-md">
        <p className="flex flex-wrap font-bold">{name}</p>
        {description && <p className="text-md">{description}</p>}
      </div>
    );
};

const NefacMentors = () => {
  return (
    <EducationInitiativeWrapper>
        <div className="flex flex-col w-full gap-8">

            <div className="flex flex-col sm:flex-row w-full gap-20">
                <div className="w-full sm:w-[60%]">
                    <div className="text-nefacblue text-2xl sm:text-3xl font-semibold mb-2">
                        NEFAC Mentors
                    </div>
                    <div className="text-[20px] sm:text-lg">
                        The New England First Amendment Coalition provides a free mentorship program for journalists working in the region. 
                        Reporters, editors and producers looking for guidance in a variety of professional areas can apply to be paired with 
                        a veteran journalist with relevant expertise.
                    </div>
                </div>
                <img
                    src="/images/nefac-mentors.png"
                    alt="Education Initiative Thumbnail Image"
                    className="w-[220px] h-[220px] object-cover rounded-3xl"
                />
            </div>


            <div className="w-full sm:w-[60%]">
                <div className="text-nefacblue text-2xl sm:text-3xl font-semibold mb-2">
                    Program Overview
                </div>
                <div className="text-[20px] sm:text-lg">
                    Applicants must submit the form linked below and email their résumé with links to their portfolio. 
                    When applying, applicants will be asked to name their top three mentor choices based on their specific goals and mentorship needs. 
                    Once the application materials are received, NEFAC will begin working to pair the applicant with a preferred mentor. 
                    When a match has been made, the applicant will be notified.
                    <br/>
                    <br/>
                    Mentors are required to provide at least an hour of their time each month for six months as part of the program, 
                    but mentees can agree to other time arrangements that work for both parties. Due to demand and the limited availability of mentors, 
                    NEFAC will only respond to applications once a match has been found.
                </div>
            </div>

            <div className='w-[75%] h-[500px]'>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/1Cz2cp3sUJQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                />
            </div>

            <div className="flex flex-col gap-4 w-[80%] text-nefacblue text-2xl sm:text-3xl font-semibold mb-2">
                <div className="flex items-center w-full">
                    <span className="whitespace-nowrap">Testimonials</span>
                    <div className="w-full h-[3px] bg-nefacblue ml-4" />
                </div>

                <div className="grid sm:grid-cols-2 grid-cols-4 gap-4">
                    {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} content={testimonial} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-6 w-[80%] text-nefacblue text-2xl sm:text-3xl mb-2">
                <div className="flex items-center w-full">
                    <span className="whitespace-nowrap font-semibold">Join Our Mentorship</span>
                    <div className="w-full h-[3px] bg-nefacblue ml-4" />
                </div>

                <div className="text-2xl mt-10 font-semibold">
                    How To Apply
                </div>

                <div className="flex flex-col items-start space-y-8 mt-6">
                    <ApplicationStep number={1}>
                        <a href="/#" className="underline cursor-pointer">
                            View our list of mentors and mentorship access.
                        </a>
                    </ApplicationStep>

                    <ApplicationStep number={2}>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdsRDQsir76ndVjMUabw4QoYyASuxyKHoPrVIQk8Yu4tYBk-g/viewform"
                            className="underline cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        Submit application.
                        </a>
                    </ApplicationStep>

                    <ApplicationStep number={3} isLast>
                        <p>Email resume and link to portfolio to justin@nefac.org.</p>
                    </ApplicationStep>
                </div>

                <p className='text-black text-[20px]'>
                    Once we receive all your application materials, we'll begin looking for a match based on your mentorship preferences. 
                    When a match has been made, we'll provide an introduction to your mentor.
                </p>

                <div className="text-2xl mt-10 font-semibold">
                    Program Materials
                </div>

                <ul className="text-black text-[20px] list-disc ml-6">
                    <li>
                        <a
                            href="https://www.nefac.org/wp-content/uploads/2022/04/mentorship-agreement-1.pdf"
                            className="underline"
                        >
                            Journalism Mentorship Plan Form
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSd2_Wk_S9AvhfowHvVjx-lCDV6nNRXr4Smaf1Vu26YVkVdrEQ/viewform"
                            className="underline"
                        >
                            Post-Mentorship Evaluation for Mentees
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSe7fc2z4KZkYeFvKgeUOW5rHya6UJD6ZB6X1V8Noyvjyk74oQ/viewform"
                            className="underline"
                        >
                            Post-Mentorship Evaluation for Mentors
                        </a>
                    </li>
                </ul>

                <div className="text-2xl mt-10 font-semibold">
                    Resources
                </div>

                <p className='text-black text-[20px]'>
                    Are you a new mentor looking for guidance on how to create a successful mentorship?
                    Feel free to contact those below who have mentorship experience and will share their tips and best practices.
                </p>

                <div className="px-10 py-6 bg-gray-100 w-[40%] rounded-md text-black text-[20px]">
                    <p className="flex flex-wrap font-bold">Maggie Mulvihill</p>
                    <p className="text-md">mmulvih@bu.edu</p>
                </div>

                <p className='text-black text-[20px]'>
                    We also recommend you review some of the following materials. 
                    While they focus on different aspects of mentorship for various groups and needs, 
                    they all provide helpful general guidance that can be applied to your own mentoring experience.
                </p>

                <ul className="text-black text-[20px] list-disc ml-6 mb-24">
                    <li>
                        <a
                            href="https://www.mindsetkit.org/growth-mindset-mentors"
                            className="underline"
                        >
                            Growth Mindset for Mentors
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://educationnorthwest.org/sites/default/files/resources/Ongoing%20Training%20for%20Mentors.pdf"
                            className="underline"
                        >
                            Ongoing Training for Mentors
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    </EducationInitiativeWrapper>

  )
}

export default NefacMentors
