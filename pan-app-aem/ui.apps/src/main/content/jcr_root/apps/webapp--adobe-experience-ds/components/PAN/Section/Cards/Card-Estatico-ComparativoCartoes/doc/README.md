# Card-Estatico-ComparativoCartoes

Teste o componente:

[COMPONENTE AQUI]

## Instruções de uso do componente


**Variantes do componente**  
Esse componente contem variantes de cores de fundo, de fontes e versões com e sem label e o componente mahoe-button conforme segue:

Background:
- Branco
- Azul
- Preto

Fontes:
- Automática                    - default, se altera por padrão dependendo da cor de fundo
- Estilo Fonte Azul             - deixa a fonte com a cor "Primary Brand" do DS
- Estilo Fonte Branco           - deixa a fonte com a cor "Neutral Light" do DS
- Estilo Fonte Neutral Dark     - deixa a fonte com a cor "Neutral Dark" do DS
- Estilo Fonte body-2           - deixa a fonte com o estilo "typography-body-2" do DS  

*Obs.:*
- Deixe em FullScreen para mais opções aparecerem na dialog
- Os estilos não aparecem na dialog, apenas no próprio componente
- Para alterar de volta para a fonte padrão, basta deixar todos os estilos sem o símbolo de check ✅

Versões Label:
- Com Label
- Sem Label

Versões Botões:
- Com botões
- Sem botões  

O estilo do Mahoe-Button precisa ser **Secondary** e **Medium**, o comportamento em hover está sendo feito via código seguindo o figma.

Para visualição dessas variantes veja no [FIGMA](https://www.figma.com/file/CvO1OUqdbSXp6UU1Hn2Bi9/DS-Mahoe---Mkt-Lib?type=design&node-id=368-151372&t=PoMQnaReYcCami5q-4)

[IMAGEM NUMERADA]

Dialog (modal de edição)

[IMAGEM DIALOG]

1 - Palavra Destaque  
- Campo do tipo texto simples  
Configuração na Dialog (modal de edição):  
Aba: Textos  
Campo: Palavra Destaque  

2 - Titulo
- Campo do tipo texto simples  
Configuração na Dialog (modal de edição):  
Aba: Textos  
Campo: Título  

3 - Cards  
- Possui 4 abas, sendo uma para cada um dos cards:  
Configuração na Dialog (modal de edição, igual para todas as abas):  
Aba: Cards > Card X (Onde X representa o índice/número do card desejado)  

4 - Label (primeiro card)
- Campo do tipo texto simples  
Configuração na Dialog (modal de edição):  
Aba: Cards > Card 1  
Campo: Label do cartão  

5 - Título
- Campo do tipo texto simples  
Configuração na Dialog (modal de edição):  
Aba: Cards > Card X (Onde X representa o índice/número do card desejado)  
Campo: Título  

6 - Parágrafo (Frase informativa)  
- Campo do tipo texto simples  
Configuração na Dialog (modal de edição):  
Aba: Cards > Card X (Onde X representa o índice/número do card desejado)  
Campo: Frase informativa  

7 - Parágrafo (Lista de marcadores)
- Campo do tipo rich text  
Configuração na Dialog (modal de edição):  
Aba: Cards > Card X (Onde X representa o índice/número do card desejado)  
Campo: Texto do Card  

8 - Botão
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


### Definições de SEO e Acessibilidade
Aba SEO:

- Definições das tags HTML referente aos campos: Palavra destaque e Titulo
- As configurações dos botões se encontram na dialog específica de cada botão

Acessibilidade:

- Até o momento não foi detectada a necessidade de texto alternativo para esse componente.
