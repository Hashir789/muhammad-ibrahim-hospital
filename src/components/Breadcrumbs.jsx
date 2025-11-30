import { useLocation, Link } from 'react-router-dom';
import { Breadcrumbs as MuiBreadcrumbs, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (path) => {
    const pathMap = {
      about: 'About',
      services: 'Services',
      contact: 'Contact',
    };
    return pathMap[path.toLowerCase()] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  if (pathnames.length === 0) {
    return null; // Don't show breadcrumbs on home page
  }

  return (
    <Box
      component="nav"
      aria-label="Breadcrumb navigation"
      sx={{ mb: 3 }}
    >
      <MuiBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
          aria-label="Home"
        >
          <HomeIcon sx={{ mr: 0.5, fontSize: 20 }} />
          Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography
              key={routeTo}
              color="text.primary"
              sx={{ fontWeight: 500 }}
            >
              {getBreadcrumbName(name)}
            </Typography>
          ) : (
            <Link
              key={routeTo}
              to={routeTo}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {getBreadcrumbName(name)}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;

