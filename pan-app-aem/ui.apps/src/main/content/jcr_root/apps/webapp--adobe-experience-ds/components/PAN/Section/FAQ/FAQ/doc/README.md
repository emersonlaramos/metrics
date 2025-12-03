# FAQ

Teste o componente:

[COMPONENTE AQUI]

## Instruções de uso do componente
Este componente possui detalhes exclusivos, são eles:

- **Ponto de atenção:** Para garantir o comportamento esperado do botão **é necessário** que na aba "Comportamento do botão" **_SEMPRE_** seja selecionado a opção "Data-js (comportamento específico)" e que **"view-more" seja o atributo digitado no campo de data-js.**

- Botão "Veja mais" por padrão possui apenas o comportamento mostrar as perguntas ocultas, caso o cormportamento desejado seja esse.
- Botão "Veja mais" só existe quando o FAQ possui mais que 5 perguntas, caso contrário ele automaticamente ficará oculto.
- Caso tenha mais que 5 perguntas, independente da quantidade de perguntas, só será mostrado as 5 primeiras, para mostrar o restante é necessário o clique no botão.
- Quando clicado, o botão se oculta e fica aberta todas as perguntas permanentemente.
- Na aba de "Perguntas" do FAQ, existe um checkbox que é responável por controlar o comportamento da primeira pergunta e apenas ela, se ela deverá ficar aberta por padrão selecione o checkbox, caso contrário não selecione.



**Variantes do componente**
Esse componente contem variantes de cores e posicionamento dos cards, são elas:

Background:
- Azul
- Branco
- Cinza
- Preto

Para visualição dessas variantes veja no [FIGMA](https://www.figma.com/file/CvO1OUqdbSXp6UU1Hn2Bi9/DS-Mahoe---Mkt-Lib?type=design&node-id=653-144669&t=Nkt8k5rHn7W6thKh-4)

[IMAGEM NUMERADA]

Dialog (modal de edição)

[IMAGEM DIALOG]


1 - Titulo

- Campo do tipo texto simples
Configuração na Dialog (modal de edição):
Aba: Perguntas
Campo: Titulo

2 - FAQ

- Campo "Primeira pergunta aberta por padrão" do tipo checkbox
- Campo Título do tipo texto simples
- Campo Texto do tipo texto rico
- Pode-se adicionar "n" questões
Configuração na Dialog (modal de edição):
Aba: Perguntas

3 - Button

- Componente padrão Mahoe-Button

### Definições de SEO e Acessibilidade
Aba SEO:

- ID da seção (para uso quando algum botão precisar de scroll)
- Definições das tags HTML referente aos campos: Palavra destaque e Titulo
- As configurações do botão se encontram na aba do mesmo


Aba Acessibilidade:

A FAZER

### Observações para DEV