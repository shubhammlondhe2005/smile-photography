export const openWhatsApp = (message = '') => {
  const phone = '918698259731'
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

export const bookingWhatsAppMessage = (data) => {
  const msg = `Hello Smile Photography,

I would like to enquire about photography services.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'N/A'}
Event Type: ${data.eventType}
Event Date: ${data.eventDate || 'N/A'}
Location: ${data.location || 'N/A'}
Service: ${data.service}
Message: ${data.message || 'N/A'}`
  return msg
}
