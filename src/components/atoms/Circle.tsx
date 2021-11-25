import React from 'react';
import classNames from 'classnames/bind';

import styles from './Circle.module.scss';

const cx = classNames.bind(styles);

interface TCircleProps {
  isFirstOrder?: boolean;
  isChecked?: boolean;
}

function Circle({ isFirstOrder, isChecked }: TCircleProps) {
  return <div className={cx('circle', { 'first-order': isFirstOrder, 'is-checked': isChecked })}></div>;
}

export default Circle;
