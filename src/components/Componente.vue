<template>
  <div v-cloak>
    <hr>
    <p id="jotaquery"></p>
    <hr>
    <p id="pnativo">{{ title }}</p>
    <p id="autor">{{ author }}</p>
    <hr>
    <p>From outside: {{ foutside }} </p>
    <hr>
    <p>{{ this.$store.getters.getmsg }}</p>
    <button class="btn btn-primary" @click="setmsg_sync">Sync</button>
    <button v-on:click="setmsg_async">Async</button>
    <hr>
    <p> {{ finside }} </p>
    <input v-model="finside">
    <hr>
    <outro-compo></outro-compo>
    <hr>
    <compo-render nome="Braga">5</compo-render>
    <hr>
    <Filho id="filho"></Filho>
    <hr>
    <p> {{ doMyMixin }} </p>
    <hr>
    <button @click="counter++"> --- {{ counter }} --- </button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import api from '../api.js'

  document.title = 'novo título'

  const myMixin = {
    data() {
      return {
        doMyMixin: 'do meu mixin...'
      }
    }
  }

  //global mixin
  Vue.mixin({
    created() {
      document.title = 'from global mixin...'
    }
  })

  const Filho = {
    template: `<div>oi do componente Filho</div>`
  }

  Vue.component('outro-compo', {
    template: `<div><p>{{ cidade }}</p></div>`,
    computed: mapState([
      'cidade'
    ])
  })

  Vue.component('compo-render', {
    render(createElement) {
      return createElement(`h${this.$slots.default[0].text}`, {
        'class': 'nome-da-classe',
        on: {
          click(e) {
            console.log('clicado!')
          }
        }
      }, this.nome)
    },
    props: ['nome']
  })

	export default {
    props: ['foutside','twowaybinding'],
    mixins: [myMixin],
    data() {
      return {
        finside: 'from inside',
        counter: 0
      }
    },
    computed: mapState([
      'title',
      'author'
    ]),
    watch: {
      counter: function() {
        console.log('clicou...')
      }
    },
    methods: {
      setmsg_sync() {
        this.$store.commit('msgMutation', this.finside);
        setTimeout(() => {
          this.$router.push('/about');
        }, 1000)
      },
      //dispatch calls an action
      setmsg_async() {
        this.$store.dispatch('msgAction', this.finside + ' setmsg_async()');
      }
    },
    mounted() {
      document.querySelector('#autor').setAttribute('style', 'color: blue')
      document.getElementById('filho').style.backgroundColor = 'gray'
      let p = document.getElementById('pnativo');
      p.addEventListener('click', function() {
        p.innerHTML = 'novo título no p'
        p.classList.add('classe');
      });
      api.get(this, '90210');
      $('#jotaquery').text("com jQuery!")
    },
    components: {
      Filho
    }
  }
  
  

</script>

<style>
.classe {
  color: red;
}
</style>