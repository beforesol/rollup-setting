import React from 'react';
import { ReactComponent as ArrowButtonOption } from '@assets/img/svg/ArrowButtonOption.svg';
import classNames from 'classnames/bind';
import style from './index.scss';

const cx = classNames.bind(style);

interface IOwnProps {
};

const DemoComponent:React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('demo')}>
      데모 컴포넌트
      <ArrowButtonOption />
    </div>
  )
}

export default DemoComponent;