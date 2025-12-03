# Card-Carrossel-ComparativoCartoes-CardVitrine

Teste o componente:

[COMPONENTE AQUI]

## Instruções de uso do componente

**Variantes do componente**  
Esse componente contem variantes de cores de fundo conforme segue:

Cores de fundo:
- Branco
- Azul
- Preto


Para visualição dessas variações acesse o [FIGMA](https://www.figma.com/file/kxyutGonYeW4SfWLXg4Zaa/UX?type=design&node-id=1136-37135&mode=dev)

[IMAGEM NUMERADA]

Dialog (modal de edição)

[IMAGEM DIALOG]

1 - Textos  

A - **Palavra Destaque**

    - Campo do tipo texto simples  

    Configuração na Dialog (modal de edição):  
    Aba: Textos  
    Campo: Palavra Destaque  
&nbsp;


B - **Título**

    - Campo do tipo texto simples  

    Configuração na Dialog (modal de edição):  
    Aba: Textos  
    Campo: Titulo  
&nbsp;


C - **Texto dos links frontais**

    - Campo do tipo texto simples  

    Configuração na Dialog (modal de edição):  
    Aba: Textos  
    Campo: Texto dos links de virar o verso do card  
&nbsp;


D - **Texto dos links de verso**

    - Campo do tipo texto simples  

    Configuração na Dialog (modal de edição):  
    Aba: Textos  
    Campo: Texto dos links de virar a frente do card  
&nbsp;


E - **Disclaimer Principal do Componente**

    - Componente Mahoe-Link  
    Obs.: É possível ocultar esse disclaimer usando a checkbox diretamente acima do mesmo  

    Configuração na Dialog (modal de edição):  
     - Possui dialog própria  
&nbsp;


2 - Carrossel - Multifield  

Na aba **Carrossel** é possível incluir a quantidade desejada de cards ao pressionar o botão "Add".  
Para cada card serão exibidas as seguintes opções:  

F - **Título do Card**

    - Campo do tipo texto simples  

    Configuração na Dialog (modal de edição):  
    Aba: Carrossel > Textos Compartilhados
    Campo: Título do Card  
&nbsp;


G - **Subtexto do Card**

    - Campo do tipo texto simples  

    Configuração na Dialog (modal de edição):  
    Aba: Carrossel > Textos Compartilhados
    Campo: Sub-Texto do Card  
&nbsp;


H - **Imagem** (com texto alternativo)

    - Resolução: 312x304 (não é necessário se preocupar tanto com o tamanho, a imagem sempre irá se adequar, mas mantenha o elemento principal no centro da imagem usada)
    - Necessário definir atributo ALT (Texto alternativo da imagem para acessibilidade)  
    - Aceita apenas .WEBP  
    
    Configuração na Dialog (modal de edição):  
    Aba: Carrossel > Frente  
    Campo: FRENTE: Imagem WEBP (312x304)  
&nbsp;


I - **Data Track do link frontal do Card**

    - Campo do tipo texto simples  

    Configuração na Dialog (modal de edição):  
    Aba: Carrossel > Frente  
    Campo: FRENTE: Data Track do link de girar o card
&nbsp;


J - **Botão**

    - Campo de texto simples
    - Limite de 20 caracteres
    - Definição de Data-track (SEO), Href (link ou ID da seção) e Target
    Configuração na Dialog (modal de edição):
    Aba: Frente


K - **Bullets do verso do Card**

    - Campo do tipo rich text

    Configuração na Dialog (modal de edição):  
    Aba: Carrossel > Verso  
    Campo: VERSO: Bullets do Card
&nbsp;


L - **Disclaimer do Card**

    - Campo do tipo rich text
    Obs.: É possível ocultar cada disclaimer usando a checkbox diretamente acima do mesmo  

    Configuração na Dialog (modal de edição):  
    Aba: Carrossel > Verso  
    Campo: VERSO: Disclaimer do cartão
&nbsp;


M - **Data Track do link do verso do Card**

    - Campo do tipo texto simples  

    Configuração na Dialog (modal de edição):  
    Aba: Carrossel > Verso  
    Campo: VERSO: Data Track do link de girar o card  
&nbsp;


N - **Botão**

    - Campo de texto simples
    - Limite de 20 caracteres
    - Definição de Data-track (SEO), Href (link ou ID da seção) e Target
    Configuração na Dialog (modal de edição):
    Aba: Verso


### Definições de SEO e Acessibilidade
Aba SEO:

- ID da seção (para uso quando algum botão precisar de scroll)
- Definições das tags HTML referente aos campos: Palavra destaque e Titulo

Acessibilidade:

- Definições de texto alternativo para os seguintes campos: Imagem
