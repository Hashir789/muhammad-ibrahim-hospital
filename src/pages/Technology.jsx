import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MetaTags from '../components/MetaTags';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Technology = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const technologies = [
    {
      id: 'mri-3t',
      title: '3T MRI Scanner',
      image: '/api/placeholder/400/250',
      description: 'Our state-of-the-art 3 Tesla Magnetic Resonance Imaging (MRI) scanner provides exceptional image quality and faster scan times. This advanced technology enables our radiologists to detect abnormalities with unprecedented precision, leading to more accurate diagnoses and better patient outcomes.',
      benefits: [
        'Higher resolution imaging for better diagnosis',
        'Faster scan times reducing patient discomfort',
        'Advanced imaging sequences for comprehensive analysis',
        'Reduced noise and artifacts in images',
      ],
      departments: ['Radiology', 'Neurology', 'Orthopedics', 'Oncology'],
      fdaApproved: true,
    },
    {
      id: 'ct-64-slice',
      title: '64-Slice CT Scanner',
      image: '/api/placeholder/400/250',
      description: 'The 64-slice CT scanner delivers high-speed, high-resolution imaging capabilities. This cutting-edge technology allows for detailed visualization of internal structures, making it invaluable for emergency diagnostics, cardiac imaging, and comprehensive body scans with minimal radiation exposure.',
      benefits: [
        'Rapid imaging for emergency cases',
        'Detailed cardiac and vascular imaging',
        'Lower radiation dose compared to older scanners',
        '3D reconstruction capabilities',
      ],
      departments: ['Radiology', 'Emergency', 'Cardiology', 'Oncology'],
      fdaApproved: true,
    },
    {
      id: 'da-vinci',
      title: 'Da Vinci Surgical System',
      image: '/api/placeholder/400/250',
      description: 'The Da Vinci robotic surgical system represents the pinnacle of minimally invasive surgery. This advanced robotic platform provides surgeons with enhanced precision, dexterity, and control, resulting in smaller incisions, reduced blood loss, faster recovery times, and improved surgical outcomes for patients.',
      benefits: [
        'Minimally invasive procedures',
        'Enhanced surgical precision',
        'Reduced recovery time',
        'Lower risk of complications',
      ],
      departments: ['Surgery', 'Urology', 'Gynecology', 'General Surgery'],
      fdaApproved: true,
    },
    {
      id: 'pet-ct',
      title: 'PET-CT Scanner',
      image: '/api/placeholder/400/250',
      description: 'Our PET-CT scanner combines positron emission tomography with computed tomography, providing both functional and anatomical imaging in a single scan. This powerful diagnostic tool is essential for cancer detection, staging, treatment planning, and monitoring treatment response with exceptional accuracy.',
      benefits: [
        'Early cancer detection',
        'Accurate staging and treatment planning',
        'Monitoring treatment effectiveness',
        'Combined functional and anatomical imaging',
      ],
      departments: ['Oncology', 'Nuclear Medicine', 'Radiology'],
      fdaApproved: true,
    },
    {
      id: 'linear-accelerator',
      title: 'Linear Accelerator (LINAC)',
      image: '/api/placeholder/400/250',
      description: 'Our advanced linear accelerator delivers precise radiation therapy for cancer treatment. This sophisticated system uses image-guided radiation therapy (IGRT) and intensity-modulated radiation therapy (IMRT) to target tumors with millimeter accuracy while sparing surrounding healthy tissue.',
      benefits: [
        'Precise tumor targeting',
        'Reduced damage to healthy tissue',
        'Image-guided treatment delivery',
        'Advanced treatment planning capabilities',
      ],
      departments: ['Radiation Oncology', 'Oncology'],
      fdaApproved: true,
    },
    {
      id: 'ecmo',
      title: 'ECMO (Extracorporeal Membrane Oxygenation)',
      image: '/api/placeholder/400/250',
      description: 'ECMO technology provides life support for patients with severe heart or lung failure. This advanced system temporarily takes over the function of the heart and lungs, allowing these organs to rest and recover. It is a critical technology for treating critically ill patients who would otherwise have limited treatment options.',
      benefits: [
        'Life support for critical patients',
        'Allows organ recovery time',
        'Bridge to recovery or transplant',
        'Advanced critical care capability',
      ],
      departments: ['ICU', 'Cardiac Surgery', 'Emergency'],
      fdaApproved: true,
    },
    {
      id: 'robotic-pharmacy',
      title: 'Automated Robotic Pharmacy System',
      image: '/api/placeholder/400/250',
      description: 'Our automated robotic pharmacy system ensures accurate medication dispensing, reduces human error, and improves efficiency. This technology maintains precise inventory control, tracks medication usage, and provides real-time medication information, enhancing patient safety and pharmacy operations.',
      benefits: [
        'Reduced medication errors',
        'Improved inventory management',
        'Faster prescription processing',
        'Enhanced patient safety',
      ],
      departments: ['Pharmacy', 'All Departments'],
      fdaApproved: false,
    },
    {
      id: 'telemedicine',
      title: 'Telemedicine Platform',
      image: '/api/placeholder/400/250',
      description: 'Our comprehensive telemedicine platform enables remote consultations, follow-ups, and patient monitoring. This technology breaks down geographical barriers, making healthcare accessible to patients who cannot visit the hospital in person, while maintaining the same quality of care and patient-doctor interaction.',
      benefits: [
        'Remote access to healthcare',
        'Convenient follow-up consultations',
        'Reduced travel time and costs',
        'Continuity of care',
      ],
      departments: ['All Departments', 'General Medicine'],
      fdaApproved: false,
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Successful Robotic Surgery Recovery',
      patient: '45-year-old male',
      condition: 'Prostate Cancer',
      technology: 'Da Vinci Surgical System',
      outcome: 'Complete recovery with minimal side effects. Patient returned to normal activities within 2 weeks, significantly faster than traditional surgery.',
      department: 'Urology',
    },
    {
      id: 2,
      title: 'Early Cancer Detection',
      patient: '52-year-old female',
      condition: 'Lung Cancer',
      technology: 'PET-CT Scanner',
      outcome: 'Early-stage cancer detected through routine screening. Successful treatment with complete remission. Patient continues regular follow-ups.',
      department: 'Oncology',
    },
    {
      id: 3,
      title: 'Precise Radiation Therapy',
      patient: '38-year-old male',
      condition: 'Brain Tumor',
      technology: 'Linear Accelerator (LINAC)',
      outcome: 'Tumor successfully treated with minimal impact on surrounding brain tissue. Patient maintains full cognitive function and quality of life.',
      department: 'Radiation Oncology',
    },
    {
      id: 4,
      title: 'Emergency Life Support',
      patient: '28-year-old female',
      condition: 'Severe Respiratory Failure',
      technology: 'ECMO System',
      outcome: 'Patient stabilized and supported through critical period. Full recovery achieved with no long-term complications.',
      department: 'ICU',
    },
  ];

  const faqs = [
    {
      question: 'What makes MIH\'s medical technology different from other hospitals?',
      answer: 'MIH invests in the latest, FDA-approved medical technologies and continuously upgrades our equipment. Our team of specialists is extensively trained on these advanced systems, ensuring optimal utilization and patient outcomes. We maintain strict quality standards and regular maintenance protocols.',
    },
    {
      question: 'How do I know if a specific technology is available for my condition?',
      answer: 'You can consult with our specialists who will assess your condition and recommend the most appropriate diagnostic or treatment technology. Our doctors will explain the benefits, risks, and alternatives for each technology option available for your specific case.',
    },
    {
      question: 'Are all technologies FDA approved?',
      answer: 'Most of our medical devices and technologies are FDA approved or have equivalent international certifications. Some technologies, like our telemedicine platform and automated systems, follow different regulatory pathways but meet all safety and quality standards.',
    },
    {
      question: 'How often is the technology upgraded?',
      answer: 'MIH follows a strategic technology upgrade plan, typically replacing or upgrading major equipment every 5-7 years or when significantly better technology becomes available. We also perform regular software updates and maintenance to ensure optimal performance.',
    },
    {
      question: 'Can I request a specific technology for my treatment?',
      answer: 'While you can discuss technology options with your doctor, the final decision is made by our medical team based on your specific condition, medical history, and the most appropriate treatment approach. Our doctors will explain why a particular technology is recommended for your case.',
    },
    {
      question: 'Is advanced technology more expensive?',
      answer: 'While advanced technology may have different cost structures, MIH is committed to making quality healthcare accessible. Our pricing is transparent, and we work with insurance providers. The benefits of advanced technology often include shorter recovery times and better outcomes, which can be cost-effective in the long run.',
    },
  ];

  return (
    <>
      <MetaTags
        title="Medical Technology - MIH"
        description="Explore cutting-edge medical technologies at Muhammad Ibrahim Hospital including 3T MRI, Da Vinci Surgery, PET-CT, and more advanced diagnostic and treatment systems."
        keywords="medical technology, MRI, CT scan, robotic surgery, PET-CT, healthcare technology, advanced medical equipment"
        ogType="article"
      />
      <Box component="article">
        {/* Hero Banner */}
        <Box
          component="section"
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            py: { xs: 8, md: 12 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                lineHeight: 1.2,
              }}
            >
              Medical Technology Advancements at MIH
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.95,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
              }}
            >
              At Muhammad Ibrahim Hospital, we are committed to providing world-class healthcare through continuous innovation and investment in cutting-edge medical technology. Our state-of-the-art equipment and advanced systems enable our expert medical team to deliver precise diagnoses, effective treatments, and exceptional patient care.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
          {/* Intro Text */}
          <Box component="section" sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              Our Commitment to Innovation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '900px',
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'text.secondary',
              }}
            >
              We understand that advanced medical technology is essential for delivering the highest quality healthcare. That's why we continuously invest in the latest diagnostic and treatment technologies, ensuring our patients have access to the most effective and least invasive treatment options available. Our commitment extends beyond acquisition—we ensure our medical professionals receive comprehensive training on all new technologies, maintaining the highest standards of care and safety.
            </Typography>
          </Box>

          {/* Technologies Grid */}
          <Box component="section" aria-labelledby="technologies-heading" sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              id="technologies-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 4,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Our Medical Technologies
            </Typography>
            <Grid container spacing={4}>
              {technologies.map((tech) => (
                <Grid item xs={12} sm={6} md={4} key={tech.id}>
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
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        image={`https://picsum.photos/600/400?random=${index + 300}`}
                        alt={`${tech.title} - Medical technology at MIH`}
                        sx={{
                          height: 200,
                          objectFit: 'cover',
                          backgroundColor: 'grey.300',
                        }}
                        loading="lazy"
                        width={600}
                        height={400}
                      />
                      {tech.fdaApproved && (
                        <Chip
                          icon={<VerifiedIcon />}
                          label="FDA Approved"
                          color="success"
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            fontWeight: 600,
                          }}
                        />
                      )}
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                        {tech.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                        {tech.description}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                        Key Benefits:
                      </Typography>
                      <List dense sx={{ mb: 2, pl: 0 }}>
                        {tech.benefits.map((benefit, index) => (
                          <ListItem key={index} sx={{ pl: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircleIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={benefit}
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <Box sx={{ mt: 'auto', pt: 2, borderTop: 1, borderColor: 'divider' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                          Used in:
                        </Typography>
                        <Stack direction="row" spacing={0.5} flexWrap="wrap" gap={0.5}>
                          {tech.departments.map((dept) => (
                            <Chip
                              key={dept}
                              label={dept}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: '0.7rem' }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Case Studies Carousel */}
          <Box component="section" aria-labelledby="case-studies-heading" sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              id="case-studies-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 4,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Success Stories
            </Typography>
            <Box sx={{ position: 'relative' }}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={isMobile ? 1 : 2}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                style={{
                  '--swiper-navigation-color': theme.palette.primary.main,
                  '--swiper-pagination-color': theme.palette.primary.main,
                }}
              >
                {caseStudies.map((study) => (
                  <SwiperSlide key={study.id}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Chip
                        label={study.department}
                        color="primary"
                        size="small"
                        sx={{ mb: 2, alignSelf: 'flex-start' }}
                      />
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                        {study.title}
                      </Typography>
                      <Stack spacing={1} sx={{ mb: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                          <strong>Patient:</strong> {study.patient}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <strong>Condition:</strong> {study.condition}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <strong>Technology:</strong> {study.technology}
                        </Typography>
                      </Stack>
                      <Box sx={{ flexGrow: 1, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                          "{study.outcome}"
                        </Typography>
                      </Box>
                    </Paper>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>

          {/* FAQ Section */}
          <Box component="section" aria-labelledby="faq-heading" sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              id="faq-heading"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 4,
                textAlign: 'center',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
              {faqs.map((faq, index) => (
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

          {/* CTA Section */}
          <Box
            component="section"
            sx={{
              textAlign: 'center',
              py: 6,
              px: 4,
              backgroundColor: 'primary.main',
              color: 'white',
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Ready to Experience Advanced Medical Care?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Book a consultation with our specialists to learn how our advanced technology can help you
            </Typography>
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
              Book Consultation
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Technology;

