<template>
  <tr v-if="this.$parent.editPerson != person.id">
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
        @click.prevent="DeletePerson(person.id)"
        class="btn btn-danger"
        >Delete</a
      >
    </td>
  </tr>
</template>

<script>
import EditComponent from "./EditComponent";
export default {
  name: "ShowComponent",

  data() {
    return {

    };
  },

  props: [
    'person'
  ],

  mounted() {
    
  },

  methods: {
    EditPerson(id, name, age, job) {
      this.$parent.editPerson = id;
      let edutName = `edit_${id}`;
      let fullEditName = this.$parent.$refs[edutName][0];
      fullEditName.name = name;
      fullEditName.age = age;
      fullEditName.job = job;
    },
    DeletePerson(id) {
      axios.delete(`/api/people/${id}`).then((res) => {
        this.$parent.getPeople();
      });
    }
  },

  computed: {},
};
</script>

<style scoped>
</style>