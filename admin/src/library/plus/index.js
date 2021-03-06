import Audio from './audio'
import CacheClear from './cache-clear'
import Camera from './camera'
import ImgCompress from './img-compress'
import ImgReader from './img-reader'
import MapAddress from './map-address'
import MapAngle from './map-angle'
import MapGeolocation from './map-geolocation'
import Notify from './notify'
import Pay from './pay'
import Photo from './photo'
import PlusReady from './plus-ready'
import Share from './share'
import Video from './video'

/* 全部 */
export default {
  Audio,  //音频
  CacheClear, //清理缓存
  Camera, //拍照
  ImgCompress,  //压缩-图片
  ImgReader,  //压缩-对象
  MapAddress, //地图-搜索地址
  MapAngle, //地图-坐标转角度
  MapGeolocation, //地图-定位
  Notify, //本地消息
  Pay,  //支付
  Photo,  //照片
  PlusReady,  //plus是否加载
  Share,  //分享
  Video,  //视频
}
/* 局部 */
export {
  Audio,
  CacheClear,
  Camera,
  ImgCompress,
  ImgReader,
  MapAddress,
  MapAngle,
  MapGeolocation,
  Notify,
  Photo,
  PlusReady,
  Share,
  Video,
}