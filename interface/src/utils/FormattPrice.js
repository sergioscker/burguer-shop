export function formatPrice(value) {
  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'EUR',
  }).format(value / 100);
}
