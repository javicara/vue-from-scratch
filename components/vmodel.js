Vue.component('vmodel', {
    data () {
        return {
          framework: ''
        }     
    },
    template: `
      <div>
        <h2>Trabajando con vmodelss</h2>
        <input v-model="framework"  />
        <p>El framework escogido es: {{ framework }}</p>
      </div>
    `
})
