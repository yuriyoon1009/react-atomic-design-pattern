import React from 'react';

interface TTextareaProps {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({ id, value, placeholder, maxLength, autoFocus, className, readOnly, onChange }: TTextareaProps) {
  return (
    <textarea
      id={id}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      autoFocus={autoFocus}
      readOnly={readOnly}
      {...(className && { className })}
      {...(onChange && { onChange })}
    />
  );
}

export default Textarea;
