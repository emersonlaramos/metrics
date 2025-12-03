Essa documentação tem como finalidade explicar como foi implementado na AEM, o Mahoe-Badge do Design System do Banco PAN.

Documentação DS - Mahoe badge

Implementação na AEM (Adobe Experience Manager)

Uso
Caso seja necessário usar separado, pesquise por:
Nome AEM: DS--Mahoe-Badge
Grupo AEM: DS Components

O componente em si, ja estará implementado em outros componentes, separadamente pronto para para edição individual, segue exemplo:

Opções de edição
Texto principal do Botão

Ícone do botão, contempla posições e imagem em SVG


Estilo dda Badge
O modo tem duas opções, que são

Herdar - Quando o componente principal (pai) contém variações de cores, a lógica para variar o modo fica automática.

Independente - Caso o usuário queira ter mais liberdade para estilizar ou quando o layout sair do padrão dos layouts hoje desenhados e o modo HERDAR, não atender

Variante e Tamanho seguem padrão do componente do DS


Comportamento da Badge

Informação - Campo de texto simples
Descrição - Campo de texto simples
Icone - SVG apenas

SEO

Campos para preenchimento e comportamento SEO

 

Para DEVs
Repositório: webapp--adobe-experience-ds
Nome AEM: DS--Mahoe-Badge
Grupo AEM: DS Components


Como implementar
Se o seu projeto deve ter configurado no Cloud Manager o projeto webapp--adobe-experience-ds como dependência - VER AQUI

Para usar o componente Mahoe-Button apenas use o seguinte HTML na parte desejada.

HTML

```
  <div data-panelcontainer="${wcmmode.edit}">
    <sly data-sly-resource="${'Mahoe-Badge' @ resourceType='/apps/webapp--adobe-experience-ds/components/PAN/shared/Mahoe-Badge', selectors=[properties.colorVariant]}" />
  </div>

```
OBS: Se o seu componente principal (pai) não tem variações de cores (backgrounds - fundos), pode-se remover o “selectors=[properties.colorVariant]" do código acima.


