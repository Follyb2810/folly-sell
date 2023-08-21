import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Paper, Typography, styled, ThemeProvider } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import{ Content, ImageWrapper, StyledPaper, Subtitle, Title } from '../styles/style'
import { createTheme } from '@mui/material/styles';

// Define custom theme

// import { Content } from 'next/font/google';

const Blog = () => {
  const [getAllBlog, setGetAllBlog] = useState([]);
  const router = useRouter();
  const theme = createTheme();
  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/blog');
      setGetAllBlog(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <Container>
        {getAllBlog.map((blog, index) => (
          <StyledPaper key={index} elevation={3}>
            <Title variant="h4">{blog.title}</Title>
            <Subtitle variant="subtitle1">{blog.subhead}</Subtitle>
            <ImageWrapper>
              <Image
                src={`http://localhost:4000/images/${blog.media}`}
                width={150}
                height={150}
                alt={`http://localhost:4000/images/${blog.media}`}
              />
            </ImageWrapper>
            <Content variant="subtitle2">{blog.content}</Content>
          </StyledPaper>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default Blog;