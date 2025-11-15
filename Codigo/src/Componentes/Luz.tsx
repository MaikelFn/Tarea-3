type LuzProps = {
  backgroundColor: string;
};

function Luz(Props: LuzProps) {
  return (
    <div
      className="luz"
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: Props.backgroundColor,
        borderRadius: "50%",
        margin: "10px auto",
      }}
    ></div>
  );
}

export default Luz;
