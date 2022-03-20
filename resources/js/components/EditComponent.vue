<template>
  <tr v-if="this.$parent.editPerson == person.id">
    <th scope="row">{{ person.id }}</th>
    <td><input type="text" v-model="name" class="form-control" /></td>
    <td><input type="text" v-model="age" class="form-control" /></td>
    <td><input type="text" v-model="job" class="form-control" /></td>
    <td>
      <a @click.prevent="updatePerson(person.id)" class="btn btn-success"
        >Update</a
      >
    </td>
  </tr>
</template>

<script>
export default {
  name: "EditComponent",

  data() {
    return {
      name: "",
      age: null,
      job: "",
    };
  },

  props: ["person"],

  mounted() {},

  methods: {
    updatePerson(id) {
      axios
        .patch(`/api/people/${id}`, {
          name: this.name,
          age: this.age,
          job: this.job,
        })
        .then((res) => {
          this.$parent.getPeople();
          this.$parent.editPerson = null;
        });
    },
  },

  computed: {},

  components: {},
};
</script>

<style scoped>
</style>