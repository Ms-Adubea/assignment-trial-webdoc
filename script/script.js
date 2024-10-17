// const url = 'https://api.timerise.io/v1'

// async function fetchUrl() {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }
//  fetchUrl()
const apiBaseUrl = 'https://api.timerise.io/v1';

// Book an appointment
async function bookAppointment(formData) {
    try {
        const response = await fetch(`${apiBaseUrl}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        document.getElementById('bookingResults').textContent = `Booking confirmed for ${formData.date} at ${formData.time}`;
    } catch (error) {
        console.error('Error booking appointment:', error);
        document.getElementById('bookingResults').textContent = 'Error booking appointment. Please try again.';
    }
}

// Process payment
// async function processPayment(cardDetails, amount) {
//     try {
//         const response = await fetch(`${apiBaseUrl}/payments`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ ...cardDetails, amount }),
//         });
//         const data = await response.json();
//         document.getElementById('paymentStatus').textContent = `Payment of $${amount} processed successfully`;
//     } catch (error) {
//         console.error('Error processing payment:', error);
//         document.getElementById('paymentStatus').textContent = 'Error processing payment. Please try again.';
//     }
// }

// Event Listeners
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        date: document.getElementById('bookingDate').value,
        time: document.getElementById('bookingTime').value,
        department: document.getElementById('department').value,
        doctor: document.getElementById('doctor').value,
        name: document.getElementById('fname').value,
        phoneNumber: document.getElementById('pnumber').value
    };
    bookAppointment(formData);
});


async function bookAppointment(formData) {
    try {
        const response = await fetch(`${apiBaseUrl}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        
        // Show confirmation message
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.textContent = `Appointment successfully booked for ${formData.date} at ${formData.time} with Dr. ${formData.doctor} in the ${formData.department} department.`;
        confirmationMessage.style.display = 'block';
        
        // Clear form fields
        document.getElementById('bookingForm').reset();
        
        // Scroll to confirmation message
        confirmationMessage.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Error booking appointment:', error);
        document.getElementById('bookingResults').textContent = 'Error booking appointment. Please try again.';
    }
}