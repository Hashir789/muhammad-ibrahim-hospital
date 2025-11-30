import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Grow,
  Fade,
} from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import MetaTags from '../components/MetaTags';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HealingIcon from '@mui/icons-material/Healing';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import EmergencyIcon from '@mui/icons-material/Emergency';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScannerIcon from '@mui/icons-material/Scanner';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import EyeIcon from '@mui/icons-material/RemoveRedEye';
import HearingIcon from '@mui/icons-material/Hearing';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
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

const Departments = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: <FavoriteIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Comprehensive heart care services including diagnostics, treatment, and preventive care.',
      shortText: 'Expert heart care and cardiovascular services.',
    },
    {
      id: 'neurology',
      name: 'Neurology',
      icon: <PsychologyIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Advanced neurological care for brain and nervous system disorders.',
      shortText: 'Specialized neurological diagnosis and treatment.',
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      icon: <HealingIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Bone, joint, and muscle care with advanced surgical and non-surgical treatments.',
      shortText: 'Complete musculoskeletal health solutions.',
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      icon: <ChildCareIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Specialized medical care for infants, children, and adolescents.',
      shortText: 'Dedicated care for children of all ages.',
    },
    {
      id: 'oncology',
      name: 'Oncology',
      icon: <LocalHospitalIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Comprehensive cancer care with cutting-edge treatment options.',
      shortText: 'Advanced cancer diagnosis and treatment.',
    },
    {
      id: 'emergency',
      name: 'Emergency Medicine',
      icon: <EmergencyIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: '24/7 emergency medical services with rapid response and expert care.',
      shortText: 'Round-the-clock emergency medical care.',
    },
    {
      id: 'radiology',
      name: 'Radiology',
      icon: <ScannerIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Advanced imaging services for accurate diagnosis and treatment planning.',
      shortText: 'State-of-the-art medical imaging services.',
    },
    {
      id: 'obstetrics',
      name: 'Obstetrics & Gynecology',
      icon: <PregnantWomanIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Comprehensive women\'s health services including maternity and gynecological care.',
      shortText: 'Complete women\'s health and maternity care.',
    },
    {
      id: 'ophthalmology',
      name: 'Ophthalmology',
      icon: <EyeIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Expert eye care services including vision correction and eye disease treatment.',
      shortText: 'Expert eye care and vision services.',
    },
    {
      id: 'ent',
      name: 'ENT (Ear, Nose & Throat)',
      icon: <HearingIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Specialized care for ear, nose, and throat conditions and disorders.',
      shortText: 'Specialized ENT diagnosis and treatment.',
    },
    {
      id: 'internal-medicine',
      name: 'Internal Medicine',
      icon: <MedicalServicesIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Comprehensive adult medicine services for prevention, diagnosis, and treatment.',
      shortText: 'Comprehensive adult medical care.',
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy',
      icon: <LocalPharmacyIcon sx={{ fontSize: 56, color: 'primary.main' }} />,
      description: 'Full-service pharmacy with medication management and consultation services.',
      shortText: 'Complete pharmacy and medication services.',
    },
  ];

  const handleDepartmentClick = (departmentId) => {
    navigate(`/departments/${departmentId}`);
  };

  return (
    <>
      <MetaTags
        title="Departments"
        description="Explore our specialized medical departments offering comprehensive healthcare services"
        keywords="departments, medical specialties, healthcare services"
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
            Our Departments
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Specialized medical departments providing expert care across all areas of healthcare
          </Typography>
        </Box>

        {/* Departments Grid */}
        <Box
          ref={sectionRef}
          component="section"
          aria-labelledby="departments-heading"
          sx={{
            py: { xs: 4, md: 6 },
            backgroundColor: 'background.paper',
          }}
        >
          <Container maxWidth="xl">
            <Typography
              variant="h3"
              component="h2"
              id="departments-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                display: 'none',
              }}
            >
              Medical Departments
            </Typography>
            <Grid container spacing={4}>
              {departments.map((department, index) => (
                <Grid item xs={12} sm={6} md={4} key={department.id}>
                  <Grow
                    in={sectionVisible}
                    timeout={300 + index * 50}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: 8,
                        },
                      }}
                      onClick={() => handleDepartmentClick(department.id)}
                    >
                      <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                        <Box sx={{ mb: 3 }} aria-hidden="true">
                          {department.icon}
                        </Box>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                          {department.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: '48px' }}>
                          {department.shortText}
                        </Typography>
                        <Button
                          variant="outlined"
                          endIcon={<ArrowForwardIcon />}
                          sx={{ textTransform: 'none' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDepartmentClick(department.id);
                          }}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Departments;

