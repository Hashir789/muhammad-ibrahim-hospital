import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import MetaTags from '../components/MetaTags';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const Home = () => {
  const features = [
    {
      icon: <LocalHospitalIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Quality Care',
      description: 'We are committed to providing the highest quality medical care to all our patients.',
    },
    {
      icon: <MedicalServicesIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Expert Team',
      description: 'Our experienced medical professionals are dedicated to your health and well-being.',
    },
    {
      icon: <HealthAndSafetyIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment and facilities to ensure the best possible treatment.',
    },
  ];

  return (
    <>
      <MetaTags
        title="Home"
        description="Welcome to Muhammad Ibrahim Hospital - Your trusted healthcare partner"
        keywords="hospital, healthcare, medical services, MIH"
      />
      <Box component="article">
        <Box component="header" sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
            }}
          >
            Welcome to Muhammad Ibrahim Hospital
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}
          >
            Providing quality healthcare services with compassion and excellence since our
            establishment.
          </Typography>
        </Box>

        <Box component="section" aria-label="Hospital features">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                    <Box sx={{ mb: 2 }} aria-hidden="true">{feature.icon}</Box>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
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

export default Home;
