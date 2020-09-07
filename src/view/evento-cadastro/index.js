import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./evento-cadastro.css";

import firebase from "../../config/firebase";

import NavBar from "../../components/navbar/";

function EventoCadastro() {
  const [msgTipo, setMsgTipo] = useState('erro');

  return (
    <>
      <NavBar />
      <div className="col-12 mt-5">
        <div className="row">
          <h3 className="mx-auto font-weight-bold">Novo evento</h3>
        </div>

        <form>
          <div className="form-group">
            <label>Titulo:</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Tipo de evento:</label>
            <select className="form-control">
              <option disabled selected value>
                --- Selecione um tipo de evento ---
              </option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Evento</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descricao do evento:</label>
            <textarea className="form-control" rows="3" />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Data:</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-6">
              <label>Hora:</label>
              <input type="time" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label>Upload da foto:</label>
            <input type="file" className="form-control" />
          </div>

          <button
            type="button"
            className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
          >
            Publicar evento
          </button>
        </form>

        <div className="msg-login text-center mt-2">
          {msgTipo === "sucesso" && (
            <span>
              <strong>Wow!</strong> Evento publicado! &#128526;
            </span>
          )}
          {msgTipo === "erro" && (
            <span>
              <strong>Ops!</strong> Nao foi possivel cadastrar o evento! &#128549;
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default EventoCadastro;
