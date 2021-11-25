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
        cardList.map(
          (
            {
              src,
              label,
              title,
              subTitle,
              highlight,
              isCrossOut,
              crossOut,
              cardCount,
              detail,
              isMobile,
              className,
            }: ICardData,
            key: number,
          ): JSX.Element => {
            return (
              <Card
                key={key}
                src={src}
                alt={label}
                label={label}
                title={title}
                subTitle={subTitle}
                highlight={highlight}
                crossOut={crossOut}
                isCrossOut={isCrossOut}
                count={cardCount}
                text={detail}
                isMobile={isMobile}
                className={className}
              />
            );
          },
        )}
    </div>
  );
};

export default CardList;
