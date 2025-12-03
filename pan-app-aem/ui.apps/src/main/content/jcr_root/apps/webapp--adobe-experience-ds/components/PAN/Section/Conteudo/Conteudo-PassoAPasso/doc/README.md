# Section Conteúdo Passo a Passo

Teste o componente:

[COMPONENTE AQUI]

## Instruções de uso do componente


**Variantes do componente**
Esse componente contem variantes de cores e posicionamento dos cards, são elas:

Background:
- Azul
- Branco
- Preto

Posições:
N/A

Para visualição dessas variantes veja no [FIGMA](https://www.figma.com/file/CvO1OUqdbSXp6UU1Hn2Bi9/DS-Mahoe---Mkt-Lib?type=design&node-id=3171-207692&t=6bb6x4PrwrVs9w5t-4)

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

3 - Parágrafo
- Campo Rich Text
Configuração na Dialog (modal de edição):
Parágrafo

4 - Disclaimer
- Pode ou não conter disclaimer
- Campo de texto simples
Configuração na Dialog (modal de edição):
Texto legal (disclaimer)

5 - Button
- Campo de texto simples
- Definição de Data-track (SEO)
- Definição de comportamento (link ou scroll para seção escolhida)
- Pode ou não conter icone
- Controle da posição do icone (direita, esquerda ou justificado)
Configuração na Dialog (modal de edição):
Aba: Botão

6 - Imagem

- Resolução base: 264x491px (área útil)
- Necessário fundo transparente
- Necessário definir atributo ALT
- Aceita apenas .WEBP
- No mobile não contém imagem
Configuração na Dialog (modal de edição):
Aba: Imagem

7 - Tópicos

- Exibição de 4 tópicos (obrigatoriamente)
- Titulo campo de texto simples
- Texto Rich Text
Configuração na Dialog (modal de edição):
Aba: Textos e Tópicos
Campo: Tabs Tópico (um para cada)


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