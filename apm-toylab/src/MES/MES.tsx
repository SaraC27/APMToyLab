import React, { useState } from "react";
import "./MES.css";

const MES = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPass] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showToken, setShowToken] = useState<boolean>(false);

  function handleLogin() {
    if (!loading) {
      if (!email || !password) {
        setError('Ingrese email y contraseña')
        return;
      }
      setLoading(true);
      fetch('https://zm3af0dzel.execute-api.us-east-1.amazonaws.com/prod/Auth', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
      })
        .then(async r => {
          if (r.status === 200) {
            return r.json()
          } else {
            const error = await r.json()
            return Promise.reject(error?.error ?? error)
          }
        })
        .then(bodyResponse => bodyResponse?.results)
        .then(r => {
          if (r) {
            setError(null);
            setToken(r);
          }
        })
        .catch(e => {
          setError(e?.name ?? e?.message ?? e?.error ?? e)
        })
        .finally(() => setLoading(false))
    }
  };

  const copyToClipboard = () => {
    if (token) {
      navigator.clipboard.writeText(token).then(() => {
        alert("Token copiado al portapapeles!");
      }).catch(err => {
        console.error("Error al copiar: ", err);
      });
    }
  };

  return (
    <div className="mes-container">
      {token ? (
        <div className="mes-dashboard">
          <div className="mes-token-container">
            <h4>Token para usar la API</h4>
            <button className="mes-icon-btn" onClick={() => setShowToken(!showToken)} title={showToken ? "Ocultar token" : "Mostrar token"}>
              {showToken ? "Ocultar" : "Mostrar"}
            </button>
            <input
              type="text"
              className="mes-token-input"
              value={showToken ? token : "*****"}
              readOnly
              onClick={(e) => {
                copyToClipboard();
                e.currentTarget.select();
              }} // Permite seleccionar al hacer clic
            />
          </div>
        </div>
      ) : (
        <div className="mes-login-box">
          <h2>Ingresar</h2>
          {error && <p className="mes-error-message">{error}</p>}
          <input
            type="email"
            placeholder="Usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mes-input-field"
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            className="mes-input-field"
            disabled={loading}
          />
          <button className={`mes-login-btn ${loading ? "mes-loading" : ""}`} onClick={handleLogin} disabled={loading}>
            {loading ? <div className="mes-spinner"></div> : "Ingresar"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MES;
