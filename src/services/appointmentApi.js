// Mock API service for appointment availability

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock available dates and time slots
const getAvailableSlots = async (date, doctorId = null, serviceId = null) => {
  await delay(500); // Simulate API call delay

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDate = new Date(date);
  selectedDate.setHours(0, 0, 0, 0);

  // Don't allow past dates
  if (selectedDate < today) {
    return [];
  }

  // Mock unavailable dates (weekends and some specific dates)
  const dayOfWeek = selectedDate.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    // Sunday or Saturday - no appointments
    return [];
  }

  // Mock unavailable dates (e.g., holidays)
  const unavailableDates = [
    '2024-12-25', // Christmas
    '2025-01-01', // New Year
  ];
  const dateStr = selectedDate.toISOString().split('T')[0];
  if (unavailableDates.includes(dateStr)) {
    return [];
  }

  // All available time slots
  const allSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  ];

  // Mock some slots as unavailable based on date and doctor/service
  const unavailableSlots = [];

  // Example: If it's today, remove past time slots
  if (dateStr === today.toISOString().split('T')[0]) {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    allSlots.forEach((slot) => {
      const [time, period] = slot.split(' ');
      const [hours, minutes] = time.split(':').map(Number);
      let slotHour = hours;
      if (period === 'PM' && hours !== 12) slotHour += 12;
      if (period === 'AM' && hours === 12) slotHour = 0;
      
      if (slotHour < currentHour || (slotHour === currentHour && minutes <= currentMinute)) {
        unavailableSlots.push(slot);
      }
    });
  }

  // Mock: Some slots are booked for specific dates
  const bookedSlots = {
    '2024-12-20': ['10:00 AM', '2:00 PM', '4:30 PM'],
    '2024-12-21': ['9:30 AM', '11:00 AM', '3:00 PM'],
    '2024-12-22': ['1:00 PM', '5:00 PM'],
  };

  if (bookedSlots[dateStr]) {
    unavailableSlots.push(...bookedSlots[dateStr]);
  }

  // Mock: Doctor-specific availability
  if (doctorId === 'ahmed-khan') {
    // Dr. Ahmed Khan doesn't work on Fridays afternoon
    if (dayOfWeek === 5) {
      unavailableSlots.push('2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM');
    }
  }

  // Return available slots (all slots minus unavailable ones)
  const availableSlots = allSlots.filter((slot) => !unavailableSlots.includes(slot));

  return availableSlots;
};

// Get unavailable dates (for calendar disabling)
const getUnavailableDates = async () => {
  await delay(300);

  const unavailableDates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Add weekends for next 3 months
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const dayOfWeek = date.getDay();
    
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      unavailableDates.push(new Date(date));
    }
  }

  // Add specific holidays
  unavailableDates.push(
    new Date('2024-12-25'),
    new Date('2025-01-01'),
  );

  return unavailableDates;
};

// Check if a specific date and time slot is available
const checkSlotAvailability = async (date, timeSlot, doctorId = null, serviceId = null) => {
  await delay(200);
  const availableSlots = await getAvailableSlots(date, doctorId, serviceId);
  return availableSlots.includes(timeSlot);
};

export { getAvailableSlots, getUnavailableDates, checkSlotAvailability };

