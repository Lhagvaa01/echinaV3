import { faHotel, faPlane, faGlobeAmericas, faCar } from '@fortawesome/free-solid-svg-icons'
import type { FooterLink, FooterTopLink } from '@/types/layout'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const footerLinks: FooterLink[] = [
  {
  title: 'Аяллын зөвлөгөө',
  items: [
    { 
      name: '2024-07-05 Олон улсын нислэгийн хямдралтай үеийг хэрхэн оновчтой ашиглах вэ?', 
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' // хямдралтай нислэг, онгоцны буудал
    },
    { 
      name: '2024-07-01 Аялалд гарахаасаа өмнө заавал мэдэх 5 аюулгүй байдлын зөвлөгөө', 
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=600&q=80' // аюулгүй байдал, аяллын чемодан
    },
    { 
      name: '2024-06-25 Шинэ орон руу аялахдаа юуг бэлдэх вэ?', 
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80' // бэлэн байдал, аяллын checklist
    },
  ]
},

  {
    title: 'Хэрэглэгчийн сэтгэгдэл',
    items: [
      { 
        name: `Airkacc.mn-ээр дамжуулж Бээжин рүү шууд нислэгийн тийзээ захиалсан. Төлбөр, баталгаажуулалт бүгд маш хурдан шийдэгдсэн. Итгэлтэй, найдвартай үйлчилгээ!` 
      },
      { 
        name: `Маш сайн үйлчилгээтэй, олон улсруу аялах бүх зөвлөгөөг эндээс авч чадлаа. Дахин захиална аа!` 
      },
    ]
  },
  {
    title: 'Холбоо барих',
    items: [
      { name: 'contact@airkacc.mn', icon: faEnvelope }, // Email icon
      { name: '+976 99889988', icon: faPhone },
      { name: '+86 151 99889988', icon: faPhone },
      { name: 'Улаанбаатар хот', icon: faMapMarkerAlt }
    ]
  }
];


const topLinks: FooterTopLink[] = [
  { name: 'Flights', link: { name: '' } },
  { name: 'Hotels', link: { name: '' } },
  { name: 'Tour', link: { name: '' } },
  { name: 'Cabs', link: { name: '' } },
  { name: 'About', link: { name: '' } },
  { name: 'Contact us', link: { name: '' } },
  { name: 'Blogs', link: { name: '' } },
  { name: 'Services', link: { name: '' } },
  { name: 'Detail page', link: { name: '' } },
  { name: 'Policy', link: { name: '' } },
  { name: 'Testimonials', link: { name: '' } },
  { name: 'Newsletters', link: { name: '' } },
  { name: 'Podcasts' },
  { name: 'Protests' },
  { name: 'NewsCyber' },
  { name: 'Education' },
  { name: 'Sports' },
  { name: 'Tech and Auto' },
  { name: 'Opinion' },
  { name: 'Share Market' }
]

export { footerLinks, topLinks }
