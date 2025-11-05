
export interface Patient {
    id: number;
    name: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other';
    contact: string;
    username: string;
    password?: string; // Added for login
}

export interface Doctor {
    id: number;
    name:string;
    specialization: string;
    contact: string;
    availability: Record<string, string[]>; // e.g. { "Monday": ["09:00", "10:00"] }
}

export enum AppointmentStatus {
    Pending = 'Pending',
    Approved = 'Approved',
    Cancelled = 'Cancelled'
}

export interface Appointment {
    id: number;
    patientId: number;
    doctorId: number;
    date: string; // YYYY-MM-DD
    time: string; // HH:MM
    status: AppointmentStatus;
}

export interface User {
    id: number;
    username: string;
    role: 'patient' | 'admin';
    name: string;
}

export type Page = 'home' | 'login' | 'admin-dashboard' | 'patient-dashboard' | 'book-appointment' | 'analytics-dashboard' | 'appointment-calendar';

export interface Feedback {
    id: number;
    patientId: number;
    doctorId: number;
    rating: number; // 1 to 5
    comment: string;
    date: string;
}