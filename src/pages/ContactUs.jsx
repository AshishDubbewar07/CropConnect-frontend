import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-mui';
import { Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import  API from "../services/api"
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios';
import Navbar from '../Components/Layout/Navbar';

const useStyles = makeStyles({
  root: {
    '& .MuiTextField-root': {
      marginBottom: '16px',
    },
  },
});

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactUsForm = () => {
  const classes = useStyles();

  return (
   <>
   <Navbar/>
    <Container className='border m-52 p-5 rounded-xl' maxWidth="sm">
  
      <Typography variant="h4" className="text-center my-4">
        Contact Us
      </Typography>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          axios.post(`http://localhost:8080/api/messages`, values)
            .then(response => {
              toast.success('Message sent successfully!');
              resetForm();
            })
            .catch(error => {
              toast.error('Failed to send message');
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.root}>
            <Field
              component={TextField}
              name="name"
              type="text"
              label="Name"
              fullWidth
            />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              fullWidth
            />
            <Field
              component={TextField}
              name="message"
              type="text"
              label="Message"
              multiline
              rows={4}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              className="w-full"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </Container>
    </>
  );
};

export default ContactUsForm;