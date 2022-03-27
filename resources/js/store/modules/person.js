const state = {
    person: null
}

const getters = {
    person: () => state.person
}

const actions = {
    getPerson({state, commit, dispatch}, id) {
        console.log(1111111);
        axios.get(`/api/people/${id}`).then((res) => {
            console.log(222222222222);
          commit('setPerson', res.data.data)
        });
      },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    }
}

export default {
    state, getters, actions, mutations
}