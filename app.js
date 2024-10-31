function criaCartao (categoria, pergunta, resposta) {
    let container = document.getElementById ('container')
    let cartao = document. createElement ('article')
    cartao.className = 'cartao'

    cartao.innerHTML = ` 
     <div class="cartao__conteudo">
    <h3>Geografia</h3>
    <div class="cartao__conteudo__pergunta">
    <p>o país mais populoso do mundo?</p>
    </div>
    <div class="cartao__conteudo__resposta">
    <p>India</p>
    </div>
    </div>
    `

    container.appendChild(cartao)

}