import React from "react";
import "./home.css";
import NavBar from "../../components/navbar/";

import { useSelector } from "react-redux";

import EventoCard from "../../components/evento-card/";

function Home() {
  return (
    <>
      <NavBar />
      <h1>Usuario logado: {useSelector(state => state.usuarioEmail)}</h1>
      <div className="row">
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
      </div>
    </>
  );
}

export default Home;
