import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
  Grow,
  Fade,
} from '@mui/material';
import MetaTags from '../components/MetaTags';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import EmergencyIcon from '@mui/icons-material/Emergency';
import HealingIcon from '@mui/icons-material/Healing';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScannerIcon from '@mui/icons-material/Scanner';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Intersection observers for each section
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [servicesRef, servicesVisible] = useIntersectionObserver();
  const [departmentsRef, departmentsVisible] = useIntersectionObserver();
  const [doctorsRef, doctorsVisible] = useIntersectionObserver();
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

  const services = [
    {
      icon: <EmergencyIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response times.',
    },
    {
      icon: <MedicalServicesIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'General Medicine',
      description: 'Comprehensive primary care and general medical consultations.',
    },
    {
      icon: <HealingIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Surgery',
      description: 'Advanced surgical procedures performed by experienced surgeons.',
    },
    {
      icon: <ChildCareIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents.',
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Cardiology',
      description: 'Heart health services including diagnostics and treatment.',
    },
    {
      icon: <ScannerIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Radiology',
      description: 'Advanced imaging services for accurate diagnosis.',
    },
  ];

  const departments = [
    { name: 'Cardiology', icon: <FavoriteIcon /> },
    { name: 'Neurology', icon: <HealingIcon /> },
    { name: 'Orthopedics', icon: <MedicalServicesIcon /> },
    { name: 'Pediatrics', icon: <ChildCareIcon /> },
    { name: 'Oncology', icon: <LocalHospitalIcon /> },
    { name: 'Emergency', icon: <EmergencyIcon /> },
  ];

  const doctors = [
    {
      name: 'Dr. Ahmed Khan',
      specialty: 'Cardiologist',
      image: '/api/placeholder/200/200',
      experience: '15 years',
    },
    {
      name: 'Dr. Fatima Ali',
      specialty: 'Pediatrician',
      image: '/api/placeholder/200/200',
      experience: '12 years',
    },
    {
      name: 'Dr. Hassan Malik',
      specialty: 'Surgeon',
      image: '/api/placeholder/200/200',
      experience: '20 years',
    },
    {
      name: 'Dr. Ayesha Sheikh',
      specialty: 'Neurologist',
      image: '/api/placeholder/200/200',
      experience: '10 years',
    },
  ];

  const testimonials = [
    {
      name: 'Muhammad Ali',
      rating: 5,
      text: 'Excellent care and professional staff. The doctors are very knowledgeable and caring.',
    },
    {
      name: 'Sara Ahmed',
      rating: 5,
      text: 'Best hospital experience I\'ve had. Clean facilities and compassionate care.',
    },
    {
      name: 'Ahmed Hassan',
      rating: 5,
      text: 'The emergency department responded quickly and provided excellent treatment.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Expert Doctors', icon: <PeopleIcon /> },
    { number: '100K+', label: 'Happy Patients', icon: <TrendingUpIcon /> },
    { number: '25+', label: 'Years Experience', icon: <LocalHospitalIcon /> },
    { number: '15+', label: 'Departments', icon: <MedicalServicesIcon /> },
  ];


  return (
    <>
      <MetaTags
        title="Home"
        description="Welcome to Muhammad Ibrahim Hospital - Your trusted healthcare partner"
        keywords="hospital, healthcare, medical services, MIH"
      />

      {/* Hero Section */}
      <Box
        ref={heroRef}
        component="section"
        sx={{
          py: { xs: 6, md: 12 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in={heroVisible} timeout={800}>
                <Box>
                  <Chip
                    label="Trusted Healthcare Since 1999"
                    color="primary"
                    icon={<VerifiedIcon />}
                    sx={{ mb: 3 }}
                  />
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 3,
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    Your Health, Our Priority
                  </Typography>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      color: 'text.secondary',
                      mb: 4,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    Providing world-class healthcare services with compassion, excellence, and cutting-edge medical technology.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<CalendarTodayIcon />}
                      onClick={() => navigate('/book-appointment')}
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                      }}
                    >
                      Book Appointment
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => navigate('/about')}
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{
                      flexWrap: 'wrap',
                      gap: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <VerifiedIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        JCI Accredited
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <VerifiedIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        ISO Certified
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <VerifiedIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        24/7 Emergency
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grow in={heroVisible} timeout={1000}>
                <Box
                  component="img"
                  src="https://picsum.photos/1600/900?random=1"
                  alt="Muhammad Ibrahim Hospital - Modern healthcare facility providing world-class medical services"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 4,
                    boxShadow: 6,
                    aspectRatio: '4/3',
                    backgroundColor: 'grey.200',
                  }}
                  loading="eager"
                  width={1600}
                  height={900}
                />
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        ref={servicesRef}
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'grey.50',
        }}
      >
        <Container maxWidth="xl">
          <Fade in={servicesVisible} timeout={600}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                component="h2"
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
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                Comprehensive healthcare services tailored to meet your medical needs
              </Typography>
            </Box>
          </Fade>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Grow
                  in={servicesVisible}
                  timeout={600 + index * 100}
                  style={{ transformOrigin: 'center' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                      <Box sx={{ mb: 2 }} aria-hidden="true">
                        {service.icon}
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Departments Section */}
      <Box
        ref={departmentsRef}
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="xl">
          <Fade in={departmentsVisible} timeout={600}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                Our Departments
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                Specialized medical departments providing expert care
              </Typography>
            </Box>
          </Fade>
          <Grid container spacing={3}>
            {departments.map((dept, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Grow
                  in={departmentsVisible}
                  timeout={500 + index * 100}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-4px)',
                        '& .MuiSvgIcon-root': {
                          color: 'white',
                        },
                      },
                    }}
                  >
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          color: 'primary.main',
                          fontSize: 40,
                          transition: 'color 0.3s',
                        }}
                      >
                        {dept.icon}
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {dept.name}
                    </Typography>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Doctors Section */}
      <Box
        ref={doctorsRef}
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'grey.50',
        }}
      >
        <Container maxWidth="xl">
          <Fade in={doctorsVisible} timeout={600}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                Our Expert Doctors
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                Meet our team of experienced and dedicated medical professionals
              </Typography>
            </Box>
          </Fade>
          <Grid container spacing={4}>
            {doctors.map((doctor, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Grow
                  in={doctorsVisible}
                  timeout={600 + index * 100}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Avatar
                        src={`https://picsum.photos/400/400?random=${index + 10}`}
                        alt={`${doctor.name} - ${doctor.specialty}`}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 2,
                          bgcolor: 'primary.main',
                          fontSize: '2.5rem',
                        }}
                        imgProps={{
                          loading: 'lazy',
                        }}
                      >
                        {doctor.name.charAt(0)}
                      </Avatar>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                        {doctor.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {doctor.specialty}
                      </Typography>
                      <Chip
                        label={doctor.experience}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        ref={statsRef}
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Container maxWidth="xl">
          <Fade in={statsVisible} timeout={600}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                Our Achievements
              </Typography>
            </Box>
          </Fade>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Grow
                  in={statsVisible}
                  timeout={600 + index * 100}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                        color: 'white',
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: '2rem', md: '3rem' },
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        ref={testimonialsRef}
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="xl">
          <Fade in={testimonialsVisible} timeout={600}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                Patient Testimonials
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                What our patients say about their experience
              </Typography>
            </Box>
          </Fade>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade
                  in={testimonialsVisible}
                  timeout={800 + index * 200}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: 'warning.main', fontSize: 20 }} />
                      ))}
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', color: 'text.secondary' }}>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      — {testimonial.name}
                    </Typography>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        ref={ctaRef}
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Fade in={ctaVisible} timeout={800}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                Ready to Take Care of Your Health?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                Book an appointment today and experience world-class healthcare
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ justifyContent: 'center' }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<CalendarTodayIcon />}
                  onClick={() => navigate('/book-appointment')}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderColor: 'white',
                    color: 'white',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>
    </>
  );
};

export default Home;
