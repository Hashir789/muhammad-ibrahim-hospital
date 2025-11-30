import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
          MIH
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle}
          aria-label="Close navigation menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              selected={location.pathname === item.path}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={2} role="banner">
        <Toolbar component="nav" aria-label="Main navigation">
          <LocalHospitalIcon sx={{ mr: 1, fontSize: 28 }} aria-hidden="true" />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            aria-label="Muhammad Ibrahim Hospital - Home"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
              mr: { md: 4 },
            }}
          >
            Muhammad Ibrahim Hospital
          </Typography>
          
          {!isMobile && (
            <Box component="ul" sx={{ display: 'flex', gap: 1, ml: 'auto', listStyle: 'none', m: 0, p: 0 }}>
              {navItems.map((item) => (
                <Box component="li" key={item.path}>
                  <Button
                    component={Link}
                    to={item.path}
                    color="inherit"
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                    sx={{
                      fontWeight: location.pathname === item.path ? 700 : 400,
                      textDecoration: location.pathname === item.path ? 'underline' : 'none',
                    }}
                  >
                    {item.label}
                  </Button>
                </Box>
              ))}
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        id="mobile-navigation"
        aria-label="Mobile navigation menu"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
