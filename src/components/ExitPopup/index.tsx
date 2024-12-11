import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Box,
  TextField,
  Button,
  MenuItem
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { SERVICE_OPTIONS, ServiceOption } from '../../data/services'

interface ExitPopupProps {
  open: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: ServiceOption | '';
}

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  service: yup.string()
})

export default function ExitPopup({ open, onClose }: ExitPopupProps) {
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
          subject: 'Exit Popup - Discount Request',
          from_name: 'Gutter Goat Website',
          ...values
        })
      })

      const data = await response.json()

      if (data.success) {
        onClose()
        navigate('/thanks')
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .MuiDialog-paper': {
          margin: { xs: 2, sm: 4 },
          width: '100%',
          maxWidth: 'sm',
          borderRadius: 2
        }
      }}
    >
      <DialogTitle>
        <Typography variant="h5" component="div" sx={{ pr: 4 }}>
          Wait! Don't Miss Out
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 2 }}>
          <Typography 
            sx={{ 
              mb: 3,
              color: '#5D6D7E',
              fontSize: '1.1rem',
              textAlign: 'center'
            }}
          >
            Sign up now and get 10% off your first service!
          </Typography>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              service: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Box 
                component="form" 
                onSubmit={handleSubmit}
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
                  sx={{ mb: 2 }}
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
                  sx={{ mb: 2 }}
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
                  sx={{ mb: 2 }}
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
                  sx={{ mb: 3 }}
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
                <DialogActions sx={{ px: 0 }}>
                  <Button 
                    onClick={onClose} 
                    color="inherit"
                    sx={{ 
                      color: '#5D6D7E',
                      textTransform: 'none'
                    }}
                  >
                    No thanks
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      bgcolor: '#4DD8E6',
                      color: 'white',
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: '#3CC7D5'
                      }
                    }}
                  >
                    Get My Discount
                  </Button>
                </DialogActions>
              </Box>
            )}
          </Formik>
        </Box>
      </DialogContent>
    </Dialog>
  )
} 