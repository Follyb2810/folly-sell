import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({children,bg}) {
  return (
        <Alert severity={bg}>{children}</Alert>
  );
}