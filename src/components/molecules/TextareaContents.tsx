import classNames from 'classnames/bind';

import styles from './TextareaContents.module.scss';

import { Textarea, Button, Count } from 'components/atoms';

const cx = classNames.bind(styles);

interface TTextareaContentsProps {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
  onChange?: (e: any) => void;
}

function TextareaContents({
  id,
  value,
  className,
  placeholder,
  maxLength,
  autoFocus,
  onChange,
}: TTextareaContentsProps): JSX.Element {
  return (
    <div className={cx('textarea-contents-container')}>
      <Textarea
        id={id}
        value={value}
        className={className}
        placeholder={placeholder}
        maxLength={maxLength}
        autoFocus={autoFocus}
        onChange={onChange}
      />
      {/* <Button>abc</Button> */}
      {/* <Count /> */}
    </div>
  );
}

export default TextareaContents;
