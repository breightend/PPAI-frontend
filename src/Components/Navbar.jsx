export default function Navbar() {
  return (
    <>
      <div className="navbar bg-primary shadow-sm">
        <a
          className="btn btn-ghost text-3xl text-white hover:bg-primary/80 "
          onClick={() =>
            alert("Hola! Gracias por darte cuenta que es un botón, un saludo! ")
          }
        >
          Red Sísmica
        </a>
      </div>
    </>
  );
}
