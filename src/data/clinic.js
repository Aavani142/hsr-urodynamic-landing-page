// Single source of truth for clinic details used across the page.
// All values are taken from the official website: https://www.hsrurologyclinic.com/

export const CLINIC = {
  name: 'HSR Urology Clinic',
  phoneDisplay: '+91 90542 55425',
  phoneHref: 'tel:+919054255425',
  whatsappNumber: '919054255425',
  email: 'dr.caranj@hsrurologyclinic.com',
  website: 'https://www.hsrurologyclinic.com/',
  addressShort: 'Sector 6, HSR Layout, Bengaluru',
  addressLines: [
    'Ground Floor, L-42, 5th Main, 15th Cross Road,',
    'Sector 6, HSR Layout, Bengaluru,',
    'Karnataka 560102',
  ],
  // Clinic pin from the clinic's Google Maps listing (12.9140, 77.6287)
  mapsLink: 'https://www.google.com/maps?cid=17534495379022461134',
  mapsEmbed: 'https://maps.google.com/maps?q=HSR%20Urology%20Clinic%4012.9140022,77.6287391&ll=12.9140022,77.6287391&z=17&output=embed',
}

export const whatsappLink = (text = 'Hello HSR Urology Clinic, I would like to know more about the Urodynamic Study.') =>
  `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(text)}`

// Profiles linked from the official website.
export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/hsrurologyclinic/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61584104936667' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Urodynamic Study', href: '#tests' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]
