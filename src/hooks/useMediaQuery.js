import { useEffect, useState } from "react";

function useResponsive() {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const resizeWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    // 초기 값 설정
    resizeWidth();

    // resize 이벤트 리스너 추가
    window.addEventListener('resize', resizeWidth);

    // cleanup 함수: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', resizeWidth);
    };
  }, []);

  return innerWidth;
}

export default useResponsive;
