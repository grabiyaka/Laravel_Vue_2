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
          <tr v-if="editPerson != person.id">
            <th scope="row">{{ person.id }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
            <td>
              <a
                href="#"
                @click.prevent="
                  EditPerson(person.id, person.name, person.age, person.job)
                "
                class="btn btn-success"
                >Edit</a
              >
            </td>
            <td>
              <a
                href="#"
                @click.prevent="
                  DeletePerson(person.id)
                "
                class="btn btn-danger"
                >Delete</a
              >
            </td>
          </tr>
          <tr v-if="editPerson == person.id">
            <th scope="row">{{ person.id }}</th>
            <td><input type="text" v-model="name" class="form-control" /></td>
            <td><input type="text" v-model="age" class="form-control" /></td>
            <td><input type="text" v-model="job" class="form-control" /></td>
            <td>
              <a
                href=""
                @click.prevent="updatePerson(person.id)"
                class="btn btn-success"
                >Update</a
              >
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
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
    this.getPeople();
  },

  methods: {
    EditPerson(id, name, age, job) {
      this.editPerson = id;
      this.name = name;
      this.age = age;
      this.job = job;
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
          console.log(res);
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
  },

  computed: {},

  components: {},
};
</script>

<style scoped>
</style>