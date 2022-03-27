<template>
  <div class="w-25" v-if="person">
    <div>Edit</div>
    <div class="mb-3">
      <input
        type="text"
        placeholder="name"
        v-model="person.name"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <input
        type="number"
        placeholder="age"
        v-model="person.age"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        placeholder="job"
        v-model="person.job"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <input
        :disabled="!isDisabled"
        @click.prevent="
          $store.dispatch('update', {
            id: person.id,
            name: person.name,
            age: person.age,
            job: person.job,
          })
        "
        type="submit"
        value="Edit"
        class="btn btn-primary"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",

  mounted() {
    //console.log(this.$route.params);
    this.$store.dispatch("getPerson", this.$route.params.id);
  },

  methods: {
    update() {
      axios
        .patch(`/api/people/${this.$route.params.id}`, {
          name: this.name,
          age: this.age,
          job: this.job,
        })
        .then((res) => {
          this.$router.push({
            name: "people.show",
            params: { id: this.$route.params.id },
          });
        });
    },
  },

  computed: {
    isDisabled() {
      return this.person.name && this.person.age && this.person.job;
    },
    person() {
      return this.$store.getters.person;
    },
  },
};
</script>

<style>
</style>