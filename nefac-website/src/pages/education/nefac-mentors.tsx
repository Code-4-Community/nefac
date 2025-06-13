import EducationInitiativeWrapper from '@/components/education/EducationInitiativeWrapper'
import React from 'react'


const NefacMentors = () => {
  return (
    <EducationInitiativeWrapper>
        <div className="flex flex-col w-full gap-8">

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

            <div className="flex flex-col sm:flex-row w-full gap-6">
                <div className="w-full sm:w-[60%]">
                    <div className="text-nefacblue text-2xl sm:text-3xl font-semibold mb-2">
                        Testimonials
                        <div className='w-full bg-nefacblue h-[3px]' /> 
                    </div>
                    <p>Hello World</p>
                </div>
            </div>
        </div>
    </EducationInitiativeWrapper>

  )
}

export default NefacMentors
