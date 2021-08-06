import { useMemo } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, elementId }) => {
  const parent = useMemo(() => document.getElementById(elementId), [elementId]);
  return createPortal(children, parent);
};

export default Portal;
