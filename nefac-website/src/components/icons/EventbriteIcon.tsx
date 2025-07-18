import React from 'react';

interface SquareXIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const EventbriteIcon: React.FC<SquareXIconProps> = ({ className = '', ...props }) => (
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 999.9999389648438 1213.9000244140625"
  fill="currentColor"
  className={className}
  aria-label="Eventbrite icon"
  {...props}>
    <g>
        <path d="M917 814.9L515.3 501.7c-6.7-5.1.2-15.4 7.5-11.3l156.9 
        87.9c71.1 39.9 161 16.8 204.1-52.4 45.4-73 21.4-169.1-53.2-212.2L600.4 
        180.6c-7.3-4.3-1.9-15.3 6-12.2l105.8 42.3c.2.1 2.7 1 3.7 1.3 11.2 3.9 
        23.3 6.1 35.9 6.1 57.4 0 104.5-45.4 108.6-99.4C865.5 48.9 812 0 748.2 
        0h-489c-62.8 0-115.5 51.3-114.7 113.9.4 33.3 15.3 63 38.7 83.4 17.6 15.3 
        76.9 62.8 105.1 85.3 5 4 2.2 12.1-4.3 12.1h-97.9C83.2 295.3 0 378.9 0 482c0 
        52.1 21.3 99.2 55.6 133.1l566.6 538.5c40.1 37.4 93.9 60.3 153.1 60.3 124.1 
        0 224.7-100.6 224.7-224.7 0-70.3-32.4-133.1-83-174.3z">
        </path>
    </g>
  </svg>
);

export default EventbriteIcon;