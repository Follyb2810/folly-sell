import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to serverless function or API endpoint
    const formData = {
      name,
      email,
      message,
    };

    // Replace 'YOUR_SERVERLESS_ENDPOINT' with your actual endpoint URL
    fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully!', data);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
       <Container>
       <form style={{ margin: '20px' }}>
       <div style={{ marginBottom: '10px' }}>
         <TextField
           label="Name"
           fullWidth 
           value={name}
           onChange={(e) => setName(e.target.value)}
           required
         />
       </div>
       <div style={{ marginBottom: '10px' }}>
         <TextField
           label="Email"
           type="email"
           fullWidth 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
         />
       </div>
       <div style={{ marginBottom: '10px' }}>
         <TextField
           label="Message"
           multiline
           rows={4}
           fullWidth 
           value={message}
           onChange={(e) => setMessage(e.target.value)}
           required
         />
       </div>
       <div>
         <Button variant="contained" type="submit">
           Submit
         </Button>
       </div>
     </form>
       </Container>
  );
}