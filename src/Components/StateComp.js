import { useState } from 'react';
function StateComp()
{
 
    return (
            <div>
                <h1>Counters that update separately</h1>
                <MyButton />
                
                <MyButton />
            </div>
           );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>


    );

}

export default StateComp;