<template>
    <div class="list-fonts">
        <div class="exemple">
            <p> <strong>Parágrafo</strong> - The quick brown  over the lazy dog. </p>
            <h5><strong>h5</strong> - The quick brown  over the lazy dog.</h5>
            <h4><strong>h4</strong> - The quick brown  over the lazy dog.</h4>
            <h3><strong>h3</strong> - The quick brown  over the lazy dog.</h3>
            <h2><strong>h2</strong> - The quick brown  over the lazy dog.</h2>
            <h1><strong>h1</strong> - The quick brown  over the lazy dog.</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tipografia',
}
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
Ou se quiser pode ser usado como classes auxiliadoras
```html
    <span class='_heading-1' >h1 - The quick brown  over the lazy dog.</span>
    <span class='_heading-2' >h2 - The quick brown  over the lazy dog.</span>
    <span class='_heading-3' >h3 - The quick brown  over the lazy dog.</span>
    <span class='_heading-4' >h4 - The quick brown  over the lazy dog.</span>
    <span class='_heading-5' >h5 - The quick brown  over the lazy dog.</span>
    <span class='_heading-p' >h5 - The quick brown  over the lazy dog.</span>
```
</docs>