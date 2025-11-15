import { useEffect, useState } from "react";
import Semaforo from "./Componentes/Semaforo";

function Controlador() {
  const [luz1, setLuz1] = useState(1);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setLuz1((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);

    return () => {
      clearInterval(intervalo);
    };
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Semaforo LuzActiva={luz1} posx={500} posy={300} /> //derecha
    </div>
  );
}
export default Controlador;
