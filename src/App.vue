<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>



<script>
export default {
  mounted () {
    /**
    * TODO:
    * - Remover console.log para produção
    * - Atualizar o Manifest.json
    * - Adicionar URL api no .env e .end.dev
    * - Metadados na index.html, alterar favicon
    * - Verificar Lighthouse
    * - Adicionar google analitycs
    */
    let MSG = process.env.NODE_ENV === 'development' ? `Ambiente em DEV 😎` : `Ops! 😐  Cuidado.`
    console.log("%c%s", "color: #364860; background: #f6f6f6; font-size: 12px; padding: 8px;", `${MSG}`)
  }
}
</script>


<style lang="scss">
  @import "@/style/main.scss";
  body { 
    background-color: black;
    color: #fff;
  }
</style>

