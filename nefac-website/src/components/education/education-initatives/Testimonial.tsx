import React from 'react'

interface TestimonialProps {
  content: string;
}

const Testimonial = ({ content }: TestimonialProps) => {
  return (
    <div className="flex flex-col bg-[#F2F6FF] rounded-md p-10 gap-6">
        <img 
            src="/images/quotes.png"
            className="w-[40px] ml-2"
        />
        <div className="flex flex-wrap text-base text-black">
            {content}
        </div> 
    </div>
  )
}

export default Testimonial
