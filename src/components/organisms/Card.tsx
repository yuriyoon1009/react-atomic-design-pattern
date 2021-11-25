import classNames from 'classnames/bind';

import styles from './Card.module.scss';

import { Img } from 'components/atoms';
import { TextContents } from 'components/molecules';

const cx = classNames.bind(styles);

type TCardProps = {
  src: string;
  alt: string;
  label: string;
  title: string;
  subTitle: string;
  highlight: string;
  crossOut: string;
  isCrossOut: boolean;
  isMobile: boolean;
  count: number;
  text: string;
  className: string;
  imgOnLoad?: () => void;
  imgOnError?: () => void;
};

function Card({
  src,
  alt,
  label,
  title,
  subTitle,
  highlight,
  crossOut,
  isCrossOut,
  isMobile,
  count,
  text,
  className,
  imgOnLoad,
  imgOnError,
}: TCardProps): JSX.Element {
  return (
    <div className={cx('card-container', { mobile: isMobile })}>
      <div className={cx('img-container')}>
        <Img src={src} alt={alt} onLoad={imgOnLoad} onError={imgOnError} />
      </div>
      <div className={cx('contents-container')}>
        <TextContents
          label={label}
          title={title}
          subTitle={subTitle}
          highlight={highlight}
          crossOut={crossOut}
          isMobile={isMobile}
          isCrossOut={isCrossOut}
          count={count}
          text={text}
          className={className}
        />
      </div>
    </div>
  );
}

export default Card;
