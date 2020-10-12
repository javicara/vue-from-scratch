Vue.component("props", {
  props: {
    // se pueden definir con un array ['name', 'surname' ]

    // asi funcionaria y los podes llamar re faciul como abajo.
    //pero no tebnes la condicion del tipo de archivo y si es requerida o bno

    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      validator: (value) => {
        if (value < 18) {
          console.warn("No eres mayor de edad...");
          return false;
        }
        return true;
      },
    },
  },
  template: `
      <div>
        <h2>Props con Vuejs 2</h2>
        <p>{{ name }} {{ surname }}, Edad: {{ age }}</p>
      </div>
    `,
});
