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

const NefacMentors = () => {
  return (
    <EducationInitiativeWrapper>
        <div className="flex flex-col w-full gap-20">

            <div className="flex flex-col sm:flex-row w-full gap-6">
                <div className="w-full sm:w-[60%]">
                    <div className="text-nefacblue text-2xl sm:text-3xl font-semibold mb-2">
                    Hello World
                    </div>
                    <div className="text-base sm:text-md">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum...
                    </div>
                </div>
                <img
                    src="/images/nefac-mentors.png"
                    alt="Education Initiative Thumbnail Image"
                    className="w-full sm:w-[40%] max-w-[350px] h-auto object-cover rounded-3xl"
                />
            </div>


            <div className="w-full sm:w-[60%]">
                <div className="text-nefacblue text-2xl sm:text-3xl font-semibold mb-2">
                    Program Overview
                </div>
                <div className="text-base sm:text-lg">
                    Hello World
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

            <div className="flex flex-col gap-4 w-[80%] text-nefacblue text-2xl sm:text-3xl mb-2">
                <div className="flex items-center w-full">
                    <span className="whitespace-nowrap font-semibold">Join Our Mentorship</span>
                    <div className="w-full h-[3px] bg-nefacblue ml-4" />
                </div>
                <div className="text-md mt-10 font-semibold">
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

            </div>

        </div>
    </EducationInitiativeWrapper>

  )
}

export default NefacMentors
