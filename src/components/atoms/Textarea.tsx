import React from 'react';

interface TTextareaProps {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
  onChange?: () => void;
}

function Textarea({ id, value, placeholder, maxLength, autoFocus, className, onChange }: TTextareaProps) {
  return (
    <textarea
      id={id}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      autoFocus={autoFocus}
      {...(className && { className })}
      {...(onChange && { onChange })}
    />
  );
}

export default Textarea;
