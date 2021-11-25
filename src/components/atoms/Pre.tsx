import React, { forwardRef, Ref } from 'react';

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
