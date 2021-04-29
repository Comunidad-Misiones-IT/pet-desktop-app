import "./InicioSesion.css";

export default function InicioSesion() {
  return (
    <div className="root">
      <div className="container">
        <form className="form">
          <label className="labels">
            Usuario
            <input className="inputs" type="text" name="user" />
          </label>
          <label className="labels">
            Contraseña
            <input className="inputs" type="password" name="pass" />
          </label>
          <div>
            <input className="socialMedia" type="submit" value="Google" />
            <input className="socialMedia" type="submit" value="Facebook" />
          </div>
          <input className="submit" type="submit" value="Ingresar" />
          <div className="link">
            <a href="/registro">Crear usuario</a>
          </div>
        </form>

        <div className="aside"></div>
      </div>
    </div>
  );
}
