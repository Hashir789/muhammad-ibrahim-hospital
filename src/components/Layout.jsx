import { HelmetProvider } from 'react-helmet-async';
import { Container, Box } from '@mui/material';
import EmergencyBar from './EmergencyBar';
import Header from './Header';
import Footer from './Footer';
import SkipToContent from './SkipToContent';
import Breadcrumbs from './Breadcrumbs';

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        <SkipToContent />
        <EmergencyBar />
        <Header />
        <Container 
          component="main" 
          id="main-content"
          maxWidth="xl" 
          sx={{ 
            flexGrow: 1, 
            py: { xs: 4, md: 6 },
            px: { xs: 2, sm: 3, md: 4 }
          }}
        >
          <Breadcrumbs />
          {children}
        </Container>
        <Footer />
      </Box>
    </HelmetProvider>
  );
};

export default Layout;

