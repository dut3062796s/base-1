/* 配置文件 */
// const baseUrl = 'http://localhost:8083/';
const baseUrl = 'https://api.webmis.vip/';
const socket = 'wss://webmis.vip/wss';

export default {
  title: 'WebMIS',
  version: 'v1.0.0',
  baseUrl: baseUrl,
  apiUrl: baseUrl+'api/',
  themeColor: '#6FB737',
  copy: 'Copyright © WebMIS.VIP 2020',
  // 状态栏
  statusBar:{height:'0px',color: '#333', bgColor:'#FFF'},
  // 更新
  update: false,
  upDateColor: {bg:'',logoBg:'#FFF',loading:'#FFF',loaded:'#666',copy:'#333'},
  upIosUrl: 'itms-apps://itunes.apple.com/cn/app/tao-bao-sui-shi-sui-xiang/id387682726?mt=8',
  // 地图
  amapKey: 'd956f0c3e15489a1b5bf291e5d133c8a',
  // Socket
  socketServer: socket,
  msgRead: 300,
  msgContent: 'content',
  msgBrowser: false,
  // 小程序( 0-正式版,1-测试版,2-体验版 )
  wx_type: 0,
  wx_id: 'gh_a6ddccd2bb08',
}