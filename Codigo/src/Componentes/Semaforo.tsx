type SemaforoProps = {
  LuzActiva: number;
  posx?: number;
  posy?: number;
};

function Semaforo(Props: SemaforoProps) {
  return (
    <div
      style={{
        width: "120px",
        padding: "10px",
        backgroundColor: "black",
        position: "absolute",
        left: Props.posx,
        top: Props.posy,
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: Props.LuzActiva === 1 ? "red" : "gray",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: Props.LuzActiva === 2 ? "yellow" : "gray",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: Props.LuzActiva === 3 ? "green" : "gray",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      ></div>
    </div>
  );
}

export default Semaforo;
