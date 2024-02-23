import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [typedName, setTypedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const name = 'Laakshmi Shree'; // Replace with your actual name
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index === (name.length-1)) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setShowCursor(false);
          }, 500); // Adjust the delay before cursor disappears
        } else {
          setTypedName((prevTypedName) => prevTypedName + name[index]);
          console.log("index name", name[index])
          index++;
        }
      }, 250); // Adjust the typing speed
  
      return () => {
        clearInterval(typingInterval);
      };
    }, []); // Run the effect once when the component mounts

  return (
    <div className="typing-container">
      <h1  className="blue name">{typedName}{showCursor ? <span className="cursor"></span> : <></>}</h1>
    </div>
  );
};

export default TypingEffect;