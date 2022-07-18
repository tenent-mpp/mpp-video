# mpp-video
##小场景视频播放器组件示例
<br/>
使用方式：
<br/>
&lt;mpp-video<br/>
&nbsp;&nbsp;&nbsp;&nbsp;src="{{srcPathparent}}"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;data="{{seriesDataparent}}" /&gt;
<br/><br/>
src [String]<br/>
视频url
<br/><br/>
data [json]<br/>
包含剧集、倍速、分辨率的设置参数<br/>
格式：<br/>
{<br/>
&nbsp;&nbsp;episodes:[ <br/>
&nbsp;&nbsp;&nbsp;&nbsp;{title:"", tags:["1.png"], url:''} <br/>
&nbsp;&nbsp;],  <br/>
&nbsp;&nbsp;playbackRate:[], <br/>
&nbsp;&nbsp;resolutions:[] <br/>
}
<br/><br/>
episodes<br/>
剧集，title是标题，tags是标签图标，例如VIP标记，url是某一集的标题<br/>
<br/>
playbackRate<br/>
可选的倍速，例如["1.5", "2.0"]<br/>
<br/>
resolutions<br/>
可选的分辨率，例如["1080P","720P"]<br/>

## 小场景video组件私有API
<br/>
属性<br/>
alwaysShowBar<br/>
是否自动隐藏控制面板<br/>
bindonnext/bindonprev<br/>
系统发起切换上下集的回调，小程序需要在回调中切换src<br/><br/>
VideoContext<br/>
changeRes(url)<br/>
切换同一个剧集的不同分辨率



