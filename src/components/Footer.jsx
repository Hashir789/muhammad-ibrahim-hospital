import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.800',
        color: 'grey.200',
        mt: 'auto',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalHospitalIcon sx={{ mr: 1, fontSize: 28, color: 'primary.main' }} aria-hidden="true" />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>
                Muhammad Ibrahim Hospital
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              Providing quality healthcare services with compassion and excellence.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
              Quick Links
            </Typography>
            <Box 
              component="nav" 
              aria-label="Footer navigation"
              sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
            >
              <MuiLink
                component={Link}
                to="/about"
                aria-label="Navigate to About page"
                sx={{
                  color: 'grey.400',
                  textDecoration: 'none',
                  '&:hover': { color: 'white' },
                  transition: 'color 0.2s',
                }}
              >
                About Us
              </MuiLink>
              <MuiLink
                component={Link}
                to="/services"
                aria-label="Navigate to Services page"
                sx={{
                  color: 'grey.400',
                  textDecoration: 'none',
                  '&:hover': { color: 'white' },
                  transition: 'color 0.2s',
                }}
              >
                Services
              </MuiLink>
              <MuiLink
                component={Link}
                to="/contact"
                aria-label="Navigate to Contact page"
                sx={{
                  color: 'grey.400',
                  textDecoration: 'none',
                  '&:hover': { color: 'white' },
                  transition: 'color 0.2s',
                }}
              >
                Contact
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 18, color: 'grey.400' }} aria-hidden="true" />
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  <a href="mailto:info@mihospital.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    info@mihospital.com
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 18, color: 'grey.400' }} aria-hidden="true" />
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  +92 XXX XXXXXXX
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: 1,
            borderColor: 'grey.700',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            &copy; {currentYear} Muhammad Ibrahim Hospital (MIH). All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
