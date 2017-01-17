import Hello from './components/Hello.vue'

Hello.install=function(Vue){
    Vue.component(Hello.name,Hello)
}

export default Hello