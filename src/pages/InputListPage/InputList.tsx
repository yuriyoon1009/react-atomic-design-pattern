import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InputList.module.scss';

import { TextareaContents } from 'components/molecules';

const cx = classNames.bind(styles);

const InputList = () => {
  const [textareaList, setTextareaList] = useState([
    {
      id: '1',
      value: '초기값이 있을 수 있습니다.',
      placeholder: '입력',
      maxLength: 500,
      autoFocus: false,
      onChange: (e) => {
        setSelectedValue(e.target);
      },
    },
  ]);

  const setSelectedValue = ({ value, id }) => {
    let updateTextareaList = textareaList.map((data, key) => {
      if (data?.id !== id) return data;

      return Object.assign(data, { value });
    });

    setTextareaList(updateTextareaList);
  };

  return (
    <div className={cx('input-list-container')}>
      {textareaList.length > 0 &&
        textareaList.map((data, key) => {
          return (
            <TextareaContents
              key={key}
              id={data?.id}
              value={data?.value}
              placeholder={data?.placeholder}
              maxLength={data?.maxLength}
              autoFocus={data?.autoFocus}
              onChange={data?.onChange}
              className={cx('textarea')}
            />
          );
        })}
    </div>
  );
};

export default InputList;
