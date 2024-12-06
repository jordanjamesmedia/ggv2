import { Box, TextField, Button, MenuItem } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  message: Yup.string().required('Message is required'),
  service: Yup.string()
})

const serviceOptions = [
  'Gutter Cleaning',
  'Gutter Repairs',
  'Gutter Guard Installation',
  'Commercial Services',
  'Roof Valley Cleaning',
  'Maintenance Program',
  'Other'
]

export default function LeadForm() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
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
  })

  return (
    <Box 
      component="form" 
      onSubmit={formik.handleSubmit}
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
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        disabled={formik.isSubmitting}
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
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        disabled={formik.isSubmitting}
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
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        disabled={formik.isSubmitting}
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
        value={formik.values.service}
        onChange={formik.handleChange}
        error={formik.touched.service && Boolean(formik.errors.service)}
        helperText={formik.touched.service && formik.errors.service}
        disabled={formik.isSubmitting}
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
        {serviceOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        id="message"
        name="message"
        label="Message"
        multiline
        rows={4}
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        disabled={formik.isSubmitting}
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
        disabled={formik.isSubmitting}
        sx={{
          mt: 2,
          bgcolor: '#4DD8E6',
          color: 'white',
          py: 1.5,
          fontSize: '1.1rem',
          textTransform: 'none',
          '&:hover': {
            bgcolor: '#3CC7D5'
          }
        }}
      >
        {formik.isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </Box>
  )
} 