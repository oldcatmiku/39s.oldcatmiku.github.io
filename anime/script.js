var animeList= [
{
    "name":"囮物语 <a href='https://www.acfun.cn/bangumi/aa6003043_36188_1738667'> 第2地址 </a>",
	"img":"https://cdn.yinghuazy.xyz/upload/vod/20201029-3/6f0c0360bd0ba209cb259ea0808db907.jpg", 
    "url":"http://www.wedm3.com/video/3903.html",
},
{
    "name":"Mygo!!!!!",
	"img":"https://lain.bgm.tv/pic/cover/l/e7/a7/428735_1v11n.jpg", 
    "url":"https://www.bilibili.com/video/BV1qJ4m1M7jp",
},
{
    "name":"哭泣少女乐队",
	"img":"anime/posters/03.jpg", 
    "url":"https://www.wedm3.com/video/13080.html",
},
{
	"name":"莉兹与青鸟",
	"img":"anime/posters/01.jpg", 
    "url":"https://pan.baidu.com/s/1JkIZCspH0Ytv0Hn_YqoDKA?pwd=jwek",
},
{
	"name":"孤独摇滚！",
	"img":"https://image.baidu.com/search/down?url=https://lz.sinaimg.cn/large/006yt1Omgy1h6ns614olkj30no0xcn5c.jpg", 
    "url":"https://www.wedm3.com/video/1694.html",
},
{
	"name":"轻音少女第二季",
	"img":"https://img2.imgtp.com/2024/03/31/i0NirBdz.png", 
    "url":"https://www.wedm3.com/video/778.html",
},
{
	"name":"凉宫春日的忧郁 2009",
	"img":"https://img2.imgtp.com/2024/03/31/nIaIbkre.png", 
    "url":"https://www.wedm3.com/video/4535.html",
},
{
	"name":"紫罗兰永恒花园",
	"img":"https://cdn.yinghuazy.xyz/upload/vod/20210108-1/23bc648cb1408fcd0fa159d677e9c34e.jpg", 
    "url":"https://www.wedm3.com/video/139220.html",
},
{
	"name":"伪物语",
	"img":"https://img2.imgtp.com/2024/03/31/5Kxrru22.png", 
    "url":"https://www.acfun.cn/bangumi/aa6004318",
},
{
	"name":"猫物语（黑）",
	"img":"https://cdn.yinghuazy.xyz/upload/vod/20201029-4/f8f1d16928cdce15c80b6f998019067a.jpg", 
    "url":"https://www.acfun.cn/bangumi/aa6004319_36188_1754217",
},
{
	"name":"猫物语（白）",
	"img":"https://th.bing.com/th/id/R.ac4b457283566374e08ae3c9da91f52e?rik=aY0Ex43LgtP%2fug&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2fabef8dbb4a6f58b869bb17d18c8c4ea6a86cf3a4.jpg&ehk=Mi6B9QMpWj1swZfPY7uCci6o65jFdZN4k1wkxQIYiqY%3d&risl=&pid=ImgRaw&r=0", 
    "url":"https://www.acfun.cn/bangumi/aa6002986_36188_1737690",
},
{
    "name":"倾物语 <a href='https://www.wedm3.com/video/131720.html'> 第2地址 </a>",
	"img":"anime/posters/02.jpg", 
    "url":"https://www.acfun.cn/bangumi/aa6002987",
},
{
    "name":"囮物语 <a href='https://www.wedm3.com/video/131730.html'> 第2地址 </a>",
	"img":"https://tse4-mm.cn.bing.net/th/id/OIP-C.7WWDzMekbbwLbDccEMhkFAAAAA?w=122&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
    "url":"https://www.acfun.cn/bangumi/aa6002988_36188_1737694",
},
{
    "name":"憧憬成为魔法少女",
	"img":"anime/posters/04.webp", 
    "url":"https://www.wedm3.com/video/1110730.html",
},
{
	"name":"吹响！上低音号",
	"img":"https://cdn.yinghuazy.xyz/upload/vod/20201029-3/abffd7d0b23cd1264008ec3dbada0eb4.jpg", 
    "url":"https://www.wedm3.com/video/147900.html",
},
{
	"name":"打了300年的史莱姆 不知不觉就练到了满级",
	"img":"https://cdn.yinghuazy.xyz/jpg/ly1h2yppazilfj30ew0l87ac.jpg", 
    "url":"https://www.wedm3.com/video/19720.html",
},
{
	"name":"情色漫画老师",
	"img":"https://cdn.yinghuazy.xyz/upload/vod/20201029-3/ab0f6dc975b43006464d206ac385c0ca.jpg", 
    "url":"https://www.wedm3.com/video/142990.html",
},
];

for (let i = 0; i < animeList.length; i++) {
    // 在此处处理每个元素
    const element = document.getElementById("output");
    element.innerHTML += `
    <div class="bord">
    <div class="imgs">
        <a href="` + animeList[i].url + `">
            <img src="` + animeList[i].img + `">
        </a>
    </div>
    <span class="title">` + animeList[i].name + `</span>
</div>
    `;
}