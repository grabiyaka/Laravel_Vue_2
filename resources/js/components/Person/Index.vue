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
            <td><a class="btn btn-outline-danger" @click.prevent="deletePerson(person.id)">Delete</a></td>
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
      people: [],
    };
  },

  mounted() {
    this.getPeople();
  },

  methods: {
    getPeople() {
      axios.get("/api/people").then((res) => {
        this.people = res.data.data;
      });
    },

    deletePerson(id){
      axios.delete(`/api/people/${id}`)
      .then(res => {
        this.getPeople();
      })
    }
  },
};
</script>

<style>
</style>