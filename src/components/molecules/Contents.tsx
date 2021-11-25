import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Contents.module.scss';

import { Pre, Circle } from 'components/atoms';

const cx = classNames.bind(styles);

type TContentsProps = {
  label?: string;
  title?: string;
  subTitle?: string;
  isCrossOut?: boolean;
  crossOut?: string;
  highlight?: string;
  count?: number;
  text?: string;
};

function Contents({ label, title, crossOut, isCrossOut, highlight, count, text }: TContentsProps): JSX.Element {
  const [circleCount] = useState<number>(5);
  const [circleList] = useState<number[]>(Array.from({ length: circleCount }, (v, i) => i));

  return (
    <div className={cx('contents-container')}>
      <label className={cx('label')}>{label}</label>
      <h4 className={cx('title')}>{title}</h4>
      <div className={cx('text-container')}>
        <p className={cx('highlight')}>{highlight}</p>
        <p className={cx({ 'cross-out': isCrossOut })}>{crossOut}</p>
      </div>
      <div className={cx('circle-container', { none: count === 0 })}>
        {circleList.length > 0 &&
          circleList.map((data, key) => {
            const isFirstOrder: boolean = data === 0;
            const isChecked: boolean = data < count;

            return <Circle key={key} isFirstOrder={isFirstOrder} isChecked={isChecked} />;
          })}
      </div>
      <div className={cx('detail-container', { none: !text })}>
        <Pre>{text}</Pre>
      </div>
    </div>
  );
}

export default Contents;
