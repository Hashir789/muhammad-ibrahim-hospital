import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import MetaTags from '../components/MetaTags';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScannerIcon from '@mui/icons-material/Scanner';
import ScienceIcon from '@mui/icons-material/Science';
import HealingIcon from '@mui/icons-material/Healing';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const Services = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const serviceCategories = [
    {
      id: 'imaging',
      label: 'Imaging',
      icon: <ScannerIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      description: 'Advanced medical imaging services for accurate diagnosis',
    },
    {
      id: 'laboratory',
      label: 'Laboratory',
      icon: <ScienceIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      description: 'Comprehensive laboratory testing and diagnostics',
    },
    {
      id: 'day-care',
      label: 'Day Care',
      icon: <HealingIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      description: 'Day care surgical and medical procedures',
    },
    {
      id: 'pharmacy',
      label: 'Pharmacy',
      icon: <LocalPharmacyIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      description: 'Full-service pharmacy with medication management',
    },
    {
      id: 'rehabilitation',
      label: 'Rehabilitation',
      icon: <AccessibilityNewIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      description: 'Physical and occupational therapy services',
    },
  ];

  const services = {
    imaging: [
      {
        id: 'mri',
        name: 'MRI Scan',
        description: 'Magnetic Resonance Imaging for detailed body scans',
        priceRange: 'PKR 15,000 - 25,000',
        reportDelivery: '24-48 hours',
        preparation: [
          'Fast for 4-6 hours before the scan',
          'Remove all metal objects and jewelry',
          'Inform doctor if you have any implants or pacemaker',
          'Wear comfortable, metal-free clothing',
        ],
        timeSlot: '45-60 minutes',
      },
      {
        id: 'ct-scan',
        name: 'CT Scan',
        description: 'Computed Tomography for cross-sectional imaging',
        priceRange: 'PKR 8,000 - 15,000',
        reportDelivery: '24 hours',
        preparation: [
          'Fast for 4-6 hours if contrast is required',
          'Inform about allergies, especially to contrast dye',
          'Remove metal objects',
          'Drink plenty of water before the scan',
        ],
        timeSlot: '20-30 minutes',
      },
      {
        id: 'ultrasound',
        name: 'Ultrasound',
        description: 'Ultrasound imaging for various body parts',
        priceRange: 'PKR 2,000 - 5,000',
        reportDelivery: 'Same day',
        preparation: [
          'Fast for 6-8 hours for abdominal ultrasound',
          'Drink water and avoid urination for pelvic ultrasound',
          'No special preparation for other types',
        ],
        timeSlot: '15-30 minutes',
      },
      {
        id: 'x-ray',
        name: 'X-Ray',
        description: 'Radiographic imaging for bones and chest',
        priceRange: 'PKR 500 - 2,000',
        reportDelivery: 'Same day',
        preparation: [
          'Remove jewelry and metal objects',
          'Wear comfortable clothing',
          'Inform if pregnant',
        ],
        timeSlot: '5-10 minutes',
      },
    ],
    laboratory: [
      {
        id: 'blood-test',
        name: 'Complete Blood Count (CBC)',
        description: 'Comprehensive blood analysis',
        priceRange: 'PKR 800 - 1,200',
        reportDelivery: 'Same day',
        preparation: [
          'Fast for 8-12 hours',
          'Avoid fatty foods the night before',
          'Continue regular medications unless advised otherwise',
          'Drink water normally',
        ],
        timeSlot: '5 minutes',
      },
      {
        id: 'lipid-profile',
        name: 'Lipid Profile',
        description: 'Cholesterol and lipid level testing',
        priceRange: 'PKR 1,500 - 2,000',
        reportDelivery: '24 hours',
        preparation: [
          'Fast for 12-14 hours',
          'Avoid alcohol for 24 hours',
          'Continue medications unless advised',
        ],
        timeSlot: '5 minutes',
      },
      {
        id: 'diabetes-test',
        name: 'Diabetes Screening',
        description: 'Blood glucose and HbA1c testing',
        priceRange: 'PKR 1,000 - 1,500',
        reportDelivery: 'Same day',
        preparation: [
          'Fast for 8-12 hours for fasting blood sugar',
          'No special preparation for random test',
        ],
        timeSlot: '5 minutes',
      },
      {
        id: 'thyroid-test',
        name: 'Thyroid Function Test',
        description: 'Comprehensive thyroid hormone analysis',
        priceRange: 'PKR 2,000 - 3,000',
        reportDelivery: '24-48 hours',
        preparation: [
          'No fasting required',
          'Continue medications unless advised',
        ],
        timeSlot: '5 minutes',
      },
    ],
    'day-care': [
      {
        id: 'endoscopy',
        name: 'Endoscopy',
        description: 'Minimally invasive diagnostic procedure',
        priceRange: 'PKR 15,000 - 25,000',
        reportDelivery: '24-48 hours',
        preparation: [
          'Fast for 8-12 hours before procedure',
          'Stop blood thinners 3-5 days before (as advised)',
          'Arrange for someone to drive you home',
          'Follow specific dietary restrictions',
        ],
        timeSlot: '30-45 minutes',
      },
      {
        id: 'colonoscopy',
        name: 'Colonoscopy',
        description: 'Colon examination procedure',
        priceRange: 'PKR 20,000 - 30,000',
        reportDelivery: '24-48 hours',
        preparation: [
          'Follow special diet 2-3 days before',
          'Take prescribed bowel preparation',
          'Fast for 12 hours',
          'Arrange transportation',
        ],
        timeSlot: '45-60 minutes',
      },
      {
        id: 'minor-surgery',
        name: 'Minor Surgical Procedures',
        description: 'Outpatient surgical procedures',
        priceRange: 'PKR 10,000 - 50,000',
        reportDelivery: 'N/A',
        preparation: [
          'Fast for 8-12 hours',
          'Stop certain medications as advised',
          'Arrange for post-procedure care',
          'Follow pre-surgery instructions',
        ],
        timeSlot: '30-90 minutes',
      },
    ],
    pharmacy: [
      {
        id: 'prescription',
        name: 'Prescription Medications',
        description: 'Dispensing of prescribed medications',
        priceRange: 'Varies by medication',
        reportDelivery: 'Immediate',
        preparation: [
          'Bring valid prescription',
          'Bring ID for controlled substances',
          'Check insurance coverage if applicable',
        ],
        timeSlot: '10-15 minutes',
      },
      {
        id: 'consultation',
        name: 'Pharmacy Consultation',
        description: 'Medication counseling and advice',
        priceRange: 'Free',
        reportDelivery: 'N/A',
        preparation: [
          'Bring list of current medications',
          'Bring list of allergies',
          'Prepare questions about medications',
        ],
        timeSlot: '15-20 minutes',
      },
    ],
    rehabilitation: [
      {
        id: 'physical-therapy',
        name: 'Physical Therapy',
        description: 'Rehabilitation and movement therapy',
        priceRange: 'PKR 2,000 - 3,000 per session',
        reportDelivery: 'N/A',
        preparation: [
          'Wear comfortable clothing',
          'Bring referral if required',
          'Arrive 10 minutes early',
        ],
        timeSlot: '45-60 minutes',
      },
      {
        id: 'occupational-therapy',
        name: 'Occupational Therapy',
        description: 'Functional rehabilitation therapy',
        priceRange: 'PKR 2,000 - 3,000 per session',
        reportDelivery: 'N/A',
        preparation: [
          'Wear comfortable clothing',
          'Bring referral if required',
          'Inform about any limitations',
        ],
        timeSlot: '45-60 minutes',
      },
      {
        id: 'cardiac-rehab',
        name: 'Cardiac Rehabilitation',
        description: 'Post-cardiac event rehabilitation',
        priceRange: 'PKR 3,000 - 4,000 per session',
        reportDelivery: 'N/A',
        preparation: [
          'Bring medical clearance',
          'Wear comfortable exercise clothing',
          'Bring list of medications',
        ],
        timeSlot: '60-90 minutes',
      },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleBookTest = (e) => {
    e.preventDefault();
    // Handle booking
    console.log('Booking test:', { service: selectedService, bookingDate, bookingTime });
    alert('Test booking request submitted! We will contact you shortly.');
    setOpenDialog(false);
    setBookingDate('');
    setBookingTime('');
  };

  const currentCategory = serviceCategories[selectedTab];
  const currentServices = services[currentCategory.id] || [];

  return (
    <>
      <MetaTags
        title="Our Services"
        description="Comprehensive healthcare services including imaging, laboratory, day care, pharmacy, and rehabilitation"
        keywords="services, medical services, healthcare, diagnostics, imaging, laboratory"
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
            Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Comprehensive healthcare services tailored to meet your medical needs
          </Typography>
        </Box>

        <Container maxWidth="xl">
          {/* Category Tabs */}
          <Box sx={{ mb: 4 }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 500,
                  minHeight: 72,
                  px: 3,
                },
              }}
            >
              {serviceCategories.map((category) => (
                <Tab
                  key={category.id}
                  label={
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      {category.icon}
                      <Typography variant="body1" sx={{ fontWeight: 'inherit' }}>
                        {category.label}
                      </Typography>
                    </Box>
                  }
                />
              ))}
            </Tabs>
          </Box>

          {/* Category Description */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              {currentCategory.description}
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {currentServices.map((service) => (
              <Grid item xs={12} md={6} lg={4} key={service.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                    },
                  }}
                  onClick={() => handleServiceClick(service)}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                      {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {service.description}
                    </Typography>
                    <Stack spacing={1} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          Price Range:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {service.priceRange}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          Report Delivery:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {service.reportDelivery}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          Duration:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {service.timeSlot}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<CalendarTodayIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(service);
                      }}
                      sx={{ textTransform: 'none' }}
                    >
                      Book Test
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Diagnostics Link */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/services/diagnostics')}
              sx={{ textTransform: 'none', px: 4 }}
            >
              View All Diagnostic Tests
            </Button>
          </Box>
        </Container>

        {/* Service Detail Dialog */}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          maxWidth="md"
          fullWidth
        >
          {selectedService && (
            <>
              <DialogTitle>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                  {selectedService.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {selectedService.description}
                </Typography>
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                      Price Range
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {selectedService.priceRange}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                      Report Delivery
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {selectedService.reportDelivery}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ my: 2 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Preparation Instructions
                    </Typography>
                    <List>
                      {selectedService.preparation.map((instruction, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={instruction} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ my: 2 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Book This Test
                    </Typography>
                    <Box component="form" onSubmit={handleBookTest}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Preferred Date"
                            type="date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth required>
                            <InputLabel>Preferred Time</InputLabel>
                            <Select
                              value={bookingTime}
                              label="Preferred Time"
                              onChange={(e) => setBookingTime(e.target.value)}
                            >
                              <MenuItem value="9:00 AM">9:00 AM</MenuItem>
                              <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                              <MenuItem value="11:00 AM">11:00 AM</MenuItem>
                              <MenuItem value="12:00 PM">12:00 PM</MenuItem>
                              <MenuItem value="2:00 PM">2:00 PM</MenuItem>
                              <MenuItem value="3:00 PM">3:00 PM</MenuItem>
                              <MenuItem value="4:00 PM">4:00 PM</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ px: 3, pb: 3 }}>
                <Button onClick={() => setOpenDialog(false)}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleBookTest}
                  startIcon={<CalendarTodayIcon />}
                >
                  Confirm Booking
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </>
  );
};

export default Services;
