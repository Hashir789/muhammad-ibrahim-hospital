import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const EmergencyBar = () => {
  return (
    <Box
      component="div"
      role="alert"
      aria-label="Emergency contact information"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 1,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        position: 'relative',
      }}
    >
      <PhoneIcon
        sx={{
          fontSize: 18,
          animation: `${pulse} 2s ease-in-out infinite`,
        }}
        aria-hidden="true"
      />
      <Typography
        variant="body2"
        component="span"
        sx={{
          fontWeight: 600,
          fontSize: { xs: '0.75rem', sm: '0.875rem' },
        }}
      >
        Emergency 24/7 • Call:{' '}
        <Box
          component="a"
          href="tel:+92XXXXXXXXX"
          sx={{
            color: 'inherit',
            textDecoration: 'underline',
            fontWeight: 700,
            '&:hover': {
              opacity: 0.9,
            },
            '&:focus-visible': {
              outline: '2px solid white',
              outlineOffset: '2px',
              borderRadius: '2px',
            },
          }}
          aria-label="Call emergency number +92 XX XXXX XXXX"
        >
          +92 XX XXXX XXXX
        </Box>
      </Typography>
    </Box>
  );
};

export default EmergencyBar;

