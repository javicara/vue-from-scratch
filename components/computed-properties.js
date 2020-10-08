Vue.component('computed-properties',{


  data(){
    return{
      name:'Javon',
      surname:'Caaballo'
    }
  },
  computed:{

    fullname(){
      return `${this.name} ${this.surname} `  ;
    }

  },
  template:`
    <div>
    <h2>TENGO PAJA computed propterties</h2> 
    <p>{{fullname }} </p>
    
    
    </div>
    `



});