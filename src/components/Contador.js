import React, { useState, useEffect } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Montaje");
  }, []);

  useEffect(() => {
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    return () => {
      console.log("Desmontaje");
      window.removeEventListener("scroll", detectarScroll);
    };
  }, []);

  useEffect(() => {
    console.log("Actualización");
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
  }, [scrollY]);
  return (
    <div>
      <label>Valor del contador = {contador} </label>
      <br />
      <button
        onClick={() => setContador(contador + 1)}
        style={{ marginRight: "5px" }}
      >
        +
      </button>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <br />
      <h2>Scroll {scrollY}</h2>
    </div>
  );
}
