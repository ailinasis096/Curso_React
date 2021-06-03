import React, { useState, useEffect } from "react";


function Reloj2(props) {
  return <h3>{props.hora}</h3>;
}

export default function Reloj() {

  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      clearInterval(temporizador);
    };
  }, [visible]);
  return (
    <>
      {visible && <Reloj2 hora={hora} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
      <hr />
    </>
  );
}
