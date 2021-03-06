<?php

/**
* 数据中心
*/

namespace app\library;

use app\library\Inc;

class Centre{

  /* 用户登录 */
  static function login($uname,$passwd){
    $config = require APP_PATH.'/config/env.php';
    $res = file_get_contents($config['centre_url'].'user/login?token='.self::getToken().'&uname='.$uname.'&passwd='.$passwd);
    return json_decode($res);
  }

  /* 用户注册 */
  static function register($tel,$passwd){
    $config = require APP_PATH.'/config/env.php';
    $res = file_get_contents($config['centre_url'].'user/register?token='.self::getToken().'&type=tel&val='.$tel.'&passwd='.$passwd);
    return json_decode($res);
  }

  /* 修改密码 */
  static function passwd($uid,$old,$pwd){
    $config = require APP_PATH.'/config/env.php';
    $res = file_get_contents($config['centre_url'].'user/passwd?token='.self::getToken().'&uid='.$uid.'&old='.$old.'&pwd='.$pwd);
    $data = json_decode($res);
    return $data->code==0?true:$data->msg;
  }

  /* 修改账号 */
  static function changeUname($uid,$tel,$passwd=''){
    $config = require APP_PATH.'/config/env.php';
    $res = file_get_contents($config['centre_url'].'user/changeUname?token='.self::getToken().'&type=tel&val='.$tel.'&uid='.$uid.'&passwd='.$passwd);
    return json_decode($res);
  }

  /* 用户信息-ID */
  static function getID($uname){
    $config = require APP_PATH.'/config/env.php';
    $res = file_get_contents($config['centre_url'].'user/getID?token='.self::getToken().'&uname='.$uname);
    return json_decode($res);
  }

  /* 用户信息-查询 */
  static function uinfo($uid){
    $config = require APP_PATH.'/config/env.php';
    $res = file_get_contents($config['centre_url'].'user/info?token='.self::getToken().'&uid='.$uid);
    return json_decode($res);
  }

  /* 用户信息-头像 */
  static function uinfoImg($uid,$base64){
    $config = require APP_PATH.'/config/env.php';
    $data = Inc::curlPost($config['centre_url'].'user/upImg?token='.self::getToken().'&uid='.$uid,['data'=>$base64]);
    return $data;
  }

  /* 用户信息-编辑 */
  static function uinfoEdit($uid,$data){
    $config = require APP_PATH.'/config/env.php';
    $res = file_get_contents($config['centre_url'].'user/infoEdit?token='.self::getToken().'&uid='.$uid.'&data='.$data);
    return json_decode($res);
  }

  /* 获取Token */
  static function getToken(){
    $config = require APP_PATH.'/config/env.php';
    $res = file_get_contents($config['centre_url'].'oauth/token?client_id='.$config['centre_id'].'&client_secret='.$config['centre_secret']);
    $data = json_decode($res);
    return $data->code==0?$data->token:false;
  }

}