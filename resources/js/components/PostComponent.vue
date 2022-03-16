<template>
  <div>
    <create-component></create-component>
    <!-- <single-post-component></single-post-component> -->
    <IndexComponent></IndexComponent>
    <div>
      <!-- <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">age</th>
            <th scope="col">job</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in persons">
            <th scope="row">{{ person.id }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
          </tr>
         
        </tbody>
      </table> -->
    </div>
  </div>
</template>

<script>
// import SinglePostComponent from "./SinglePostComponent.vue";
import CreateComponent from "./CreateComponent";
import IndexComponent from "./IndexComponent"

export default {
  name: "PostComponent",

  data() {
    return {
      persons: null,
    };
  },

  mounted() {
    
  },

  methods: {
   
  },

  computed: {},

  components: {
    // SinglePostComponent,
    CreateComponent,
    IndexComponent,
  },
};
</script>

<style scoped>
</style>