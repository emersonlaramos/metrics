# Section Conteúdo Tabela

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


1 - Titulo

- Campo do tipo texto simples
Configuração na Dialog (modal de edição):
Aba: Textos e Cards
Campo: Título

2 - Parágrafo
- Campo Rich Text
Configuração na Dialog (modal de edição):
Parágrafo

5 - Link
- Componente padrão Mahoe Link

6 - Imagem

- Resolução base: 456x500px (área útil) e Mobile 372x419px (área útil)
- Necessário fundo transparente
- Necessário definir atributo ALT
- Aceita apenas .WEBP
- No mobile não contém imagem
Configuração na Dialog (modal de edição):
Aba: Imagem

7 - Tabela

- A tabela é composta por 5 titulos e cada titulo tem 5 linhas para edição
- Campo de Texto simples 

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