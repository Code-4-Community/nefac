import { Box, IconButton } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { useState } from 'react';

interface CardCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  showControls?: boolean;
  slidesPerView?: number;
}

const CardCarousel = <T,>({ 
  items, 
  renderItem,
  showControls = true,
  slidesPerView = 2
}: CardCarouselProps<T>) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Math.ceil(items.length / slidesPerView);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', position: 'relative', py: 4, mb: 8, overflow: 'hidden' }}>
      <Box sx={{ 
        display: 'flex', 
        px: 2,
        transform: `translateX(-${activeStep * (100 / slidesPerView)}%)`,
        transition: 'transform 0.3s ease-in-out',
      }}>
        {items.map((item, i) => (
          <Box 
            key={i} 
            sx={{ 
              flex: `0 0 ${100/slidesPerView}%`,
              maxWidth: `${100/slidesPerView}%`,
              px: 1
            }}
          >
            {renderItem(item)}
          </Box>
        ))}
      </Box>
      
      {showControls && (
        <>
          <IconButton
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': { bgcolor: 'background.paper' },
              zIndex: 1
            }}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': { bgcolor: 'background.paper' },
              zIndex: 1
            }}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <NavigateNext />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default CardCarousel;