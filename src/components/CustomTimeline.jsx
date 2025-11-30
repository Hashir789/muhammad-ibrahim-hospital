import { Box, Typography, Chip } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const CustomTimeline = ({ items, position = 'alternate' }) => {
  const isAlternate = position === 'alternate';

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Vertical line */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 20, md: isAlternate ? '50%' : 20 },
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: 'primary.main',
          transform: { md: isAlternate ? 'translateX(-50%)' : 'none' },
        }}
      />
      
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        const isLeft = isAlternate ? isEven : true;

        return (
          <Box
            key={index}
            sx={{
              position: 'relative',
              mb: 4,
              pl: { xs: 6, md: isLeft ? (isAlternate ? '50%' : 6) : 0 },
              pr: { xs: 0, md: isLeft ? 0 : (isAlternate ? '50%' : 0) },
              textAlign: { xs: 'left', md: isLeft ? 'right' : 'left' },
            }}
          >
            {/* Dot */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 8, md: isAlternate ? '50%' : 8 },
                top: 0,
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                border: '4px solid',
                borderColor: 'background.paper',
                transform: { md: isAlternate ? 'translateX(-50%)' : 'none' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                p: 0.5,
              }}
            >
              <CalendarTodayIcon sx={{ fontSize: 16, color: 'white' }} />
            </Box>

            {/* Content */}
            <Box
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 2,
                p: 3,
                boxShadow: 2,
                maxWidth: { xs: '100%', md: isAlternate ? '45%' : 'calc(100% - 40px)' },
                ml: { xs: 0, md: isLeft ? 'auto' : 0 },
                mr: { xs: 0, md: isLeft ? 0 : 'auto' },
              }}
            >
              <Chip
                label={item.year}
                color="primary"
                sx={{ mb: 1.5, fontWeight: 600 }}
              />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CustomTimeline;

