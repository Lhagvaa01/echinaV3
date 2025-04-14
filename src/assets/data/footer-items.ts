import { faHotel, faPlane, faGlobeAmericas, faCar } from '@fortawesome/free-solid-svg-icons'
import type { FooterLink, FooterTopLink } from '@/types/layout'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const footerLinks: FooterLink[] = [
  {
    title: 'Аялалын зөвлөгөө',
    items: [
      { name: '2019-04-20 Бээжин рүү хэрхэн хямд явах вэ?', image: 'https://echina.mn/assets/footer-01.jpg' },
      { name: '2019-04-20 Гуанжоу хотруу хамгийн хямд зардлаар хэрхэн аялах бэ?', image: 'https://echina.mn/assets/footer-01.jpg' },
     
    ]
  },
  {
    title: 'Хэрэглэгчийн сэтгэгдэл',
    items: [
      { name: 'Манай компани гадаад худалдааны чиглэлээр ажилладаг бөгөөд байнга гадагшаа явах ажил гарна. Тэгээд билет захиалах гэж асуудал болно шүү. Нэг өвөрмонгол юм уу, хүн гуйж, дээр нь хэдэн юан нэмж байж захиалдаг байлаа. Энэ жил Тайван руу явах гээд Echina.mn-ээр захиалж үзлээ. Монголын дотоодын банкаар төлбөрөө төлөөд шууд захиалсандаа сэтгэл хангалуун байна. Залуусдаа амжилт хүсье' },
      
    ]
  },
  {
    title: 'Холбоо барих',
    items: [
      { name: 'contact@echina.mn', icon: faEnvelope }, // Email icon
      { name: '+976 9090 1550 Монгол дугаар', icon: faPhone }, // Phone icon
      { name: '+976 9091 1550 Монгол дугаар', icon: faPhone }, // Phone icon
      { name: '+86 151 649 842 01 Хятад дугаар', icon: faPhone }, // WhatsApp icon (optional)
      { name: 'Улаанбаатар хот, Чингэлтэй дүүрэг 5-р хороо МН Товер оффис 15 давхарт 1510 тоот', icon: faMapMarkerAlt } // Location icon
    ]
  }
  
]

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
