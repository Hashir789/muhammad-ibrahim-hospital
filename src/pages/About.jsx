import { Typography, Box } from '@mui/material';
import MetaTags from '../components/MetaTags';

const About = () => {
  return (
    <>
      <MetaTags
        title="About Us"
        description="Learn about Muhammad Ibrahim Hospital's mission, vision, and commitment to healthcare excellence"
        keywords="about, hospital, mission, vision, healthcare"
      />
      <Box component="article">
        <Box component="header">
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, color: 'primary.main', mb: 4 }}
          >
            About Us
          </Typography>
        </Box>

        <Box component="main" sx={{ maxWidth: '900px', space: 4 }}>
          <Box component="section" aria-labelledby="mission-heading" sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" id="mission-heading" sx={{ fontWeight: 600, mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
              At Muhammad Ibrahim Hospital, our mission is to provide exceptional healthcare
              services that prioritize patient well-being, medical excellence, and compassionate
              care. We strive to be a trusted healthcare partner for our community.
            </Typography>
          </Box>

          <Box component="section" aria-labelledby="vision-heading" sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" id="vision-heading" sx={{ fontWeight: 600, mb: 2 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
              To become a leading healthcare institution recognized for excellence in medical care,
              innovation, and patient-centered services while maintaining the highest standards of
              medical ethics and professionalism.
            </Typography>
          </Box>

          <Box component="section" aria-labelledby="values-heading">
            <Typography variant="h4" component="h2" id="values-heading" sx={{ fontWeight: 600, mb: 2 }}>
              Our Values
            </Typography>
            <Box component="ul" sx={{ pl: 3, '& li': { mb: 1.5 } }}>
              <Typography component="li" variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Compassion and empathy in patient care
              </Typography>
              <Typography component="li" variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Excellence in medical practice
              </Typography>
              <Typography component="li" variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Integrity and ethical conduct
              </Typography>
              <Typography component="li" variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Innovation and continuous improvement
              </Typography>
              <Typography component="li" variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Community commitment and service
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
