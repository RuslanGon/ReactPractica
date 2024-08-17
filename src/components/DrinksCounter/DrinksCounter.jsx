import { useEffect } from "react";

const DrinksCounter = ({handleLogDrink, handleReset}) => {

  useEffect(() => {
    console.log('Hello');
  
    return () => {
      console.log('Bye');
    };
  }, []);

  
  return (
    <div>
      <button onClick={() => handleLogDrink('beer')}>Beer 🍺</button>
      <button onClick={() => handleLogDrink('whiskey')}>Whiskey 🥃</button>
      <button onClick={() => handleLogDrink('wine')}>Wine 🍷</button>
      <button onClick={handleReset}>Reset ⥀</button>
    </div>
  );
};

export default DrinksCounter;
