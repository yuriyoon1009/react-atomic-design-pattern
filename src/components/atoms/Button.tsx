import React from 'react';

interface TButtonProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

function Button({ children, className, title, onClick }: TButtonProps): JSX.Element {
  return (
    <button {...(className && { className })} {...(title && { title })} {...(onClick && { onClick })}>
      {children}
    </button>
  );
}

export default Button;
