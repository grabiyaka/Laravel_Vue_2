import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/people',
            component: () => import('./components/Person/Index'),
            name: 'people.index'
        },
        {
            path: '/people/create',
            component: () => import('./components/Person/Create'),
            name: 'people.create'
        },
        {
            path: '/people/:id/edit',
            component: () => import('./components/Person/Edit'),
            name: 'people.edit'
        },
        {
            path: '/people/show',
            component: () => import('./components/Person/Show'),
            name: 'people.show'
        }
    ]
})