import { Patient, Doctor, Appointment, AppointmentStatus, User, Feedback } from './types';

export const MOCK_PATIENTS: Patient[] = [
    { id: 1, name: 'John Doe', age: 34, gender: 'Male', contact: '123-456-7890', username: 'johndoe', password: 'password123' },
    { id: 2, name: 'Jane Smith', age: 28, gender: 'Female', contact: '098-765-4321', username: 'janesmith', password: 'password123' },
];

const generateAvailability = (): Record<string, string[]> => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
    const availability: Record<string, string[]> = {};
    days.forEach(day => {
        availability[day] = times.filter(() => Math.random() > 0.3);
    });
    return availability;
};

export const MOCK_DOCTORS: Doctor[] = [
    { id: 1, name: 'Dr. Alice Williams', specialization: 'Cardiology', contact: '555-0101', availability: generateAvailability() },
    { id: 2, name: 'Dr. Bob Brown', specialization: 'Neurology', contact: '555-0102', availability: generateAvailability() },
    { id: 3, name: 'Dr. Charlie Davis', specialization: 'Pediatrics', contact: '555-0103', availability: generateAvailability() },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
    { id: 1, patientId: 1, doctorId: 1, date: '2024-07-28', time: '10:00', status: AppointmentStatus.Approved },
    { id: 2, patientId: 2, doctorId: 2, date: '2024-07-29', time: '14:00', status: AppointmentStatus.Pending },
    { id: 3, patientId: 1, doctorId: 3, date: '2024-07-30', time: '09:00', status: AppointmentStatus.Cancelled },
    { id: 4, patientId: 2, doctorId: 1, date: '2024-07-30', time: '11:00', status: AppointmentStatus.Approved },
    { id: 5, patientId: 1, doctorId: 2, date: '2024-08-05', time: '15:00', status: AppointmentStatus.Pending },
    { id: 6, patientId: 2, doctorId: 3, date: '2024-08-10', time: '16:00', status: AppointmentStatus.Approved },
];

export const MOCK_FEEDBACKS: Feedback[] = [
    { id: 1, patientId: 1, doctorId: 1, rating: 5, comment: 'Dr. Williams was fantastic! Very attentive and knowledgeable.', date: '2024-07-29' },
    { id: 2, patientId: 2, doctorId: 1, rating: 4, comment: 'Good experience overall. The wait time was a bit long.', date: '2024-07-31' },
    { id: 3, patientId: 1, doctorId: 3, rating: 3, comment: 'The appointment felt rushed.', date: '2024-07-31' },
];

export const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'password123'
};

export const ADMIN_USER: User = {
    id: 99,
    username: 'admin',
    role: 'admin',
    name: 'Admin User'
};

export const GEMINI_API_KEY_PLACEHOLDER = 'YOUR_API_KEY_HERE';
export const BASE_URL="http://localhost:5000";