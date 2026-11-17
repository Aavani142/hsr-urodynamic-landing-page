import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { FAQS } from './src/data/faqs.js'

/**
 * Injects FAQPage structured data (JSON-LD) into index.html from the same data the FAQ section renders,
 * so Google can show FAQ rich results and the markup never drifts from the visible content.
 */
function faqJsonLd() {
  return {
    name: 'faq-json-ld',
    transformIndexHtml() {
      const data = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }
      return [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(data),
          injectTo: 'head',
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), faqJsonLd()],
})
