import { model, Schema } from "mongoose";
import { IEmployee } from "../../service/interfac/employee/employee.interfac";

const addressSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
});

const contactSchema = new Schema({
    phone: { type: String, required: true },
    email: { type: String, required: true },
});

const emergencyContactSchema = new Schema({
    name: { type: String, required: true },
    relationship: { type: String, required: true },
    phone: { type: String, required: true },
});

const employmentDetailsSchema = new Schema({
    jobTitle: { type: String, required: true },
    departmentId: { type: String, required: true },
    salary: { type: Number, required: true },
    dateOfJoining: { type: Date, required: true },
    employmentType: { type: String, enum: ['Full-time', 'Part-time', 'Contract'], required: true },
});

const leaveBalanceSchema = new Schema({
    annualLeave: { type: Number, required: true, min: 0 },
    sickLeave: { type: Number, required: true, min: 0 },
    unpaidLeave: { type: Number, required: true, min: 0 },
});

const skillsSchema = new Schema({
    skillName: { type: String, required: true },
    proficiencyLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
});

const employeeSchema: Schema<IEmployee> = new Schema(
    {
        firstName: { type: String, required: true, minlength: 1, maxlength: 50 },
        lastName: { type: String, required: true, minlength: 1, maxlength: 50 },
        middleName: { type: String, maxlength: 50, default: null }, // Optional
        dateOfBirth: { type: Date, required: true, default: Date.now, },
        gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
        address: { type: addressSchema, required: true },
        contact: { type: contactSchema, required: true },
        emergencyContacts: { type: [emergencyContactSchema], required: true },
        employmentDetails: { type: employmentDetailsSchema, required: true },
        leaveBalance: { type: leaveBalanceSchema, required: true },
        skills: { type: [skillsSchema], required: true },
        isActive: { type: Boolean, required: true, default: false },
    },
    { timestamps: true }
);

const Employee = model<IEmployee>('Employee', employeeSchema);
export default Employee;