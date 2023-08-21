import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItems, Pages, NavMobile } from './data'; // Ensure your data import is correct
import * as IMG from '../images/Image';
import { useRouter } from 'next/router';
import Dashboard from './Dashboard';
import Cookies from 'js-cookie'

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        <ListItem key="logo" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} as={Link} href='/'>
            <Image src={IMG.logo3} alt="folly" width={50} height={50} sx={{ display: { sm: 'none', md: 'block' } }} />
          </ListItemButton>
        </ListItem>
        {NavMobile.map((item) => (
          <ListItem key={item.page} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.path} 
              sx={{
                color: router.pathname === item.path ? 'white !important' : 'brown !important',
                textDecoration:'none'
              }}
              >{item.page}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Image src={IMG.logo3} alt="folly" width={50} height={50} sx={{ display: { sm: 'none', md: 'block' } }} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between' }}>
            {Pages.map((item, index) => (
                <Button
                key={index}
                sx={{
                  color: router.pathname === item.path ? 'white !important' : 'brown !important',
                  textDecoration:'none',
                  cursor:'pointer'
                }}
                as={Link}
                href={item.path}
              >
                {item.page}
              </Button>
              
            ))}
          </Box>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Box sx={{ display: { xs: 'none', sm: 'flex', },alignItems:'center',gap:'10px' }}>
              <Typography as={Link} href='/about' sx={{
                color: router.pathname === '/about' ? 'white !important' : 'brown !important',
                textDecoration:'none'
              }}>
                About
              </Typography>
              <Typography as={Link} href='/create' sx={{
                color: router.pathname === '/create' ? 'white !important' : 'brown !important',
                textDecoration:'none'
              }}>
                Create Post
              </Typography>
              <Dashboard/>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;