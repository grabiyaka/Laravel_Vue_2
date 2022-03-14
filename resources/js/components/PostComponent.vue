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
          <tr v-for="(person, index) in oldPersons" :key="index">
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
        {
          name: "Nastya",
          age: 6,
          job: "traveler",
        },
        {
          name: "Sveta",
          age: 19,
          job: "hz",
        },
        {
          name: "Loh",
          age: 21,
          job: "lol",
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

  computed: {
    oldPersons(){
      return this.persons.filter(el => {return el.age > 20})
    }
  },

  components: {
    SinglePostComponent,
  },
};
</script>

<style scoped>
</style>