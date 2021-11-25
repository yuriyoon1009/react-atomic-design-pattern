import React, { useState } from 'react';
import classNames from 'classnames/bind';
// import loadable from '@loadable/component';
import { Helmet } from 'react-helmet';
import styles from './App.module.scss';

import Routes from './Routes';

const cx = classNames.bind(styles);

function App() {
  const [indexUrl] = useState('/');

  return (
    <div className={cx('app-container')}>
      <header className={cx('header-container')}>
        {
          <Helmet>
            <title>{'list'}</title>
            <meta name="title" content={'title'} />
            <meta name="subject" content={'subject'} />
          </Helmet>
        }
      </header>
      <main className={cx('view-container')}>{<Routes indexUrl={indexUrl} />}</main>
    </div>
  );
}

export default App;
