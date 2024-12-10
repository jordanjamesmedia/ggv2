import gc2 from '../assets/images/gc2.jpg'
import gc6 from '../assets/images/gc6.jpg'
import gc9 from '../assets/images/gc9.jpg'
import gc13 from '../assets/images/gc13.jpg'

export const SERVICE_OPTIONS = [
  'Gutter Cleaning',
  'Gutter Maintenance',
  'Gutter Guard Installation'
] as const

export const SERVICES = [
  {
    id: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    description: 'Professional and thorough cleaning of your gutters to remove leaves, debris, and blockages. We ensure proper water flow and prevent potential water damage to your home.',
    image: gc13,
    features: [
      'Complete debris removal',
      'Downspout cleaning',
      'Gutter flushing',
      'System inspection',
      'Before & after photos',
      'Satisfaction guarantee'
    ]
  },
  {
    id: 'gutter-maintenance',
    title: 'Gutter Maintenance',
    description: 'Regular inspection and maintenance service to keep your gutters in optimal condition. We identify and address potential issues before they become major problems.',
    image: gc2,
    features: [
      'Regular inspections',
      'Preventive cleaning',
      'Flow testing',
      'Condition reporting',
      'Performance optimization',
      'Seasonal care'
    ]
  },
  {
    id: 'gutter-guard-installation',
    title: 'Gutter Guard Installation',
    description: 'High-quality gutter guard installation to prevent debris buildup while maintaining proper water flow. Reduce cleaning frequency and protect your gutters year-round.',
    image: gc9,
    features: [
      'Premium materials',
      'Professional installation',
      'Debris protection',
      'Reduced maintenance',
      'UV resistant',
      'Long-term warranty'
    ]
  }
] as const

export type ServiceOption = typeof SERVICE_OPTIONS[number] 