# Formulario-Simulador-FGTS-Imagem
## Instruções de uso do componente

**Variantes do componente**
Esse componente contem variantes de cores são elas:

Background:
- Azul
- Branco
- Cinza
- Preto

Para visualição dessas variantes veja no [FIGMA](https://www.figma.com/file/CvO1OUqdbSXp6UU1Hn2Bi9/DS-Mahoe---Mkt-Lib?type=design&node-id=368-151372&t=PoMQnaReYcCami5q-4)

1 - Subtitulo

- Campo do tipo texto simples
- Limitado a 40 caracteres (igual figma)
Configuração na Dialog (modal de edição):
Aba: Textos
Campo: Subtítulo

2 - Titulo

- Campo do tipo texto simples
- Limitado a 56 caracteres (igual figma)
Configuração na Dialog (modal de edição):
Aba: Textos
Campo: Título

3 - Disclaimer

- Campo do tipo texto simples
- Limitado a 200 caracteres (igual figma)
Configuração na Dialog (modal de edição):
Aba: Textos
Campo: Disclaimer

3 - Botão

- Campo de texto simples
- Limite de 20 caracteres (mobile)
- Limite de 30 caracteres (desktop)
- Definição de Data-track (SEO)
- Definição de Title (SEO)
- Definição de URL (arquivo ou página)
Configuração na Dialog (modal de edição):
Aba: Botões

4 - Link apoio

- Limite de 20 caracteres
- Definição de Data-track (SEO)
- Definição de URL (arquivo ou página)
- Definição de Title (SEO)
Configuração na Dialog:
Aba: Botões
Campo: Link Apoio

5 - Imagem Destaque

- Resolução base: 656x561px (área útil)
- Necessário fundo transparente
- Ocupar 6 colunas dentro do container
- Necessário definir atributo ALT
- Aceita apenas .WEBP
Configuração na Dialog (modal de edição):
Aba: Imagem

6 - Configurações

- Campo referente as configurações do formulario (EndPoint)
- Campo do tipo texto simples
Configuração na Dialog (modal de edição):
Campo: Endpoint (URL) para consumo/envio de dados (API)
Aba: Configurações

### Definições de SEO e Acessibilidade
Aba SEO:

- ID da seção (para uso quando algum botão precisar de scroll)
- Definições das tags HTML referente aos campo: Titulo
- As configurações do botão se encontram na aba do mesmo


Aba Acessibilidade:

A FAZER

### Observações para DEV

Todo o combo do select e montado via js em um array chamado: $options seguindo premissas do DS.