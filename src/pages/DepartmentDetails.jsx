import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MetaTags from '../components/MetaTags';

const DepartmentDetails = () => {
  const { departmentId } = useParams();
  const navigate = useNavigate();

  // Department data - in a real app, this would come from an API
  const departmentData = {
    cardiology: {
      name: 'Cardiology',
      overview: 'Our Cardiology Department provides comprehensive heart and cardiovascular care with state-of-the-art diagnostic and treatment facilities. We specialize in preventive cardiology, interventional procedures, and cardiac rehabilitation.',
      treatments: [
        'Coronary Angiography',
        'Angioplasty & Stenting',
        'Cardiac Catheterization',
        'Echocardiography',
        'Stress Testing',
        'Holter Monitoring',
        'Pacemaker Implantation',
        'Cardiac Rehabilitation',
      ],
      leadDoctors: [
        { name: 'Dr. Ahmed Khan', specialty: 'Interventional Cardiologist', experience: '15 years' },
        { name: 'Dr. Fatima Ali', specialty: 'Cardiac Surgeon', experience: '12 years' },
      ],
      equipment: [
        '64-Slice CT Scanner',
        'Cardiac Catheterization Lab',
        'Echocardiography Machine',
        'Stress Test Equipment',
        'Holter Monitor System',
      ],
      faqs: [
        {
          question: 'What conditions does the Cardiology Department treat?',
          answer: 'We treat various cardiovascular conditions including coronary artery disease, heart failure, arrhythmias, valvular heart disease, and congenital heart defects. Our team provides comprehensive diagnosis, treatment, and preventive care.',
        },
        {
          question: 'Do I need a referral to see a cardiologist?',
          answer: 'While referrals are recommended, we also accept direct appointments. If you have symptoms like chest pain, shortness of breath, or irregular heartbeat, you can schedule an appointment directly.',
        },
        {
          question: 'What diagnostic tests are available?',
          answer: 'We offer a full range of cardiac diagnostic tests including ECG, echocardiography, stress tests, Holter monitoring, cardiac CT, and cardiac catheterization. Our advanced imaging technology ensures accurate diagnosis.',
        },
        {
          question: 'Is cardiac rehabilitation available?',
          answer: 'Yes, we have a comprehensive cardiac rehabilitation program that includes supervised exercise, education, and lifestyle counseling to help patients recover and prevent future cardiac events.',
        },
      ],
    },
    neurology: {
      name: 'Neurology',
      overview: 'The Neurology Department offers advanced care for disorders of the brain, spinal cord, and nervous system. Our team of experienced neurologists provides comprehensive diagnosis and treatment using the latest medical technologies.',
      treatments: [
        'EEG (Electroencephalography)',
        'EMG (Electromyography)',
        'Nerve Conduction Studies',
        'Brain MRI & CT Scans',
        'Stroke Treatment',
        'Epilepsy Management',
        'Headache & Migraine Treatment',
        'Movement Disorder Management',
      ],
      leadDoctors: [
        { name: 'Dr. Ayesha Sheikh', specialty: 'Neurologist', experience: '10 years' },
        { name: 'Dr. Hassan Malik', specialty: 'Neurosurgeon', experience: '18 years' },
      ],
      equipment: [
        '3T MRI Scanner',
        'EEG Machine',
        'EMG/NCS Equipment',
        'CT Scanner',
        'Neurophysiology Lab',
      ],
      faqs: [
        {
          question: 'What neurological conditions do you treat?',
          answer: 'We treat a wide range of neurological conditions including stroke, epilepsy, Parkinson\'s disease, multiple sclerosis, Alzheimer\'s disease, headaches, migraines, and peripheral nerve disorders.',
        },
        {
          question: 'What is the difference between a neurologist and a neurosurgeon?',
          answer: 'Neurologists diagnose and treat neurological conditions using medications and non-surgical interventions. Neurosurgeons perform surgical procedures on the brain, spine, and nerves. Our department includes both specialists.',
        },
        {
          question: 'How long does a neurological evaluation take?',
          answer: 'A comprehensive neurological evaluation typically takes 60-90 minutes. This includes a detailed medical history, physical examination, and discussion of symptoms and treatment options.',
        },
      ],
    },
    orthopedics: {
      name: 'Orthopedics',
      overview: 'Our Orthopedics Department specializes in the diagnosis, treatment, and prevention of disorders of the bones, joints, ligaments, tendons, and muscles. We offer both surgical and non-surgical treatments for a wide range of orthopedic conditions.',
      treatments: [
        'Joint Replacement Surgery',
        'Arthroscopic Surgery',
        'Spine Surgery',
        'Fracture Treatment',
        'Sports Medicine',
        'Physical Therapy',
        'Pain Management',
        'Orthopedic Rehabilitation',
      ],
      leadDoctors: [
        { name: 'Dr. Hassan Malik', specialty: 'Orthopedic Surgeon', experience: '20 years' },
        { name: 'Dr. Ahmed Khan', specialty: 'Spine Surgeon', experience: '15 years' },
      ],
      equipment: [
        'C-Arm X-Ray System',
        'Arthroscopy Equipment',
        'Bone Densitometry',
        'Physical Therapy Equipment',
        'Surgical Navigation System',
      ],
      faqs: [
        {
          question: 'What conditions does the Orthopedics Department treat?',
          answer: 'We treat conditions affecting bones, joints, muscles, ligaments, and tendons including arthritis, fractures, sports injuries, back pain, joint pain, and degenerative conditions.',
        },
        {
          question: 'Do you offer minimally invasive procedures?',
          answer: 'Yes, we specialize in minimally invasive arthroscopic procedures for joints, which result in smaller incisions, less pain, and faster recovery times compared to traditional open surgery.',
        },
      ],
    },
    pediatrics: {
      name: 'Pediatrics',
      overview: 'The Pediatrics Department provides comprehensive medical care for infants, children, and adolescents. Our team of pediatric specialists is dedicated to ensuring the health and well-being of young patients in a child-friendly environment.',
      treatments: [
        'Well-Child Checkups',
        'Vaccinations',
        'Childhood Illness Treatment',
        'Developmental Assessments',
        'Pediatric Emergency Care',
        'Newborn Care',
        'Adolescent Medicine',
        'Chronic Disease Management',
      ],
      leadDoctors: [
        { name: 'Dr. Fatima Ali', specialty: 'Pediatrician', experience: '12 years' },
        { name: 'Dr. Ayesha Sheikh', specialty: 'Neonatologist', experience: '10 years' },
      ],
      equipment: [
        'Pediatric-Sized Equipment',
        'Neonatal ICU',
        'Vaccination Storage',
        'Child-Friendly Examination Rooms',
        'Pediatric Monitoring Systems',
      ],
      faqs: [
        {
          question: 'What age range does Pediatrics cover?',
          answer: 'Our Pediatrics Department provides care for patients from birth through 18 years of age, including newborns, infants, children, and adolescents.',
        },
        {
          question: 'Do you offer vaccination services?',
          answer: 'Yes, we provide comprehensive vaccination services following the recommended immunization schedule to protect children from preventable diseases.',
        },
      ],
    },
  };

  const department = departmentData[departmentId] || departmentData.cardiology;

  const handleBookAppointment = () => {
    navigate('/book-appointment');
  };

  const handleSecondOpinion = () => {
    navigate('/contact', { state: { requestType: 'second-opinion', department: department.name } });
  };

  return (
    <>
      <MetaTags
        title={`${department.name} Department`}
        description={`Learn about our ${department.name} department, treatments, and expert medical team`}
        keywords={`${department.name}, medical department, healthcare`}
      />
      <Box component="article">
        {/* Header */}
        <Box component="header" sx={{ mb: 6, pt: 4 }}>
          <Container maxWidth="xl">
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
              {department.name} Department
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '900px',
              }}
            >
              {department.overview}
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              {/* Overview Section */}
              <Box component="section" aria-labelledby="overview-heading" sx={{ mb: 6 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  id="overview-heading"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 3,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Overview
                </Typography>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                      {department.overview}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

              {/* Treatments Section */}
              <Box component="section" aria-labelledby="treatments-heading" sx={{ mb: 6 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  id="treatments-heading"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 3,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Offered Treatments
                </Typography>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2}>
                      {department.treatments.map((treatment, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <CheckCircleIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                            <Typography variant="body1">{treatment}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Box>

              {/* Medical Equipment Section */}
              <Box component="section" aria-labelledby="equipment-heading" sx={{ mb: 6 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  id="equipment-heading"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 3,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Medical Equipment
                </Typography>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <List>
                      {department.equipment.map((item, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <MedicalServicesIcon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Box>

              {/* FAQs Section */}
              <Box component="section" aria-labelledby="faqs-heading" sx={{ mb: 6 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  id="faqs-heading"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 3,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Frequently Asked Questions
                </Typography>
                <Box>
                  {department.faqs.map((faq, index) => (
                    <Accordion key={index} sx={{ mb: 2 }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`faq-${index}-content`}
                        id={`faq-${index}-header`}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              {/* Lead Doctors Section */}
              <Box component="section" aria-labelledby="doctors-heading" sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  id="doctors-heading"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 3,
                  }}
                >
                  Lead Doctors
                </Typography>
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={3}>
                      {department.leadDoctors.map((doctor, index) => (
                        <Box key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                            <Avatar
                              src={`https://picsum.photos/200/200?random=${doctor.name.charCodeAt(0) + 700}`}
                              alt={doctor.name}
                              sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}
                              imgProps={{ loading: 'lazy' }}
                            >
                              {doctor.name.charAt(0)}
                            </Avatar>
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {doctor.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {doctor.specialty}
                              </Typography>
                            </Box>
                          </Box>
                          <Chip
                            label={doctor.experience}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ ml: 8 }}
                          />
                          {index < department.leadDoctors.length - 1 && (
                            <Divider sx={{ mt: 3 }} />
                          )}
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Box>

              {/* CTA Buttons */}
              <Box component="section" sx={{ mb: 4 }}>
                <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                      Need Medical Care?
                    </Typography>
                    <Stack spacing={2}>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        size="large"
                        startIcon={<CalendarTodayIcon />}
                        onClick={handleBookAppointment}
                        sx={{
                          py: 1.5,
                          backgroundColor: 'white',
                          color: 'primary.main',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: 'grey.100',
                          },
                        }}
                      >
                        Book Appointment
                      </Button>
                      <Button
                        variant="outlined"
                        fullWidth
                        size="large"
                        startIcon={<RateReviewIcon />}
                        onClick={handleSecondOpinion}
                        sx={{
                          py: 1.5,
                          borderColor: 'white',
                          color: 'white',
                          borderWidth: 2,
                          fontWeight: 600,
                          '&:hover': {
                            borderWidth: 2,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        Request Second Opinion
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DepartmentDetails;

