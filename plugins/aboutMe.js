const AboutMe = {
  install: (Vue, options) => {
    const { job } = options;
    Vue.prototype.$me = (name, age) => {
      return `Mi nombre es ${name}, tengo ${age} años y trabajo de ${job}`;
    };
  },
};

Vue.use(AboutMe, {
  job: "ciclista y gitano intentando aprender vue",
});
