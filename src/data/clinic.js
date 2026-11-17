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
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=HSR+Urology+Clinic+L-42+5th+Main+15th+Cross+Road+Sector+6+HSR+Layout+Bengaluru+560102',
  mapsEmbed:
    'https://maps.google.com/maps?q=L-42%2C%205th%20Main%2C%2015th%20Cross%20Road%2C%20Sector%206%2C%20HSR%20Layout%2C%20Bengaluru%20560102&z=16&output=embed',
}

export const whatsappLink = (text = 'Hello HSR Urology Clinic, I would like to know more about the Urodynamic Study.') =>
  `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(text)}`

// Profiles linked from the official website. `null` = placeholder until a verified URL is provided.
export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/hsrurologyclinic/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61584104936667' },
  { label: 'LinkedIn', href: null },
  { label: 'YouTube', href: null },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Urodynamic Study', href: '#tests' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]
