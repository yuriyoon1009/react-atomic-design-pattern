import React from 'react';
import classNames from 'classnames/bind';

import styles from './Count.module.scss';

const cx = classNames.bind(styles);

type TCountProps = {};

function Count({}: TCountProps): JSX.Element {
  return <div className={cx('count-container')}>500</div>;
}

export default Count;
