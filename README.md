# mpp-video
小场景视频播放器组件示例

使用方式：

<mpp-video
    src="{{srcPathparent}}"
    data="{{seriesDataparent}}" />

src [String]
视频url

data [json]
包含剧集、倍速、分辨率的设置参数
格式：
{ episodes:[
    {title:"", tags:["1.png"], url:''}
  ], 
  playbackRate:[],
  resolutions:[]
}

episodes
剧集，title是标题，tags是标签图标，例如VIP标记，url是某一集的标题

playbackRate
可选的倍速，例如["1.5", "2.0"]

resolutions
可选的分辨率，例如["1080P","720P"]
