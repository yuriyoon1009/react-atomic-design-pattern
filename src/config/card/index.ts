import { ICardData } from 'interface/card';

const CARD_IMG = require('images/card/idus.jpg')?.default;

export const CARD_LIST: ICardData[] = [
  {
    label: 'Card_Label',
    title: 'Card Title',
    subTitle: '',
    highlight: 'Highlight',
    src: CARD_IMG,
    crossOut: 'cross out',
    isCrossOut: true,
    isMobile: false,
    cardCount: 3,
    detail: 'idusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBest',
    className: 'pre',
  },
  {
    label: 'Card_Label',
    title: 'Card Title',
    subTitle: '',
    highlight: 'Highlight',
    src: CARD_IMG,
    crossOut: 'cross out',
    isCrossOut: true,
    isMobile: false,
    cardCount: 3,
    detail: '',
    className: 'pre',
  },
  {
    label: 'Card_Label',
    title: 'Card Title',
    subTitle: '',
    highlight: 'Highlight',
    src: CARD_IMG,
    crossOut: 'cross out',
    isCrossOut: true,
    isMobile: false,
    cardCount: 0,
    detail: '',
    className: 'pre',
  },
  {
    label: 'Card_Label',
    title: 'idusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBest',
    subTitle: 'John Doe',
    highlight: '',
    src: CARD_IMG,
    crossOut: '',
    isCrossOut: false,
    isMobile: true,
    cardCount: 3,
    detail:
      'idusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBestidusIsTheBest',
    className: 'pre',
  },
];
