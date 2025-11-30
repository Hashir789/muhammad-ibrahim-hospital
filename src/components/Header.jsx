import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Departments', path: '/departments' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleBookAppointment = () => {
    // Navigate to appointment booking page
    navigate('/book-appointment');
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 280 }} role="presentation">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocalHospitalIcon sx={{ fontSize: 28 }} aria-hidden="true" />
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            MIH
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="Close navigation menu"
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              selected={location.pathname === item.path}
              aria-current={location.pathname === item.path ? 'page' : undefined}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: location.pathname === item.path ? 700 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          startIcon={<CalendarTodayIcon />}
          onClick={handleBookAppointment}
          sx={{
            fontWeight: 700,
            py: 1.5,
          }}
        >
          Book Appointment
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={2} role="banner">
        <Toolbar
          component="nav"
          aria-label="Main navigation"
          sx={{
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            aria-label="Muhammad Ibrahim Hospital - Home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              color: 'inherit',
              mr: { xs: 2, md: 4 },
              '&:focus-visible': {
                outline: '3px solid',
                outlineColor: 'secondary.main',
                outlineOffset: '2px',
                borderRadius: '4px',
              },
            }}
          >
            <LocalHospitalIcon sx={{ fontSize: { xs: 28, md: 32 } }} aria-hidden="true" />
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Muhammad Ibrahim Hospital
            </Typography>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                display: { xs: 'block', sm: 'none' },
              }}
            >
              MIH
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              component="ul"
              sx={{
                display: 'flex',
                gap: 0.5,
                listStyle: 'none',
                m: 0,
                p: 0,
                flexGrow: 1,
              }}
            >
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
                      textUnderlineOffset: '4px',
                      px: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:focus-visible': {
                        outline: '3px solid',
                        outlineColor: 'secondary.main',
                        outlineOffset: '2px',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Box>
              ))}
            </Box>
          )}

          {/* Book Appointment Button - Desktop */}
          {!isMobile && (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<CalendarTodayIcon />}
              onClick={handleBookAppointment}
              sx={{
                fontWeight: 700,
                ml: 2,
                px: 3,
                py: 1.25,
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
                '&:focus-visible': {
                  outline: '3px solid',
                  outlineColor: 'secondary.main',
                  outlineOffset: '2px',
                },
              }}
            >
              Book Appointment
            </Button>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                ml: 'auto',
                '&:focus-visible': {
                  outline: '3px solid',
                  outlineColor: 'secondary.main',
                  outlineOffset: '2px',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        id="mobile-navigation"
        aria-label="Mobile navigation menu"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
