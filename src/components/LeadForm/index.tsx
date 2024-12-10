import React from 'react'
import { Box, TextField, Button, MenuItem } from '@mui/material'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { SERVICE_OPTIONS, ServiceOption } from '../../data/services'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  service: Yup.string(),
  message: Yup.string()
})

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: ServiceOption | '';
  message: string;
}

export default function LeadForm() {
  const navigate = useNavigate()

  const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '454855a9-c239-4927-ad3f-f626087fc12a',
          subject: `New Quote Request - ${values.service || 'General Inquiry'}`,
          from_name: 'Gutter Goat Website',
          ...values
        })
      })

      const data = await response.json()

      if (data.success) {
        navigate('/thanks')
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#4DD8E6',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4DD8E6',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#4DD8E6',
              }
            }}
          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#4DD8E6',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4DD8E6',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#4DD8E6',
              }
            }}
          />

          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#4DD8E6',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4DD8E6',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#4DD8E6',
              }
            }}
          />

          <TextField
            select
            fullWidth
            id="service"
            name="service"
            label="Service Required"
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.service && Boolean(errors.service)}
            helperText={touched.service && errors.service}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#4DD8E6',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4DD8E6',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#4DD8E6',
              }
            }}
          >
            <MenuItem value="" disabled>
              Select a service
            </MenuItem>
            {SERVICE_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            id="message"
            name="message"
            label="Message (Optional)"
            multiline
            rows={4}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.message && Boolean(errors.message)}
            helperText={touched.message && errors.message}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#4DD8E6',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4DD8E6',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#4DD8E6',
              }
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{
              py: 1.5,
              bgcolor: '#4DD8E6',
              textTransform: 'none',
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: '#3CC7D5'
              }
            }}
          >
            Get Your Free Quote
          </Button>
        </Box>
      )}
    </Formik>
  )
} 