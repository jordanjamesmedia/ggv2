import React from 'react'
import { Box, Container, Typography, Paper } from '@mui/material'

export default function PrivacyPage() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 700, mb: 4 }}>
            Privacy Policy
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 600, mb: 2, mt: 4 }}>
            1. Introduction
          </Typography>
          <Typography paragraph>
            At Gutter Goat, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website or use our services.
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 600, mb: 2, mt: 4 }}>
            2. Information We Collect
          </Typography>
          <Typography paragraph>
            We collect information that you voluntarily provide to us when you:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
            <li>Fill out our contact or quote request forms</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us via email or phone</li>
          </Typography>
          <Typography paragraph>
            We also automatically collect certain information when you visit our website, including:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
            <li>Usage data (pages visited, time spent on pages)</li>
            <li>Device information (browser type, operating system)</li>
            <li>IP address and location data</li>
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 600, mb: 2, mt: 4 }}>
            3. How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use the collected information for:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
            <li>Providing and improving our services</li>
            <li>Communicating with you about your requests</li>
            <li>Sending you marketing communications (with your consent)</li>
            <li>Analyzing website usage to improve user experience</li>
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 600, mb: 2, mt: 4 }}>
            4. Cookies and Tracking Technologies
          </Typography>
          <Typography paragraph>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </Typography>
          <Typography paragraph>
            We use Google Analytics to analyze the use of our website. Google Analytics uses cookies to collect 
            information about your use of our website. You can learn more about how Google uses your data at: 
            https://policies.google.com/privacy/partners
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 600, mb: 2, mt: 4 }}>
            5. Your Rights
          </Typography>
          <Typography paragraph>
            You have the right to:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to our use of your data</li>
            <li>Withdraw consent at any time</li>
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 600, mb: 2, mt: 4 }}>
            6. Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <Typography paragraph>
            Email: info@guttergoat.com.au<br />
            Phone: 0497 347 752
          </Typography>

          <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
} 