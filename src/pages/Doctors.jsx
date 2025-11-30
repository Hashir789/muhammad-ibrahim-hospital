import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Avatar,
  Chip,
  Stack,
  Rating,
  Pagination,
  CardActions,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MetaTags from '../components/MetaTags';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Doctors = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  // Sample doctor data
  const doctors = [
    {
      id: 'ahmed-khan',
      name: 'Dr. Ahmed Khan',
      specialty: 'Cardiologist',
      department: 'Cardiology',
      rating: 4.8,
      reviewCount: 127,
      languages: ['English', 'Urdu', 'Arabic'],
      nextAvailable: 'Today, 2:00 PM',
      onlineAvailable: true,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'fatima-ali',
      name: 'Dr. Fatima Ali',
      specialty: 'Pediatrician',
      department: 'Pediatrics',
      rating: 4.9,
      reviewCount: 203,
      languages: ['English', 'Urdu'],
      nextAvailable: 'Tomorrow, 10:00 AM',
      onlineAvailable: true,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'hassan-malik',
      name: 'Dr. Hassan Malik',
      specialty: 'Orthopedic Surgeon',
      department: 'Orthopedics',
      rating: 4.7,
      reviewCount: 89,
      languages: ['English', 'Urdu', 'Punjabi'],
      nextAvailable: 'Today, 4:00 PM',
      onlineAvailable: false,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'ayesha-sheikh',
      name: 'Dr. Ayesha Sheikh',
      specialty: 'Neurologist',
      department: 'Neurology',
      rating: 4.9,
      reviewCount: 156,
      languages: ['English', 'Urdu'],
      nextAvailable: 'Tomorrow, 11:00 AM',
      onlineAvailable: true,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'muhammad-ibrahim',
      name: 'Dr. Muhammad Ibrahim',
      specialty: 'Internal Medicine',
      department: 'Internal Medicine',
      rating: 4.8,
      reviewCount: 234,
      languages: ['English', 'Urdu', 'Arabic'],
      nextAvailable: 'Today, 3:00 PM',
      onlineAvailable: true,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'sara-ahmed',
      name: 'Dr. Sara Ahmed',
      specialty: 'Gynecologist',
      department: 'Obstetrics & Gynecology',
      rating: 4.9,
      reviewCount: 178,
      languages: ['English', 'Urdu'],
      nextAvailable: 'Today, 1:00 PM',
      onlineAvailable: false,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'ali-hassan',
      name: 'Dr. Ali Hassan',
      specialty: 'Ophthalmologist',
      department: 'Ophthalmology',
      rating: 4.6,
      reviewCount: 95,
      languages: ['English', 'Urdu', 'Punjabi'],
      nextAvailable: 'Tomorrow, 9:00 AM',
      onlineAvailable: true,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'zainab-khan',
      name: 'Dr. Zainab Khan',
      specialty: 'ENT Specialist',
      department: 'ENT',
      rating: 4.7,
      reviewCount: 112,
      languages: ['English', 'Urdu'],
      nextAvailable: 'Today, 5:00 PM',
      onlineAvailable: false,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'omar-malik',
      name: 'Dr. Omar Malik',
      specialty: 'Oncologist',
      department: 'Oncology',
      rating: 4.8,
      reviewCount: 145,
      languages: ['English', 'Urdu', 'Arabic'],
      nextAvailable: 'Tomorrow, 2:00 PM',
      onlineAvailable: true,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'nadia-ahmed',
      name: 'Dr. Nadia Ahmed',
      specialty: 'Radiologist',
      department: 'Radiology',
      rating: 4.5,
      reviewCount: 67,
      languages: ['English', 'Urdu'],
      nextAvailable: 'Today, 6:00 PM',
      onlineAvailable: false,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'bilal-hassan',
      name: 'Dr. Bilal Hassan',
      specialty: 'Emergency Medicine',
      department: 'Emergency',
      rating: 4.7,
      reviewCount: 201,
      languages: ['English', 'Urdu', 'Punjabi'],
      nextAvailable: 'Today, 7:00 PM',
      onlineAvailable: true,
      image: '/api/placeholder/200/200',
    },
    {
      id: 'amina-sheikh',
      name: 'Dr. Amina Sheikh',
      specialty: 'Psychiatrist',
      department: 'Psychiatry',
      rating: 4.9,
      reviewCount: 189,
      languages: ['English', 'Urdu'],
      nextAvailable: 'Tomorrow, 3:00 PM',
      onlineAvailable: true,
      image: '/api/placeholder/200/200',
    },
  ];

  const departments = ['All', 'Cardiology', 'Pediatrics', 'Orthopedics', 'Neurology', 'Internal Medicine', 'Obstetrics & Gynecology', 'Ophthalmology', 'ENT', 'Oncology', 'Radiology', 'Emergency', 'Psychiatry'];
  const languages = ['All', 'English', 'Urdu', 'Arabic', 'Punjabi'];

  // Filter and sort doctors
  const filteredAndSortedDoctors = useMemo(() => {
    let filtered = doctors.filter((doctor) => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           doctor.department.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
      const matchesLanguage = selectedLanguage === 'all' || doctor.languages.includes(selectedLanguage);
      const matchesOnline = !onlineOnly || doctor.onlineAvailable;

      return matchesSearch && matchesDepartment && matchesLanguage && matchesOnline;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedDepartment, selectedLanguage, onlineOnly, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedDoctors.length / itemsPerPage);
  const paginatedDoctors = filteredAndSortedDoctors.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProfile = (doctorId) => {
    navigate(`/doctors/${doctorId}`);
  };

  const handleBookAppointment = (doctorId, e) => {
    e.stopPropagation();
    navigate('/book-appointment', { state: { doctorId, preSelectedDoctor: doctorId } });
  };

  return (
    <>
      <MetaTags
        title="Our Doctors"
        description="Browse our team of experienced and qualified doctors across all medical specialties"
        keywords="doctors, physicians, medical professionals, specialists"
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
            Our Doctors
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Find the right doctor for your healthcare needs
          </Typography>
        </Box>

        <Container maxWidth="xl">
          {/* Search and Filters */}
          <Box
            component="section"
            sx={{
              mb: 4,
              p: 3,
              backgroundColor: 'grey.50',
              borderRadius: 2,
            }}
          >
            <Grid container spacing={2} alignItems="center">
              {/* Search Bar */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Search by name, specialty, or department"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setPage(1);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Department Filter */}
              <Grid item xs={12} sm={6} md={2}>
                <FormControl fullWidth>
                  <InputLabel>Department</InputLabel>
                  <Select
                    value={selectedDepartment}
                    label="Department"
                    onChange={(e) => {
                      setSelectedDepartment(e.target.value);
                      setPage(1);
                    }}
                  >
                    {departments.map((dept) => (
                      <MenuItem key={dept} value={dept === 'All' ? 'all' : dept}>
                        {dept}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Language Filter */}
              <Grid item xs={12} sm={6} md={2}>
                <FormControl fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select
                    value={selectedLanguage}
                    label="Language"
                    onChange={(e) => {
                      setSelectedLanguage(e.target.value);
                      setPage(1);
                    }}
                  >
                    {languages.map((lang) => (
                      <MenuItem key={lang} value={lang === 'All' ? 'all' : lang}>
                        {lang}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Online Availability Filter */}
              <Grid item xs={12} sm={6} md={2}>
                <Button
                  variant={onlineOnly ? 'contained' : 'outlined'}
                  fullWidth
                  startIcon={<FilterListIcon />}
                  onClick={() => {
                    setOnlineOnly(!onlineOnly);
                    setPage(1);
                  }}
                  sx={{ py: 1.6 }}
                >
                  {onlineOnly ? 'Online Only' : 'All Doctors'}
                </Button>
              </Grid>

              {/* Sort */}
              <Grid item xs={12} sm={6} md={2}>
                <FormControl fullWidth>
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={sortBy}
                    label="Sort By"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="rating">Rating</MenuItem>
                    <MenuItem value="reviews">Most Reviews</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Results Count */}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {filteredAndSortedDoctors.length} doctor{filteredAndSortedDoctors.length !== 1 ? 's' : ''} found
            </Typography>
          </Box>

          {/* Doctors Grid */}
          {paginatedDoctors.length > 0 ? (
            <>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {paginatedDoctors.map((doctor, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={doctor.id}>
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
                      onClick={() => handleViewProfile(doctor.id)}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                        <Avatar
                          src={`https://picsum.photos/400/400?random=${index + 100}`}
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
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {doctor.specialty}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                          <Rating value={doctor.rating} precision={0.1} readOnly size="small" />
                          <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                            ({doctor.reviewCount} reviews)
                          </Typography>
                        </Box>
                        <Stack direction="row" spacing={0.5} justifyContent="center" sx={{ mb: 2, flexWrap: 'wrap', gap: 0.5 }}>
                          {doctor.languages.slice(0, 2).map((lang) => (
                            <Chip key={lang} label={lang} size="small" variant="outlined" />
                          ))}
                          {doctor.languages.length > 2 && (
                            <Chip label={`+${doctor.languages.length - 2}`} size="small" variant="outlined" />
                          )}
                        </Stack>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                          <CalendarTodayIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {doctor.nextAvailable}
                          </Typography>
                        </Box>
                        {doctor.onlineAvailable && (
                          <Chip
                            label="Online Available"
                            size="small"
                            color="success"
                            sx={{ mb: 2 }}
                          />
                        )}
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          startIcon={<CalendarTodayIcon />}
                          onClick={(e) => handleBookAppointment(doctor.id, e)}
                          sx={{ textTransform: 'none' }}
                        >
                          Book Appointment
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Pagination */}
              {totalPages > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    size={isMobile ? 'small' : 'medium'}
                  />
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <LocalHospitalIcon sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
              <Typography variant="h6" color="text.secondary">
                No doctors found matching your criteria
              </Typography>
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDepartment('all');
                  setSelectedLanguage('all');
                  setOnlineOnly(false);
                  setPage(1);
                }}
              >
                Clear Filters
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Doctors;

