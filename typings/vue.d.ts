import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $axios: any;
        $route: any;
        $router: any;
        $notify: any;
    }
}
