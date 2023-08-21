import React, { useState } from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import { Send } from '@mui/icons-material';

const FooterContact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px', // Rounded border for the form container
        background: 'rgba(0, 0, 0, 0.05)', // Light gray background color
        padding: '10px', // Add some padding
      }}
    >
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        variant="outlined"
        fullWidth
        InputProps={{
          style: { borderRadius: '10px', paddingRight: '0' }, // Rounded border for the input field and remove padding on the right
          endAdornment: (
            <InputAdornment position="end">
              <Button type="submit" variant="contained" size="large" style={{ borderRadius: '20px' }}>
                <Send /> 
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default FooterContact;
