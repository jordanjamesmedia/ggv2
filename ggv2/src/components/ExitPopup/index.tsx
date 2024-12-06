import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  TextField,
  Box
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

interface ExitPopupProps {
  open: boolean
  onClose: () => void
}

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup.string().required('Phone number is required')
})

export default function ExitPopup({ open, onClose }: ExitPopupProps) {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
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
            subject: 'Exit Popup - Discount Request',
            from_name: 'Gutter Goat Website',
            ...values
          })
        })

        const data = await response.json()

        if (data.success) {
          onClose()
          navigate('/quote')
        }
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        setSubmitting(false)
      }
    }
  })

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
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
              fontSize: '1.1rem'
            }}
          >
            Before you go, would you like to receive a special discount on our gutter cleaning services?
            Sign up now and get 10% off your first service!
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{ mb: 2 }}
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
              sx={{ mb: 2 }}
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
              sx={{ mb: 3 }}
            />
            <DialogActions sx={{ px: 0 }}>
              <Button 
                onClick={onClose} 
                color="inherit"
                sx={{ 
                  color: '#5D6D7E',
                  '&:hover': {
                    bgcolor: 'rgba(93, 109, 126, 0.1)'
                  }
                }}
              >
                No, thanks
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={formik.isSubmitting}
                sx={{
                  bgcolor: '#4DD8E6',
                  color: 'white',
                  py: 1.5,
                  px: 3,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#3CC7D5'
                  }
                }}
              >
                Get My Discount
              </Button>
            </DialogActions>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  )
} 