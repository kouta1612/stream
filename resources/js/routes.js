import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./Views/Home.vue').default
    },
    {
        path: '/about',
        component: require('./Views/About.vue').default
    },
    {
        path: '/contact',
        component: require('./Views/Contact.vue').default
    }
];

export default new VueRouter({
    routes,
    linkExactActiveClass: 'is-active'
});
