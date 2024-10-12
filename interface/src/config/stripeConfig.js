import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51Q6y2QRqpypTkKXDAcpkbQiqP6FXFe0ce6usSRQE0emNQSYkzrevmgzesLqbD5QQCF0cCvFOs6LmoDj6yUATnCjM00O853Tx9i',
);

console.log(stripePromise);

export default stripePromise;
