(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["eorder"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d3b7");function a(e,t,r,a,n,o,i){try{var l=e[o](i),s=l.value}catch(u){return void r(u)}l.done?t(s):Promise.resolve(s).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function l(e){a(i,n,o,l,s,"next",e)}function s(e){a(i,n,o,l,s,"throw",e)}l(void 0)}))}}},"276e":function(e,t,r){},"2a66":function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return u}));var a=r("b775"),n={list:"/setting.express/list",all:"/setting.express/all",add:"/setting.express/add",edit:"/setting.express/edit",delete:"/setting.express/delete"};function o(e){return Object(a["b"])({url:n.list,method:"get",params:e})}function i(e){return Object(a["b"])({url:n.all,method:"get",params:e})}function l(e){return Object(a["b"])({url:n.add,method:"post",data:e})}function s(e){return Object(a["b"])({url:n.edit,method:"post",data:e})}function u(e){return Object(a["b"])({url:n.delete,method:"post",data:e})}},3962:function(e,t,r){"use strict";r("7ad9")},"4b5f":function(e,t,r){},"60b8":function(e,t,r){"use strict";r("276e")},"632d":function(e,t,r){"use strict";r.d(t,"f",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return c}));var a=r("b775"),n={list:"/eorder.template/list",all:"/eorder.template/all",detail:"/eorder.template/detail",add:"/eorder.template/add",edit:"/eorder.template/edit",delete:"/eorder.template/delete"};function o(e){return Object(a["b"])({url:n.list,method:"get",params:e})}function i(e){return Object(a["b"])({url:n.all,method:"get",params:e})}function l(e,t){return Object(a["b"])({url:n.detail,method:"get",params:{templateId:e,params:t}})}function s(e){return Object(a["b"])({url:n.add,method:"post",data:e})}function u(e){return Object(a["b"])({url:n.edit,method:"post",data:e})}function c(e){return Object(a["b"])({url:n.delete,method:"post",data:e})}},"691a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"模板名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', { rules: [{ required: true, min: 2, message: '请输入至少2个字符' }] }]"}],attrs:{placeholder:"请输入模板名称"}})],1),t("a-form-item",{attrs:{label:"API网关",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["provider",{initialValue:"kdniao",rules:[{required:!0}]}],expression:"['provider', { initialValue: 'kdniao', rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:"kdniao"}},[e._v("快递鸟")]),t("a-radio",{attrs:{value:"kd100"}},[e._v("快递100")])],1)],1),t("a-form-item",{attrs:{label:"物流公司",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["express_id",{rules:[{required:!0,message:"请选择物流公司"}]}],expression:"['express_id', { rules: [{ required: true, message: '请选择物流公司' }] }]"}],attrs:{placeholder:"请选择物流公司"}},e._l(e.expressList,(function(r,a){return t("a-select-option",{key:a,attrs:{value:r.express_id}},[e._v(e._s(r.express_name))])})),1),t("div",{staticClass:"form-item-help"},[t("router-link",{attrs:{target:"_blank",to:{path:"/setting/delivery/express/index"}}},[e._v("物流公司管理")])],1)],1),t("a-form-item",{attrs:{label:"电子面单客户号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.customerName",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['config.customerName', { rules: [{ required: true, min: 2, message: '请输入至少2个字符' }] }]"}],attrs:{placeholder:"需快递线下（网点）申请"}})],1),t("a-form-item",{attrs:{label:"电子面单密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.customerPwd"],expression:"['config.customerPwd']"}],attrs:{placeholder:"需快递线下（网点）申请"}})],1),t("a-form-item",{attrs:{label:"月结编码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.monthCode"],expression:"['config.monthCode']"}]})],1),t("a-form-item",{attrs:{label:"网点名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.stationName"],expression:"['config.stationName']"}]})],1),t("a-form-item",{attrs:{label:"网点编码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.sendSite"],expression:"['config.sendSite']"}]})],1),t("a-form-item",{attrs:{label:"邮费支付方式",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.payType",{initialValue:"SHIPPER",rules:[{required:!0}]}],expression:"['config.payType', { initialValue: 'SHIPPER', rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:"SHIPPER"}},[e._v("现付")]),t("a-radio",{attrs:{value:"CONSIGNEE"}},[e._v("到付")]),t("a-radio",{attrs:{value:"MONTHLY"}},[e._v("月结")])],1)],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入排序值"}]}],expression:"['sort', { initialValue: 100, rules: [{ required: true, message: '请输入排序值' }] }]"}],attrs:{min:0}})],1),t("a-form-item",{staticClass:"mt-20",attrs:{wrapperCol:{span:e.wrapperCol.span,offset:e.labelCol.span}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",loading:e.isBtnLoading}},[e._v("提交")])],1)],1)],1)],1)},n=[],o=r("c7eb"),i=r("1da1"),l=(r("d3b7"),r("2ef0")),s=r("632d"),u=r("2a66"),c=r("ca00"),d={data:function(){return{isLoading:!1,isBtnLoading:!1,labelCol:{span:3},wrapperCol:{span:10},form:this.$form.createForm(this),templateId:null,record:{},expressList:[]}},created:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.templateId=e.$route.query.templateId,t.next=4,e.getDetail();case 4:return t.next=6,e.getExpressList();case 6:e.setFieldsValue(),e.isLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},methods:{getDetail:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,s["d"](e.templateId).then((function(t){return e.record=t.data.detail}));case 3:case"end":return t.stop()}}),t)})))()},getExpressList:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,u["b"]().then((function(t){return e.expressList=t.data.list}));case 3:case"end":return t.stop()}}),t)})))()},setFieldsValue:function(){var e=this.record,t=this.form,r=this.$nextTick;!Object(c["f"])(t.getFieldsValue())&&r((function(){t.setFieldsValue(Object(l["pick"])(e,["name","provider","express_id","config","sort"]))}))},handleSubmit:function(e){e.preventDefault();var t=this.form.validateFields,r=this.onFormSubmit;t((function(e,t){!e&&r(t)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,this.isBtnLoading=!0,s["e"]({templateId:this.templateId,form:e}).then((function(e){t.$message.success(e.message,1.5),setTimeout((function(){return t.$router.push("./index")}),1500)})).catch((function(){return t.isBtnLoading=!1})).finally((function(){return t.isLoading=!1}))}}},p=d,f=(r("de6c"),r("2877")),m=Object(f["a"])(p,a,n,!1,null,"79faf411",null);t["default"]=m.exports},"6a9d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v("电子面单设置")]),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"是否开启电子面单",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["enable",{initialValue:1,rules:[{required:!0}]}],expression:"['enable', { initialValue: 1, rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[e._v("开启")]),t("a-radio",{attrs:{value:0}},[e._v("关闭")])],1)],1),t("a-form-item",{attrs:{label:"API 服务网关",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["provider",{initialValue:"kdniao",rules:[{required:!0}]}],expression:"['provider', { initialValue: 'kdniao', rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:"kdniao"}},[e._v("快递鸟")]),t("a-radio",{attrs:{value:"kd100"}},[e._v("快递100")])],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"kd100"===e.form.getFieldValue("provider"),expression:"form.getFieldValue('provider') === 'kd100'"}]},[t("a-form-item",{attrs:{label:"授权 KEY",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["providerConfig.kd100.key"],expression:"['providerConfig.kd100.key']"}]}),t("div",{staticClass:"form-item-help"},[t("small",[e._v("快递100官网提供，登录快递100")]),t("a",{attrs:{href:"https://api.kuaidi100.com/manager/page/myinfo/enterprise",target:"_blank"}},[e._v("企业信息")]),t("small",[e._v("获取")])])],1),t("a-form-item",{attrs:{label:"Secret",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["providerConfig.kd100.secret"],expression:"['providerConfig.kd100.secret']"}]}),t("div",{staticClass:"form-item-help"},[t("small",[e._v("快递100官网提供，登录快递100")]),t("a",{attrs:{href:"https://api.kuaidi100.com/manager/page/myinfo/enterprise",target:"_blank"}},[e._v("企业信息")]),t("small",[e._v("获取")])])],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"kdniao"===e.form.getFieldValue("provider"),expression:"form.getFieldValue('provider') === 'kdniao'"}]},[t("a-form-item",{attrs:{label:"用户ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["providerConfig.kdniao.eBusinessID"],expression:"['providerConfig.kdniao.eBusinessID']"}]}),t("div",{staticClass:"form-item-help"},[t("small",[e._v("快递鸟官网提供，登录快递鸟")]),t("a",{attrs:{href:"https://www.kdniao.com/UserCenter/v4/UserHome.aspx",target:"_blank"}},[e._v("会员中心")]),t("small",[e._v("获取")])])],1),t("a-form-item",{attrs:{label:"API KEY",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["providerConfig.kdniao.apiKey"],expression:"['providerConfig.kdniao.apiKey']"}]}),t("div",{staticClass:"form-item-help"},[t("small",[e._v("快递鸟官网提供，登录快递鸟")]),t("a",{attrs:{href:"https://www.kdniao.com/UserCenter/v4/UserHome.aspx",target:"_blank"}},[e._v("会员中心")]),t("small",[e._v("获取")])])],1)],1),t("a-form-item",{attrs:{wrapperCol:{span:e.wrapperCol.span,offset:e.labelCol.span}}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},n=[],o=r("c7eb"),i=r("1da1"),l=(r("d3b7"),r("88bc")),s=r.n(l),u=r("5530"),c=r("b775"),d={detail:"/eorder.setting/detail",update:"/eorder.setting/update"};function p(e){return Object(c["b"])({url:d.detail,method:"get",params:{key:e}})}function f(e,t){return Object(c["b"])({url:d.update,method:"post",data:Object(u["a"])({key:e},t)})}var m=r("ca00"),v={data:function(){return{key:"basic",labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),record:{}}},created:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDetail();case 2:e.setFieldsValue();case 3:case"end":return t.stop()}}),t)})))()},methods:{getDetail:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.abrupt("return",p(e.key).then((function(t){e.record=t.data.detail})).finally((function(t){return e.isLoading=!1})));case 2:case"end":return t.stop()}}),t)})))()},setFieldsValue:function(){var e=this.record,t=this.$nextTick,r=this.form;!Object(m["f"])(r.getFieldsValue())&&t((function(){r.setFieldsValue(s()(e,["enable","provider","providerConfig"]))}))},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){!e&&t.onFormSubmit(r)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,f(this.key,{form:e}).then((function(e){t.$message.success(e.message,1.5)})).finally((function(e){return t.isLoading=!1}))}}},h=v,b=(r("60b8"),r("2877")),g=Object(b["a"])(h,a,n,!1,null,"3f82d6e5",null);t["default"]=g.exports},"7ad9":function(e,t,r){},"84ea":function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c");var a=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v("电子面单模板")]),t("div",{staticClass:"table-operator"},[t("a-row",[t("a-col",{attrs:{span:6}},[e.$auth("/apps/eorder/template/create")?t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]):e._e()],1),t("a-col",{attrs:{span:8,offset:10}},[t("a-input-search",{staticStyle:{"max-width":"300px","min-width":"150px",float:"right"},attrs:{placeholder:"请输入模板名称"},on:{search:e.onSearch},model:{value:e.queryParam.search,callback:function(t){e.$set(e.queryParam,"search",t)},expression:"queryParam.search"}})],1)],1)],1),t("s-table",{ref:"table",attrs:{rowKey:"template_id",loading:e.isLoading,columns:e.columns,data:e.loadData,pageSize:15},scopedSlots:e._u([{key:"provider",fn:function(r){return t("span",{},[t("a-tag",[e._v(e._s(e.ProviderEnum[r]))])],1)}},{key:"express",fn:function(r){return t("span",{},[t("a-tag",[e._v(e._s(r.express_name))])],1)}},{key:"action",fn:function(r,a){return t("span",{staticClass:"actions"},[e.$auth("/apps/eorder/template/update")?t("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]):e._e(),t("a",{directives:[{name:"action",rawName:"v-action:delete",arg:"delete"}],on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])])}}])})],1)},n=[],o=r("5530"),i=(r("d3b7"),r("632d")),l=r("2af9"),s={kd100:"快递100",kdniao:"快递鸟"},u={name:"Index",components:{STable:l["d"]},data:function(){var e=this;return{queryParam:{},isLoading:!1,ProviderEnum:s,columns:[{title:"模板ID",dataIndex:"template_id"},{title:"模板名称",dataIndex:"name"},{title:"API网关",dataIndex:"provider",scopedSlots:{customRender:"provider"}},{title:"物流公司",dataIndex:"express",scopedSlots:{customRender:"express"}},{title:"排序",dataIndex:"sort"},{title:"添加时间",dataIndex:"create_time"},{title:"操作",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],loadData:function(t){return i["f"](Object(o["a"])(Object(o["a"])({},t),e.queryParam)).then((function(e){return e.data.list}))}}},created:function(){},methods:{handleAdd:function(){this.$router.push("./create")},handleEdit:function(e){this.$router.push({path:"./update",query:{templateId:e.template_id}})},handleDelete:function(e){var t=this,r=this.$confirm({title:"您确定要删除该记录吗?",content:"删除后不可恢复",onOk:function(){return i["c"]({templateId:e["template_id"]}).then((function(e){t.$message.success(e.message,1.5),t.handleRefresh()})).finally((function(e){r.destroy()}))}})},handleRefresh:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$refs.table.refresh(e)},onSearch:function(){this.handleRefresh(!0)}}},c=u,d=r("2877"),p=Object(d["a"])(c,a,n,!1,null,null,null);t["default"]=p.exports},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=s||u||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function p(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function f(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var m=Object.prototype,v=m.hasOwnProperty,h=m.toString,b=c.Symbol,g=m.propertyIsEnumerable,w=b?b.isConcatSpreadable:void 0,y=Math.max;function C(e,t,r,a,n){var o=-1,i=e.length;r||(r=j),n||(n=[]);while(++o<i){var l=e[o];t>0&&r(l)?t>1?C(l,t-1,r,a,n):f(n,l):a||(n[n.length]=l)}return n}function x(e,t){return e=Object(e),_(e,t,(function(t,r){return r in e}))}function _(e,t,r){var a=-1,n=t.length,o={};while(++a<n){var i=t[a],l=e[i];r(l,i)&&(o[i]=l)}return o}function k(e,t){return t=y(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=y(r.length-t,0),o=Array(n);while(++a<n)o[a]=r[t+a];a=-1;var i=Array(t+1);while(++a<t)i[a]=r[a];return i[t]=o,d(e,this,i)}}function j(e){return N(e)||L(e)||!!(w&&e&&e[w])}function O(e){if("string"==typeof e||V(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function L(e){return E(e)&&v.call(e,"callee")&&(!g.call(e,"callee")||h.call(e)==n)}var N=Array.isArray;function S(e){return null!=e&&P(e.length)&&!I(e)}function E(e){return F(e)&&S(e)}function I(e){var t=q(e)?h.call(e):"";return t==o||t==i}function P(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function F(e){return!!e&&"object"==typeof e}function V(e){return"symbol"==typeof e||F(e)&&h.call(e)==l}var $=k((function(e,t){return null==e?{}:x(e,p(C(t,1),O))}));e.exports=$}).call(this,r("c8ba"))},a3dc:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"模板名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', { rules: [{ required: true, min: 2, message: '请输入至少2个字符' }] }]"}],attrs:{placeholder:"请输入模板名称"}})],1),t("a-form-item",{attrs:{label:"API网关",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["provider",{initialValue:"kdniao",rules:[{required:!0}]}],expression:"['provider', { initialValue: 'kdniao', rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:"kdniao"}},[e._v("快递鸟")]),t("a-radio",{attrs:{value:"kd100"}},[e._v("快递100")])],1)],1),t("a-form-item",{attrs:{label:"物流公司",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["express_id",{rules:[{required:!0,message:"请选择物流公司"}]}],expression:"['express_id', { rules: [{ required: true, message: '请选择物流公司' }] }]"}],attrs:{placeholder:"请选择物流公司"}},e._l(e.expressList,(function(r,a){return t("a-select-option",{key:a,attrs:{value:r.express_id}},[e._v(e._s(r.express_name))])})),1),t("div",{staticClass:"form-item-help"},[t("router-link",{attrs:{target:"_blank",to:{path:"/setting/delivery/express/index"}}},[e._v("物流公司管理")])],1)],1),t("a-form-item",{attrs:{label:"电子面单客户号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.customerName",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['config.customerName', { rules: [{ required: true, min: 2, message: '请输入至少2个字符' }] }]"}],attrs:{placeholder:"需快递线下（网点）申请"}})],1),t("a-form-item",{attrs:{label:"电子面单密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.customerPwd"],expression:"['config.customerPwd']"}],attrs:{placeholder:"需快递线下（网点）申请"}})],1),t("a-form-item",{attrs:{label:"月结编码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.monthCode"],expression:"['config.monthCode']"}]})],1),t("a-form-item",{attrs:{label:"网点名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.stationName"],expression:"['config.stationName']"}]})],1),t("a-form-item",{attrs:{label:"网点编码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.sendSite"],expression:"['config.sendSite']"}]})],1),t("a-form-item",{attrs:{label:"邮费支付方式",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["config.payType",{initialValue:"SHIPPER",rules:[{required:!0}]}],expression:"['config.payType', { initialValue: 'SHIPPER', rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:"SHIPPER"}},[e._v("现付")]),t("a-radio",{attrs:{value:"CONSIGNEE"}},[e._v("到付")]),t("a-radio",{attrs:{value:"MONTHLY"}},[e._v("月结")])],1)],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入排序值"}]}],expression:"['sort', { initialValue: 100, rules: [{ required: true, message: '请输入排序值' }] }]"}],attrs:{min:0}})],1),t("a-form-item",{staticClass:"mt-20",attrs:{wrapperCol:{span:e.wrapperCol.span,offset:e.labelCol.span}}},[t("a-button",{attrs:{type:"primary","html-type":"submit",loading:e.isBtnLoading}},[e._v("提交")])],1)],1)],1)],1)},n=[],o=r("c7eb"),i=r("1da1"),l=(r("d3b7"),r("2ef0"),r("632d")),s=r("2a66"),u=(r("ca00"),{data:function(){return{isLoading:!1,isBtnLoading:!1,labelCol:{span:3},wrapperCol:{span:10},form:this.$form.createForm(this),expressList:[]}},created:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getExpressList();case 2:case"end":return t.stop()}}),t)})))()},methods:{getExpressList:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,s["b"]().then((function(t){return e.expressList=t.data.list})).finally((function(){return e.isLoading=!1}));case 3:case"end":return t.stop()}}),t)})))()},handleSubmit:function(e){e.preventDefault();var t=this.form.validateFields,r=this.onFormSubmit;t((function(e,t){!e&&r(t)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,this.isBtnLoading=!0,l["a"]({form:e}).then((function(e){t.$message.success(e.message,1.5),setTimeout((function(){return t.$router.push("./index")}),1500)})).catch((function(){return t.isBtnLoading=!1})).finally((function(){return t.isLoading=!1}))}}}),c=u,d=(r("3962"),r("2877")),p=Object(d["a"])(c,a,n,!1,null,"ef7f3db4",null);t["default"]=p.exports},c7eb:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("159b"),r("b0c0"),r("131a"),r("fb6a");var a=r("53ca");function n(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
n=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(E){c=function(e,t,r){return e[t]=r}}function d(e,t,r,a){var n=t&&t.prototype instanceof m?t:m,i=Object.create(n.prototype),l=new L(a||[]);return o(i,"_invoke",{value:_(e,r,l)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(E){return{type:"throw",arg:E}}}e.wrap=d;var f={};function m(){}function v(){}function h(){}var b={};c(b,l,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==t&&r.call(w,l)&&(b=w);var y=h.prototype=m.prototype=Object.create(b);function C(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,i,l,s){var u=p(e[o],e,i);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==Object(a["a"])(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,l,s)}),(function(e){n("throw",e,l,s)})):t.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return n("throw",e,l,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return i=i?i.then(a,a):a()}})}function _(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return S()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var l=k(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var s=p(e,t,r);if("normal"===s.type){if(a=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a="completed",r.method="throw",r.arg=s.arg)}}}function k(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator["return"]&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var n=p(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=h,o(y,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:v,configurable:!0}),v.displayName=c(h,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,u,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},C(x.prototype),c(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new x(d(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},C(y),c(y,u,"Generator"),c(y,l,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}},de6c:function(e,t,r){"use strict";r("4b5f")}}]);