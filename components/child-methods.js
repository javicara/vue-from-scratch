Vue.component('child-methods', {
    data () {
        return {
            cmpName: 'Mostrando desde un metodo de un componente hijo'
        }  
    },
    methods: {
       showCmpName(){
           console.log("Llamada el metodos CMP name",this.cmpName)
       }
    },
    template: `
      <div>
        <h2>Acceso a métodos del cmp hijo desde el cmp padre</h2>
      </div>
    `
});