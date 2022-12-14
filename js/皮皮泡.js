var rule={
    title:'皮皮泡',
    host:'https://www.pipipao.com',
    url:'/vodshow/id/fyclass/page/fypage.html',
    searchUrl:'/vodsearch.html?wd=**',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{'User-Agent':'MOBILE_UA',},
    class_name:'电视剧&电影&综艺&动漫&纪录片',
    class_url:'dianshiju&dianying&zongyi&dongman&jilupian',
    class_parse:'stui-header__menu&&li;a&&Text;a&&href;.*/(.*?).html',
    play_parse:true,
    推荐:'.stui-vodlist__box;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    一级:'.stui-vodlist__box;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级:{"title":".stui-content__thumb&&a&&title;.stui-content__detail&&p:eq(0)&&Text","img":"img.lazyload&&data-original","desc":"","content":".desc.hidden-xs&&Text","tabs":"h3.title","lists":".playlist:eq(#id) li"},
       搜索:'li.clearfix&&div;h3&&Text;.lazyload&&data-original;.pic-text&&Text;a.btn-default&&href',
}
