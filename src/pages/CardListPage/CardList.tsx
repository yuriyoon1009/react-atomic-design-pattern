import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CardList.module.scss';

import { CARD_LIST } from 'config/card';

import { Card } from 'components/organisms';

import { ICardData } from 'interface/card';

const cx = classNames.bind(styles);

const CardList = () => {
  const [cardList] = useState<ICardData[]>(CARD_LIST);

  return (
    <div className={cx('card-list-container')}>
      {cardList.length > 0 &&
        cardList.map((data, key) => {
          return (
            <Card
              key={key}
              src={data?.src}
              alt={data?.label}
              label={data?.label}
              title={data?.title}
              highlight={data?.highlight}
              crossOut={data?.crossOut}
              isCrossOut={data?.isCrossOut}
              count={data?.cardCount}
              text={data?.detail}
              isMobile={data?.isMobile}
            />
          );
        })}
    </div>
  );
};

export default CardList;
