import { ITextareaData } from 'interface/textarea';

export const TEXTAREA_LIST: ITextareaData[] = [
  {
    id: '1',
    value: '초기값이 있을 수 있습니다.',
    placeholder: '입력',
    maxLength: 500,
    autoFocus: false,
    isBtn: false,
    isReadOnly: false,
  },
  {
    id: '2',
    value: '입력중.. 또는 내용 변경 시',
    placeholder: '입력',
    maxLength: 500,
    autoFocus: true,
    isBtn: true,
    isReadOnly: false,
  },
  {
    id: '3',
    value: '주문 요청사항을 입력해주세요.',
    placeholder: '입력',
    maxLength: 500,
    autoFocus: false,
    isBtn: false,
    isReadOnly: true,
  },
];
