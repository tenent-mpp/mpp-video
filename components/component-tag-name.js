// components/component-tag-name.js
Component({
  properties: {    
    src: String, //视频路径
    data: Object, //面板数据 -剧集，分辨率，倍速
  },
  /**
   * 组件的初始数据
   */
  data: {
    btnUnvisible:true,
    popTips:false,
    popTipsText:'',
    speedText:'1',
    resolutionText:'720P',
    src:'',
    isFullscreen: false, //555不提交，默认fasle不全屏
    selectIndex: '',//默认选中
    seriesType: 1,//剧集type
    isPlay: false, //播放和暂停
    btnVisible: true, //播放暂停-显示
    popupFlagbox: true, //默认弹框不显示
    speedFlag: false,
    resolutionFlag: false,
    seriesFlag: false,
    updateState: false, //防止视频播放过程中导致的拖拽失效
  },
  lifetimes: {
    attached() {
    },
    attached() { //onReady
      this.videoContext = wx.createVideoContext('video_player',this)      
      // this.info = wx.getVideoInfo('url')
    },
  },
  observers: {
  },
  methods: {
    // ==========修改start
    handleFullscreenChanged(e) {
      let videoContext = wx.createVideoContext('video_player',this)      
      this.setData({
        isFullscreen: !this.isFullscreen
      });
    },
    handleEnded() {
      this.setData({
        btnVisible: false,
      })
    },
    bindwaiting() {
      wx.showModal({ content: '网络加载/异常' })
    },
    binderror() {
      wx.showModal({ content: '网络加载中' })
    },
    videoUpdate(e) {
      let sliderValue = parseInt(e.detail.currentTime / parseInt(e.detail.duration) * 100);
      let h = parseInt(e.detail.duration / 60) == 0 ? '00' :
        parseInt(e.detail.duration / 60) < 10 ? '0' + parseInt(e.detail.duration / 60) : parseInt(e.detail.duration / 60);
      let m = parseInt(e.detail.duration % 60) < 10 ? '0' + parseInt(e.detail.duration % 60) : parseInt(e.detail.duration % 60);
      let currentM = parseInt(e.detail.currentTime % 60) < 10 ? '0' + parseInt(e.detail.currentTime % 60) : parseInt(e.detail.currentTime % 60);
      let currentH = parseInt(e.detail.currentTime / 60) == 0 ? '00' :
        parseInt(e.detail.currentTime / 60) < 10 ? '0' + parseInt(e.detail.currentTime / 60)
          : parseInt(e.detail.currentTime / 60);
      this.setData({
        sliderValue,
        playvalue: currentH + ":" + currentM,
        duration: h + ":" + m
      })
    },
    outFullScreen(){
      this.setData({
        isFullscreen: false
      });
    },
    jujiHandle(e) {
      let { index } = e.currentTarget.dataset
      if(this.data.speedFlag){ //倍速播放
        this.videoContext.playbackRate(this.properties.data.playbackRate[index])
        this.setData({
          selectIndex:index,
          speedText: this.properties.data.playbackRate[index],
          popTips: true,
          popTipsText: `已切换为${this.properties.data.playbackRate[index]}倍速播放`
        });
        setTimeout( ()=>{
          this.setData({
            popTips: false,
            popTipsText: '',
          })
        },1500)
      }
      if(this.data.resolutionFlag){ //分辨率
        let rate = (this.properties.data.resolutions[index]).split(' ')[0];
        this.setData({
          selectIndex:index,
          resolutionText: rate,
          // resolutionText: this.properties.data.playbackRate[index],
          popTips: true,
          popTipsText: `已切换为${this.properties.data.resolutions[index]}画质`
        });
        setTimeout( ()=>{
          this.setData({
            popTips: false,
            popTipsText: '',
          })
        },1500)
      }
      if(this.properties.seriesFlag){ //选择具体 剧集
        let url = this.properties.data.episodes[index].url;
        if(url){
          this.setData({
            src: url,
            selectIndex:index,
          })
          setTimeout(()=>{
            this.handlePlay();
          },200)
        }
      }
      this.setData({
        selectIndex: index,
      })
      this.closeHander();
    },
    sliderChanging(e) { //能进入
      this.setData({
        updateState: false //拖拽过程中，不允许更新进度条
      })
    },
    sliderChange(e) { //能进入
      let durationOrigin = parseInt(wx.getStorageSync("durationOrigin"));
      if (this.data.duration) {
        this.videoContext.seek(e.detail.value / 100 * durationOrigin); //完成拖动后，计算对应时间并跳转到指定位置
        this.setData({
          sliderValue: e.detail.value,
          updateState: true //完成拖动后允许更新滚动条
        })
        this.handlePlay();
      }
    },
    // 播放
    handlePlay() {
      this.videoContext = wx.createVideoContext('video_player',this)      
      this.videoContext.play();
      this.setData({ // 隐藏播放，显示暂停
        isPlay: !this.data.isPlay,
        btnVisible: true,
      })
    },
    // 暂停
    handlePause() {
      this.videoContext.pause();
      this.setData({ // 隐藏播放，显示暂停
        isPlay: !this.data.isPlay,
        btnVisible: true,
      })
    },
    seriesHander: function () {
      this.setData({ //不是wx.setData
        btnUnvisible:false,
        popupFlagbox: false, //控制面板
        resolutionFlag: false,//分辨率弹框不显示
        speedFlag: false,//倍速弹框不显示
        seriesFlag: true, //剧集样式
        seriesType: 1,//剧集类型
      })
    },
    resolutionHander: function () {
      this.setData({ //不是wx.setData
        btnUnvisible:false,
        popupFlagbox: false, //控制面板
        resolutionFlag: true,
        seriesFlag: false,
        speedFlag: false,
      })
    },
    speedHander: function () {
      this.setData({ //不是wx.setData
        btnUnvisible:false,
        popupFlagbox: false, //控制面板
        resolutionFlag: false,
        seriesFlag: false,
        speedFlag: true,
      })
    },
    closeHander: function () {
      this.data.popupFlagbox = true;
      this.setData({
        btnUnvisible:true,
        popupFlagbox: true, //控制面板
        selectIndex: -1,//关闭时清除选中
      })
    },
    bindplay(){
      this.setData({
        isPlay: true
      })
    },
    bindpause(){
      this.setData({
        isPlay: false
      })
    }
  }
})
