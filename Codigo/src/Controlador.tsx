import { useEffect, useState } from "react";
import Semaforo from "./Componentes/Semaforo";

function Controlador() {
  // Estados de cada semáforo: 1=Rojo, 2=Amarillo, 3=Verde
  const [luz1, setLuz1] = useState(3);
  const [luz2, setLuz2] = useState(1);
  const [luz3, setLuz3] = useState(1);
  const [luz4, setLuz4] = useState(1);

  useEffect(() => {
    // Semáforo 1: Opera de forma independiente, inicia en verde
    const intervalo1 = setInterval(() => {
      setLuz1((prev) => {
        if (prev === 3) return 2;
        return 1;
      });
    }, 1000);

    // Reinicia el semáforo 1 a verde cada 8 segundos (ciclo completo)
    const ciclo1 = setInterval(() => {
      setLuz1(3);
    }, 8000);

    // Semáforo 2: Inicia después de 2 segundos
    const timeout2 = setTimeout(() => {
      setLuz2(3);

      const intervalo2 = setInterval(() => {
        setLuz2((prev) => {
          if (prev === 3) return 2;
          return 1;
        });
      }, 1000);

      const ciclo2 = setInterval(() => {
        setLuz2(3);
      }, 8000);

      return () => {
        clearInterval(intervalo2);
        clearInterval(ciclo2);
      };
    }, 2000);

    // Semáforo 3: Inicia después de 6 segundos
    const timeout3 = setTimeout(() => {
      setLuz3(3);

      const intervalo3 = setInterval(() => {
        setLuz3((prev) => {
          if (prev === 3) return 2;
          return 1;
        });
      }, 1000);

      const ciclo3 = setInterval(() => {
        setLuz3(3);
      }, 8000);

      return () => {
        clearInterval(intervalo3);
        clearInterval(ciclo3);
      };
    }, 6000);

    // Semáforo 4: Inicia después de 4 segundos
    const timeout4 = setTimeout(() => {
      setLuz4(3);

      const intervalo4 = setInterval(() => {
        setLuz4((prev) => {
          if (prev === 3) return 2;
          return 1;
        });
      }, 1000);

      const ciclo4 = setInterval(() => {
        setLuz4(3);
      }, 8000);

      return () => {
        clearInterval(intervalo4);
        clearInterval(ciclo4);
      };
    }, 4000);

    // Limpieza de todos los intervalos y timeouts
    return () => {
      clearInterval(intervalo1);
      clearInterval(ciclo1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);
  return (
    // Contenedor principal con fondo verde oscuro
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#2d5016",
        overflow: "hidden",
      }}
    >
      {/* SVG para dibujar las calles y la intersección */}
      <svg style={{ position: "absolute", width: "100%", height: "100%" }}>
        {/* Calle vertical */}
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="#333"
          strokeWidth="200"
        />
        {/* Calle horizontal */}
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="#333"
          strokeWidth="200"
        />

        {/* Línea amarilla  vertical */}
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="#ffeb3b"
          strokeWidth="4"
          strokeDasharray="30,20"
        />
        {/* Línea amarilla  horizontal */}
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="#ffeb3b"
          strokeWidth="4"
          strokeDasharray="30,20"
        />

        {/* Intersección */}
        <rect
          x="calc(50% - 100px)"
          y="calc(50% - 100px)"
          width="200"
          height="200"
          fill="#333"
          stroke="#ffeb3b"
          strokeWidth="3"
        />
      </svg>

      {/* Semáforo 1: Oeste */}
      <Semaforo
        LuzActiva={luz1}
        posx={window.innerWidth * 0.5 - 400}
        posy={window.innerHeight * 0.5 - 180}
      />
      {/* Semáforo 2: Norte*/}
      <Semaforo
        LuzActiva={luz2}
        posx={window.innerWidth * 0.5 - 60}
        posy={window.innerHeight * 0.5 - 550}
      />
      {/* Semáforo 3: Sur */}
      <Semaforo
        LuzActiva={luz3}
        posx={window.innerWidth * 0.5 - 60}
        posy={window.innerHeight * 0.5 + 200}
      />
      {/* Semáforo 4: Este*/}
      <Semaforo
        LuzActiva={luz4}
        posx={window.innerWidth * 0.5 + 300}
        posy={window.innerHeight * 0.5 - 180}
      />
    </div>
  );
}
export default Controlador;
