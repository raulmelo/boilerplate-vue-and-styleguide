<template>
    <div class="list-fonts">
        <div class="exemple">
            <p><strong>Parágrafo / 14px</strong> - The quick brown  over the lazy dog. </p>
            <h4><strong>h4 / 15px</strong> - The quick brown  over the lazy dog.</h4>
            <h3><strong>h3 / 22px</strong> - The quick brown  over the lazy dog.</h3>
            <h2><strong>h2 / 25px</strong> - The quick brown  over the lazy dog.</h2>
            <h1><strong>h1 / 45px</strong> - The quick brown  over the lazy dog.</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: "Tipografia"
};
</script>

<style lang="scss" >
.list-fonts {
  .exemple {
    > * {
      margin: 15px 0;
      padding-bottom: 5px;
      border-bottom: 1px solid #f5f5f5;
    }
  }
}
</style>



<docs>

### Fontes do projeto

|Fonte| weigth|
| ------ | ------ |
|Facto| Bold, ligth, Regular|


### Tamanhos de fontes


```jsx noeditor
    <Tipografia/>
```

Ou se quiser pode ser usado como classes auxiliadoras
```html
    <span class='_f-45' >h1 - The quick brown  over the lazy dog.</span>
    <span class='_f-25' >h2 - The quick brown  over the lazy dog.</span>
    <span class='_f-22' >h3 - The quick brown  over the lazy dog.</span>
    <span class='_f-15' >h4 - The quick brown  over the lazy dog.</span>
    <span class='_f-15' >h5 - The quick brown  over the lazy dog.</span>
	<span class='_f-40 _light'> h5 - The quick brown  over the lazy dog</span>
	<span class='_f-40 _strong'> h5 - The quick brown  over the lazy dog</span>
```


</docs>
