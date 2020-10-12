Vue.component('load-dynamic-components', {
  data () {
    return {
      components: ['cmp1', 'cmp2', 'cmp3'],
      currentComponent: 'cmp1'
    }
  },
  methods: {
    changeComponent (cmp) {
      this.currentComponent = cmp;
    }
  },
  template: `
    <div>
        <h2>Componentes dinámicos</h2>
        <button style="margin-bottom: 4px;" v-for="(cmp,index) in components" @click="changeComponent(cmp)">
           indice pa joder ({{index +1}}) | Seleccionar {{ cmp }}
           
           </button>
          
        <component :is="currentComponent" />
    </div>
  `
})