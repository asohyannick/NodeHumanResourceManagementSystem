import * as Yup from 'yup';
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
export {
    registerAccountSchema,
    loginAccountSchema,
    updateAccountSchema,
    profileSchema,
    updateProfileSchema,
    employeeSchema,
    updateEmployeeSchema
}