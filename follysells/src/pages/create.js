import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Alert from '../component/shared/Alert';
import axios from 'axios';
import Spinner from '../component/shared/Spinner';
// import Image from 'next/image';
import Cookies from 'js-cookie';
import useCookie from '@/hooks/useCookie';

// const refreshToken = Cookies.get('jwt');

import {
  Typography,
  Paper,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import Image from 'next/image';

const CreatePost = () => {
  const router = useRouter();
  const [checkSuccess, setCheckSuccess] = useState(null);
  const [messageTimeout, setMessageTimeout] = useState(null);
  const [backendError, setBackendError] = useState('');
  const [selectedOption, setSelectedOption] = useState('image');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [refresh, setRefresh] = useState(Cookies.get('jwtRefresh'));

  const checkJwt = useCookie();

  const [blogContent, setBlogContent] = useState({
    title: '',
    subhead: '',
    content: '',
    productUrl: '',
    videoURL: '',
    author: '',
    imageFile: null,
  });

  const { author, title, content, productUrl, subhead, videoURL,imageFile } = blogContent;
  useEffect(() => {
    if (!checkJwt) {
      router.push('/');
    }
  }, [checkJwt, router]);
  
  

  const handleBlog = (e) => {
    setBlogContent((prevBlogContent) => ({
      ...prevBlogContent,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [PreviewSource,setPreviewSource]=useState('')

  const previewFile =(file)=>{
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend =()=>{
      setPreviewSource(reader.result)
    }


  }
  const refreshToken =()=>{}
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    previewFile(file)
    setBlogContent((prevBlogContent) => ({
      ...prevBlogContent,
      imageFile: file,
      videoURL: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      const jwt = Cookies.get('jwt')
      // const token = userInfo.token; // Use the token from userInfo
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subhead', subhead);
      formData.append('content', content);
      formData.append('videoUrl', videoURL);
      formData.append('author', author);
      formData.append('productUrl', productUrl);
      formData.append('file', imageFile);
  
      const config = {
        headers: {
          "Content-Type": 'multipart/form-data',
          "Authorization": `Bearer ${jwt}`
        }
      };
  
      const response = await axios.post('http://localhost:4000/create-blog', formData, config);
  
      setCheckSuccess(response.data.message);
      setLoading(false);
      router.replace('/blog');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred while sending the request.");
      }
      setLoading(false);
    }
  };
  


  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <form onSubmit={handleSubmit}>
      {error && <Alert bg="error">{error}</Alert>}
      {checkSuccess && <Alert bg="error">{checkSuccess}</Alert>}
   
      {loading && <Spinner />}
          {/* Title */}
          <TextField
          label="Blog Post Title"
          name="title"
          value={title}
          onChange={handleBlog}
          fullWidth
          margin="normal"
        />

        {/* Subhead */}
        <TextField
          label="Subhead"
          name="subhead"
          value={subhead}
          onChange={handleBlog}
          fullWidth
          margin="normal"
        />

        {/* Content */}
        <TextField
          label="Content"
          name="content"
          value={content}
          onChange={handleBlog}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        {/* ... other fields ... */}
        
        {/* Choose between Image and Video */}
        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">Image/Video</FormLabel>
          <RadioGroup
            row
            aria-label="image-video"
            name="image-video"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <FormControlLabel value="image" control={<Radio />} label="Image" />
            <FormControlLabel value="video" control={<Radio />} label="Video" />
          </RadioGroup>
        </FormControl>

        {/* Image or Video Input */}
        {selectedOption === 'image' ? (
          <input
            type="file"
            accept=".jpeg, .png, .jpg"
            onChange={handleFileChange}
            style={{ marginBottom: '1rem' }}      
          />
        ) : (
          <TextField
            label="Video URL"
            name="videoURL"
            value={videoURL}
            onChange={handleBlog}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">https://</InputAdornment>
              ),
            }}
          />
        )}

        {/* Author Name */}
           {/* Author Name */}
           <TextField
           label="Author Name"
           name="author"
           value={author}
           onChange={handleBlog}
           fullWidth
           margin="normal"
         />
        {/* ... other fields ... */}
        
        {/* Product URL */}
        <TextField
          label="Product URL"
          name="productUrl"
          value={productUrl}
          onChange={handleBlog}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">https://</InputAdornment>
            ),
          }}
        />

        {/* Submit Button */}
        <Button variant="contained" color="primary" type="submit">
          Create Post
        </Button>
      </form>
      {PreviewSource && <Image src={PreviewSource} alt='' width={300} height={300}/>}
    </Paper>
  );
};

export default CreatePost;
