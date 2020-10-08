Vue.component('message',{
  data(){
    return{
      message:'Hola Juan'
    }
  },
  template: `
  <div>
  <h1>
      componente Message </h1>
      <p>{{message}} </p>
 
  </div>
  `

});