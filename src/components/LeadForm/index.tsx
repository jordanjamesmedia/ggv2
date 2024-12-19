import React from 'react'
import { Box, TextField, Button, MenuItem } from '@mui/material'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { SERVICE_OPTIONS, ServiceOption } from '../../data/services'
import AddressAutocomplete from '../AddressAutocomplete'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  service: Yup.string(),
  message: Yup.string()
})

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: ServiceOption | '';
  message: string;
}

export default function LeadForm() {
  const navigate = useNavigate()

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '454855a9-c239-4927-ad3f-f626087fc12a',
          subject: `New Quote Request - ${values.service || 'General Inquiry'}`,
          from_name: 'Gutter Goat Website',
          to_email: ['info@guttergoat.com.au', 'tyrell@guttergoat.com.au'],
          botcheck: '',
          name: values.name,
          email: values.email,
          phone: values.phone,
          address: values.address,
          service: values.service,
          message: values.message || 'No additional message provided.'
        })
      })

      const data = await response.json()

      if (data.success) {
        // Track conversion if Google Analytics is available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submission', {
            'event_category': 'Lead',
            'event_label': values.service || 'General Inquiry'
          });
        }
        navigate('/thanks')
      } else {
        console.error('Form submission failed:', data)
        alert('Form submission failed. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('An error occurred. Please try again or contact us directly at info@guttergoat.com.au')
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
        address: '',
        message: '',
        service: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Box 
          component={Form} 
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

          <AddressAutocomplete
            fullWidth
            id="address"
            name="address"
            label="Address"
            value={values.address}
            onChange={(address) => {
              handleChange({
                target: {
                  name: 'address',
                  value: address
                }
              } as React.ChangeEvent<HTMLInputElement>);
            }}
            onBlur={handleBlur}
            error={touched.address && Boolean(errors.address)}
            helperText={touched.address && errors.address}
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
              },
              '&.Mui-disabled': {
                bgcolor: '#4DD8E6',
                opacity: 0.7,
                color: 'white'
              }
            }}
          >
            {isSubmitting ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  component="span"
                  sx={{
                    width: 16,
                    height: 16,
                    border: '2px solid',
                    borderColor: 'currentcolor',
                    borderRightColor: 'transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    '@keyframes spin': {
                      '0%': {
                        transform: 'rotate(0deg)',
                      },
                      '100%': {
                        transform: 'rotate(360deg)',
                      },
                    },
                  }}
                />
                Submitting...
              </Box>
            ) : (
              'Get Your Free Quote'
            )}
          </Button>
        </Box>
      )}
    </Formik>
  )
} 