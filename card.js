"use strict";
import { produtos } from "./produtos.js";

class Main extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
    
    .container{
        display: flex;
        flex-wrap:wrap;
        gap:10px;
        width: 100%;
        height: 100vh;
        justify-content:center;

        
    }
      .card{
        display: flex;
        width:400px;
        height:450px;
       
        flex-direction:column;
        justify-content: space-evenly;
        align-items: center;
        
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0px 0px 8px #0006;
        padding: 20px;
        cursor: pointer;
        transition:0.5s;
      }

      .card:hover{
        box-shadow: 0px 0px 8px #00F6;
        transform: scale(1.04);
      }

      .cardImage{
        width: 200px;
        height: 200px;
        object-fit: contain;
      }

      .cardTitle{
        font-size: 1.5rem;
      }
      
      .cardDescription{
        font-size: 1rem;
      }
      
      .cardPrice{
        width: 100%;
        font-size: 1.5rem;
        font-weight: 900;
      }
    `;
    shadow.appendChild(style);

    const container = document.createElement("div");
    container.setAttribute("id", "main");
    container.classList.add('container')
    shadow.appendChild(container);

    const card = (produto) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const photo = document.createElement("img");
      photo.classList.add("cardImage");
      photo.src = `./img/${produto.image}`;

      const title = document.createElement("h5");
      title.classList.add("cardTitle");
      title.textContent = produto.name;

      const description = document.createElement("p");
      description.classList.add("cardDescription");
      description.textContent = produto.description;

      const price = document.createElement("span");
      price.classList.add("cardPrice");
      price.textContent = produto.price;

      cardElement.append(photo, title, description, price);

      return cardElement;
    };

    produtos.forEach((produto) => {
      container.appendChild(card(produto));
    });
  }
}

customElements.define("card-produtos", Main);
