import React from "react";
import PrikazEkip from "./PrikazEkip";
import { EkipaProps } from "../../models/Ekipa";

interface SeznamEkipProps {
  seznamEkip: EkipaProps[];
}

const SeznamEkip: React.FC<SeznamEkipProps> = ({ seznamEkip }) => {
  return <PrikazEkip seznamEkip={seznamEkip} />;
};

export default SeznamEkip;
