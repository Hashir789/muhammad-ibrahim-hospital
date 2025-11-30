import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  Stack,
  Divider,
  Alert,
  CircularProgress,
} from '@mui/material';
import MetaTags from '../components/MetaTags';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSnackbar } from 'notistack';

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const branches = [
    {
      id: 'main',
      name: 'Muhammad Ibrahim Hospital',
      address: 'Shaheenabad Lahore, 54000, Pakistan',
      location: 'G7V8+FF Lahore, Pakistan',
      telephone: '+92 333 5469001',
      email: 'info@mihospital.com',
      hours: {
        weekdays: 'Monday - Friday: 8:00 AM - 8:00 PM',
        saturday: 'Saturday: 9:00 AM - 5:00 PM',
        sunday: 'Sunday: 10:00 AM - 4:00 PM',
        emergency: 'Emergency: 24/7',
      },
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5!2d74.3583!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0x0!2sShaheenabad%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890',
    },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        enqueueSnackbar('File size must be less than 5MB', { variant: 'error' });
        return;
      }
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        enqueueSnackbar('Please upload a valid file (JPG, PNG, PDF, or DOC)', { variant: 'error' });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Log form data (in real app, this would be sent to API)
      console.log('Contact Form Data:', {
        ...data,
        file: selectedFile ? {
          name: selectedFile.name,
          size: selectedFile.size,
          type: selectedFile.type,
        } : null,
      });

      // Show success message
      setSubmitSuccess(true);
      enqueueSnackbar('Your message has been sent successfully!', { variant: 'success' });

      // Reset form
      reset();
      setSelectedFile(null);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      enqueueSnackbar('Failed to send message. Please try again.', { variant: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Contact Us"
        description="Get in touch with Muhammad Ibrahim Hospital. Find our locations, contact information, and send us a message."
        keywords="contact, hospital contact, location, address, phone, email"
      />
      <Box component="article">
        {/* Header */}
        <Box component="header" sx={{ textAlign: 'center', mb: 6, pt: 4 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' },
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            We're here to help. Reach out to us through any of our branches or send us a message.
          </Typography>
        </Box>

        <Container maxWidth="xl">
          {/* Branches Section */}
          <Box component="section" aria-labelledby="branches-heading" sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              id="branches-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 4,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Our Branches
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {branches.map((branch) => (
                <Grid item xs={12} md={8} lg={6} key={branch.id}>
                  <Paper
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                        {branch.name}
                      </Typography>

                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                          <LocationOnIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                          <Box>
                            <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 0.5 }}>
                              {branch.address}
                            </Typography>
                            {branch.location && (
                              <Typography variant="body2" color="text.secondary">
                                {branch.location}
                              </Typography>
                            )}
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <PhoneIcon sx={{ color: 'primary.main' }} />
                          <Typography variant="body1" component="a" href={`tel:${branch.telephone.replace(/\s/g, '')}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                            {branch.telephone}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <EmailIcon sx={{ color: 'primary.main' }} />
                          <Typography variant="body1" component="a" href={`mailto:${branch.email}`} sx={{ textDecoration: 'none', color: 'primary.main' }}>
                            {branch.email}
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 1 }} />

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                          <AccessTimeIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                          <Box>
                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                              {branch.hours.weekdays}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                              {branch.hours.saturday}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                              {branch.hours.sunday}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main', mt: 1 }}>
                              {branch.hours.emergency}
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </CardContent>

                    {/* Google Maps iframe */}
                    <Box
                      sx={{
                        width: '100%',
                        height: 250,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <iframe
                        title={`${branch.name} Location`}
                        src={branch.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Contact Form Section */}
          <Box component="section" aria-labelledby="contact-form-heading" sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              id="contact-form-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 4,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Send Us a Message
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Paper elevation={3} sx={{ p: 4 }}>
                  {submitSuccess && (
                    <Alert
                      icon={<CheckCircleIcon />}
                      severity="success"
                      sx={{ mb: 3 }}
                      onClose={() => setSubmitSuccess(false)}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Message Sent Successfully!
                      </Typography>
                      <Typography variant="body2">
                        Thank you for contacting us. We'll get back to you as soon as possible.
                      </Typography>
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="name"
                          control={control}
                          rules={{ required: 'Name is required' }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Full Name"
                              error={!!errors.name}
                              helperText={errors.name?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="email"
                          control={control}
                          rules={{
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email address',
                            },
                          }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Email Address"
                              type="email"
                              error={!!errors.email}
                              helperText={errors.email?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="phone"
                          control={control}
                          rules={{
                            required: 'Phone number is required',
                            pattern: {
                              value: /^[0-9+\-\s()]{10,15}$/,
                              message: 'Please enter a valid phone number',
                            },
                          }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Phone Number"
                              error={!!errors.phone}
                              helperText={errors.phone?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="subject"
                          control={control}
                          rules={{ required: 'Subject is required' }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Subject"
                              error={!!errors.subject}
                              helperText={errors.subject?.message}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="message"
                          control={control}
                          rules={{
                            required: 'Message is required',
                            minLength: {
                              value: 10,
                              message: 'Message must be at least 10 characters',
                            },
                          }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Message"
                              multiline
                              rows={6}
                              error={!!errors.message}
                              helperText={errors.message?.message}
                              placeholder="Please describe your inquiry or concern..."
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Box>
                          <input
                            accept="image/*,.pdf,.doc,.docx"
                            style={{ display: 'none' }}
                            id="file-upload"
                            type="file"
                            onChange={handleFileChange}
                          />
                          <label htmlFor="file-upload">
                            <Button
                              variant="outlined"
                              component="span"
                              startIcon={<AttachFileIcon />}
                              sx={{ textTransform: 'none', mb: 2 }}
                            >
                              Attach File (Optional)
                            </Button>
                          </label>
                          {selectedFile && (
                            <Box sx={{ mt: 1, p: 2, bgcolor: 'grey.50', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <AttachFileIcon sx={{ color: 'text.secondary' }} />
                                <Typography variant="body2">
                                  {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
                                </Typography>
                              </Box>
                              <Button
                                size="small"
                                onClick={handleRemoveFile}
                                sx={{ textTransform: 'none' }}
                              >
                                Remove
                              </Button>
                            </Box>
                          )}
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                            Supported formats: JPG, PNG, PDF, DOC, DOCX (Max 5MB)
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                          disabled={isSubmitting}
                          fullWidth
                          sx={{ textTransform: 'none', py: 1.5 }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>

              {/* Contact Information Sidebar */}
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                    Get in Touch
                  </Typography>
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon sx={{ color: 'primary.main' }} />
                        Emergency Hotline
                      </Typography>
                      <Typography variant="body1" component="a" href="tel:+923335469001" sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 600 }}>
                        +92 333 5469001
                      </Typography>
                    </Box>

                    <Divider />

                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon sx={{ color: 'primary.main' }} />
                        General Inquiries
                      </Typography>
                      <Typography variant="body1" component="a" href="mailto:info@mihospital.com" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                        info@mihospital.com
                      </Typography>
                    </Box>

                    <Divider />

                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccessTimeIcon sx={{ color: 'primary.main' }} />
                        Business Hours
                      </Typography>
                      <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                        Monday - Friday: 8:00 AM - 8:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM<br />
                        <strong>Emergency: 24/7</strong>
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
