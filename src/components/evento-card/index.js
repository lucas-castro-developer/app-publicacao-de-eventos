import React, { useState, useEffect } from "react";
import "./evento-card.css";
import { Link } from "react-router-dom";

function EventoCard() {
  return (
    <div className="col-md-3 col-sm-12">
      <img
        src="https://via.placeholder.com/500"
        className="card-img-top img-cartao"
        alt="Imagem do evento"
      />

      <div className="card-body">
        <h5>Título do evento</h5>
        <p className="card-text text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="row rodape-card d-flex align-items-center">
          <div className="col-6">
            <Link to="/" className="btn btn-sm btn-detalhes">
              + detalhes
            </Link>
          </div>
          <div className="col-6 text-right">
            <i class="fas fa-eye"></i>
            <span>2019</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventoCard;
