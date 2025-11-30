import { Box } from '@mui/material';

const SkipToContent = () => {
  return (
    <Box
      component="a"
      href="#main-content"
      sx={{
        position: 'absolute',
        top: -40,
        left: 0,
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '8px 16px',
        textDecoration: 'none',
        zIndex: 9999,
        borderRadius: '0 0 4px 0',
        fontWeight: 600,
        '&:focus': {
          top: 0,
          outline: '3px solid',
          outlineColor: 'secondary.main',
          outlineOffset: '2px',
        },
      }}
    >
      Skip to main content
    </Box>
  );
};

export default SkipToContent;

