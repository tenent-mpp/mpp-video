const app = getApp()
Page({
  data: {
    seriesDataparent:{      
      episodes: [
        {title:'第一集XXXX',type:2,tags:["pre.png", "free.png","vip.png"], url:'https://vod3.pipi.cn/fec9203cvodtransbj1251246104/495be271387702299543041048/v.f42905.mp4',time:'45:16'}, 
        {title:'第二集XXXX',type:2,tags:["pre.png", "free.png",""], url:'https://vod3.pipi.cn/43903a81vodtransgzp1251246104/8bdab563387702298286599171/v.f42905.mp4',time:'45:19'},
        {title:'第一集XXXX',type:2,tags:["pre.png", "free.png","vip.png"], url:'https://vod3.pipi.cn/fec9203cvodtransbj1251246104/495be271387702299543041048/v.f42905.mp4',time:'45:16'}, 
        {title:'第二集XXXX',type:2,tags:["pre.png", "free.png",""], url:'https://vod3.pipi.cn/43903a81vodtransgzp1251246104/8bdab563387702298286599171/v.f42905.mp4',time:'45:19'},
        {title:'第一集XXXX',type:2,tags:["pre.png", "free.png","vip.png"], url:'https://vod3.pipi.cn/fec9203cvodtransbj1251246104/495be271387702299543041048/v.f42905.mp4',time:'45:16'}, 
        {title:'第二集XXXX',type:2,tags:["pre.png", "free.png",""], url:'https://vod3.pipi.cn/43903a81vodtransgzp1251246104/8bdab563387702298286599171/v.f42905.mp4',time:'45:19'},
        {title:'第一集XXXX',type:2,tags:["pre.png", "free.png","vip.png"], url:'https://vod3.pipi.cn/fec9203cvodtransbj1251246104/495be271387702299543041048/v.f42905.mp4',time:'45:16'}, 
        {title:'第二集XXXX',type:2,tags:["pre.png", "free.png",""], url:'https://vod3.pipi.cn/43903a81vodtransgzp1251246104/8bdab563387702298286599171/v.f42905.mp4',time:'45:19'},
        {title:'第一集XXXX',type:2,tags:["pre.png", "free.png","vip.png"], url:'https://vod3.pipi.cn/fec9203cvodtransbj1251246104/495be271387702299543041048/v.f42905.mp4',time:'45:16'}, 
        {title:'第二集XXXX',type:2,tags:["pre.png", "free.png",""], url:'https://vod3.pipi.cn/43903a81vodtransgzp1251246104/8bdab563387702298286599171/v.f42905.mp4',time:'45:19'},
        {title:'第一集XXXX',type:2,tags:["pre.png", "free.png","vip.png"], url:'https://vod3.pipi.cn/fec9203cvodtransbj1251246104/495be271387702299543041048/v.f42905.mp4',time:'45:16'}, 
        {title:'第二集XXXX',type:2,tags:["pre.png", "free.png",""], url:'https://vod3.pipi.cn/43903a81vodtransgzp1251246104/8bdab563387702298286599171/v.f42905.mp4',time:'45:19'},
      ],
      playbackRate: [2,1.5,1.25,1,0.75,0.5],
      resolutions: ['1080P 高清','720P 高清','480P 清晰','360P 流畅']
    },
    srcPathparent: 'https://vod3.pipi.cn/43903a81vodtransgzp1251246104/8bdab563387702298286599171/v.f42905.mp4', 
  },  
  // 父组件start
  onLoad: function () {
    console.log('target')
  },
  methods: {

  }
})
