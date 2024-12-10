import { 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const faqs = [
  {
    question: 'How often should I clean my gutters?',
    answer: 'We recommend cleaning your gutters at least twice a year - in early spring and late fall. However, if you have many trees near your home, you might need more frequent cleaning.'
  },
  {
    question: 'What is included in your gutter cleaning service?',
    answer: 'Our comprehensive service includes removing all debris from gutters and downspouts, checking for proper water flow, inspecting for potential issues, and cleaning up all debris from the ground.'
  },
  {
    question: 'Do you provide any guarantees?',
    answer: 'Yes! We offer a 100% satisfaction guarantee on all our services. If you\'re not completely satisfied, we\'ll return to address any issues at no additional cost.'
  },
  {
    question: 'How long does a typical gutter cleaning take?',
    answer: 'A typical gutter cleaning takes 1-2 hours for an average-sized home. However, this can vary based on the size of your home, gutter condition, and accessibility.'
  }
]

export default function FAQ() {
  return (
    <section className="section-wrapper section-alt">
      <Container maxWidth="lg">
        <div className="section-header">
          <Typography 
            variant="h2" 
            component="h2"
            className="text-center mb-4"
            sx={{ color: 'primary.dark' }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography 
            variant="subtitle1" 
            className="text-center text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about our gutter cleaning services
          </Typography>
        </div>

        <Container maxWidth="md">
          {faqs.map((faq, index) => (
            <Accordion 
              key={index}
              elevation={0}
              sx={{
                mb: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '8px !important',
                '&:before': { display: 'none' },
                '&:not(:last-child)': { mb: 2 },
                overflow: 'hidden'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
                }}
              >
                <Typography 
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.dark'
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography 
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Container>
    </section>
  )
} 