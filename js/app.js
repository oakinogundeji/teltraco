'use strict';
//=============================================================================
/**
 * dependencies
 */
//=============================================================================
const
    Vue = require('vue'),
    VueRouter = require('vue-router');
//=============================================================================
/**
 * config
 */
//=============================================================================
Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
Vue.use(VueRouter);
//=============================================================================
/**
 * router
 */
//=============================================================================
const
    routes = [
        {
            path: '/',
            name: 'home',
            component: require('./components/home')
        },
        {
            path: '/about_us',
            name: 'about_us',
            component: require('./components/about_us')
        },
        {
            path: '/commodities',
            name: 'commodities',
            component: require('./components/commodities')
        },
        {
            path: '/contact_us',
            name: 'contact_us',
            component: require('./components/contact_us')
        }
    ],
    router = new VueRouter({routes});
//=============================================================================
/**
 * components
 */
//=============================================================================
const
    AppNav = require('./components/app_nav'),
    AppFooter = require('./components/app_footer');
//=============================================================================
/**
 * base VM
 */
//=============================================================================
const VM = new Vue({
    router,
    components: {
        'app-nav': AppNav,
        'app-footer': AppFooter
    }
});
//=============================================================================
/**
 * mount VM to View
 */
//=============================================================================
VM.$mount('#app');
//=============================================================================
