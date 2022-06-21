# mpp-video
小场景视频播放器组件示例
<br/><br/>
使用方式：
<br/>
&lt;mpp-video<br/>
&nbsp;&nbsp;&nbsp;&nbsp;src="{{srcPathparent}}"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;data="{{seriesDataparent}}" /&gt;
<br/><br/>
src [String]
视频url
<br/><br/>
data [json]
包含剧集、倍速、分辨率的设置参数
格式：
{ episodes:[
    {title:"", tags:["1.png"], url:''}
  ], 
  playbackRate:[],
  resolutions:[]
}
<br/><br/>
episodes
剧集，title是标题，tags是标签图标，例如VIP标记，url是某一集的标题
<br/><br/>
playbackRate
可选的倍速，例如["1.5", "2.0"]
<br/><br/>
resolutions
可选的分辨率，例如["1080P","720P"]
