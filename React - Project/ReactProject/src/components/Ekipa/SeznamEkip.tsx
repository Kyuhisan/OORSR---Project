import { BrowserRouter, Route, Routes } from "react-router-dom";
import Telo from "../Layout/Telo";
import { DisplayEkipa } from "./Ekipa";

export function SeznamEkip() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Telo />} />
          <Route
            path="/ekipa/:idEkipe"
            element={
              <div className="container">
                <DisplayEkipa />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default SeznamEkip;
