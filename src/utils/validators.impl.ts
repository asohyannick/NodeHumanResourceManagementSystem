import * as Yup from 'yup';
import { DepartmentStatus } from '../service/interfac/department/department.interfac';
const registerAccountSchema = Yup.object().shape({
    firstName: Yup.string().required('firstName must be provided').trim().min(3, 'firstName must be atleast 3 characters minimum').lowercase(),
    lasttName: Yup.string().required('lastName must be provided').trim().min(3, 'lasttName must be atleast 3 characters minimum').lowercase(),
    email: Yup.string().email("email address must be provided").required('Email address must be provided').trim().lowercase(),
    password: Yup.string().required('password must be provided').trim().min(3, 'password must be atleast 3 characters minimum'),
    isAdmin: Yup.boolean().required('Admin status must be provided').default(false),
});
const loginAccountSchema = Yup.object().shape({
    email: Yup.string().email("email address must be provided").required('Email address must be provided').trim().lowercase(),
    password: Yup.string().required('password must be provided').trim().min(3, 'password must be atleast 3 characters minimum'),
});
const updateAccountSchema = Yup.object().shape({
    firstName: Yup.string().required('firstName must be provided').trim().min(3, 'firstName must be atleast 3 characters minimum').lowercase(),
    lasttName: Yup.string().required('lastName must be provided').trim().min(3, 'lasttName must be atleast 3 characters minimum').lowercase(),
    email: Yup.string().email("email address must be provided").required('Email address must be provided').trim(),
    password: Yup.string().required('password must be provided').trim().min(3, 'password must be atleast 3 characters minimum'),
    isAdmin: Yup.boolean().required('Admin status must be provided').default(false),
});
const profileSchema = Yup.object().shape({
    profilePic: Yup.string()
        .url('Profile picture must be a valid URL')
        .required('Profile picture is required'),
    firstName: Yup.string()
        .required('First name is required')
        .min(1, 'First name must be at least 1 character long')
        .max(50, 'First name must be at most 50 characters long'),
    lastName: Yup.string()
        .required('Last name is required')
        .min(1, 'Last name must be at least 1 character long')
        .max(50, 'Last name must be at most 50 characters long'),
    email: Yup.string()
        .email('Email must be a valid email format')
        .required('Email is required'),
    career: Yup.string()
        .required('Career is required')
        .min(1, 'Career must be at least 1 character long')
        .max(100, 'Career must be at most 100 characters long'),
    address: Yup.object().shape({
        street: Yup.string()
            .required('Street address is required'),
        city: Yup.string()
            .required('City is required'),
        state: Yup.string()
            .required('State is required'),
        country: Yup.string()
            .required('Country is required'),
        zipCode: Yup.string()
            .required('ZIP code is required')
            .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'ZIP code must be a valid format'), // Regex for US ZIP code
    }),
    hobbies: Yup.array()
        .of(Yup.string().min(1, 'Hobby must be at least 1 character long'))
        .required('Hobbies are required')
        .min(1, 'At least one hobby is required'), // Ensure at least one hobby
});
const updateProfileSchema = Yup.object().shape({
    profilePic: Yup.string()
        .url('Profile picture must be a valid URL')
        .required('Profile picture is required'),
    firstName: Yup.string()
        .required('First name is required')
        .min(1, 'First name must be at least 1 character long')
        .max(50, 'First name must be at most 50 characters long'),
    lastName: Yup.string()
        .required('Last name is required')
        .min(1, 'Last name must be at least 1 character long')
        .max(50, 'Last name must be at most 50 characters long'),
    email: Yup.string()
        .email('Email must be a valid email format')
        .required('Email is required'),
    career: Yup.string()
        .required('Career is required')
        .min(1, 'Career must be at least 1 character long')
        .max(100, 'Career must be at most 100 characters long'),
    address: Yup.object().shape({
        street: Yup.string()
            .required('Street address is required'),
        city: Yup.string()
            .required('City is required'),
        state: Yup.string()
            .required('State is required'),
        country: Yup.string()
            .required('Country is required'),
        zipCode: Yup.string()
            .required('ZIP code is required')
            .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'ZIP code must be a valid format'), // Regex for US ZIP code
    }),
    hobbies: Yup.array()
        .of(Yup.string().min(1, 'Hobby must be at least 1 character long'))
        .required('Hobbies are required')
        .min(1, 'At least one hobby is required'), // Ensure at least one hobby
});
const employeeSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required')
        .min(1, 'First name must be at least 1 character long')
        .max(50, 'First name must be at most 50 characters long'),
    lastName: Yup.string()
        .required('Last name is required')
        .min(1, 'Last name must be at least 1 character long')
        .max(50, 'Last name must be at most 50 characters long'),
    middleName: Yup.string()
        .optional()
        .max(50, 'Middle name must be at most 50 characters long'),
    dateOfBirth: Yup.date()
        .required('Date of birth is required')
        .max(new Date(), 'Date of birth cannot be in the future'), // Ensure date of birth is in the past
    gender: Yup.mixed<'Male' | 'Female' | 'Other'>()
        .oneOf(['Male', 'Female', 'Other'], 'Gender must be one of Male, Female, or Other')
        .required('Gender is required'),
    address: Yup.object().shape({
        street: Yup.string()
            .required('Street is required'),
        city: Yup.string()
            .required('City is required'),
        state: Yup.string()
            .required('State is required'),
        zipCode: Yup.string()
            .required('ZIP code is required'),
        country: Yup.string()
            .required('Country is required'),
    }),
    contact: Yup.object().shape({
        phone: Yup.string()
            .required('Phone number is required')
            .matches(/^\+?\d{10,15}$/, 'Phone number must be a valid format'), // Adjust regex as needed
        email: Yup.string()
            .email('Email must be a valid email format')
            .required('Email is required'),
    }),
    emergencyContacts: Yup.array().of(Yup.object().shape({
        name: Yup.string()
            .required('Emergency contact name is required'),
        relationship: Yup.string()
            .required('Relationship is required'),
        phone: Yup.string()
            .required('Emergency contact phone is required')
            .matches(/^\+?\d{10,15}$/, 'Phone number must be a valid format'), // Adjust regex as needed
    }))
        .min(1, 'At least one emergency contact is required'),
    employmentDetails: Yup.object().shape({
        jobTitle: Yup.string()
            .required('Job title is required'),
        departmentId: Yup.string()
            .required('Department ID is required'),
        salary: Yup.number()
            .required('Salary is required')
            .min(0, 'Salary must be a positive number'),
        dateOfJoining: Yup.date()
            .required('Date of joining is required')
            .max(new Date(), 'Date of joining cannot be in the future'), // Ensure date is in the past
        employmentType: Yup.mixed<'Full-time' | 'Part-time' | 'Contract'>()
            .oneOf(['Full-time', 'Part-time', 'Contract'], 'Employment type must be one of Full-time, Part-time, or Contract')
            .required('Employment type is required'),
    }),
    leaveBalance: Yup.object().shape({
        annualLeave: Yup.number()
            .required('Annual leave is required')
            .min(0, 'Annual leave cannot be negative'),
        sickLeave: Yup.number()
            .required('Sick leave is required')
            .min(0, 'Sick leave cannot be negative'),
        unpaidLeave: Yup.number()
            .required('Unpaid leave is required')
            .min(0, 'Unpaid leave cannot be negative'),
    }),
    skills: Yup.array().of(Yup.object().shape({
        skillName: Yup.string()
            .required('Skill name is required'),
        proficiencyLevel: Yup.mixed<'Beginner' | 'Intermediate' | 'Advanced'>()
            .oneOf(['Beginner', 'Intermediate', 'Advanced'], 'Proficiency level must be one of Beginner, Intermediate, or Advanced')
            .required('Proficiency level is required'),
    })),
    isActive: Yup.boolean()
        .required('Active status is required'),
});
const updateEmployeeSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required')
        .min(1, 'First name must be at least 1 character long')
        .max(50, 'First name must be at most 50 characters long'),
    lastName: Yup.string()
        .required('Last name is required')
        .min(1, 'Last name must be at least 1 character long')
        .max(50, 'Last name must be at most 50 characters long'),
    middleName: Yup.string()
        .optional()
        .max(50, 'Middle name must be at most 50 characters long'),
    dateOfBirth: Yup.date()
        .required('Date of birth is required')
        .max(new Date(), 'Date of birth cannot be in the future'), // Ensure date of birth is in the past
    gender: Yup.mixed<'Male' | 'Female' | 'Other'>()
        .oneOf(['Male', 'Female', 'Other'], 'Gender must be one of Male, Female, or Other')
        .required('Gender is required'),
    address: Yup.object().shape({
        street: Yup.string()
            .required('Street is required'),
        city: Yup.string()
            .required('City is required'),
        state: Yup.string()
            .required('State is required'),
        zipCode: Yup.string()
            .required('ZIP code is required'),
        country: Yup.string()
            .required('Country is required'),
    }),
    contact: Yup.object().shape({
        phone: Yup.string()
            .required('Phone number is required')
            .matches(/^\+?\d{10,15}$/, 'Phone number must be a valid format'), // Adjust regex as needed
        email: Yup.string()
            .email('Email must be a valid email format')
            .required('Email is required'),
    }),
    emergencyContacts: Yup.array().of(Yup.object().shape({
        name: Yup.string()
            .required('Emergency contact name is required'),
        relationship: Yup.string()
            .required('Relationship is required'),
        phone: Yup.string()
            .required('Emergency contact phone is required')
            .matches(/^\+?\d{10,15}$/, 'Phone number must be a valid format'), // Adjust regex as needed
    }))
        .min(1, 'At least one emergency contact is required'),
    employmentDetails: Yup.object().shape({
        jobTitle: Yup.string()
            .required('Job title is required'),
        departmentId: Yup.string()
            .required('Department ID is required'),
        salary: Yup.number()
            .required('Salary is required')
            .min(0, 'Salary must be a positive number'),
        dateOfJoining: Yup.date()
            .required('Date of joining is required')
            .max(new Date(), 'Date of joining cannot be in the future'), // Ensure date is in the past
        employmentType: Yup.mixed<'Full-time' | 'Part-time' | 'Contract'>()
            .oneOf(['Full-time', 'Part-time', 'Contract'], 'Employment type must be one of Full-time, Part-time, or Contract')
            .required('Employment type is required'),
    }),
    leaveBalance: Yup.object().shape({
        annualLeave: Yup.number()
            .required('Annual leave is required')
            .min(0, 'Annual leave cannot be negative'),
        sickLeave: Yup.number()
            .required('Sick leave is required')
            .min(0, 'Sick leave cannot be negative'),
        unpaidLeave: Yup.number()
            .required('Unpaid leave is required')
            .min(0, 'Unpaid leave cannot be negative'),
    }),
    skills: Yup.array().of(Yup.object().shape({
        skillName: Yup.string()
            .required('Skill name is required'),
        proficiencyLevel: Yup.mixed<'Beginner' | 'Intermediate' | 'Advanced'>()
            .oneOf(['Beginner', 'Intermediate', 'Advanced'], 'Proficiency level must be one of Beginner, Intermediate, or Advanced')
            .required('Proficiency level is required'),
    })),
    isActive: Yup.boolean()
        .required('Active status is required'),
});
const departmentSchema = Yup.object().shape({
    name: Yup.string()
        .required('Department name is required')
        .min(1, 'Department name must be at least 1 character long')
        .max(100, 'Department name must be at most 100 characters long'),

    description: Yup.string()
        .optional()
        .max(255, 'Description must be at most 255 characters long'),

    location: Yup.string()
        .required('Location is required')
        .min(1, 'Location must be at least 1 character long')
        .max(100, 'Location must be at most 100 characters long'),

    headId: Yup.string()
        .optional()
        .matches(/^[a-fA-F0-9]{24}$/, 'Head ID must be a valid MongoDB ObjectId'),

    employees: Yup.array()
        .of(Yup.string().matches(/^[a-fA-F0-9]{24}$/, 'Employee IDs must be valid MongoDB ObjectIds'))
        .required('Employees array is required'),

    budget: Yup.number()
        .required('Budget is required')
        .min(0, 'Budget must be a non-negative number'),

    isActive: Yup.boolean()
        .required('Active status is required'),

    projects: Yup.array().of(
        Yup.object().shape({
            name: Yup.string()
                .required('Project name is required')
                .max(100, 'Project name must be at most 100 characters long'),

            description: Yup.string()
                .required('Project description is required')
                .max(255, 'Project description must be at most 255 characters long'),

            startDate: Yup.date()
                .required('Start date is required')
                .max(new Date(), 'Start date cannot be in the future'), // Adjust if needed

            endDate: Yup.date()
                .required('End date is required')
                .min(Yup.ref('startDate'), 'End date must be after start date'), // Ensure end is after start

            status: Yup.mixed<DepartmentStatus>()
                .oneOf(Object.values(DepartmentStatus), 'Status must be one of Active, Completed, or Hold On')
                .required('Project status is required'),
        })
    ).optional(),
});
const updateDepartmentSchema = Yup.object().shape({
    name: Yup.string()
        .required('Department name is required')
        .min(1, 'Department name must be at least 1 character long')
        .max(100, 'Department name must be at most 100 characters long'),

    description: Yup.string()
        .optional()
        .max(255, 'Description must be at most 255 characters long'),

    location: Yup.string()
        .required('Location is required')
        .min(1, 'Location must be at least 1 character long')
        .max(100, 'Location must be at most 100 characters long'),

    headId: Yup.string()
        .optional()
        .matches(/^[a-fA-F0-9]{24}$/, 'Head ID must be a valid MongoDB ObjectId'),

    employees: Yup.array()
        .of(Yup.string().matches(/^[a-fA-F0-9]{24}$/, 'Employee IDs must be valid MongoDB ObjectIds'))
        .required('Employees array is required'),

    budget: Yup.number()
        .required('Budget is required')
        .min(0, 'Budget must be a non-negative number'),

    isActive: Yup.boolean()
        .required('Active status is required'),

    projects: Yup.array().of(
        Yup.object().shape({
            name: Yup.string()
                .required('Project name is required')
                .max(100, 'Project name must be at most 100 characters long'),

            description: Yup.string()
                .required('Project description is required')
                .max(255, 'Project description must be at most 255 characters long'),

            startDate: Yup.date()
                .required('Start date is required')
                .max(new Date(), 'Start date cannot be in the future'), // Adjust if needed

            endDate: Yup.date()
                .required('End date is required')
                .min(Yup.ref('startDate'), 'End date must be after start date'), // Ensure end is after start

            status: Yup.mixed<DepartmentStatus>()
                .oneOf(Object.values(DepartmentStatus), 'Status must be one of Active, Completed, or Hold On')
                .required('Project status is required'),
        })
    ).optional(),
});
// Yup validation schema
const JobValidationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    description: Yup.string()
        .optional(),
    departmentId: Yup.string()
        .required('Department ID is required')
        .length(24, 'Department ID must be 24 characters'),
    location: Yup.string()
        .optional(),
    employmentType: Yup.string()
        .oneOf(['Full-time', 'Part-time', 'Contract'], 'Invalid employment type')
        .required('Employment type is required'),
    requiredQualifications: Yup.array()
        .of(
            Yup.object().shape({
                type: Yup.string()
                    .oneOf(['Education', 'Experience', 'Skill'], 'Invalid qualification type')
                    .required('Qualification type is required'),
                description: Yup.string()
                    .required('Qualification description is required'),
            })
        )
        .required('At least one required qualification is needed'),
    preferredQualifications: Yup.array()
        .of(
            Yup.object().shape({
                type: Yup.string()
                    .oneOf(['Education', 'Experience', 'Skill'], 'Invalid qualification type'),
                description: Yup.string(),
            })
        )
        .optional(),
    salaryRange: Yup.object().shape({
        min: Yup.number()
            .required('Minimum salary is required')
            .positive('Minimum salary must be a positive number'),
        max: Yup.number()
            .required('Maximum salary is required')
            .positive('Maximum salary must be a positive number')
            .moreThan(Yup.ref('min'), 'Maximum salary must be greater than minimum salary'),
    }).required('Salary range is required'),
    postingDate: Yup.date()
        .default(() => new Date())
        .optional(),
    closingDate: Yup.date()
        .nullable()
        .optional(),
    status: Yup.string()
        .oneOf(['Open', 'Closed', 'On Hold'], 'Invalid status')
        .required('Status is required'),
    applicants: Yup.array()
        .of(Yup.string())
        .optional(),
});
// Yup validation schema
const updateJobValidationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    description: Yup.string()
        .optional(),
    departmentId: Yup.string()
        .required('Department ID is required')
        .length(24, 'Department ID must be 24 characters'),
    location: Yup.string()
        .optional(),
    employmentType: Yup.string()
        .oneOf(['Full-time', 'Part-time', 'Contract'], 'Invalid employment type')
        .required('Employment type is required'),
    requiredQualifications: Yup.array()
        .of(
            Yup.object().shape({
                type: Yup.string()
                    .oneOf(['Education', 'Experience', 'Skill'], 'Invalid qualification type')
                    .required('Qualification type is required'),
                description: Yup.string()
                    .required('Qualification description is required'),
            })
        )
        .required('At least one required qualification is needed'),
    preferredQualifications: Yup.array()
        .of(
            Yup.object().shape({
                type: Yup.string()
                    .oneOf(['Education', 'Experience', 'Skill'], 'Invalid qualification type'),
                description: Yup.string(),
            })
        )
        .optional(),
    salaryRange: Yup.object().shape({
        min: Yup.number()
            .required('Minimum salary is required')
            .positive('Minimum salary must be a positive number'),
        max: Yup.number()
            .required('Maximum salary is required')
            .positive('Maximum salary must be a positive number')
            .moreThan(Yup.ref('min'), 'Maximum salary must be greater than minimum salary'),
    }).required('Salary range is required'),
    postingDate: Yup.date()
        .default(() => new Date())
        .optional(),
    closingDate: Yup.date()
        .nullable()
        .optional(),
    status: Yup.string()
        .oneOf(['Open', 'Closed', 'On Hold'], 'Invalid status')
        .required('Status is required'),
    applicants: Yup.array()
        .of(Yup.string())
        .optional(),
});
const EmployeeLeaveValidationSchema = Yup.object().shape({
    employeeId: Yup.string()
        .required('Employee ID is required')
        .length(24, 'Employee ID must be 24 characters long'), // Assuming ObjectId format
    name: Yup.string()
        .required('Leave type name is required'),
    description: Yup.string()
        .optional(),
    maxDays: Yup.number()
        .required('Maximum days allowed is required')
        .positive('Maximum days must be a positive number')
        .integer('Maximum days must be an integer'),
    startDate: Yup.date()
        .required('Start date is required')
        .nullable(),
    endDate: Yup.date()
        .required('End date is required')
        .nullable()
        .min(Yup.ref('startDate'), 'End date must be after start date'),
    totalDays: Yup.number()
        .required('Total days requested is required')
        .positive('Total days must be a positive number')
        .integer('Total days must be an integer'),
    status: Yup.string()
        .oneOf(['Pending', 'Approved', 'Rejected'], 'Status must be either Pending, Approved, or Rejected')
        .required('Status is required'),
    reason: Yup.string()
        .optional(),
    availableDays: Yup.number()
        .required('Available days is required')
        .positive('Available days must be a positive number')
        .integer('Available days must be an integer'),
    usedDays: Yup.number()
        .required('Used days is required')
        .min(0, 'Used days cannot be negative') 
        .integer('Used days must be an integer'),
});
const updateEmployeeLeaveValidationSchema = Yup.object().shape({
    employeeId: Yup.string()
        .required('Employee ID is required')
        .length(24, 'Employee ID must be 24 characters long'), // Assuming ObjectId format
    name: Yup.string()
        .required('Leave type name is required'),
    description: Yup.string()
        .optional(),
    maxDays: Yup.number()
        .required('Maximum days allowed is required')
        .positive('Maximum days must be a positive number')
        .integer('Maximum days must be an integer'),
    startDate: Yup.date()
        .required('Start date is required')
        .nullable(),
    endDate: Yup.date()
        .required('End date is required')
        .nullable()
        .min(Yup.ref('startDate'), 'End date must be after start date'),
    totalDays: Yup.number()
        .required('Total days requested is required')
        .positive('Total days must be a positive number')
        .integer('Total days must be an integer'),
    status: Yup.string()
        .oneOf(['Pending', 'Approved', 'Rejected'], 'Status must be either Pending, Approved, or Rejected')
        .required('Status is required'),
    reason: Yup.string()
        .optional(),
    availableDays: Yup.number()
        .required('Available days is required')
        .positive('Available days must be a positive number')
        .integer('Available days must be an integer'),
    usedDays: Yup.number()
        .required('Used days is required')
        .min(0, 'Used days cannot be negative') 
        .integer('Used days must be an integer'),
});
const AttendanceValidationSchema = Yup.object().shape({
    employeeId: Yup.string()
        .required('Employee ID is required'),
    totalPresent: Yup.number()
        .required('Total present days is required')
        .integer('Total present days must be an integer')
        .min(0, 'Total present days cannot be negative'),
    totalAbsent: Yup.number()
        .required('Total absent days is required')
        .integer('Total absent days must be an integer')
        .min(0, 'Total absent days cannot be negative'),
    totalLeave: Yup.number()
        .required('Total leave days is required')
        .integer('Total leave days must be an integer')
        .min(0, 'Total leave days cannot be negative'),
    totalHolidays: Yup.number()
        .required('Total holidays is required')
        .integer('Total holidays must be an integer')
        .min(0, 'Total holidays cannot be negative'),
    date: Yup.date()
        .required('Date is required')
        .nullable(),
    checkInTime: Yup.date()
        .nullable()
        .optional(),
    checkOutTime: Yup.date()
        .nullable()
        .optional()
        .min(Yup.ref('checkInTime'), 'Check-out time must be after check-in time'),
    status: Yup.string()
        .oneOf(['Present', 'Absent', 'Leave', 'Holiday'], 'Status must be either Present, Absent, Leave, or Holiday')
        .required('Status is required'),
    reason: Yup.string()
        .optional(),
});
const updateAttendanceValidationSchema = Yup.object().shape({
    employeeId: Yup.string()
        .required('Employee ID is required'),
    totalPresent: Yup.number()
        .required('Total present days is required')
        .integer('Total present days must be an integer')
        .min(0, 'Total present days cannot be negative'),
    totalAbsent: Yup.number()
        .required('Total absent days is required')
        .integer('Total absent days must be an integer')
        .min(0, 'Total absent days cannot be negative'),
    totalLeave: Yup.number()
        .required('Total leave days is required')
        .integer('Total leave days must be an integer')
        .min(0, 'Total leave days cannot be negative'),
    totalHolidays: Yup.number()
        .required('Total holidays is required')
        .integer('Total holidays must be an integer')
        .min(0, 'Total holidays cannot be negative'),
    date: Yup.date()
        .required('Date is required')
        .nullable(),
    checkInTime: Yup.date()
        .nullable()
        .optional(),
    checkOutTime: Yup.date()
        .nullable()
        .optional()
        .min(Yup.ref('checkInTime'), 'Check-out time must be after check-in time'),
    status: Yup.string()
        .oneOf(['Present', 'Absent', 'Leave', 'Holiday'], 'Status must be either Present, Absent, Leave, or Holiday')
        .required('Status is required'),
    reason: Yup.string()
        .optional(),
});
const PayrollValidationSchema = Yup.object().shape({
    employeeId: Yup.string()
        .required('Employee ID is required'),
    month: Yup.string()
        .required('Month is required')
        .matches(/^\d{4}-\d{2}$/, 'Month must be in the format YYYY-MM'), // e.g., "2023-07"
    year: Yup.number()
        .required('Year is required')
        .integer('Year must be an integer')
        .min(2000, 'Year must be at least 2000') // Adjust as needed
        .max(new Date().getFullYear(), 'Year cannot be in the future'),
    basicSalary: Yup.number()
        .required('Basic salary is required')
        .positive('Basic salary must be a positive number'),
    allowances: Yup.number()
        .required('Allowances are required')
        .min(0, 'Allowances cannot be negative'),
    deductions: Yup.number()
        .required('Deductions are required')
        .min(0, 'Deductions cannot be negative'),
    netSalary: Yup.number()
        .required('Net salary is required')
        .positive('Net salary must be a positive number'),
    paymentDate: Yup.date()
        .required('Payment date is required')
        .nullable(),
    status: Yup.string()
        .oneOf(['Paid', 'Pending', 'Failed'], 'Status must be either Paid, Pending, or Failed')
        .required('Status is required'),
});
const updatePayrollValidationSchema = Yup.object().shape({
    employeeId: Yup.string()
        .required('Employee ID is required'),
    month: Yup.string()
        .required('Month is required')
        .matches(/^\d{4}-\d{2}$/, 'Month must be in the format YYYY-MM'), // e.g., "2023-07"
    year: Yup.number()
        .required('Year is required')
        .integer('Year must be an integer')
        .min(2000, 'Year must be at least 2000') // Adjust as needed
        .max(new Date().getFullYear(), 'Year cannot be in the future'),
    basicSalary: Yup.number()
        .required('Basic salary is required')
        .positive('Basic salary must be a positive number'),
    allowances: Yup.number()
        .required('Allowances are required')
        .min(0, 'Allowances cannot be negative'),
    deductions: Yup.number()
        .required('Deductions are required')
        .min(0, 'Deductions cannot be negative'),
    netSalary: Yup.number()
        .required('Net salary is required')
        .positive('Net salary must be a positive number'),
    paymentDate: Yup.date()
        .required('Payment date is required')
        .nullable(),
    status: Yup.string()
        .oneOf(['Paid', 'Pending', 'Failed'], 'Status must be either Paid, Pending, or Failed')
        .required('Status is required'),
});
const PerformanceValidationSchema = Yup.object().shape({
    employeeId: Yup.string()
        .required('Employee ID is required'),
    reviewerId: Yup.string()
        .required('Reviewer ID is required'),
    reviewPeriod: Yup.string()
        .required('Review period is required')
        .matches(/^\d{4}-Q[1-4]$/, 'Review period must be in the format YYYY-QX'), // e.g., "2023-Q1"
    reviewDate: Yup.date()
        .required('Review date is required')
        .nullable(),
    score: Yup.number()
        .required('Score is required')
        .min(1, 'Score must be at least 1')
        .max(5, 'Score cannot exceed 5'),
    feedback: Yup.string()
        .required('Feedback is required'),
    title: Yup.string()
        .required('Goal title is required'),
    description: Yup.string()
        .required('Goal description is required'),
    targetDate: Yup.date()
        .required('Target date is required')
        .nullable(),
    achieved: Yup.boolean()
        .required('Achieved status is required'),
    overallScore: Yup.number()
        .required('Overall score is required')
        .min(0, 'Overall score cannot be negative'),
    comments: Yup.string()
        .optional(),
});
const updatePerformanceValidationSchema = Yup.object().shape({
    employeeId: Yup.string()
        .required('Employee ID is required'),
    reviewerId: Yup.string()
        .required('Reviewer ID is required'),
    reviewPeriod: Yup.string()
        .required('Review period is required')
        .matches(/^\d{4}-Q[1-4]$/, 'Review period must be in the format YYYY-QX'), // e.g., "2023-Q1"
    reviewDate: Yup.date()
        .required('Review date is required')
        .nullable(),
    score: Yup.number()
        .required('Score is required')
        .min(1, 'Score must be at least 1')
        .max(5, 'Score cannot exceed 5'),
    feedback: Yup.string()
        .required('Feedback is required'),
    title: Yup.string()
        .required('Goal title is required'),
    description: Yup.string()
        .required('Goal description is required'),
    targetDate: Yup.date()
        .required('Target date is required')
        .nullable(),
    achieved: Yup.boolean()
        .required('Achieved status is required'),
    overallScore: Yup.number()
        .required('Overall score is required')
        .min(0, 'Overall score cannot be negative'),
    comments: Yup.string()
        .optional(),
});
const recruitmentValidationSchema = Yup.object().shape({
    jobId: Yup.string().required("Job ID is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    requirements: Yup.array().of(Yup.string()).required("Requirements are required"),
    location: Yup.string().required("Location is required"),
    openingDate: Yup.date().required("Opening date is required"),
    closingDate: Yup.date().required("Closing date is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    resumeUrl: Yup.string().url("Invalid URL").required("Resume URL is required"),
    appliedPosition: Yup.string().required("Applied position is required"),
    applicationDate: Yup.date().required("Application date is required"),
    status: Yup.mixed<'Applied' | 'Interviewed' | 'Hired' | 'Rejected'>()
        .oneOf(['Applied', 'Interviewed', 'Hired', 'Rejected'], "Status must be one of the specified values")
        .required("Status is required"),
    interviewId: Yup.string().required("Interview ID is required"),
    candidateId: Yup.string().required("Candidate ID is required"),
    interviewDate: Yup.date().required("Interview date is required"),
    interviewers: Yup.array().of(Yup.string()).required("Interviewers are required"),
    feedback: Yup.string().required("Feedback is required"),
    score: Yup.number().required("Score is required").min(0, "Score must be at least 0").max(100, "Score must be at most 100")
});
const updateRecruitmentValidationSchema = Yup.object().shape({
    jobId: Yup.string().required("Job ID is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    requirements: Yup.array().of(Yup.string()).required("Requirements are required"),
    location: Yup.string().required("Location is required"),
    openingDate: Yup.date().required("Opening date is required"),
    closingDate: Yup.date().required("Closing date is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    resumeUrl: Yup.string().url("Invalid URL").required("Resume URL is required"),
    appliedPosition: Yup.string().required("Applied position is required"),
    applicationDate: Yup.date().required("Application date is required"),
    status: Yup.mixed<'Applied' | 'Interviewed' | 'Hired' | 'Rejected'>()
        .oneOf(['Applied', 'Interviewed', 'Hired', 'Rejected'], "Status must be one of the specified values")
        .required("Status is required"),
    interviewId: Yup.string().required("Interview ID is required"),
    candidateId: Yup.string().required("Candidate ID is required"),
    interviewDate: Yup.date().required("Interview date is required"),
    interviewers: Yup.array().of(Yup.string()).required("Interviewers are required"),
    feedback: Yup.string().required("Feedback is required"),
    score: Yup.number().required("Score is required").min(0, "Score must be at least 0").max(100, "Score must be at most 100")
});
const documentManagementValidationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    folders: Yup.array()
        .of(Yup.string().required('Folder ID is required'))
        .required('At least one folder ID is required'),
    name: Yup.string()
        .required('Name is required'),
    description: Yup.string()
        .required('Description is required'),
    fileURL: Yup.string()
        .url('File URL must be a valid URL')
        .required('File URL is required'),
    uploadedBy: Yup.string()
        .required('Uploaded by is required'),
    uploadDate: Yup.date()
        .required('Upload date is required')
        .nullable(),
    documentType: Yup.string()
        .oneOf(['Policy', 'Contract', 'Report', 'Form', 'Other'], 'Invalid document type')
        .required('Document type is required'),
    status: Yup.string()
        .oneOf(['Active', 'Archived', 'Deleted'], 'Invalid status')
        .required('Status is required'),
    documents: Yup.array()
        .of(Yup.string().required('Document ID is required'))
        .optional(),
});
const updateDocumentManagementValidationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    folders: Yup.array()
        .of(Yup.string().required('Folder ID is required'))
        .required('At least one folder ID is required'),
    name: Yup.string()
        .required('Name is required'),
    description: Yup.string()
        .required('Description is required'),
    fileURL: Yup.string()
        .url('File URL must be a valid URL')
        .required('File URL is required'),
    uploadedBy: Yup.string()
        .required('Uploaded by is required'),
    uploadDate: Yup.date()
        .required('Upload date is required')
        .nullable(),
    documentType: Yup.string()
        .oneOf(['Policy', 'Contract', 'Report', 'Form', 'Other'], 'Invalid document type')
        .required('Document type is required'),
    status: Yup.string()
        .oneOf(['Active', 'Archived', 'Deleted'], 'Invalid status')
        .required('Status is required'),
    documents: Yup.array()
        .of(Yup.string().required('Document ID is required'))
        .optional(),
});
export {
    registerAccountSchema,
    loginAccountSchema,
    updateAccountSchema,
    profileSchema,
    updateProfileSchema,
    employeeSchema,
    updateEmployeeSchema,
    departmentSchema,
    updateDepartmentSchema,
    JobValidationSchema,
    updateJobValidationSchema,
    EmployeeLeaveValidationSchema,
    updateEmployeeLeaveValidationSchema,
    AttendanceValidationSchema,
    updateAttendanceValidationSchema,
    PayrollValidationSchema,
    updatePayrollValidationSchema,
    PerformanceValidationSchema,
    updatePerformanceValidationSchema,
    recruitmentValidationSchema,
    updateRecruitmentValidationSchema,
    documentManagementValidationSchema,
    updateDocumentManagementValidationSchema,
}