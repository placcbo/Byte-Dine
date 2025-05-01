import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

// Add this to your constants/data.js
export const awards = [
  {
    imgUrl: 'https://img.icons8.com/color/96/000000/trophy.png',
    title: 'Best Digital Dining Experience',
    subtitle: 'Awarded for innovative tech-driven service in 2024.',
  },
  {
    imgUrl: 'https://img.icons8.com/color/96/000000/medal.png',
    title: 'Customer Choice Award',
    subtitle: 'Voted top-rated by diners across Nairobi.',
  },
  {
    imgUrl: 'https://img.icons8.com/color/96/000000/first-place-ribbon.png',
    title: 'Best New Restaurant',
    subtitle: 'Recognized by Nairobi Culinary Association, 2023.',
  },
  {
    imgUrl: 'https://img.icons8.com/color/96/000000/star.png',
    title: 'Excellence in Service',
    subtitle: 'Outstanding hospitality and service quality.',
  },
];


export default { wines, cocktails, awards };
