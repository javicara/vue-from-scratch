Vue.component('dolar',{
    data() {
        return {
            valor:''
        }
    },
    methods: {
        async calcularValor(){
            try{
                const data=await fetch('https://6rjzpylur6.execute-api.us-east-1.amazonaws.com/API/dolarventa')
                const json = await data.json();
                console.log(json)
                this.valor = await json;
            }
            catch(e){
                //error 
                console.log(e) 
            }
            
            
        }
    },
    mounted() {
       // console.log('mounted del componente');
      this.calcularValor();  
    },
    template: `
    <div>
        <h2> probanding dolar {{valor}}</h2>
        <button @click="calcularValor">Calcular papapurri</button>
        <p> era del ejemplo de watchers pero explico como hacer un fetch y le mande</p> 
    </div>


    `
})