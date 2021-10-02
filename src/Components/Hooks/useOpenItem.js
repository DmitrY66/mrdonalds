/* eslint-disable no-unused-vars */
import { useState } from 'react';

export function useOpenItem() {
  const [openItem, setOpenItem] = useState(null);
  return { openItem, setOpenItem };
};




