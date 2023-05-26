import { useEffect, useState } from 'react';

function getScreenStatus(breakPoint) {
  const [isMobile, setIsMobile] = useState(false);
  const widthBreakPoint = breakPoint;

  const changeStatus = () => {
    if (window.innerWidth < widthBreakPoint) {
      setIsMobile(true);
    }
    if (window.innerWidth > widthBreakPoint) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const onRecize = () => changeStatus();
    window.addEventListener('resize', onRecize);
    window.removeEventListener('resize', onRecize);
  }, [widthBreakPoint, isMobile]);

  useEffect(() => {
    changeStatus();
  }, [widthBreakPoint, isMobile]);

  return isMobile;
}

export default getScreenStatus;
