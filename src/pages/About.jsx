import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MetaTags from '../components/MetaTags';
import CustomTimeline from '../components/CustomTimeline';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CloseIcon from '@mui/icons-material/Close';
import MissionIcon from '@mui/icons-material/Flag';
import VisionIcon from '@mui/icons-material/Visibility';
import ValuesIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const milestones = [
    {
      year: '1999',
      title: 'Hospital Founded',
      description: 'Muhammad Ibrahim Hospital was established with a vision to provide quality healthcare.',
    },
    {
      year: '2005',
      title: 'First Expansion',
      description: 'Expanded facilities to include specialized departments and advanced medical equipment.',
    },
    {
      year: '2010',
      title: 'JCI Accreditation',
      description: 'Received Joint Commission International accreditation for quality healthcare standards.',
    },
    {
      year: '2015',
      title: 'New Wing Opened',
      description: 'Inaugurated a new 200-bed wing with state-of-the-art technology and facilities.',
    },
    {
      year: '2020',
      title: 'Telemedicine Launch',
      description: 'Launched telemedicine services to provide remote healthcare consultations.',
    },
    {
      year: '2024',
      title: '25 Years of Excellence',
      description: 'Celebrating 25 years of dedicated service to the community.',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Muhammad Ibrahim',
      position: 'Founder & Chief Medical Officer',
      image: '/api/placeholder/200/200',
      bio: 'Dr. Muhammad Ibrahim founded the hospital in 1999 with a vision to provide world-class healthcare. With over 30 years of experience in medicine, he has led the hospital to become a trusted healthcare institution.',
      education: 'MBBS, MD - Internal Medicine',
      experience: '30+ years',
      specialties: ['Internal Medicine', 'Hospital Administration'],
    },
    {
      name: 'Dr. Fatima Khan',
      position: 'Chief Executive Officer',
      image: '/api/placeholder/200/200',
      bio: 'Dr. Fatima Khan brings extensive experience in healthcare management and strategic planning. She has been instrumental in the hospital\'s growth and expansion initiatives.',
      education: 'MBA Healthcare Management, MD',
      experience: '20+ years',
      specialties: ['Healthcare Management', 'Strategic Planning'],
    },
    {
      name: 'Dr. Ahmed Malik',
      position: 'Medical Director',
      image: '/api/placeholder/200/200',
      bio: 'Dr. Ahmed Malik oversees all medical operations and ensures the highest standards of patient care. He is a renowned surgeon with expertise in multiple specialties.',
      education: 'MBBS, MS - General Surgery',
      experience: '25+ years',
      specialties: ['General Surgery', 'Medical Operations'],
    },
    {
      name: 'Dr. Ayesha Sheikh',
      position: 'Director of Nursing',
      image: '/api/placeholder/200/200',
      bio: 'Dr. Ayesha Sheikh leads our nursing team with dedication and excellence. She has implemented numerous quality improvement initiatives that have enhanced patient care.',
      education: 'BSN, MSN, PhD - Nursing',
      experience: '18+ years',
      specialties: ['Nursing Leadership', 'Quality Improvement'],
    },
  ];

  const accreditations = [
    { name: 'JCI Accredited', icon: <VerifiedIcon sx={{ fontSize: 40 }} /> },
    { name: 'ISO 9001:2015', icon: <VerifiedIcon sx={{ fontSize: 40 }} /> },
    { name: 'Healthcare Excellence Award', icon: <EmojiEventsIcon sx={{ fontSize: 40 }} /> },
    { name: 'Patient Safety Award', icon: <EmojiEventsIcon sx={{ fontSize: 40 }} /> },
  ];

  const galleryImages = [
    { img: '/api/placeholder/400/300', title: 'Hospital Entrance' },
    { img: '/api/placeholder/400/300', title: 'Emergency Department' },
    { img: '/api/placeholder/400/300', title: 'Operating Theater' },
    { img: '/api/placeholder/400/300', title: 'Patient Rooms' },
    { img: '/api/placeholder/400/300', title: 'Laboratory' },
    { img: '/api/placeholder/400/300', title: 'Radiology Department' },
    { img: '/api/placeholder/400/300', title: 'Reception Area' },
    { img: '/api/placeholder/400/300', title: 'ICU' },
    { img: '/api/placeholder/400/300', title: 'Pediatric Ward' },
  ];

  const handleOpenModal = (leader) => {
    setSelectedLeader(leader);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedLeader(null);
  };

  return (
    <>
      <MetaTags
        title="About Us"
        description="Learn about Muhammad Ibrahim Hospital's mission, vision, and commitment to healthcare excellence"
        keywords="about, hospital, mission, vision, healthcare"
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
            About Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Providing exceptional healthcare with compassion and excellence for over 25 years
          </Typography>
        </Box>

        {/* Timeline Section */}
        <Box
          component="section"
          aria-labelledby="timeline-heading"
          sx={{
            py: { xs: 6, md: 8 },
            backgroundColor: 'grey.50',
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              id="timeline-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 4,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Our Journey
            </Typography>
            <CustomTimeline items={milestones} position={isMobile ? 'right' : 'alternate'} />
          </Container>
        </Box>

        {/* Mission, Vision, Values Section */}
        <Box
          component="section"
          aria-labelledby="mission-vision-values-heading"
          sx={{
            py: { xs: 6, md: 8 },
            backgroundColor: 'background.paper',
          }}
        >
          <Container maxWidth="xl">
            <Typography
              variant="h3"
              component="h2"
              id="mission-vision-values-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Our Foundation
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 4,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                    },
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                    <MissionIcon sx={{ fontSize: 64, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    To provide exceptional healthcare services that prioritize patient well-being,
                    medical excellence, and compassionate care. We strive to be a trusted healthcare
                    partner for our community.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 4,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                    },
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                    <VisionIcon sx={{ fontSize: 64, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    Our Vision
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    To become a leading healthcare institution recognized for excellence in medical
                    care, innovation, and patient-centered services while maintaining the highest
                    standards of medical ethics and professionalism.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 4,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                    },
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                    <ValuesIcon sx={{ fontSize: 64, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    Our Values
                  </Typography>
                  <Box component="ul" sx={{ textAlign: 'left', pl: 2, '& li': { mb: 1.5 } }}>
                    <Typography component="li" variant="body1" color="text.secondary">
                      Compassion and empathy in patient care
                    </Typography>
                    <Typography component="li" variant="body1" color="text.secondary">
                      Excellence in medical practice
                    </Typography>
                    <Typography component="li" variant="body1" color="text.secondary">
                      Integrity and ethical conduct
                    </Typography>
                    <Typography component="li" variant="body1" color="text.secondary">
                      Innovation and continuous improvement
                    </Typography>
                    <Typography component="li" variant="body1" color="text.secondary">
                      Community commitment and service
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Leadership Team Section */}
        <Box
          component="section"
          aria-labelledby="leadership-heading"
          sx={{
            py: { xs: 6, md: 8 },
            backgroundColor: 'grey.50',
          }}
        >
          <Container maxWidth="xl">
            <Typography
              variant="h3"
              component="h2"
              id="leadership-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Leadership Team
            </Typography>
            <Grid container spacing={4}>
              {leadership.map((leader, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                    onClick={() => handleOpenModal(leader)}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Avatar
                        src={`https://picsum.photos/400/400?random=${index + 500}`}
                        alt={`${leader.name} - ${leader.position}`}
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
                        {leader.name.charAt(0)}
                      </Avatar>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                        {leader.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {leader.position}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ textTransform: 'none' }}
                      >
                        View Bio
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Accreditations & Awards Section */}
        <Box
          component="section"
          aria-labelledby="accreditations-heading"
          sx={{
            py: { xs: 6, md: 8 },
            backgroundColor: 'background.paper',
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              id="accreditations-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Accreditations & Awards
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {accreditations.map((accreditation, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box sx={{ mb: 2, color: 'primary.main' }}>
                      {accreditation.icon}
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {accreditation.name}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Photo Gallery Section */}
        <Box
          component="section"
          aria-labelledby="gallery-heading"
          sx={{
            py: { xs: 6, md: 8 },
            backgroundColor: 'grey.50',
          }}
        >
          <Container maxWidth="xl">
            <Typography
              variant="h3"
              component="h2"
              id="gallery-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Photo Gallery
            </Typography>
            <ImageList
              variant="masonry"
              cols={isMobile ? 1 : 3}
              gap={16}
              sx={{
                mb: 0,
                overflow: 'visible',
              }}
            >
              {galleryImages.map((item, index) => (
                <ImageListItem key={index}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      backgroundColor: 'grey.300',
                      borderRadius: 2,
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                      mb: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={`https://picsum.photos/400/300?random=${index + 400}`}
                      alt={item.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      loading="lazy"
                      width={400}
                      height={300}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%)',
                        color: 'white',
                        p: 1.5,
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </Box>

        {/* Leadership Bio Modal */}
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          maxWidth="md"
          fullWidth
          fullScreen={isMobile}
        >
          {selectedLeader && (
            <>
              <DialogTitle
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pb: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={`https://picsum.photos/400/400?random=${selectedLeader.name.charCodeAt(0) + 600}`}
                    alt={selectedLeader.name}
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: 'primary.main',
                      fontSize: '1.5rem',
                    }}
                    imgProps={{
                      loading: 'lazy',
                    }}
                  >
                    {selectedLeader.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                      {selectedLeader.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedLeader.position}
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  onClick={handleCloseModal}
                  aria-label="close"
                  sx={{ ml: 'auto' }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                    {selectedLeader.bio}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        Education
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedLeader.education}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        Experience
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedLeader.experience}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        Specialties
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {selectedLeader.specialties.map((specialty, idx) => (
                          <Chip
                            key={idx}
                            label={specialty}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </DialogContent>
              <DialogActions sx={{ px: 3, pb: 3 }}>
                <Button onClick={handleCloseModal} variant="contained">
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </>
  );
};

export default About;
