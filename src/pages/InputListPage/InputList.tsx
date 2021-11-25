import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InputList.module.scss';

import { TEXTAREA_LIST } from 'config/textarea';
import { ITextareaData } from 'interface/textarea';

import { TextareaContents } from 'components/molecules';

const cx = classNames.bind(styles);

const InputList = () => {
  const [textareaList, setTextareaList] = useState<ITextareaData[]>(TEXTAREA_LIST);

  const setSelectedValue = ({ value, id }) => {
    const updateTextareaList = textareaList.map((data, key) => {
      if (data?.id !== id) return data;

      return Object.assign(data, { value });
    });

    setTextareaList(updateTextareaList);
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setSelectedValue(e.target);
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
              onChange={onChangeTextarea}
              isBtn={data?.isBtn}
            />
          );
        })}
    </div>
  );
};

export default InputList;
