import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAz_N53eMCmfrdsqthMMHRZXGCeZyFZpa4sQ&usqp=CAU"
          alt="Cameron Diaz"
        />
        <div>
          <strong>Cameron Diaz</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de Química avnçada.
        <br />
        <br />
        Apaixonada por explodir coisas em laboratórios e por mudar a vida das
        pessoas através de expepriências. Mais de 200.000 pessoas já passaram
        por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$120,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;