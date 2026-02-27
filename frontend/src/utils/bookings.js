export const saveBooking = (booking) => {
  const bookings = getBookings();
  const newBooking = {
    ...booking,
    id: Date.now(),
    date: new Date().toISOString(),
    status: 'Confirmé'
  };
  bookings.push(newBooking);
  localStorage.setItem('atikoBookings', JSON.stringify(bookings));
  return newBooking;
};

export const getBookings = () => {
  const bookings = localStorage.getItem('atikoBookings');
  return bookings ? JSON.parse(bookings) : [];
};

export const getBookingById = (id) => {
  const bookings = getBookings();
  return bookings.find(b => b.id === parseInt(id));
};

export const cancelBooking = (id) => {
  const bookings = getBookings();
  const updatedBookings = bookings.map(b => 
    b.id === parseInt(id) ? { ...b, status: 'Annulé' } : b
  );
  localStorage.setItem('atikoBookings', JSON.stringify(updatedBookings));
};