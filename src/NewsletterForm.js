import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const NewsletterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    surname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

export default () => { 

    const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          surname: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        validationSchema: NewsletterSchema,
      });

    

    return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        />
        {formik.errors.name ? <span>{formik.errors.name}</span> : <></>}

        <label htmlFor="surname">Surname</label>
         <input
        id="surname"
        name="surname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.surname}
        />
         {formik.errors.surname ? <span>{formik.errors.surname}</span> : <></>}
        <label htmlFor="email">Email Address</label>
        <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        />
         {formik.errors.email ? <span>{formik.errors.email}</span> : <></>}
        <button type="submit" disabled={!(formik.isValid)}>Submit</button>
    </form>
    );


}