export const Kosarica = ({ items }: { items: string[] }): JSX.Element => {
  return (
    <div className="kosarica">
      <div className="kosarica__header">
        <h1>Košarica</h1>
      </div>
      <div className="kosarica__body">
        {/* Če je leva stran true se izpiše desna stran */}
        {/* Če je leva stran false se izpiše nič oz. false */}
        {items && <button>Zaključi nakup</button>}
        {!items && <div>Košarica je prazna</div>}
        {items.length === 0 && <div>Košarica je prazna</div>}
        {items.length > 0 && <button>Zaključi nakup</button>}
      </div>
    </div>
  );
};
