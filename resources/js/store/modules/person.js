import router from "../../router";

const state = {
    person: null,
    people: null
}

const getters = {
    person: () => state.person,
    people: () => state.people
}

const actions = {
    getPerson({state, commit, dispatch}, id) {
        console.log(1111111);
        axios.get(`/api/people/${id}`).then((res) => {
            console.log(222222222222);
          commit('setPerson', res.data.data)
        });
      },
      getPeople({commit}) {
        axios.get("/api/people").then((res) => {
            commit('setPeople', res.data.data)
        });
      },
      deletePerson({dispatch},id){
        axios.delete(`/api/people/${id}`)
        .then(res => {
          dispatch('getPeople')
        })
      },
      update({}, data) {
        axios
          .patch(`/api/people/${data.id}`, {
            name: data.name,
            age: data.age,
            job: data.job,
          })
          .then((res) => {
            router.push({
              name: "people.show",
              params: { id: data.id },
            });
          });
      },

      store({}, data){
        axios.post('/api/people', {name: data.name, age: data.age, job: data.job} )
        .then(res => {
            router.push({name: 'people.index'})
        })
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    },
//     setPeople(state, people) {
//         state.people = people
//     }
    }

export default {
    state, getters, actions, mutations
}