import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function Top_loader() {
    const [progress, setProgress] = useState(0);
  const listen = useNavigate();
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [listen]);
  return (
    <div>
        <LoadingBar
    color="white"
    progress={progress}
    onLoaderFinished={() => setProgress(0)}
  /></div>
  )
}

export default Top_loader