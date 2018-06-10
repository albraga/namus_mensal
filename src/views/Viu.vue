<template>
  <div>
    <compo-nente :foutside="aleatorio"></compo-nente>
  </div>
</template>

<script>
  import Componente from '../components/Componente.vue';

  export default {
    data() {
      return {
        aleatorio: new Date().getMilliseconds()
      }
    },
    components: {
      'compo-nente': Componente
    }
  }
</script>

<style>

</style>