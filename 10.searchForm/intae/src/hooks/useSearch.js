import { useRef, useState } from 'react';

export default function useSearch(searchFunction) {
  const [value, setValue] = useState('');
  const timerId = useRef(null);

  const onChange = e => {
    setValue(e.target.value);

    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => searchFunction(e.target.value), 500);
  };

  return [value, onChange];
}
