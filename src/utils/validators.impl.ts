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
export {
    registerAccountSchema,
    loginAccountSchema,
    updateAccountSchema,
    profileSchema,
    updateProfileSchema
}