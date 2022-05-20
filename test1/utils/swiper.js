// 轮播
var swiper =  {
    imgUrls: [
    'https://img30.360buyimg.com/da/jfs/t3691/359/446193647/66504/6c3c67f7/580a11f6N666e770d.jpg',
    'https://img1.360buyimg.com/da/jfs/t5680/277/258957885/88986/d928b61e/591e69dfN6c12b3f7.jpg',
    'https://img30.360buyimg.com/da/jfs/t5911/59/44051320/199941/f4af91b7/5924518aNef6c7805.jpg',
    'https://img1.360buyimg.com/da/jfs/t5683/240/298631844/100890/d06f3df2/591e8aa9N95f5f2da.jpg',
    'https://img30.360buyimg.com/da/jfs/t5572/323/1248165934/132413/964f56a9/5924e623Nd9e8e082.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 200,
};


// 赛事banner
var banner = [
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-img/001.jpg',
    staus:'http://demo.zhilengzhire.com/weui-SPA-img/111.png',
    stausing:''
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-img/002.jpg',
    staus:'http://demo.zhilengzhire.com/weui-SPA-img/222.png',
    stausing:''
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-img/003.jpg',
    staus:'http://demo.zhilengzhire.com/weui-SPA-img/333.png',
    stausing:'http://demo.zhilengzhire.com/weui-SPA-img/444.png'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-img/004.jpg',
    staus:'http://demo.zhilengzhire.com/weui-SPA-img/555.png',
    stausing:''
  }
];
var Middlebanner = {
    imgUrls: [
    'http://demo.zhilengzhire.com/weui-SPA-img/001.jpg',
    'http://demo.zhilengzhire.com/weui-SPA-img/002.jpg',
    'http://demo.zhilengzhire.com/weui-SPA-img/003.jpg',
    'http://demo.zhilengzhire.com/weui-SPA-img/004.jpg', 
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
};
// 项目图标
var icons = {
  icon: [
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/004.png",font:"羽毛球"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/005.png",font:"乒乓球"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/006.png",font:"足球"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/007.png",font:"篮球"}
  ],
  icon1: [
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/008.png",font:"棋牌"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/009.png",font:"游泳"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/010.png",font:"户外"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/011.png",font:"网球"}
  ]
};
// 赛事详情
var pition_detail = [
  {
    title:'比赛场馆',
    desc:'宝能allcity深证的交付'
  },
  {
    title:'比赛地址',
    desc:'龙岗区龙岗大道10号'
  },
  {
    title:'比赛时间',
    desc:'2017年01月12日 上午'
  },
  {
    title:'报名时间',
    desc:'2017/01/02-2017/05/06'
  },
  {
    title:'报名费用',
    desc:'100元/人'
  },
];
var organize = [
  {
    sec_title:'1、主办单位：',
    sec_desc:'红牛维生素功能饮料有限公司'
  },
  {
    sec_title:'2、承办单位：',
    sec_desc:'红牛维生素功能饮料有限公司'
  },
  {
    sec_title:'3、协办单位：',
    sec_desc:'红牛维生素功能饮料有限公司'
  },
  {
    sec_title:'4、冠名：',
    sec_desc:'红牛维生素功能饮料有限公司'
  },
  {
    sec_title:'5、合作媒体：',
    sec_desc:'红牛维生素功能饮料有限公司'
  },
  {
    sec_title:'6、赛事说明：',
    sec_desc:'红牛维生素功能饮料有限公司'
  },

];
// 评价item
var assessData = [
    {
      userImg:"http://demo.zhilengzhire.com/weui-SPA-index/004.png",
      user:'135****7581',
      star:[
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
      ],
      time:'2017-05-06',
      content:'方式登记法律思考'
    },
    {
      userImg:"http://demo.zhilengzhire.com/weui-SPA-index/004.png",
      user:'135****7581',
      star:[
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
      ],
      time:'2017-05-06',
      content:'方式登记上的归属感法律思考'
    },
    {
      userImg:"http://demo.zhilengzhire.com/weui-SPA-index/004.png",
      user:'135****7581',
      star:[
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
      ],
      time:'2017-05-06',
      content:'对方水电费方式登记法律思考'
    },
   
];
// item   data
var navigaData = [
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/004.png',
        itemTitle:'王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥720',
        itempriceH:'门市价￥10',
        range:'<1800m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/005.png',
        itemTitle:'羽球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥70',
        itempriceH:'门市价￥120',
        range:'80m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/006.png',
        itemTitle:'lanqu球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥78',
        itempriceH:'门市价￥10',
        range:'1050m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/007.png',
        itemTitle:'羽毛球之王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥150',
        itempriceH:'门市价￥20',
        range:'80m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/008.png',
        itemTitle:'羽毛球之王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥150',
        itempriceH:'门市价￥20',
        range:'10m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/009.png',
        itemTitle:'羽毛球之王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥150',
        itempriceH:'门市价￥20',
        range:'1200m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/010.png',
        itemTitle:'羽毛球之王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥150',
        itempriceH:'门市价￥20',
        range:'1500m'
      },

    ];
var location = [
    'http://demo.zhilengzhire.com/weui-SPA-img/020.png',
    'http://demo.zhilengzhire.com/weui-SPA-img/021.png',
    '广东省深圳市龙岗区龙河路80号',
    'http://demo.zhilengzhire.com/weui-SPA-img/022.png'

];  
// 预定场馆
var requires = [
    {
      img:'http://demo.zhilengzhire.com/weui-SPA-img/010.png',
      project:'羽毛球',
      place:'场地',
      price:'￥40元起',
    },
    {
      img:'http://demo.zhilengzhire.com/weui-SPA-img/008.png',
      project:'乒乓球',
      place:'场地',
      price:'￥70元起',
    },
    {
      img:'http://demo.zhilengzhire.com/weui-SPA-img/009.png',
      project:'橄榄球',
      place:'场地',
      price:'￥80元起',
    },
  
];  
// 我的  img
var myImg = [
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/001.png',
    title:'客户未授权'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/002.png',
    title:'我的预约'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/003.png',
    title:'我的收藏'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/004.png',
    title:'我的参赛'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/005.png',
    title:''
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/006.png',
    title:'意见反馈'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/007.png',
    title:'联系客服'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/008.png',
    title:''
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/009.png',
    title:''
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/010.png',
    title:''
  }
  
];


module.exports = {
  swiper: swiper,
  banner:banner,
  icons: icons,
  organize: organize,
  assessData:assessData,
  pition_detail:pition_detail,
  navigaData:navigaData,
  Middlebanner:Middlebanner,
  location:location,
  requires:requires,
  myImg:myImg,

};
