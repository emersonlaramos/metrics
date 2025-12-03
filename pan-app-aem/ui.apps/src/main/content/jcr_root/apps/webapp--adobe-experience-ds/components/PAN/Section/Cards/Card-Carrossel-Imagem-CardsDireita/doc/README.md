# Card-Carrossel-Imagem-CardsDireita

Teste o componente:

[COMPONENTE AQUI]

## Instruções de uso do componente 

**Variantes do componente**  
Esse componente contem variantes de posição da imagem e de cores de fundo conforme segue:

Posição da imagem:
- Esquerda
- Direita

Background:
- Branco
- Cinza
- Azul
- Preto

Para visualição dessas variações acesse o [FIGMA](https://www.figma.com/file/CvO1OUqdbSXp6UU1Hn2Bi9/%E2%9D%96-DS-Mahoe---Mkt-Lib?node-id=2%3A2&mode=dev)

[IMAGEM NUMERADA]

Dialog (modal de edição)

[IMAGEM DIALOG]

1 **Imagem da Coluna Esquerda**

    - Resolução: 456x678 (resolução minina sugerida para uma boa qualidade)
    - Necessário definir atributo ALT (Texto alternativo da imagem para acessibilidade)
    - Aceita apenas .WEBP  
    
    Configuração na Dialog (modal de edição):  
    Aba: Imagem  
&nbsp;

2 **Palavra Destaque**  

    - Campo do tipo texto simples  

    Configuração na Dialog (modal de edição):  
    Aba: Textos  
    Campo: Palavra Destaque  
&nbsp; 

3 **Título**

    - Campo do tipo texto simples  
    (Obs.: É necessário o preenchimento de dois títulos, sendo um para desktop e um para mobile)

    Configuração na Dialog (modal de edição):  
    Aba: Textos  
    Campo: Título Desktop / Título Mobile
&nbsp; 

4 **Cards**

    Essa aba permite criar a quantidade desejada de elementos ao pressionar o botão "Add".  
    (Obs.: Lembre-se que esse componente mostra 3 cards por vez na versão desktop e o layout ficará melhor com um número de cards múltiplo de 3)
    
    4.1 - Necessário preencher o parágrafo de cada card
    
    Configuração na Dialog (modal de edição):  
    Aba: Cards  
&nbsp; 

5 **Botão (Mobile)**

    O botão possui componente próprio, onde é possível configurar:  
    - Configurações Gerais:  
        - Texto do botão  
    - Ícone:  
        - Posição do ícone  
        - Imagem do ícone  
    - Estilo:  
        - Modo (Herdar, sem modo, dark, blue)  
        - Tamanho (Extra pequeno, pequeno, médio, grande)  
    - Comportamento do Botão:  
        - Link ou scroll para seção escolhida  
        - Target (Mesma página ou nova aba)  
&nbsp; 


### Definições de SEO e Acessibilidade
Aba SEO:

- ID da seção (para uso quando algum botão precisar de scroll)
- Definições das tags HTML referente aos campos: Palavra destaque e Titulo

Acessibilidade:

- Texto alternativo para a imagem da coluna esquerda