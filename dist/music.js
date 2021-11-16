const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //吸底
    fixed: true,
    //自动播放
    autoplay: true,
    //列表最高高度
    listMaxHeight: 10,
    //主题色 -米黄
    theme: '#F7EED6',
    //歌曲
    audio: [
      {
        name: '波西米亚狂想曲',
        artist: 'Queen',
        url: 'http://music.163.com/song/media/outer/url?id=1868553.mp3',
        cover: 'https://p2.music.126.net/F8R535oP-V4UOa0O2n1Y9Q==/798245441818276.jpg?param=130y130'
      },
      {
        name: "带吓唬",
        artist: '头文字D',
        //歌曲地址
        url: 'http://music.163.com/song/media/outer/url?id=1403528956.mp3',
        //歌曲封面 读取source下文件
        cover: 'music_images/1.jpg'
      },
      {
        name: '一滴泪的时间',
        artist: '赵紫骅',
        //本地音乐
        url: 'music/一滴泪的时间.mp3',
        cover: ''
      },

      {
        name: 'Uptown Girl',
        artist: 'Westlife',
        url: 'http://music.163.com/song/media/outer/url?id=2080976.mp3',
        //cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg'
      },
      {
        name: '加州旅馆',
        artist: 'Chingadero',
        url: 'http://music.163.com/song/media/outer/url?id=1464389128.mp3',
        cover: 'https://p2.music.126.net/2WCjkXMYEoNew4UJUY-chg==/109951165156149897.jpg?param=130y130'
      },
    ]
});