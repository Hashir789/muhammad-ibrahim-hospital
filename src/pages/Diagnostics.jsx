import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FilterListIcon from '@mui/icons-material/FilterList';
import MetaTags from '../components/MetaTags';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Diagnostics = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  // All diagnostic tests
  const allTests = [
    // Imaging Tests
    { id: 'mri-brain', name: 'MRI Brain', category: 'Imaging', price: 'PKR 20,000', reportTime: '24-48 hours', fasting: 'No' },
    { id: 'mri-spine', name: 'MRI Spine', category: 'Imaging', price: 'PKR 25,000', reportTime: '24-48 hours', fasting: 'No' },
    { id: 'ct-chest', name: 'CT Chest', category: 'Imaging', price: 'PKR 12,000', reportTime: '24 hours', fasting: 'No' },
    { id: 'ct-abdomen', name: 'CT Abdomen', category: 'Imaging', price: 'PKR 15,000', reportTime: '24 hours', fasting: 'Yes' },
    { id: 'ultrasound-abdomen', name: 'Ultrasound Abdomen', category: 'Imaging', price: 'PKR 3,000', reportTime: 'Same day', fasting: 'Yes' },
    { id: 'ultrasound-pelvis', name: 'Ultrasound Pelvis', category: 'Imaging', price: 'PKR 2,500', reportTime: 'Same day', fasting: 'No' },
    { id: 'x-ray-chest', name: 'X-Ray Chest', category: 'Imaging', price: 'PKR 800', reportTime: 'Same day', fasting: 'No' },
    { id: 'x-ray-bone', name: 'X-Ray Bone', category: 'Imaging', price: 'PKR 1,000', reportTime: 'Same day', fasting: 'No' },
    
    // Laboratory Tests
    { id: 'cbc', name: 'Complete Blood Count (CBC)', category: 'Laboratory', price: 'PKR 1,000', reportTime: 'Same day', fasting: 'No' },
    { id: 'lipid-profile', name: 'Lipid Profile', category: 'Laboratory', price: 'PKR 1,800', reportTime: '24 hours', fasting: 'Yes' },
    { id: 'liver-function', name: 'Liver Function Test (LFT)', category: 'Laboratory', price: 'PKR 1,500', reportTime: 'Same day', fasting: 'Yes' },
    { id: 'kidney-function', name: 'Kidney Function Test (KFT)', category: 'Laboratory', price: 'PKR 1,200', reportTime: 'Same day', fasting: 'Yes' },
    { id: 'blood-sugar', name: 'Blood Sugar (Fasting)', category: 'Laboratory', price: 'PKR 500', reportTime: 'Same day', fasting: 'Yes' },
    { id: 'hba1c', name: 'HbA1c (Diabetes Test)', category: 'Laboratory', price: 'PKR 1,200', reportTime: '24 hours', fasting: 'No' },
    { id: 'thyroid-tsh', name: 'Thyroid Function Test', category: 'Laboratory', price: 'PKR 2,500', reportTime: '24-48 hours', fasting: 'No' },
    { id: 'vitamin-d', name: 'Vitamin D Test', category: 'Laboratory', price: 'PKR 2,000', reportTime: '24 hours', fasting: 'No' },
    { id: 'vitamin-b12', name: 'Vitamin B12 Test', category: 'Laboratory', price: 'PKR 1,800', reportTime: '24 hours', fasting: 'No' },
    { id: 'iron-study', name: 'Iron Study', category: 'Laboratory', price: 'PKR 2,200', reportTime: '24 hours', fasting: 'Yes' },
    { id: 'coagulation', name: 'Coagulation Profile', category: 'Laboratory', price: 'PKR 1,500', reportTime: 'Same day', fasting: 'No' },
    { id: 'urine-analysis', name: 'Urine Analysis', category: 'Laboratory', price: 'PKR 400', reportTime: 'Same day', fasting: 'No' },
    { id: 'stool-test', name: 'Stool Examination', category: 'Laboratory', price: 'PKR 600', reportTime: '24 hours', fasting: 'No' },
    
    // Special Tests
    { id: 'ecg', name: 'ECG (Electrocardiogram)', category: 'Cardiac', price: 'PKR 800', reportTime: 'Same day', fasting: 'No' },
    { id: 'echocardiogram', name: 'Echocardiogram', category: 'Cardiac', price: 'PKR 5,000', reportTime: 'Same day', fasting: 'No' },
    { id: 'stress-test', name: 'Stress Test', category: 'Cardiac', price: 'PKR 8,000', reportTime: 'Same day', fasting: 'Yes' },
    { id: 'holter-monitor', name: 'Holter Monitor (24h)', category: 'Cardiac', price: 'PKR 6,000', reportTime: '24-48 hours', fasting: 'No' },
    { id: 'pft', name: 'Pulmonary Function Test', category: 'Pulmonary', price: 'PKR 3,000', reportTime: 'Same day', fasting: 'No' },
    { id: 'endoscopy', name: 'Upper GI Endoscopy', category: 'Endoscopy', price: 'PKR 20,000', reportTime: '24-48 hours', fasting: 'Yes' },
    { id: 'colonoscopy', name: 'Colonoscopy', category: 'Endoscopy', price: 'PKR 25,000', reportTime: '24-48 hours', fasting: 'Yes' },
  ];

  const categories = ['All', 'Imaging', 'Laboratory', 'Cardiac', 'Pulmonary', 'Endoscopy'];

  // Filter tests
  const filteredTests = useMemo(() => {
    return allTests.filter((test) => {
      const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           test.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredTests.length / itemsPerPage);
  const paginatedTests = filteredTests.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookTest = (testId) => {
    navigate('/contact', { state: { testId, bookingType: 'diagnostic' } });
  };

  return (
    <>
      <MetaTags
        title="Diagnostic Tests"
        description="Search and book diagnostic tests including imaging, laboratory, and specialized tests"
        keywords="diagnostic tests, lab tests, medical tests, imaging, laboratory"
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
            Diagnostic Tests
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Search and book diagnostic tests from our comprehensive test catalog
          </Typography>
        </Box>

        <Container maxWidth="xl">
          {/* Search and Filter */}
          <Box
            sx={{
              mb: 4,
              p: 3,
              backgroundColor: 'grey.50',
              borderRadius: 2,
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8}>
                <TextField
                  fullWidth
                  placeholder="Search tests by name or category"
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
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setPage(1);
                    }}
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat === 'All' ? 'all' : cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {filteredTests.length} test{filteredTests.length !== 1 ? 's' : ''} found
            </Typography>
          </Box>

          {/* Tests Grid */}
          {paginatedTests.length > 0 ? (
            <>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {paginatedTests.map((test) => (
                  <Grid item xs={12} sm={6} md={4} key={test.id}>
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
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          <Chip label={test.category} size="small" color="primary" variant="outlined" />
                          {test.fasting === 'Yes' && (
                            <Chip label="Fasting" size="small" color="warning" />
                          )}
                        </Stack>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                          {test.name}
                        </Typography>
                        <Stack spacing={1} sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="text.secondary">
                              Price:
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {test.price}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="text.secondary">
                              Report Time:
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {test.reportTime}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                      <Box sx={{ p: 2, pt: 0 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          startIcon={<CalendarTodayIcon />}
                          onClick={() => handleBookTest(test.id)}
                          sx={{ textTransform: 'none' }}
                        >
                          Book Test
                        </Button>
                      </Box>
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
                  />
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <LocalHospitalIcon sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
              <Typography variant="h6" color="text.secondary">
                No tests found matching your search
              </Typography>
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
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

export default Diagnostics;

