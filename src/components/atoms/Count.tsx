import React from 'react';
import classNames from 'classnames/bind';

import styles from './Count.module.scss';

const cx = classNames.bind(styles);

type TCountProps = {
  count?: number;
};

function Count({ count }: TCountProps): JSX.Element {
  return <div className={cx('count')}>{count}</div>;
}

export default Count;
