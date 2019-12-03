import { random } from 'lodash';

export default function randomQuote() {
  const quotes = [
    "Epstein didn't kill himself.",
    "You wouldn't get it.",
    'Sometimes I watch you sleep.',
    'Not great, not terrible.',
    'Bush did 9/11.',
  ];
  const randomQuotesIndex = random(0, quotes.length - 1, false);
  const randomQuote = quotes[randomQuotesIndex];

  return randomQuote;
}
