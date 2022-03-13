<template>
  <div>
    <single-post-component></single-post-component>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in persons">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="ohMy()">Click me pls</button>
  </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
  name: "PostComponent",

  data() {
    return {
      persons: [
        {
          name: "Vasya",
          age: 20,
          job: "teacher",
        },
        {
          name: "Vovan",
          age: 50,
          job: "nuhachBebru",
        },
        {
          name: "Ivan",
          age: 98,
          job: "fiksik",
        },
      ],
    };
  },

  methods: {
    sayHello() {
      console.log("Hello");
    },
    ohMy() {
      console.log("Ohh..Myyy..");
    },
  },

  computed: {},

  components: {
    SinglePostComponent,
  },
};
</script>

<style scoped>
</style>