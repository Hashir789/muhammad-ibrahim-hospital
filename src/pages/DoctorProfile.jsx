import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  Stack,
  Rating,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import MetaTags from '../components/MetaTags';

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentReason, setAppointmentReason] = useState('');

  useEffect(() => {
    if (location.state?.showAppointmentForm) {
      setShowAppointmentForm(true);
    }
  }, [location.state]);

  // Doctor data - in a real app, this would come from an API
  const doctorData = {
    'ahmed-khan': {
      name: 'Dr. Ahmed Khan',
      specialty: 'Cardiologist',
      department: 'Cardiology',
      rating: 4.8,
      reviewCount: 127,
      languages: ['English', 'Urdu', 'Arabic'],
      onlineAvailable: true,
      image: '/api/placeholder/200/200',
      bio: 'Dr. Ahmed Khan is a highly experienced cardiologist with over 15 years of practice in interventional cardiology. He specializes in the diagnosis and treatment of cardiovascular diseases, with particular expertise in coronary artery disease, heart failure, and cardiac catheterization procedures. Dr. Khan is committed to providing personalized, patient-centered care and staying at the forefront of cardiac medicine.',
      education: [
        { degree: 'MBBS', institution: 'Aga Khan University, Karachi', year: '2005' },
        { degree: 'MD - Internal Medicine', institution: 'Johns Hopkins University', year: '2009' },
        { degree: 'Fellowship - Interventional Cardiology', institution: 'Cleveland Clinic', year: '2011' },
      ],
      achievements: [
        'Published 50+ research papers in international cardiology journals',
        'Awarded Best Cardiologist of the Year 2020',
        'Member of American College of Cardiology',
        'Certified in Advanced Cardiac Life Support (ACLS)',
      ],
      schedule: [
        { day: 'Monday', time: '9:00 AM - 5:00 PM', available: true },
        { day: 'Tuesday', time: '9:00 AM - 5:00 PM', available: true },
        { day: 'Wednesday', time: '9:00 AM - 1:00 PM', available: true },
        { day: 'Thursday', time: '9:00 AM - 5:00 PM', available: true },
        { day: 'Friday', time: '9:00 AM - 1:00 PM', available: true },
        { day: 'Saturday', time: 'Closed', available: false },
        { day: 'Sunday', time: 'Closed', available: false },
      ],
      reviews: [
        {
          name: 'Muhammad Ali',
          rating: 5,
          date: '2024-01-15',
          comment: 'Excellent doctor! Very professional and caring. Explained everything clearly and made me feel comfortable throughout the treatment.',
        },
        {
          name: 'Sara Ahmed',
          rating: 5,
          date: '2024-01-10',
          comment: 'Dr. Khan is one of the best cardiologists I\'ve ever visited. His expertise and bedside manner are outstanding.',
        },
        {
          name: 'Ahmed Hassan',
          rating: 4,
          date: '2024-01-05',
          comment: 'Very knowledgeable and thorough. The wait time was a bit long, but the consultation was worth it.',
        },
        {
          name: 'Fatima Khan',
          rating: 5,
          date: '2023-12-28',
          comment: 'Highly recommend Dr. Khan. He took the time to understand my concerns and provided excellent care.',
        },
      ],
      availableSlots: [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
      ],
    },
    // Add more doctors as needed
  };

  const doctor = doctorData[doctorId] || doctorData['ahmed-khan'];

  const handleBookAppointment = (e) => {
    e.preventDefault();
    // Navigate to booking page with doctor pre-selected
    navigate('/book-appointment', { state: { doctorId, preSelectedDoctor: doctorId } });
  };

  return (
    <>
      <MetaTags
        title={`${doctor.name} - ${doctor.specialty}`}
        description={`View profile, schedule, and book appointment with ${doctor.name}, ${doctor.specialty}`}
        keywords={`${doctor.name}, ${doctor.specialty}, doctor profile, appointment`}
      />
      <Box component="article">
        <Container maxWidth="xl">
          {/* Back Button */}
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/doctors')}
            sx={{ mb: 3, textTransform: 'none' }}
          >
            Back to Doctors
          </Button>

          <Grid container spacing={4}>
            {/* Left Column - Profile Info */}
            <Grid item xs={12} md={4}>
              {/* Doctor Card */}
              <Card sx={{ mb: 3, textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Avatar
                    src={`https://picsum.photos/400/400?random=${doctorId.charCodeAt(0) + 200}`}
                    alt={`${doctor.name} - ${doctor.specialty}`}
                    sx={{
                      width: 150,
                      height: 150,
                      mx: 'auto',
                      mb: 3,
                      bgcolor: 'primary.main',
                      fontSize: '3rem',
                    }}
                    imgProps={{
                      loading: 'eager',
                    }}
                  >
                    {doctor.name.charAt(0)}
                  </Avatar>
                  <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
                    {doctor.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                    {doctor.specialty}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Rating value={doctor.rating} precision={0.1} readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {doctor.rating} ({doctor.reviewCount} reviews)
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                    {doctor.languages.map((lang) => (
                      <Chip key={lang} label={lang} size="small" variant="outlined" />
                    ))}
                  </Stack>
                  {doctor.onlineAvailable && (
                    <Chip
                      label="Online Consultations Available"
                      color="success"
                      sx={{ mb: 3 }}
                    />
                  )}
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    startIcon={<CalendarTodayIcon />}
                    onClick={() => navigate('/book-appointment', { state: { doctorId, preSelectedDoctor: doctorId } })}
                    sx={{ textTransform: 'none', py: 1.5 }}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Quick Information
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Department
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {doctor.department}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Languages
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {doctor.languages.join(', ')}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Consultation Fee
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        PKR 3,000
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Column - Details */}
            <Grid item xs={12} md={8}>
              {/* Bio */}
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                    Biography
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {doctor.bio}
                  </Typography>
                </CardContent>
              </Card>

              {/* Education */}
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <SchoolIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                      Education
                    </Typography>
                  </Box>
                  <Stack spacing={2}>
                    {doctor.education.map((edu, index) => (
                      <Box key={index}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {edu.institution} • {edu.year}
                        </Typography>
                        {index < doctor.education.length - 1 && <Divider sx={{ mt: 2 }} />}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <EmojiEventsIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                      Achievements & Certifications
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    {doctor.achievements.map((achievement, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <StarIcon sx={{ color: 'primary.main', fontSize: 20, mt: 0.5 }} />
                        <Typography variant="body1">{achievement}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Weekly Schedule */}
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                    Weekly Schedule
                  </Typography>
                  <TableContainer component={Paper} variant="outlined">
                    <Table>
                      <TableHead>
                        <TableRow sx={{ backgroundColor: 'grey.50' }}>
                          <TableCell sx={{ fontWeight: 600 }}>Day</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Time</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {doctor.schedule.map((schedule, index) => (
                          <TableRow key={index}>
                            <TableCell>{schedule.day}</TableCell>
                            <TableCell>{schedule.time}</TableCell>
                            <TableCell>
                              <Chip
                                label={schedule.available ? 'Available' : 'Closed'}
                                color={schedule.available ? 'success' : 'default'}
                                size="small"
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                    Patient Reviews ({doctor.reviewCount})
                  </Typography>
                  <Stack spacing={3}>
                    {doctor.reviews.map((review, index) => (
                      <Box key={index}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {review.name}
                            </Typography>
                            <Rating value={review.rating} readOnly size="small" />
                          </Box>
                          <Typography variant="caption" color="text.secondary">
                            {review.date}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.6 }}>
                          {review.comment}
                        </Typography>
                        {index < doctor.reviews.length - 1 && <Divider sx={{ mt: 2 }} />}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Appointment Form */}
              {showAppointmentForm && (
                <Card sx={{ mb: 3 }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                      Book Appointment
                    </Typography>
                    <Box component="form" onSubmit={handleBookAppointment}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Appointment Date"
                            type="date"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth required>
                            <InputLabel>Time Slot</InputLabel>
                            <Select
                              value={appointmentTime}
                              label="Time Slot"
                              onChange={(e) => setAppointmentTime(e.target.value)}
                            >
                              {doctor.availableSlots.map((slot) => (
                                <MenuItem key={slot} value={slot}>
                                  {slot}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Reason for Visit"
                            multiline
                            rows={4}
                            value={appointmentReason}
                            onChange={(e) => setAppointmentReason(e.target.value)}
                            placeholder="Please describe your symptoms or reason for the appointment"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              sx={{ textTransform: 'none' }}
                            >
                              Confirm Appointment
                            </Button>
                            <Button
                              variant="outlined"
                              size="large"
                              onClick={() => setShowAppointmentForm(false)}
                              sx={{ textTransform: 'none' }}
                            >
                              Cancel
                            </Button>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DoctorProfile;

