import { useMemo } from 'react';
import ReactDOM from 'react-dom';

function Portal({ children, elementId }) {
  const parent = useMemo(() => document.getElementById(elementId), [elementId]);
  return ReactDOM.createPortal(children, parent);
}

export default Portal;
