import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import MetaTags from '../components/MetaTags';
import EmergencyIcon from '@mui/icons-material/Emergency';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealingIcon from '@mui/icons-material/Healing';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RadiologyIcon from '@mui/icons-material/Radiology';

const Services = () => {
  const services = [
    {
      icon: <EmergencyIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response times.',
    },
    {
      icon: <LocalHospitalIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
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
      icon: <RadiologyIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Radiology',
      description: 'Advanced imaging services for accurate diagnosis.',
    },
  ];

  return (
    <>
      <MetaTags
        title="Services"
        description="Comprehensive healthcare services offered at Muhammad Ibrahim Hospital"
        keywords="services, medical services, healthcare, treatment"
      />
      <Box component="article">
        <Box component="header">
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, color: 'primary.main', mb: 6 }}
          >
            Our Services
          </Typography>
        </Box>

        <Box component="section" aria-label="Hospital services">
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                    <Box sx={{ mb: 2 }} aria-hidden="true">{service.icon}</Box>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Services;
