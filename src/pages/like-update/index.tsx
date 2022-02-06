import { useState, useEffect } from 'react'
import './index.scss'

export default function LikeUpdate() {
  const [updateVal, setUpdateVal] = useState(5);

  // 获取随机毫秒数
  const getRandomTime = () => {
    return (Math.random() * 10) * 1000;
  }

  // 每隔随机秒数，添加百分比
  useEffect(() => {
    if (updateVal < 99) {
      setTimeout(() => {
        console.log('updateVal', updateVal);
        setUpdateVal(updateVal + 1);
      }, getRandomTime());
    }
  }, [updateVal]);

  return (
    <div className="lu--bg">
      <div className="lu--loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="lu--text">
        <span className="lu--text__one">正在配置 Windows 10 更新</span>
        <span className="lu--text__two">{updateVal}% 已完成</span>
        <span className="lu--text__three">请不要关闭计算机</span>
      </div>
    </div>
  );
}