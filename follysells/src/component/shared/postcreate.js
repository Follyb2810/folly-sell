import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

const BlogPost = () => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        Blog Post Title
      </Typography>

      {/* Subhead */}
      <Typography variant="subtitle1" gutterBottom>
        Subhead
      </Typography>

      {/* Content */}
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
        tellus quis purus hendrerit, ac aliquam justo lacinia. Aliquam dapibus
        tristique nisl, eu faucibus ligula efficitur vel. Phasellus eu volutpat
        diam. Mauris fringilla aliquet ipsum, sed interdum quam. Suspendisse
        potenti. Duis efficitur, arcu a condimentum faucibus, lectus nisl
        eleifend sem, quis fringilla felis enim ut mi. Curabitur mattis, eros
        et consequat lacinia, lorem sapien eleifend lectus, nec pulvinar nisl
        mi non urna. Aenean nec malesuada magna. Nulla facilisi. In vel magna
        sollicitudin, placerat justo eget, tincidunt nisl. In sed odio ac
        magna consequat convallis.
      </Typography>

      {/* Image */}
      <img src="/path/to/image.jpg" alt="Blog Post" style={{ width: '100%', marginTop: '1rem' }} />

      {/* Video */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{ marginTop: '1rem' }}
      ></iframe>

      {/* Author Name */}
      <Typography variant="subtitle2" gutterBottom>
        By John Doe
      </Typography>
    </Paper>
  );
};

export default BlogPost;