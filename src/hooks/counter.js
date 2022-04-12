import { useState } from 'react';

export const CounterHook = () => {
  const [count, setCount] = useState(0)

  const useCount = () => {
    setCount(count + 1)
  }

  return {useCount, count}
}