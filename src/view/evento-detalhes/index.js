import React, { useState, useEffect } from "react";
import "./evento-detalhes.css";
import { Link } from "react-router-dom";

import firebase from "../../config/firebase";

import NavBar from "../../components/navbar/";

import { useSelector } from "react-redux";

function EventoDetalhes(props) {
  const [evento, setEvento] = useState({});
  const [urlImage, setUrlImage] = useState({});
  const usuarioLogado = useSelector(state => state.usuarioEmail);

  useEffect(() => {
    firebase
      .firestore()
      .collection("eventos")
      .doc(props.match.params.id)
      .get()
      .then(resultado => {
        setEvento(resultado.data());
        firebase
          .storage()
          .ref(`imagens/${evento.foto}`)
          .getDownloadURL()
          .then(url => setUrlImage(url));
      });
  });

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <img src={urlImage} className="img-banner" alt="Banner" />
          <div className="col-12 text-right mt-1 visualizacoes">
            <i className="fas fa-eye"></i>
            <span className="px-2">{evento.visualizacoes}</span>
          </div>
          <h3 className="mx-auto mt-5 titulo">
            <strong>{evento.titulo}</strong>
          </h3>
        </div>

        <div className="row mt-5 d-flex justify-content-around">
          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-ticket-alt fa-2x"></i>
            <h5>
              <strong>Tipo</strong>
            </h5>
            <span className="mt-3">{evento.tipo}</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-calendar-alt fa-2x"></i>
            <h5>
              <strong>Data</strong>
            </h5>
            <span className="mt-3">{evento.data}</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-clock fa-2x"></i>
            <h5>
              <strong>Hora</strong>
            </h5>
            <span className="mt-3">{evento.hora}</span>
          </div>
        </div>

        <div className="row box-detalhes mt-5">
          <div className="col-12 text-center">
            <h5>
              <strong>Detalhes do evento</strong>
            </h5>
          </div>
          <div className="col-12 text-center">
            <p>{evento.detalhes}</p>
          </div>
        </div>

        {usuarioLogado === evento.usuario ? (
          <Link to="" className="btn-editar">
            <i className="fas fa-pen-square fa-3x"></i>
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default EventoDetalhes;
