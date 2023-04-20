"use strict"
import { produtos } from "./produtos.js"

class main extends HTMLElement {
    constructor(){
        super()

        this.shadow = this.attachShadow({mode:'open'})
       
        
    }

  
    connectedCallback(){
        this.shadow.appendChild(this.criarCard())
        this.shadow.appendChild(this.carregarProduto())
        this.shadow.appendChild(this.style())
      
    }
  

     

    style(){
        const css = document.createElement('style')
        css.textContent = `
        .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
            padding: 20px;
            cursor: pointer;
           
            
            
        }
        
        .card:hover{
            box-shadow: 0px 0px 8px #00F6;
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

        `
        return css
    }
   
    

}

criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')


    const photo = document.createElement('img')
    photo.classList.add("cardImage")
    photo.src = `./img/${produto.image}`

    const title = document.createElement('h5')
    title.classList.add('cardTitle')
    title.textContent = produto.name

    const description = document.createElement('p')
    description.classList.add('cardDescription')
    description.textContent = produto.description

    const price = document.createElement('span')
    price.classList.add('cardPrice')
    price.textContent = produto.price
    
    card.append(photo, title, description, price)
    
    return card
    

}

carregarProduto = () => {    
    const container = document.getElementById('main')
    const cards = produtos.map(this.criarCard)
    container.replaceChildren(...cards)
    
}

customElements.define('card-produtos', card)