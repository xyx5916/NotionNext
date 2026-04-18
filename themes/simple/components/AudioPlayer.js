// components/AudioPlayer.js
import { useEffect } from 'react';

export default function AudioPlayer() {
  useEffect(() => {
    const audio = new Audio(CONFIG.MUSIC.URL);
    audio.loop = CONFIG.MUSIC.LOOP;
    audio.volume = CONFIG.MUSIC.VOLUME;
    
    // 用户交互后播放
    const handleClick = () => {
      audio.play();
      document.removeEventListener('click', handleClick);
    };
    
    document.addEventListener('click', handleClick);
    
    return () => audio.pause();
  }, []);
  
  return null; // 不渲染任何内容
}
