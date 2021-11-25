import React from 'react';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

import { Img } from 'components/atoms';
import { Contents } from 'components/molecules';

const cx = classNames.bind(styles);

type TCardProps = {
  src: string;
  alt: string;
  label: string;
  title: string;
  highlight: string;
  crossOut: string;
  isCrossOut: boolean;
  isMobile: boolean;
  count: number;
  text: string;
  imgOnLoad?: () => void;
  imgOnError?: () => void;
};

function Card({
  src,
  alt,
  label,
  title,
  highlight,
  crossOut,
  isCrossOut,
  isMobile,
  count,
  text,
  imgOnLoad,
  imgOnError,
}: TCardProps): JSX.Element {
  return (
    <div className={cx('card-container', { mobile: isMobile })}>
      <div className={cx('img-container')}>
        <Img src={src} alt={alt} onLoad={imgOnLoad} onError={imgOnError} />
      </div>
      <div className={cx('contents-container')}>
        <Contents
          label={label}
          title={title}
          highlight={highlight}
          crossOut={crossOut}
          isCrossOut={isCrossOut}
          count={count}
          text={text}
        />
      </div>
    </div>
  );
}

export default Card;
