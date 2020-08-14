/* eslint-disable */

import React from 'react';
import Iconfont_wechat from './wechat/wechat';

const IconFont = (props) => {
  const { name, size, color } = props;

  // FIXME: RemaxJs doesn't support pxTransform()
  return <Iconfont_wechat name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
