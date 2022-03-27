<template>
  <div v-if="person">
    <div>Name: {{ person.name }}</div>
    <div>Age: {{ person.age }}</div>
    <div>job: {{ person.job }}</div>
    <div><router-link :to="{name: 'people.edit', params: {id: person.id}}">Edit</router-link></div>
  </div>
</template>

<script>
export default {
  name: "Show",

  data() {
    return {
      //person: {},
    };
  },

  computed: {
    person(){
      return this.$store.getters.person
    }
  },

  mounted() {
    this.$store.dispatch('getPerson', this.$route.params.id)
    //this.getPerson();
  },

  methods: {
    // getPerson(id) {
    //   axios.get(`/api/people/${this.$route.params.id}`).then((res) => {
    //     console.log(res);
    //     this.person = res.data.data;
    //   });
    // },
  },
};
</script>

<style>
</style>