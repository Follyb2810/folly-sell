import { Container, Grid, IconButton,Button } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Img from '../images/Image';
import FooterContact from './FooterContact';
import { footData } from './data';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        {footData.map((item, index) => (
          <Grid item sm={12} md={4} key={index} sx={{ alignSelf: index === footData.length - 1 ? 'end' : 'start' }}>
            {renderContent(item.content)}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const IconButtonWrapper = ({ icon, path }) => (
  <Button as={Link} href={path} focusRipple={false}>
    {icon}
  </Button>
);

const renderContent = (content) => {
  if (React.isValidElement(content)) {
    return content;
  } else if (Array.isArray(content)) {
    return content.map((social, index) => (
      <IconButtonWrapper key={index} icon={social.icon} path={social.path} />
    ));
  }
  return null;
};

export default Footer;
