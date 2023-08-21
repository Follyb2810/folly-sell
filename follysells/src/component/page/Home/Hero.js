import { Box, Container } from "@mui/material";
import { Typewriter } from 'react-simple-typewriter';
import { useTheme } from '@mui/material/styles'; // Import useTheme hook

const Hero = () => {
  const theme = useTheme(); // Use the useTheme hook to access the theme
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '500px',
          justifyContent: 'center',
          fontSize: '32px', 
          color: theme.palette.info.main, 
        }}
        className='hero'
      >
        <Typewriter
          cursor
          cursorBlinking
          delaySpeed={1000}
          deleteSpeed={25}
          loop={0}
          typeSpeed={75}
          words={[
            'Elevate Your Products, Showcase, Share, Succeed!',
            'Welcome to the ultimate platform for product success',
            'Get ready to soar above the competition, making waves in the e-commerce realm and beyond.',
            'Your Products, Amplified: Post, Promote, Prosper!',
          ]}
        />
      </Box>
    </Container>
  );
};

export default Hero;
