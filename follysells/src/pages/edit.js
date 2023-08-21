import React, { useState } from 'react';
import { Typography, Paper, Grid, TextField, Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, InputAdornment } from '@mui/material';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [subhead, setSubhead] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [mediaURL, setMediaURL] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [selectedOption, setSelectedOption] = useState('image');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setImageFile(null);
    setMediaURL('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setMediaURL('');
  };

  const handleMediaURLChange = (e) => {
    const url = e.target.value;
    setMediaURL(url);
    setImageFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform logic to handle the form submission
    // You can access the form values using the state variables (title, subhead, content, imageFile, mediaURL, authorName)
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <form onSubmit={handleSubmit}>
       {/* Title */}
       <TextField
       label="Blog Post Title"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       fullWidth
       margin="normal"
     />

     {/* Subhead */}
     <TextField
       label="Subhead"
       value={subhead}
       onChange={(e) => setSubhead(e.target.value)}
       fullWidth
       margin="normal"
     />
      <TextField
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        {/* Title */}
        {/* ... (other fields) ... */}

        {/* Choose between Image and Video */}
        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">Image/Video</FormLabel>
          <RadioGroup row aria-label="image-video" name="image-video" value={selectedOption} onChange={handleOptionChange}>
            <FormControlLabel value="image" control={<Radio />} label="Image" />
            <FormControlLabel value="video" control={<Radio />} label="Video" />
          </RadioGroup>
        </FormControl>

        {/* Image or Video Input */}
        {selectedOption === 'image' ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginBottom: '1rem' }}
          />
        ) : (
          <TextField
            label="Media URL"
            value={mediaURL}
            onChange={handleMediaURLChange}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  https://
                </InputAdornment>
              ),
            }}
          />
        )}

        {/* ... (other fields) ... */}
         {/* Author Name */}
         <TextField
         label="Author Name"
         value={authorName}
         onChange={(e) => setAuthorName(e.target.value)}
         fullWidth
         margin="normal"
       />

        {/* Submit Button */}
        <Button variant="contained" color="primary" type="submit">
          Create Post
        </Button>
      </form>
    </Paper>
  );
};

export default EditPost
;
