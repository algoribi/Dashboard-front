import { useEffect } from 'react';

import { useMaterialUIController, setCategory, setMainColor } from 'context'

export default function Settings() {
  const [controller, dispatch] = useMaterialUIController();

  useEffect(() => {
    setCategory(dispatch, 'Settings');
  }, []);

  return (
    <></>
  );
}