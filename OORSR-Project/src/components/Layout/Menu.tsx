import React from "react";

interface MenuProps {
  imeEkipe?: string;
}

const Menu: React.FC<MenuProps> = ({ imeEkipe }) => {
  return (
    <header className="text-center py-3 mb-5 bg-dark text-light">
      <h1>{imeEkipe || "Seznam Ekip"}</h1>
    </header>
  );
};

export default Menu;
