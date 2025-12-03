# Breadcrumb


### Observações para DEV
Foi criado o arquivo breadcrumb.html na pasta local para poder incluir "data-cmp-is" para fins de estilização, a estrutura utilizada é do componente nativo Adobe Breadcrumb V3.

Para inclusão do componente bradcrumb em outros componentes utiliza esta estrutura:

```html
<div class="breadcrumb">
    <sly data-sly-resource="${'Breadcrumb-NomeSeuComponente' @ resourceType='/apps/webapp--adobe-experience-ds/components/AEM/breadcrumb'}" />
</div>
```