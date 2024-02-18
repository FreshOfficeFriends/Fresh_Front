import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { Form } from '../organisms';
import { form } from '../../stores';

export const Login: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#ddc1e6', height: '100vh' }}>
        <Typography variant="h4" component="h2">
          Login page
        </Typography>
        <Form form={form} />
      </Box>
    </Container>
  );
};
