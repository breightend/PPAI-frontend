export default function Navbar() {
  return (
    <>
      <div className="navbar bg-primary text-primary-content shadow-lg px-4 py-2">
        <div className="flex-1">
          <a
            className="btn btn-ghost text-3xl नॉर्मल-case hover:bg-primary-focus"
            onClick={() =>
              alert("Hola! Gracias por darte cuenta que es un botón, un saludo! ")
            }
          >
            Red Sísmica
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="avatar">
            <div className="w-14 h-14 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
              <img
                src=".\src\assets\ingeUsuario.jpg"
                alt="User Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
