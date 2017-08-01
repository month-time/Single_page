var acfun_data;
function correct_data(){    
    for(var i=0;i<acfun_data.length;i++){
        acfun_data[i].url="#"+acfun_data[i].url;
    }
}
var animes_data;
const Home = { 
    template: '<Home></Home>',
    beforeRouteEnter (to, from, next) {
        $.ajax({
        url:"../api/anime.json",
        type:"get",
        success: function(data){
            animes_data=data;
            next();
        }
        });    
    }
};
const Login = {
    template: lists() ,
    beforeRouteEnter (to, from, next)  {
    // 对应路由被 confirm 前调用
//         next(vm => {alert("进入新的单元");});
         next();
    },
    beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
        console.log(this.$el);
        next(vm => {alert("在复用的情况下进入新的单元");});
    },
    beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
        console.log(this.$el);
        next();
    }
};
const Register = {
    template: '<Register></Register>',
    beforeRouteEnter (to, from, next)  {
         next();
    }
};
const Elsa = {
    template: '<anime_nav></anime_nav>',
    beforeRouteEnter (to, from, next)  {
    next();
    }
};
const Acfun = {
    template: '<acfun_art></acfun_art>',
    beforeRouteEnter (to, from, next)  {
    $.ajax({
        url:"../api/acfun.json",
        type:"get",
        success: function(data){
            acfun_data=data;
            correct_data();
            next();
        }
    });    
    }
};
const Ac_page = {
    template: '<ac_page></ac_page>',
    beforeRouteEnter (to, from, next)  {
    next();
    },
};
//   路由表
const routes = [
  { path: '/', component: Home },
  { path: '/user', component: Login },
  { path: '/login/register', component: Register },
  { path: '/Elsa', component: Elsa },
  { path: '/a', component: Acfun,name: 'acfun'},
  { path: '/a/:id',component: Ac_page}
];
const router = new VueRouter({
  routes: routes
});
const app = new Vue({
    el: '#app',
    router:router
});