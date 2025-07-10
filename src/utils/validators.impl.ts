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
export {
    registerAccountSchema,
    loginAccountSchema,
    updateAccountSchema,
}