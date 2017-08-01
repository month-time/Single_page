var acfun_data;
function correct_data(){
    
    for(var i=0;i<acfun_data.length;i++){
        acfun_data[i].url="#"+acfun_data[i].url;
    }
}
const Foo = {
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
const Home = { 
    template: '<page_nav></page_nav>',
    beforeRouteLeave (to, from, next) {
        this.$el.className="leaves";
        next();
    }
};
const Elsa = {
    template: '<Elsa></Elsa>',
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
  { path: '/foo', component: Foo },
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