# Formulário-Pre-Lead

Teste o componente:

[COMPONENTE AQUI]

## Instruções de uso do componente

**Variantes do componente**
Esse componente contem variantes de cores são elas:

Background:
- Azul
- Branco
- Cinza
- Preto



Para visualição dessas variantes veja no [FIGMA](https://www.figma.com/file/CvO1OUqdbSXp6UU1Hn2Bi9/DS-Mahoe---Mkt-Lib?type=design&node-id=368-151372&t=PoMQnaReYcCami5q-4)

[IMAGEM NUMERADA]

Dialog (modal de edição)

[IMAGEM DIALOG]

1 - Titulo

- Campo do tipo texto simples
- Limitado a 48 caracteres (igual figma)
Configuração na Dialog (modal de edição):
Aba: Textos
Campo: Título

2 - Checkbox

- Limite de 46 caracteres
- Textos sempre referentes ao aceite do usuário em receber comunicações
Configuração na Dialog:
Aba: Textos
Campo: Texto Checkbox

3 - Botão Enviar

- Campo de texto simples
- Limite de 11 caracteres
- Definição de Data-track (SEO)
Configuração na Dialog (modal de edição):
Aba: Botão

5 - Link apoio

- Limite de 30 caracteres
- Limite de 11 caracteres
- Definição de Data-track (SEO)
- Definição de URL (arquivo ou página)
Configuração na Dialog:
Aba: Link Apoio
Campo: Link Apoio

5 - Imagem Destaque

- Resolução base: 375x700px (área útil)
- Necessário fundo transparente
- Ocupar 4 colunas dentro do container
- Necessário definir atributo ALT
- Aceita apenas .WEBP
Configuração na Dialog (modal de edição):
Aba: Imagem

6 - Titulo Feedback

- Campo referente a tela de sucesso (feedback) após o envio com sucesso do formulário
- Campo do tipo texto simples
- Limitado a 48 caracteres (igual figma)
Configuração na Dialog (modal de edição):
Aba: Textos
Campo: Titulo Feedback

7 - Texto Feedback

- Campo referente a tela de sucesso (feedback) após o envio com sucesso do formulário
- Campo do tipo texto simples
- Limitado a 100 caracteres (igual figma)
Configuração na Dialog (modal de edição):
Aba: Textos
Campo: Texto Feedback

8 - Texto Feedback Bloco QRCODE

- Campo referente a tela de sucesso (feedback) após o envio com sucesso do formulário
- Campo do tipo texto simples
- Limitado a 45 caracteres (igual figma)
Configuração na Dialog (modal de edição):
Aba: Textos
Campo: Texto Feedback QRCODE

5 - Imagem QRCODE (Imagem do QRCODE)

- Resolução base: 100x100px (área útil)
- Necessário fundo transparente
- Aceita apenas .WEBP
Configuração na Dialog (modal de edição):
Aba: Imagem QR CODE

10 - Button Feddback (Somente Mobile)

- Campo de texto simples
- Limite de 20 caracteres
- Definição de Data-track (SEO)
- Definição de comportamento (link ou scroll para seção escolhida)
- Pode ou não conter icone
Configuração na Dialog (modal de edição):
Aba: Botão Feddback

### Definições de SEO e Acessibilidade
Aba SEO:

- ID da seção (para uso quando algum botão precisar de scroll)
- Definições das tags HTML referente aos campo: Titulo
- As configurações do botão se encontram na aba do mesmo


Aba Acessibilidade:

A FAZER

### Observações para DEV

Caso seja necessário utilizar um componente de input que contenha algum tipo de validação
mostrando alguma mensagem de erro se faz necessária a utilização de um wrapper para esse input com a classe "--required-input" para que quando a mesnagem de erro seja exibida o layout não sofra nenhuma alteração:

 <div class="form-group --required-input">
    <mahoe-input data-js="pre-lead-email-input" label="E-mail" placeholder="nome@email.com" type="text" ></mahoe-input>                               
</div> 