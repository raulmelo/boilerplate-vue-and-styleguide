<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>

    </h4>

  </div>
</template>

<script>

export default {
  data () { 
    return {
      exemplo: `aqui`
    }
  },
  mounted () { 
    console.log(process.env.NODE_ENV)
  }
}
</script>
