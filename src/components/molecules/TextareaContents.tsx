import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import usePrevious from 'hooks/usePrevious';

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
  isBtn?: boolean;
  onChange?: (e: any) => void;
}

function TextareaContents({
  id,
  value,
  className,
  placeholder,
  maxLength,
  autoFocus,
  isBtn,
  onChange,
}: TTextareaContentsProps): JSX.Element {
  const [count, setCount] = useState<number>(maxLength);
  const [isActive, setActive] = useState<boolean>(false);
  const [initValue, setInitValue] = useState<string>(null);
  const prevValue: string = usePrevious<string>(value);

  useEffect(() => {
    if (!(prevValue || initValue) && value) {
      setInitValue(value);
    }
  }, [value, prevValue, initValue, setInitValue]);

  useEffect(() => {
    if (value !== prevValue) {
      const updateCount: number = maxLength - value?.length;

      setCount(updateCount);
    }

    if (initValue && value !== prevValue) {
      const updateActive: boolean = initValue !== value;

      setActive(updateActive);
    }
  }, [value, prevValue, maxLength, initValue, setActive, setCount]);

  return (
    <div className={cx('textarea-contents-container')}>
      <div className={cx('contents-container', { all: !isBtn })}>
        <Textarea
          id={id}
          value={value}
          className={cx(className)}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus={autoFocus}
          onChange={onChange}
        />
        <div className={cx('count-container')}>
          <Count count={count} />
        </div>
      </div>

      <div className={cx('btn-container', { none: !isBtn })}>
        <Button
          className={cx('btn', { active: isActive })}
          onClick={() => {
            console.log('save');
          }}
        >
          <span>Save</span>
        </Button>
      </div>
    </div>
  );
}

export default TextareaContents;
