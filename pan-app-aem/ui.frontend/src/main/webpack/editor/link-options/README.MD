Configurações adicionais não disponiveis aqui no repositório:

NÂO FAZER NA INSTÂNCIA DO CLOUD MANAGER - NÂO PRECISEI - deixei aqui a titulo de referencia do blog que nos ajudou a realizar essa alteração

No arquivo: **/libs/cq/xssprotection/config.xml**

1. linha **160** dentro de <common-attributes> foi adicionado o seguinte código
```
<attribute name="data-track" description="The Data-track is responsible for adobe analytics">
    <regexp-list>
        <regexp name="[a-zA-Z0-9-_\$]+"/>
    </regexp-list>
</attribute>
```


2. linha **883** adicionar dentro de <!-- Anchor and anchor related tags --> foi adicionado o seguinte código
```
<attribute name="data-track"/>
```
Referência: http://experience-aem.blogspot.com/2017/09/aem-63-touch-ui-extend-rich-text-link-dialog-add-rel-select.html