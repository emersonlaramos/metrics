# Card-Estatico

Teste o componente:

[COMPONENTE AQUI]

## Instruções de uso do componente


**Variantes do componente**
Esse componente contem variantes de cores e posicionamento dos cards, são elas:

Background:
- Azul
- Branco
- Cinza
- Preto

Posição dos cards:
- Direita 
- Esquerda

Para visualição dessas variantes veja no [FIGMA](https://www.figma.com/file/CvO1OUqdbSXp6UU1Hn2Bi9/DS-Mahoe---Mkt-Lib?type=design&node-id=368-151372&t=PoMQnaReYcCami5q-4)

[IMAGEM NUMERADA]

Dialog (modal de edição)

[IMAGEM DIALOG]


1 - Palavra destaque

- Campo do tipo texto simples
Configuração na Dialog (modal de edição):
Aba: Textos e Cards
Campo: Palavra Destaque

2 - Titulo

- Campo do tipo texto simples
Configuração na Dialog (modal de edição):
Aba: Textos e Cards
Campo: Título

3 - Cards

- Exibição de 4 cards (obrigatóriamente)
- Ícone somente em svg (variações disponives em preto e branco de acordo com fundo apenas)
- Necessário definir atributo ALT para icone
- Card pode ou não ser link (href)
Configuração na Dialog (modal de edição):
Aba: Textos e Cards
Campo: Tabs Cards (um para cada)

4 - Button

- Componente padrão Mahoe-Button

5 - Imagem

- Resolução base: 670x748px (área útil)
- Necessário fundo transparente
- Ocupar 6 colunas dentro do container
- Necessário definir atributo ALT
- Aceita apenas .WEBP
- Necessário subir Desktop e Mobile
Configuração na Dialog (modal de edição):
Aba: Imagem


### Definições de SEO e Acessibilidade
Aba SEO:

- ID da seção (para uso quando algum botão precisar de scroll)
- Definições das tags HTML referente aos campos: Palavra destaque e Titulo
- As configurações do botão se encontram na aba do mesmo


Aba Acessibilidade:

A FAZER

### Observações para DEV
Esse componente tem um "slider" no mobile, porém o layout é bem simplicado e não contem paginação nem setas e com o intuito de não ter tanto JS, foi construido com a propriedade overflow do CSS, segue o trecho do código:

[IMAGEM CÓDIGO]