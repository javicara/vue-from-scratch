Vue.component("vmodel", {
  data() {
    return {
      framework: "",
    };
  },
  template: `
      <div>
        <h2>Trabajando con vmodelss</h2>
        <input v-model="framework" v-focus  />
        <p>El framework escogido es: {{ framework }}</p>
      </div>
    `,
});
