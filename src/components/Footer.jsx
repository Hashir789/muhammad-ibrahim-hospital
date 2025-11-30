import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// FooterSection component moved outside to prevent recreation on re-renders
const FooterSection = ({ title, children, id, isMobile }) => {
  if (isMobile) {
    return (
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'grey.700',
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.400' }} />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
          sx={{
            px: 0,
            '& .MuiAccordionSummary-content': {
              my: 2,
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pb: 3 }}>
          {children}
        </AccordionDetails>
      </Accordion>
    );
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    { label: 'Book Appointment', path: '/contact' },
  ];

  const patientResources = [
    { label: 'Patient Portal', path: '/patient-portal' },
    { label: 'Medical Records', path: '/medical-records' },
    { label: 'Insurance', path: '/insurance' },
    { label: 'Billing', path: '/billing' },
  ];

  const socialLinks = useMemo(
    () => [
      { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com' },
      { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com' },
      { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com' },
      { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com' },
    ],
    []
  );

  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        bgcolor: 'grey.800',
        color: 'grey.200',
        mt: 'auto',
        pt: { xs: 4, md: 6 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        {isMobile ? (
          // Mobile Accordion Layout
          <Box>
            <FooterSection title="Contact" id="contact" isMobile={isMobile}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <LocationOnIcon sx={{ fontSize: 20, color: 'grey.400', mt: 0.5 }} aria-hidden="true" />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
                      123 Hospital Street<br />
                      City, Country
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <PhoneIcon sx={{ fontSize: 20, color: 'grey.400' }} aria-hidden="true" />
                  <MuiLink
                    href="tel:+92XXXXXXXXX"
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      '&:hover': { color: 'white' },
                    }}
                    aria-label="Call us at +92 XX XXXX XXXX"
                  >
                    <Typography variant="body2">+92 XX XXXX XXXX</Typography>
                  </MuiLink>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <EmailIcon sx={{ fontSize: 20, color: 'grey.400' }} aria-hidden="true" />
                  <MuiLink
                    href="mailto:info@mihospital.com"
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      '&:hover': { color: 'white' },
                    }}
                    aria-label="Email us at info@mihospital.com"
                  >
                    <Typography variant="body2">info@mihospital.com</Typography>
                  </MuiLink>
                </Box>
              </Box>
            </FooterSection>

            <FooterSection title="Quick Links" id="quick-links" isMobile={isMobile}>
              <Box component="nav" aria-label="Quick links navigation" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {quickLinks.map((link) => (
                  <MuiLink
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      '&:hover': { color: 'white' },
                      transition: 'color 0.2s',
                    }}
                  >
                    <Typography variant="body2">{link.label}</Typography>
                  </MuiLink>
                ))}
              </Box>
            </FooterSection>

            <FooterSection title="Patient Resources" id="patient-resources" isMobile={isMobile}>
              <Box component="nav" aria-label="Patient resources navigation" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {patientResources.map((resource) => (
                  <MuiLink
                    key={resource.path}
                    component={Link}
                    to={resource.path}
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      '&:hover': { color: 'white' },
                      transition: 'color 0.2s',
                    }}
                  >
                    <Typography variant="body2">{resource.label}</Typography>
                  </MuiLink>
                ))}
              </Box>
            </FooterSection>

            <FooterSection title="Social & Accreditations" id="social" isMobile={isMobile}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social) => (
                    <MuiLink
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.label} page`}
                      sx={{
                        color: 'grey.400',
                        '&:hover': { color: 'white' },
                        transition: 'color 0.2s',
                      }}
                    >
                      {social.icon}
                    </MuiLink>
                  ))}
                </Box>
                <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
                  Accredited by International Healthcare Accreditation Board
                </Typography>
              </Box>
            </FooterSection>

            <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'grey.700' }}>
              <Box
                component="form"
                onSubmit={handleNewsletterSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                  Subscribe to Newsletter
                </Typography>
                <TextField
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'grey.700',
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'grey.600',
                      },
                      '&:hover fieldset': {
                        borderColor: 'grey.500',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'grey.400',
                      opacity: 1,
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          // Desktop Grid Layout
          <Grid container spacing={4}>
            {/* Contact Column */}
            <Grid item xs={12} sm={6} md={3}>
              <FooterSection title="Contact" id="contact" isMobile={isMobile}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <LocationOnIcon sx={{ fontSize: 20, color: 'grey.400', mt: 0.5 }} aria-hidden="true" />
                    <Box>
                      <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
                        123 Hospital Street<br />
                        City, Country
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <PhoneIcon sx={{ fontSize: 20, color: 'grey.400' }} aria-hidden="true" />
                    <MuiLink
                      href="tel:+92XXXXXXXXX"
                      sx={{
                        color: 'grey.400',
                        textDecoration: 'none',
                        '&:hover': { color: 'white' },
                      }}
                      aria-label="Call us at +92 XX XXXX XXXX"
                    >
                      <Typography variant="body2">+92 XX XXXX XXXX</Typography>
                    </MuiLink>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <EmailIcon sx={{ fontSize: 20, color: 'grey.400' }} aria-hidden="true" />
                    <MuiLink
                      href="mailto:info@mihospital.com"
                      sx={{
                        color: 'grey.400',
                        textDecoration: 'none',
                        '&:hover': { color: 'white' },
                      }}
                      aria-label="Email us at info@mihospital.com"
                    >
                      <Typography variant="body2">info@mihospital.com</Typography>
                    </MuiLink>
                  </Box>
                </Box>
              </FooterSection>
            </Grid>

            {/* Quick Links Column */}
            <Grid item xs={12} sm={6} md={3}>
              <FooterSection title="Quick Links" id="quick-links" isMobile={isMobile}>
                <Box component="nav" aria-label="Quick links navigation" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {quickLinks.map((link) => (
                    <MuiLink
                      key={link.path}
                      component={Link}
                      to={link.path}
                      sx={{
                        color: 'grey.400',
                        textDecoration: 'none',
                        '&:hover': { color: 'white' },
                        transition: 'color 0.2s',
                      }}
                    >
                      <Typography variant="body2">{link.label}</Typography>
                    </MuiLink>
                  ))}
                </Box>
              </FooterSection>
            </Grid>

            {/* Patient Resources Column */}
            <Grid item xs={12} sm={6} md={3}>
              <FooterSection title="Patient Resources" id="patient-resources" isMobile={isMobile}>
                <Box component="nav" aria-label="Patient resources navigation" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {patientResources.map((resource) => (
                    <MuiLink
                      key={resource.path}
                      component={Link}
                      to={resource.path}
                      sx={{
                        color: 'grey.400',
                        textDecoration: 'none',
                        '&:hover': { color: 'white' },
                        transition: 'color 0.2s',
                      }}
                    >
                      <Typography variant="body2">{resource.label}</Typography>
                    </MuiLink>
                  ))}
                </Box>
              </FooterSection>
            </Grid>

            {/* Social & Accreditations Column */}
            <Grid item xs={12} sm={6} md={3}>
              <FooterSection title="Social & Accreditations" id="social" isMobile={isMobile}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social) => (
                      <MuiLink
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${social.label} page`}
                        sx={{
                          color: 'grey.400',
                          '&:hover': { color: 'white' },
                          transition: 'color 0.2s',
                        }}
                      >
                        {social.icon}
                      </MuiLink>
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
                    Accredited by International Healthcare Accreditation Board
                  </Typography>
                  {/* Newsletter Subscription */}
                  <Box
                    component="form"
                    onSubmit={handleNewsletterSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'white' }}>
                      Subscribe to Newsletter
                    </Typography>
                    <TextField
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'grey.700',
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'grey.600',
                          },
                          '&:hover fieldset': {
                            borderColor: 'grey.500',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputBase-input::placeholder': {
                          color: 'grey.400',
                          opacity: 1,
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Subscribe
                    </Button>
                  </Box>
                </Box>
              </FooterSection>
            </Grid>
          </Grid>
        )}

        {/* Legal Footer */}
        <Box
          sx={{
            borderTop: 1,
            borderColor: 'grey.700',
            mt: 4,
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            &copy; {currentYear} Muhammad Ibrahim Hospital (MIH). All rights reserved.
          </Typography>
          <Box
            component="nav"
            aria-label="Legal links"
            sx={{
              display: 'flex',
              gap: { xs: 1.5, sm: 2 },
              flexWrap: 'wrap',
            }}
          >
            <MuiLink
              component={Link}
              to="/sitemap"
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'white' },
                transition: 'color 0.2s',
              }}
            >
              Sitemap
            </MuiLink>
            <Typography component="span" sx={{ color: 'grey.600' }}>
              —
            </Typography>
            <MuiLink
              component={Link}
              to="/privacy-policy"
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'white' },
                transition: 'color 0.2s',
              }}
            >
              Privacy Policy
            </MuiLink>
            <Typography component="span" sx={{ color: 'grey.600' }}>
              —
            </Typography>
            <MuiLink
              component={Link}
              to="/terms"
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'white' },
                transition: 'color 0.2s',
              }}
            >
              Terms
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
