import React, { useState } from 'react';
import { Button, ButtonGroup, TextField } from '@mui/material';

const FooterContact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: '1', marginRight: '5px' }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </div>
      </form>
    </ButtonGroup>
  );
};

export default FooterContact;