import { useState } from 'react';

const useModal = () => {
    console.log('test');
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
      console.log('test toogle');
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;