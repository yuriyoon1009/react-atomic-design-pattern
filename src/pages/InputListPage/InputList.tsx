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
        textareaList.map(
          (
            { id, value, placeholder, maxLength, autoFocus, isBtn, isReadOnly }: ITextareaData,
            key: number,
          ): JSX.Element => {
            return (
              <TextareaContents
                key={key}
                id={id}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength}
                autoFocus={autoFocus}
                onChange={onChangeTextarea}
                isBtn={isBtn}
                isReadOnly={isReadOnly}
              />
            );
          },
        )}
    </div>
  );
};

export default InputList;
