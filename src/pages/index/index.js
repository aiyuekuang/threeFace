import React, {useEffect, useState} from 'react';
import {View,Text} from 'remax/wechat';
import './index.scss';
import {Button} from 'anna-remax-ui'
import IconFont from '../../components/iconfont';
import {wordDemos} from "../data/word";

let timeChange;
export default () => {
    const [time, setTime] = React.useState(100);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [btnContent, setBtnContent] = useState('开始');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        clearInterval(timeChange);
    }, []);

    useEffect(() => {
        if (time > 0 && time < 60) {
            setBtnContent(`${time}s后结束`);
        } else {
            setBtnDisabled(false);
            setBtnContent("开始")
            clearInterval(timeChange);
            setTime(60);
        }
    }, [time]);

    const getPhoneCaptcha = () => {
        // 注意，不要使用 setTime(t-1) ： 闭包问题会导致time一直为59
        timeChange = setInterval(() => setTime(t => --t), 1000);
        setBtnDisabled(true);
    };

    let nextFun = (isNext = true) => {
        setIndex(org => {
            if (isNext) {
                return org + 1
            } else {
                return org - 1
            }
        })
    }


    return (
        <View className="three_home">
            <View className="three_home_time">
                <View className="three_home_time_l" onClick={() => {
                    nextFun(false)
                }}>
                    <IconFont name="direction-left" color={"#fff"} size={30}/>
                </View>
                <View className="three_home_time_m">
                    <View>
                        {wordDemos[index]?wordDemos[index].value:null}
                    </View>
                    <View className="three_home_time_m_bottom">
                        {wordDemos[index]?wordDemos[index].label:null}

                    </View>
                </View>
                <View className="three_home_time_r" onClick={() => {
                    nextFun()
                }}>
                    <IconFont name="direction-right" color={"#fff"} size={30}/>
                </View>
            </View>

            <Button size="large" shape="square" block look="orange" disabled={btnDisabled} onClick={getPhoneCaptcha}>
                {btnContent}
            </Button>
        </View>
    );
};
