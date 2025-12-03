import "./MultiContent.scss";

export default class ButtonAndBlock {
    buttons: NodeListOf<Element> = document.querySelectorAll('[data-js=button]');
    blocks: NodeListOf<Element> = document.querySelectorAll('[data-js=bloco]');
  
    constructor() {
        this.initButtons();
    }
    
    initButtons() {
        this.buttons[0]?.classList.add('active');
        this.blocks[0]?.classList.remove('d-none');

        this.blocks.forEach((block) => {
            block.classList.add('transicao');
          });

        this.buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.handleButtonClick(button, index);
            });
        });
    }
    
    handleButtonClick(button: Element, index: number) {
        this.buttons.forEach((button) => {
          button.classList.remove('active');
        });
    
        button.classList.add('active');
    
        this.blocks.forEach((block) => {
          block.classList.add('d-none');
        });
    
        this.blocks[index].classList.remove('d-none');
    }
}

new ButtonAndBlock();




















// const buttons = document.querySelectorAll('.button');
// const blocks = document.querySelectorAll('.block');

// // Inicia com o primeiro botão ativo e o primeiro bloco visível
// buttons[0].classList.add('active');
// blocks[0].classList.remove('d-none');

// // Adiciona o evento de clique em cada botão
// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     // Remove a classe active de todos os botões
//     buttons.forEach((button) => {
//       button.classList.remove('active');
//     });

//     // Adiciona a classe active no botão clicado
//     button.classList.add('active');

//     // Esconde todos os blocos
//     blocks.forEach((block) => {
//       block.classList.add('d-none');
//     });

//     // Mostra o bloco correspondente ao botão clicado
//     blocks[index].classList.remove('d-none');
//   });
// });
