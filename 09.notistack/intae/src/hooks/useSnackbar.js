import { useEffect, useState } from 'react';
import Snackbar from '../components/Snackbar';
import { getUUID } from '../helper/uuid';

function useSnackbar(limit = 3, time = 1500) {
  const [queue, setQueue] = useState([]);

  const dequeueSnackbar = () => {
    setQueue(queue => queue.slice(1));
  };

  const enqueueSnackbar = (message, variant = '') => {
    const uuid = getUUID();
    const props = {
      message,
      variant,
      time,
      key: uuid,
    };
    const snackbar = <Snackbar {...props} />;

    setQueue(queue => [...queue, snackbar]);

    setTimeout(dequeueSnackbar, time);
  };

  /* 
  Q:  Warning: Can't perform a React state update on an unmounted component. 
  This is a no-op, but it indicates a memory leak in your application. 
  To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  */
  useEffect(() => {
    if (queue.length > limit) {
      dequeueSnackbar();
    }
  }, [queue, limit]);

  return [queue, enqueueSnackbar];
}

export default useSnackbar;
