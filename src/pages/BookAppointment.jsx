import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { getAvailableSlots, getUnavailableDates, checkSlotAvailability } from '../services/appointmentApi';
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  CardContent,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  MenuItem,
  Chip,
  Stack,
  Divider,
  Paper,
  InputLabel,
  Select,
} from '@mui/material';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventIcon from '@mui/icons-material/Event';
import MetaTags from '../components/MetaTags';
import { useSnackbar } from 'notistack';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const steps = ['Choose Service/Doctor', 'Select Date & Time', 'Patient Details', 'Confirmation'];

const BookAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedType, setSelectedType] = useState(location.state?.preSelectedDoctor ? 'doctor' : 'doctor');
  const [selectedDoctor, setSelectedDoctor] = useState(location.state?.preSelectedDoctor || location.state?.doctorId || '');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      reason: '',
    },
  });

  // Sample data
  const doctors = [
    { id: 'ahmed-khan', name: 'Dr. Ahmed Khan', specialty: 'Cardiologist' },
    { id: 'fatima-ali', name: 'Dr. Fatima Ali', specialty: 'Pediatrician' },
    { id: 'hassan-malik', name: 'Dr. Hassan Malik', specialty: 'Orthopedic Surgeon' },
    { id: 'ayesha-sheikh', name: 'Dr. Ayesha Sheikh', specialty: 'Neurologist' },
  ];

  const services = [
    { id: 'consultation', name: 'General Consultation', category: 'General' },
    { id: 'follow-up', name: 'Follow-up Visit', category: 'General' },
    { id: 'health-checkup', name: 'Health Checkup', category: 'Preventive' },
    { id: 'vaccination', name: 'Vaccination', category: 'Preventive' },
  ];

  // All possible time slots
  const allTimeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  ];

  // Load unavailable dates on mount
  useEffect(() => {
    const loadUnavailableDates = async () => {
      const dates = await getUnavailableDates();
      setUnavailableDates(dates);
    };
    loadUnavailableDates();
  }, []);

  // Load available time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      const loadAvailableSlots = async () => {
        setLoadingSlots(true);
        setSelectedTimeSlot(''); // Reset time slot when date changes
        const slots = await getAvailableSlots(selectedDate, selectedDoctor, selectedService);
        setAvailableTimeSlots(slots);
        setLoadingSlots(false);
      };
      loadAvailableSlots();
    } else {
      setAvailableTimeSlots([]);
      setSelectedTimeSlot('');
    }
  }, [selectedDate, selectedDoctor, selectedService]);

  // Check if a date should be disabled
  const shouldDisableDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    // Disable past dates
    if (checkDate < today) {
      return true;
    }

    // Disable unavailable dates
    return unavailableDates.some((unavailableDate) => {
      const unavailableStr = unavailableDate.toISOString().split('T')[0];
      return unavailableStr === dateStr;
    });
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      if ((selectedType === 'doctor' && !selectedDoctor) || (selectedType === 'service' && !selectedService)) {
        enqueueSnackbar('Please select a doctor or service', { variant: 'warning' });
        return;
      }
    } else if (activeStep === 1) {
      if (!selectedDate) {
        enqueueSnackbar('Please select a date', { variant: 'warning' });
        return;
      }
      if (!selectedTimeSlot) {
        enqueueSnackbar('Please select a time slot', { variant: 'warning' });
        return;
      }
      // Verify slot is still available
      const isAvailable = await checkSlotAvailability(selectedDate, selectedTimeSlot, selectedDoctor, selectedService);
      if (!isAvailable) {
        enqueueSnackbar('This time slot is no longer available. Please select another.', { variant: 'error' });
        return;
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data) => {
    // Generate booking ID
    const newBookingId = `APT-${Date.now().toString().slice(-8)}`;
    setBookingId(newBookingId);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    // Show success notification
    enqueueSnackbar('Appointment booked successfully!', { variant: 'success' });

    // Log booking data (in real app, this would be sent to API)
    console.log('Booking Data:', {
      bookingId: newBookingId,
      type: selectedType,
      doctor: selectedDoctor,
      service: selectedService,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      patientDetails: data,
    });
  };

  const generateGoogleCalendarLink = () => {
    const selectedDoctorName = doctors.find((d) => d.id === selectedDoctor)?.name || 'Doctor';
    const selectedServiceName = services.find((s) => s.id === selectedService)?.name || 'Service';
    const title = selectedType === 'doctor' ? `Appointment with ${selectedDoctorName}` : `Appointment: ${selectedServiceName}`;
    const dateStr = format(selectedDate, 'yyyyMMdd');
    const timeStr = selectedTimeSlot.replace(/[:\s]/g, '').replace(/AM|PM/, (match) => (match === 'AM' ? '' : '12'));
    const startDateTime = `${dateStr}T${timeStr}00`;
    
    const details = `Booking ID: ${bookingId}`;
    const location = 'Muhammad Ibrahim Hospital';
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDateTime}/${startDateTime}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Choose Appointment Type
            </Typography>
            <FormControl component="fieldset" sx={{ mb: 4 }}>
              <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                I want to book an appointment with:
              </FormLabel>
              <RadioGroup
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setSelectedDoctor('');
                  setSelectedService('');
                }}
              >
                <FormControlLabel
                  value="doctor"
                  control={<Radio />}
                  label="A Doctor"
                />
                <FormControlLabel
                  value="service"
                  control={<Radio />}
                  label="A Service"
                />
              </RadioGroup>
            </FormControl>

            {selectedType === 'doctor' && (
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Select Doctor
                </Typography>
                <Grid container spacing={2}>
                  {doctors.map((doctor) => (
                    <Grid item xs={12} sm={6} key={doctor.id}>
                      <Card
                        sx={{
                          cursor: 'pointer',
                          border: selectedDoctor === doctor.id ? 2 : 1,
                          borderColor: selectedDoctor === doctor.id ? 'primary.main' : 'grey.300',
                          transition: 'all 0.3s',
                          '&:hover': {
                            borderColor: 'primary.main',
                            boxShadow: 4,
                          },
                        }}
                        onClick={() => setSelectedDoctor(doctor.id)}
                      >
                        <CardContent>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <LocalHospitalIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {doctor.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {doctor.specialty}
                              </Typography>
                            </Box>
                            {selectedDoctor === doctor.id && (
                              <CheckCircleIcon sx={{ ml: 'auto', color: 'primary.main' }} />
                            )}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {selectedType === 'service' && (
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Select Service
                </Typography>
                <Grid container spacing={2}>
                  {services.map((service) => (
                    <Grid item xs={12} sm={6} key={service.id}>
                      <Card
                        sx={{
                          cursor: 'pointer',
                          border: selectedService === service.id ? 2 : 1,
                          borderColor: selectedService === service.id ? 'primary.main' : 'grey.300',
                          transition: 'all 0.3s',
                          '&:hover': {
                            borderColor: 'primary.main',
                            boxShadow: 4,
                          },
                        }}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <CardContent>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <MedicalServicesIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {service.name}
                              </Typography>
                              <Chip label={service.category} size="small" sx={{ mt: 0.5 }} />
                            </Box>
                            {selectedService === service.id && (
                              <CheckCircleIcon sx={{ ml: 'auto', color: 'primary.main' }} />
                            )}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Select Date & Time
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  Choose Date
                </Typography>
                <Paper sx={{ p: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
                    <DateCalendar
                      value={selectedDate}
                      onChange={(newValue) => setSelectedDate(newValue)}
                      minDate={new Date()}
                      shouldDisableDate={shouldDisableDate}
                    />
                  </LocalizationProvider>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  Available Time Slots
                </Typography>
                <Paper sx={{ p: 2 }}>
                  {loadingSlots ? (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                      <Typography variant="body2" color="text.secondary">
                        Loading available slots...
                      </Typography>
                    </Box>
                  ) : availableTimeSlots.length === 0 ? (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                      <Typography variant="body2" color="text.secondary">
                        {selectedDate ? 'No available slots for this date' : 'Please select a date first'}
                      </Typography>
                    </Box>
                  ) : (
                    <Grid container spacing={1}>
                      {allTimeSlots.map((slot) => {
                        const isAvailable = availableTimeSlots.includes(slot);
                        const isSelected = selectedTimeSlot === slot;
                        return (
                          <Grid item xs={6} sm={4} key={slot}>
                            <Chip
                              label={slot}
                              onClick={() => {
                                if (isAvailable) {
                                  setSelectedTimeSlot(slot);
                                }
                              }}
                              color={isSelected ? 'primary' : 'default'}
                              variant={isSelected ? 'filled' : isAvailable ? 'outlined' : 'filled'}
                              disabled={!isAvailable}
                              sx={{
                                width: '100%',
                                cursor: isAvailable ? 'pointer' : 'not-allowed',
                                opacity: isAvailable ? 1 : 0.5,
                                backgroundColor: !isAvailable ? 'grey.200' : undefined,
                                '&:hover': isAvailable ? {
                                  backgroundColor: 'primary.light',
                                  color: 'white',
                                } : {},
                              }}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  )}
                </Paper>
                {selectedDate && (
                  <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Selected: {format(selectedDate, 'EEEE, MMMM d, yyyy')} at {selectedTimeSlot || 'No time selected'}
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Patient Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{ required: 'Full name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Full Name"
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                      InputProps={{
                        startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                      }}
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
                      value: /^[0-9]{10,15}$/,
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
                      InputProps={{
                        startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                      }}
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
                      InputProps={{
                        startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="dateOfBirth"
                  control={control}
                  rules={{ required: 'Date of birth is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Date of Birth"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.dateOfBirth}
                      helperText={errors.dateOfBirth?.message}
                      InputProps={{
                        startAdornment: <CalendarTodayIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: 'Gender is required' }}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.gender}>
                      <InputLabel>Gender</InputLabel>
                      <Select {...field} label="Gender">
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                      {errors.gender && (
                        <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.75 }}>
                          {errors.gender.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="address"
                  control={control}
                  rules={{ required: 'Address is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Address"
                      multiline
                      rows={3}
                      error={!!errors.address}
                      helperText={errors.address?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="reason"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Reason for Visit (Optional)"
                      multiline
                      rows={3}
                      placeholder="Please describe your symptoms or reason for the appointment"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Box>
        );

      case 3:
        const selectedDoctorName = doctors.find((d) => d.id === selectedDoctor)?.name || 'N/A';
        const selectedServiceName = services.find((s) => s.id === selectedService)?.name || 'N/A';
        
        return (
          <Box sx={{ textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
              Appointment Confirmed!
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
              Your booking ID: <strong>{bookingId}</strong>
            </Typography>

            <Card sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Appointment Details
                </Typography>
                <Stack spacing={2} divider={<Divider />}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">
                      Type:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {selectedType === 'doctor' ? 'Doctor Appointment' : 'Service Appointment'}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">
                      {selectedType === 'doctor' ? 'Doctor:' : 'Service:'}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {selectedType === 'doctor' ? selectedDoctorName : selectedServiceName}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">
                      Date:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'N/A'}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" color="text.secondary">
                      Time:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {selectedTimeSlot || 'N/A'}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                startIcon={<EventIcon />}
                onClick={generateGoogleCalendarLink}
                sx={{ textTransform: 'none' }}
              >
                Add to Google Calendar
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  navigate('/');
                  reset();
                }}
                sx={{ textTransform: 'none' }}
              >
                Back to Home
              </Button>
            </Stack>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <MetaTags
        title="Book Appointment"
        description="Book an appointment with our doctors or services"
        keywords="appointment, booking, doctor appointment"
      />
      <Box component="article">
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
            }}
          >
            Book Appointment
          </Typography>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Card>
            <CardContent sx={{ p: 4 }}>
              {renderStepContent(activeStep)}

              {activeStep < steps.length - 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ textTransform: 'none' }}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 2 ? (
                    <Button
                      variant="contained"
                      onClick={handleSubmit(onSubmit)}
                      sx={{ textTransform: 'none' }}
                    >
                      Confirm Booking
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ textTransform: 'none' }}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default BookAppointment;

