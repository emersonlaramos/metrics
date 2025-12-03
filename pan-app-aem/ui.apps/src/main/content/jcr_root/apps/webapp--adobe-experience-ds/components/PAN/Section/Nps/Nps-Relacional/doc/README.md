# Nps Relacional

Teste o componente:

[COMPONENTE AQUI]

## Instruções de uso do componente


**Variantes do componente**

Esse componente possui dois estados, o primeiro que exibe um formulário para preenchimento e um segundo que exibe o feedback dessa solicitação.

Para visualição dessas variantes veja no [FIGMA](https://www.figma.com/file/GSyLAm64jGxdokfFWIewLh/Discovery---Novo-Site---NPS?type=design&node-id=6013-3960)

[IMAGEM NUMERADA]

Dialog (modal de edição)

[IMAGEM DIALOG]

0 - Imagem de fundo

A imagem está disponível apenas na versão desktop, sendo trocada para um fundo azul na versão mobile.
- Resolução Desktop: 1440x688 (resolução minina para uma boa qualidade)
- Necessário definir atributo ALT (Texto alternativo da imagem para acessibilidade)
- Aceita apenas .WEBP
Configuração na Dialog (modal de edição):
Aba: Imagem

**Coluna Esquerda**

    1 - Palavra Destaque

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos
    Campo: Palavra Destaque

    2 - Título

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos
    Campo: Título

    3 - Parágrafo

    - Campo do tipo rich text
    Configuração na Dialog (modal de edição):
    Aba: Textos
    Campo: Parágrafo


**Formulário**

    4 - Título (Pergunta 1)

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos
    Campo: Titulo pergunta 1

    5 - Pergunta 2

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos
    Campo: Titulo pergunta 2

    8 - Button

    - Configurações: 
        - Texto do botão
        - Posição do ícone
        - Imagem do ícone
    Configuração na Dialog (modal de edição):
    Aba: Form Config > Botão Enviar


**Feedback do Formulário**

    6 - Titulo de agradecimento

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos
    Campo: Titulo de agradecimento

    7 - Parágrafo Feedback

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos
    Campo: Feedback


### Definições de SEO e Acessibilidade
Aba SEO:

- ID da seção (para uso quando algum botão precisar de scroll)
- Definições das tags HTML referente aos campos: Palavra destaque e Titulo
- As configurações do botão se encontram na aba do mesmo

Acessibilidade:

- Definições de texto alternativo para os seguintes campos: Imagem
- Definições de title para os seguintes campos: Botão