const token = '';
const menus = [
  // 首页
  {title:'首页',menus:[
    {title:'使用说明',url:'/',menus:[]},
  ]},
  {title:'APP',menus:[
    {title:'测试',menus:[
      // 案例
      {title:'案例',menus:[],name:'Test',data:{
        api: 'test', method: 'post',
        parameter: [
          {key:'token',val:token,text:'Token（必填）'},
          {key:'id',val:1,text:'ID（必填）'},
          {key:'name',val:'张三',text:'姓名'},
        ],
        remark:{list:{id: '用户ID',name: '姓名',}},
      }},
    ]},
  ]},
];
export default menus