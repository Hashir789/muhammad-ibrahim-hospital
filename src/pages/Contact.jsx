import { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import MetaTags from '../components/MetaTags';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmergencyIcon from '@mui/icons-material/Emergency';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <MetaTags
        title="Contact Us"
        description="Get in touch with Muhammad Ibrahim Hospital - Contact information and location"
        keywords="contact, location, address, phone, email"
      />
      <Box component="article">
        <Box component="header">
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, color: 'primary.main', mb: 6 }}
          >
            Contact Us
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper 
              component="section"
              aria-labelledby="contact-info-heading"
              elevation={2} 
              sx={{ p: 4, height: '100%' }}
            >
              <Typography variant="h5" component="h2" id="contact-info-heading" sx={{ fontWeight: 600, mb: 3 }}>
                Get in Touch
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', mt: 0.5 }} aria-hidden="true" />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Address
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      123 Hospital Street<br />
                      City, Country
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <PhoneIcon sx={{ color: 'primary.main', mt: 0.5 }} aria-hidden="true" />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +92 XXX XXXXXXX
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <EmailIcon sx={{ color: 'primary.main', mt: 0.5 }} aria-hidden="true" />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Email
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      info@mihospital.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <EmergencyIcon sx={{ color: 'error.main', mt: 0.5 }} aria-hidden="true" />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: 'error.main' }}>
                      Emergency
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'error.main', fontWeight: 600 }}>
                      +92 XXX XXXXXXX
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper 
              component="section"
              aria-labelledby="contact-form-heading"
              elevation={2} 
              sx={{ p: 4 }}
            >
              <Typography variant="h5" component="h2" id="contact-form-heading" sx={{ fontWeight: 600, mb: 3 }}>
                Send a Message
              </Typography>
              <Box 
                component="form" 
                onSubmit={handleSubmit} 
                aria-label="Contact form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
              >
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
