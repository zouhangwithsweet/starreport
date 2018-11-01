import Vue from 'vue'
import HelloComponent from './components/Hello'
import World from './components/World'

let v = new Vue({
  el: "#app",
  template: `
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        <World />
    </div>`,
  data: {
    name: "World"
  },
  components: {
    HelloComponent,
    World
  }
});