(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ae7b1ba"],{"0397":function(t,e,a){},"6b03":function(t,e,a){"use strict";e["a"]=function(t,e,a){var i=e.width||0,n=e.height||0,o=e.cut||!0,r=e.quality||.8,s=e.ext||"jpg",l={jpg:"image/jpeg",png:"image/png",gif:"image/gif"},c=1,u=1,h=0,m=0,d=1,f=c/u,g=document.createElement("canvas"),p=g.getContext("2d"),b=new Image;b.src=t,b.onload=function(){f=this.width/this.height,i>0&&0==n?(c=i<this.width?i:this.width,u=i<this.width?Math.round(i/f):Math.round(this.width/f),i=c,n=u):0==i&&n>0?(c=n<this.height?Math.round(n*f):Math.round(this.height*f),u=n<this.height?n:this.height,i=c,n=u):0==i&&0==n?(c=this.width,u=this.height,i=c,n=u):(d=i/n,f>d?i<this.width?(c=o?Math.round(n*f):i,u=o?n:Math.round(i/f)):(c=o?Math.round(this.height*f):this.width,u=o?this.height:Math.round(this.width/f)):n<this.height?(c=o?i:Math.round(n*f),u=o?Math.round(i/f):n):(c=o?this.width:Math.round(this.height*f),u=o?Math.round(this.width/f):this.height)),g.width=i,g.height=n,h=Math.round(i-c)/2,m=Math.round(n-u)/2,p.drawImage(this,h,m,c,u);var t=g.toDataURL(l[s],r);a(t)}}},8050:function(t,e,a){"use strict";var i=a("e563");e["a"]=function(t,e){try{var a=plus.camera.getCamera();a.captureImage((function(e){plus.io.resolveLocalFileSystemURL(e,(function(e){e.file((function(e){t(e)}))}),(function(t){return Object(i["a"])("读取拍照失败!")}))}),e)}catch(o){var n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("style","display: none"),document.body.appendChild(n),n.click(),n.onchange=function(){t(n.files[0])}}}},"8f77":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"body mTop10"},[a("el-form",{attrs:{model:t.form,"label-width":t.LabelWidth}},[a("el-form-item",{attrs:{label:"头像"}},[t.form.img?a("div",{staticClass:"upload bgImg bgTu",style:{backgroundImage:"url("+t.form.img+")"},attrs:{for:"logo"},on:{click:function(e){return t.upImage()}}}):a("div",{staticClass:"upload bgImg bgTu tu",attrs:{for:"logo"},on:{click:function(e){return t.upImage()}}},[a("i",{staticClass:"ui ui_img"})])]),a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{staticStyle:{"max-width":"320px"},attrs:{placeholder:"用户昵称",maxlength:"8"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{staticStyle:{"max-width":"320px"},attrs:{placeholder:"请输入真实姓名",maxlength:"8"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}},[a("el-radio",{attrs:{label:"男"}}),a("el-radio",{attrs:{label:"女"}})],1)],1),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}})],1),a("el-form-item",{attrs:{label:"职务"}},[a("el-input",{staticStyle:{"max-width":"320px"},attrs:{placeholder:"请输入职务",maxlength:"8"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit()}}},[t._v("保存设置")])],1)],1)],1)],1)},n=[],o=a("e563"),r=a("919a"),s=a("8a2a"),l=a("775b"),c=a("8050"),u=a("fa56"),h={data:function(){return{LabelWidth:"100px",form:{img:"",nickname:"",name:"",gender:"",birthday:"",position:""}}},mounted:function(){this.$store.state.action.url="",this.$store.state.action.menus="",this.loadData()},methods:{loadData:function(){var t=this,e=Object(r["a"])();Object(s["a"])("Userinfo/list",{token:l["a"].getItem("token")},(function(a){e.clear();var i=a.data;if(0!=i.code)return Object(o["a"])(i.msg);t.form=i.list}))},onSubmit:function(){var t=this,e=JSON.stringify(this.form),a=Object(r["a"])();Object(s["a"])("Userinfo/edit",{token:l["a"].getItem("token"),data:e},(function(e){a.clear();var i=e.data;return 0==i.code&&(t.$store.state.uInfo=i.uinfo),Object(o["a"])(i.msg)}))},upImage:function(){var t=this;Object(c["a"])((function(e){Object(u["a"])(e,{width:200,height:200},(function(e){var a=Object(r["a"])();Object(s["a"])("Userinfo/upImage",{token:l["a"].getItem("token"),base64:e},(function(e){a.clear();var i=e.data;return 0==i.code&&(t.form.img=i.img,t.$store.state.uInfo.img=i.img),Object(o["a"])(i.msg)}))}))}))}}},m=h,d=(a("f3c8"),a("2877")),f=Object(d["a"])(m,i,n,!1,null,"52861215",null);e["default"]=f.exports},f3c8:function(t,e,a){"use strict";var i=a("0397"),n=a.n(i);n.a},fa56:function(t,e,a){"use strict";var i=a("6b03");e["a"]=function(t,e,a){try{var n=new plus.io.FileReader;n.readAsDataURL(t),n.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),Object(i["a"])(this.result,e,a)}}catch(r){var o=new FileReader;o.readAsDataURL(t),o.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),Object(i["a"])(this.result,e,a)}}}}}]);