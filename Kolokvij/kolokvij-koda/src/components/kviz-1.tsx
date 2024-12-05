import { useState } from "react";

export const Stevec = (): JSX.Element => {
  const [stevilo, setStevilo] = useState<number>(5); // zacne se z 5

  const pritiskNaGumb = () => {
    setStevilo(stevilo + 1);
    console.log(stevilo);
  };

  return (
    <div>
      {stevilo}
      <button onClick={pritiskNaGumb}>Povečaj</button>
    </div>
  );
};
