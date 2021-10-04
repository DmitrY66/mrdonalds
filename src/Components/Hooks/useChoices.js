/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import { useState } from "react";


export function useChoices() {
  const [choice, setChoice] = useState();

  function changeChoices(e) {
    setChoice(e.target.value);
  }

  return { choice, changeChoices };
};



