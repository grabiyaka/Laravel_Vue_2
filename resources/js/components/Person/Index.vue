<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Job</th>
          <th scope="col">Edit</th>
           <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="person in people">
          <tr>
            <th scope="row">{{ person.id }}</th>
            <td> <router-link :to="{name: 'people.show', params: {id: person.id}}">{{ person.name }}</router-link></td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
            <td><router-link :to="{name: 'people.edit', params: {id: person.id}}">Edit</router-link></td>
            <td><a class="btn btn-outline-danger" @click.prevent="$store.dispatch('deletePerson', person.id)">Delete</a></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>


export default {
  name: "Index",

  data() {
    return {
      //people: [],
    };
  },

  mounted() {
    this.$store.dispatch('getPeople')
  },

  computed: {
    people(){
      return this.$store.getters.people
    },
  },

  methods: {
    
  },
};
</script>

<style>
</style>