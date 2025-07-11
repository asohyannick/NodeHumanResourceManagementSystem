import { Document } from "mongoose";
interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

interface Contact {
    phone: string;
    email: string;
}

interface EmergencyContact {
    name: string;
    relationship: string;
    phone: string;
}

interface EmploymentDetails {
    jobTitle: string;
    departmentId: string; // Reference to Department entity
    salary: number;
    dateOfJoining: Date;
    employmentType: 'Full-time' | 'Part-time' | 'Contract';
}

interface LeaveBalance {
    annualLeave: number; // Days
    sickLeave: number; // Days
    unpaidLeave: number; // Days
}

interface Skills {
    skillName: string;
    proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
}
export interface IEmployee extends Document {
    firstName: string;
    lastName: string;
    middleName?: string; // Optional
    dateOfBirth: Date;
    gender: 'Male' | 'Female' | 'Other';
    address: Address;
    contact: Contact;
    emergencyContacts: EmergencyContact[];
    employmentDetails: EmploymentDetails;
    leaveBalance: LeaveBalance;
    skills: Skills[];
    isActive: boolean; // To mark if the employee is active or inactive
}