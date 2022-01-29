import React,{useCallback, useState} from 'react';
import CounterCell from '../../components/CounterCell';

const counters = [1,2,3]
const CartCounter = () => {

  const [count, setCount] = useState({ 
    total: 0,
    items: {
      1:{
        isPressed: false,
        count: 0
      },
      2:{
        isPressed: false,
        count: 0
      },
      3:{
        isPressed: false,
        count: 0
      }
    }
  });

  const increment = useCallback((id) => {
    setCount({
      ...count,
      items: {
        ...count.items,
        [id]: {
          count: count.items[id].count + 1
        }
      }
    })
  });


  const decrement = useCallback((id) => setCount(count.items[id].count - 1), [count])

  return (
    <div className='counter-container'>
      <h1>Cart Counter {count.total}</h1>
      {counters.map(counter => {
          return(
            <div key={counter}>
              <CounterCell 
                count={count.items[counter].count} 
                increment={increment} 
                decrement={decrement}
                id={counter}
              />
            </div>
          )
        })}
    </div>
  )
};

export default CartCounter;
