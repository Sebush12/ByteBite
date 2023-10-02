import { useState, useEffect, FC } from 'react';

export const Test: FC = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  useEffect(() => {
  (async () => {
     await fetch(' http://127.0.0.1:8000/').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
      setCurrentDate(data.date)
    });
  })();
  }, []);

  if (currentTime === null || currentDate === null) {
    return  'Loading...';
  }

  return (
  <div>
    <header>
      <h1>The Beginning of ByteBite Tracker</h1>
      <h3>API Test:</h3>
      <p>The date is {currentDate} and the time is {currentTime}.</p> <br/>
    </header>
  </div>
  );
  }

  export default Test;
