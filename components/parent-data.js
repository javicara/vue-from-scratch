Vue.component('parent-data', {
    template: `
      <div>
        <h2>Acceso a datos del cmp padre desde el cmp hijo</h2>
        <h3>cmp = component</h3>
        <p>{{ $parent.appName }}</p>
      </div>
    `
})