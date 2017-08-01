//exports.count = list;
Vue.component('anime_nav',{
    template:`\
    <transition name="slide-fade">\
    <div class="comic_list" >\
        <div class="head"><p class="btn_back" v-on:click="comback">返回</p><p>本周更新动漫</p></div>\        
        <div class="dropdown">\
            <input id="comic_list_1" name="comic_nav" type="radio">\
            <label for="comic_list_1" class="animate">星期一</label>\
            <ul class="animate">\
                <template v-for="x in animes.animes_1">\
                 <li class="animate comic_team">\
                <div class="comic_cover"><img :src="'http://www.moeccg.com:3000/get_bili_img?img_url='+x.square_cover" alt=""></div>\
                <p ><a :href="'http://bangumi.bilibili.com/anime/'+x.season_id">{{x.title}}</a></p>\
                <p class="bgmcount"><span>{{x.bgmcount}}</span></p>\
                </li>\
                </template>\
            </ul>\
        </div>\
        <div class="dropdown">\
            <input id="comic_list_2" name="comic_nav" type="radio">\
            <label for="comic_list_2" class="animate">星期二</label>\
            <ul class="animate">\
                <template v-for="x in animes.animes_2">\
                 <li class="animate comic_team">\
                <div class="comic_cover"><img :src="'http://www.moeccg.com:3000/get_bili_img?img_url='+x.square_cover" alt=""></div>\
                <p ><a :href="'http://bangumi.bilibili.com/anime/'+x.season_id">{{x.title}}</a></p>\
                <p class="bgmcount"><span>{{x.bgmcount}}</span></p>\
                </li>\
                </template>\
            </ul>\
        </div>\
        <div class="dropdown">\
            <input id="comic_list_3" name="comic_nav" type="radio">\
            <label for="comic_list_3" class="animate">星期三</label>\
            <ul class="animate">\
                <template v-for="x in animes.animes_3">\
                 <li class="animate comic_team">\
                <div class="comic_cover"><img :src="'http://www.moeccg.com:3000/get_bili_img?img_url='+x.square_cover" alt=""></div>\
                <p ><a :href="'http://bangumi.bilibili.com/anime/'+x.season_id">{{x.title}}</a></p>\
                <p class="bgmcount"><span>{{x.bgmcount}}</span></p>\
                </li>\
                </template>\
            </ul>\
        </div>\
        <div class="dropdown">\
            <input id="comic_list_4" name="comic_nav" type="radio">\
            <label for="comic_list_4" class="animate">星期四</label>\
            <ul class="animate">\
                <template v-for="x in animes.animes_4">\
                 <li class="animate comic_team">\
                <div class="comic_cover"><img :src="'http://www.moeccg.com:3000/get_bili_img?img_url='+x.square_cover" alt=""></div>\
                <p ><a :href="'http://bangumi.bilibili.com/anime/'+x.season_id">{{x.title}}</a></p>\
                <p class="bgmcount"><span>{{x.bgmcount}}</span></p>\
                </li>\
                </template>\
            </ul>\
        </div>\
        <div class="dropdown">\
            <input id="comic_list_5" name="comic_nav" type="radio">\
            <label for="comic_list_5" class="animate">星期五</label>\
            <ul class="animate">\
                <template v-for="x in animes.animes_5">\
                 <li class="animate comic_team">\
                <div class="comic_cover"><img :src="'http://www.moeccg.com:3000/get_bili_img?img_url='+x.square_cover" alt=""></div>\
                <p ><a :href="'http://bangumi.bilibili.com/anime/'+x.season_id">{{x.title}}</a></p>\
                <p class="bgmcount"><span>{{x.bgmcount}}</span></p>\
                </li>\
                </template>\
            </ul>\
        </div>\
        <div class="dropdown">\
            <input id="comic_list_6" name="comic_nav" type="radio">\
            <label for="comic_list_6" class="animate">星期六</label>\
            <ul class="animate">\
                <template v-for="x in animes.animes_6">\
                 <li class="animate comic_team">\
                <div class="comic_cover"><img :src="'http://www.moeccg.com:3000/get_bili_img?img_url='+x.square_cover" alt=""></div>\
                <p ><a :href="'http://bangumi.bilibili.com/anime/'+x.season_id">{{x.title}}</a></p>\
                <p class="bgmcount"><span>{{x.bgmcount}}</span></p>\
                </li>\
                </template>\
            </ul>\
        </div>\
        <div class="dropdown">\
            <input id="comic_list_0" name="comic_nav" type="radio">\
            <label for="comic_list_0" class="animate">星期天</label>\
            <ul class="animate">\
                <template v-for="x in animes.animes_0">\
                 <li class="animate comic_team">\
                <div class="comic_cover"><img :src="'http://www.moeccg.com:3000/get_bili_img?img_url='+x.square_cover" alt=""></div>\
                <p ><a :href="'http://bangumi.bilibili.com/anime/'+x.season_id">{{x.title}}</a></p>\
                <p class="bgmcount"><span>{{x.bgmcount}}</span></p>\
                </li>\
                </template>\
            </ul>\
        </div>\
    </div>\
    </transition>`,
    data:function(){
        return{
             animes:animes_data
        }
    },
    methods:{
        comback:function(){
            router.go(-1);
        }
    }
});
function lists() {
    var login='\
    <transition name="slide-fade">\
        <div class="login_regist">\
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
	          <a href="#/login/register">注册</a>\
	          <a class="right_a" href="#">忘记密码?</a>\
	        </div>\
        </div>\
        </div>\
    </transition>';
    return login;
};
Vue.component('Register',{
    template:'\
    <transition name="slide-fade">\
    <div class="login_regist">\
        <div class="top_header">\
            <h3>Register</h3>\
            <h5>Register in to continue to your profile page.</h5>\
        </div>\
    <div class="inputs">\
        <form action="../php/register.php" method="post">\
            <p class="line"><input type="text" name="user" placeholder="输入手机号" autocomplete="off"></p>\
            <p class="line"><input  type="password" name="pwd" placeholder="密码"></p>\
            <p class="line"><input  type="password" name="pwd2" placeholder="确认密码"></p>\
            <p class="line"><input type="text" name="username" placeholder="昵称"></p>\
            <p class="line"><input type="text" name="uid" placeholder="邀请人uid（选填）"></p>\
            <p class="line ckbox">\
                <span class="protocol"><input type="checkbox" checked="checked" ><label>用户服务协议</label></span>\
                <span class="loging"><a style="color:#000000" href="#/user">立即登入</a></span>\
            </p>\
            <p class="line"><input type="submit" name="" id="" value="注册"></p>\
        </form>\
    </div>\
    </div>\
    </transition>',
    data:function(){
        return{}
    }
});
Vue.component('Home',{
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
