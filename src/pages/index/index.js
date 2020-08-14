import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'remax/wechat';
import './index.scss';
import {Button} from 'anna-remax-ui'
let timeChange;
export default () => {
  const [time, setTime] = React.useState(100);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnContent, setBtnContent] = useState('开始');

  useEffect(() => {
    clearInterval(timeChange);
  }, []);

  useEffect(() => {
    if (time > 0 && time < 60) {
      setBtnContent(`${time}s后结束`);
    } else {
      setBtnDisabled(false);
      clearInterval(timeChange);
      setTime(60);
    }
  }, [time]);
  const getPhoneCaptcha = () => {
    // 注意，不要使用 setTime(t-1) ： 闭包问题会导致time一直为59
    timeChange = setInterval(() => setTime(t => --t), 1000);
    setBtnDisabled(true);
  };

  return (
    <View className="three_home">
      <View className="three_home_time">
        {time}
      </View>
      <Button size="large" shape="square" block look="orange"  disabled={btnDisabled} onClick={getPhoneCaptcha}>
        {btnContent}
      </Button>
    </View>
  );
};
