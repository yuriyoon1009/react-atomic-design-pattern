import React, { forwardRef, Ref } from 'react';
import classNames from 'classnames/bind';

import styles from './Pre.module.scss';

// eslint-disable-next-line
const cx = classNames.bind(styles);

type TPre = {
  children?: React.ReactNode;
  className?: string;
  dangerouslySetInnerHTML?: any;
};

function Pre({ children, className, dangerouslySetInnerHTML }: TPre, ref?: Ref<HTMLPreElement>): JSX.Element {
  return (
    <pre
      {...(className && { className })}
      {...(ref && { ref })}
      {...(dangerouslySetInnerHTML && { dangerouslySetInnerHTML })}
    >
      {children}
    </pre>
  );
}

export default forwardRef(Pre);
