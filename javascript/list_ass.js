//exports.count = list;
function lists() {
    var abc='\
    <transition name="slide-fade">\
        <div id="be_login">\
    	<div class="top_header">\
      		<h3>Login</h3>\
      		<h5>Sign in to continue to your profile page.</h5>\
    	</div>\
        <div class="inputs">\
        	<form id="login" action="../php/login.php" method="post" accept-charset="UTF-8" style="margin-left:6px;">\
				<input type="hidden" name="submitted" id="submitted" value="1"/>\
				<div class="container">\
					<input type="text" name="username" id="username" value="" maxlength="50" size="30" placeholder="昵称"/><br/>\
				</div>\
				<div class="container">\
					<input type="password" name="pwd" id="password" maxlength="50" size="30" placeholder="密码" /><br/>\
				</div>\
				<div class="container">\
					<input type="submit" name="Submit" value="登陆" />\
				</div>\
			</form>\
	        <div class="bottom">\
	          <a href="../view/register.html">注册</a>\
	          <a class="right_a" href="#">忘记密码?</a>\
	        </div>\
        </div>\
        </div>\
    </transition>';
    return abc;
};
Vue.component('Elsa',{
    template:'\
    <transition name="slide-fade">\
    <div>\
        <div class="card_header">\
        <h1>砂の惑星</h1>\
        </div>\
        <div class="card-content">\
        <ul class="list-group">\
            <li class="player-card skyblue">\
                <div class="player-wrapper">\
                <div class="primary">Sakaki</div>\
			    <div class="secondary">Fire</div>\
                </div>\
            </li>\
            <li class="player-card orange">\
                <div class="player-wrapper">\
                <div class="primary">Scorch</div>\
			    <div class="secondary">Fire</div>\
                </div>\
            </li>\
            </ul>\
        </div>\
    </div>\
    </transition>',
    data:function(){
        return{}
    }
});
Vue.component('page_nav',{
    template:'\
    <transition name="slide-fade">\
    <div class="" >\
        <p>Hello App!</p>\
        <em>12121212</em>\
    </div>\
    </transition>',
    data:function(){
        return{}
    }
});
Vue.component('acfun_art',{
    template:'\
        <transition name="slide-fade">\
        <div class="acfun">\
        <h2 class="line_title">Acfun文章</h2>\
        <div class="acfun_area" > \
            <template v-for="x in acfuns">\
            <a :href="x.url">\
            <div class="acfun_term">\
                <p class="acfun_title">{{x.title}}</p>\
                 <hr>\
                <div class="acfun_click">热度：{{x.views}} </div>\
                <div class="acfun_date">时间：{{x.releaseDate}} </div>\
            </div>\
            </a>\
            </template>\
        </div>\
        <div style="clear:both;"></div>\
        </div>\
        </transition>',
    data:function(){
        return{acfuns:acfun_data}
    }
});

Vue.component('ac_page',{
    template:'\
    <transition name="slide-fade">\
    <div class="ac_page">\
        <div class="head"><p class="btn_back" v-on:click="comback">←</p><p>Ac文章区</p></div>\
        <p>{{ac_pages.title}}</p>\
        News Detail - {{$route.params.id}} ......\
        {{ac_pages.title}}\
    </div>\
    </transition>',
    data:function(){
        for(var i=0;i<acfun_data.length;i++){
            if(acfun_data[i].url==("#/a/"+this.$route.params.id)){
                return{ac_pages:acfun_data[i]}
            }
        };       
    },
    methods:{
        comback:function(){
            router.go(-1);
        }
    }          
});
