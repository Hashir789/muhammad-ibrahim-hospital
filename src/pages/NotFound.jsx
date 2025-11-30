import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import MetaTags from '../components/MetaTags';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
  return (
    <>
      <MetaTags
        title="Page Not Found"
        description="The page you are looking for could not be found"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 120, color: 'primary.main', mb: 2 }} />
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            mb: 2,
            fontSize: { xs: '4rem', md: '6rem' },
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: 4, maxWidth: '600px' }}
        >
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
        >
          Return to Home
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
