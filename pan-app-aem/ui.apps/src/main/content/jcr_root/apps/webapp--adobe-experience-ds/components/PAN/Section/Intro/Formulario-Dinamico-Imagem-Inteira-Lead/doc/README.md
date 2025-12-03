# Intro-ImagemInteira-Lead

Teste o componente:

[COMPONENTE AQUI]

## Instruções de uso do componente


**Variantes do componente**

Esse componente possui dois estados, o primeiro que exibe um formulário para preenchimento e um segundo que exibe o feedback dessa solicitação.

Para visualição dessas variantes veja no [FIGMA](https://www.figma.com/file/kxyutGonYeW4SfWLXg4Zaa/UX?type=design&node-id=1-23213&mode=design&t=XZxqoKxqoZaFlKdX-0)

[IMAGEM NUMERADA]

Dialog (modal de edição)

[IMAGEM DIALOG]

A - Imagem de fundo

São necessárias duas versões, sendo uma móvel e uma para desktop. **Não** é preciso acrescentar um complemento em fundo preto na imagem móvel para caber todo o conteúdo, o componente faz isso por conta própria.
- Resolução Móvel: 375x700 (resolução minina para uma boa qualidade)
- Resolução Desktop: 1440x700 (resolução minina para uma boa qualidade)
- Necessário definir atributo ALT (Texto alternativo da imagem para acessibilidade)
- Aceita apenas .WEBP

**Coluna Esquerda**

    B - Palavra Destaque

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos > Coluna Esquerda
    Campo: Palavra Destaque

    C - Título

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos > Coluna Esquerda
    Campo: Título

    D - Parágrafo

    - Campo do tipo rich text
    Configuração na Dialog (modal de edição):
    Aba: Textos > Coluna Esquerda
    Campo: Parágrafo

    E - Observação

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos > Coluna Esquerda
    Campo: Texto legal (disclaimer)

**Formulário**

    F - Título

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos > Formulário
    Campo: Título do formulário

    G - Checkbox

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos > Formulário
    Campo: Texto Checkbox (máximo 46 caracteres)

    H - Button

    - Campo de texto simples
    - Limite de 11 caracteres
    - Definição de Data-track (SEO)
    Configuração na Dialog (modal de edição):
    Aba: Botão Enviar

    I - Link

    O link possui componente próprio, onde é possível configurar:
    - Configurações Gerais: 
        - Texto do link
        - Esconder link
    - Estilo: 
        - Modo (Herdar, sem modo, dark, blue)
        - Tamanho (Pequeno, médio e grande)
    - Comportamento do Link:
        - Link ou scroll para seção escolhida
        - Target (Mesma página ou nova aba)
    Configuração na Dialog (modal de edição):
        - Componente próprio

**Feedback do Formulário**

    J - Titulo Feedback

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos > Formulário
    Campo: Titulo Feedback

    K - Texto Feedback

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos > Formulário
    Campo: Texto Feedback

    L - Texto QR Code (somente desktop)

    - Campo do tipo texto simples
    Configuração na Dialog (modal de edição):
    Aba: Textos > Formulário
    Campo: Texto Feedback QRCODE 

    M - QR Code (somente desktop)

    - Resolução base: 170x170
    - Aceita apenas .SVG
    Configuração na Dialog (modal de edição):
    Aba: Textos > Formulário
    Campo: Imagem SVG do QR Code

    N - Button (somente móvel)

    O botão possui componente próprio, onde é possível configurar:
    - Configurações Gerais: 
        - Texto do botão
    - Ícone:
        - Posição do ïcone
        - Imagem do ïcone
    - Estilo: 
        - Modo (Herdar, sem modo, dark, blue)
        - Tamanho (Extra pequeno, pequeno, médio, grande)
    - Comportamento do Botão:
        - Link ou scroll para seção escolhida
        - Target (Mesma página ou nova aba)
    Configuração na Dialog (modal de edição):
        - Componente próprio


### Definições de SEO e Acessibilidade
Aba SEO:

- ID da seção (para uso quando algum botão precisar de scroll)
- Definições das tags HTML referente aos campos: Palavra destaque e Titulo
- As configurações do botão se encontram na aba do mesmo

Acessibilidade:

- Definições de texto alternativo para os seguintes campos: Imagem
