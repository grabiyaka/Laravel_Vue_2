<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Job</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="person in people">
          <ShowComponent  :person="person"></ShowComponent>
         <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>

import EditComponent from "./EditComponent"
import ShowComponent from "./ShowComponent"

export default {
  name: "IndexComponent",

  data() {
    return {
      people: [],
      editPerson: null,
      name: "",
      age: null,
      job: "",
    };
  },

  mounted() {
    this.getPeople()

  },

  methods: {
    EditPerson(id, name, age, job) {
      this.editPerson = id;
      let edutName = `edit_${id}`
      let fullEditName = this.$refs[edutName][0]
      fullEditName.name = name;
      fullEditName.age = age;
      fullEditName.job = job;
    },

    getPeople() {
      axios.get("/api/people").then((res) => {
        console.log(res);
        this.people = res.data;
      });
    },
    updatePerson(id) {
      axios
        .patch(`/api/people/${id}`, {
          name: this.name,
          age: this.age,
          job: this.job,
        })
        .then((res) => {
          this.getPeople();
          this.editPerson = null;
        });
    },
    DeletePerson(id) {
      axios
        .delete(`/api/people/${id}`)
        .then((res) => {
          this.getPeople();
        });
    },

    indexLog(){
      console.log('this is index component')
    },
  },

  computed: {},

  components: {
    EditComponent,
    ShowComponent
  },
};
</script>

<style scoped>
</style>