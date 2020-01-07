import React, { useState, useEffect } from "react";

const NameTag = ({ name, color }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const date = new Date();
    const mins = date.getMinutes();
    setTime(`${date.getHours()}:${mins < 10 ? '0' + mins : mins}`);
  }, []);

  return (
    <h2 style={{color: color}}>
      My name is {name} and the time is {time}.
    </h2>
  );
};

// Component.propTypes = {
//   name: PropTypes.string
// };

export default NameTag;
