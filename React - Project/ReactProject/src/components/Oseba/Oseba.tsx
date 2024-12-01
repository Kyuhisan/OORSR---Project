export interface OsebaProps {
  id: number;
  ime: string;
  priimek: string;
  letoRojstva: number;
  krajRojstva?: string;
}

function Oseba(props: OsebaProps) {
  return (
    <div>
      {props.id} {props.ime} {props.priimek} {props.letoRojstva}
      {props.krajRojstva}
    </div>
  );
}

export default Oseba;
