(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-661adead"],{"251d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:t.title_,width:672,"mask-closable":!1},on:{"on-cancel":t.cancel},model:{value:t.isShowModal_,callback:function(e){t.isShowModal_=e},expression:"isShowModal_"}},[a("div",{staticClass:"layer layer-approvedetail"},[a("div",{staticClass:"tablecommondiv"},[a("table",{staticClass:"tablecommon table-approvedetail"},[a("thead",[a("tr",[a("th",[t._v("审批角色")]),a("th",[t._v("审批人姓名")]),a("th",[t._v("审批时间")]),a("th",[t._v("审批结果")]),a("th",[t._v("备注")])])]),a("tbody",t._l(t.list_,function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.step_desc))]),a("td",[t._v(t._s(e.user_name))]),a("td",[t._v(" "+t._s(t.dataFormat(e.step_time))+" ")]),a("td",[0==e.status?[t._v(" 待审批")]:t._e(),1==e.status?[t._v(" 通过 ")]:t._e(),2==e.status?[t._v(" 不通过 ")]:t._e()],2),a("td",[t._v(t._s(e.comment))])])}),0)])])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:t.cancel}},[t._v("确定")])],1)])},i=[],n={props:{list:{type:Array},isShowModal:{type:Boolean},title:{default:"带宽复用审批详情",type:String}},data:function(){return{isShowModal_:this.isShowModal,list_:this.list,title_:this.title}},methods:{cancel:function(){this.isShowModal_=!1,this.$emit("emitShowDetail",this.isShowModal_),console.log(this.isShowModal)}},watch:{isShowModal:function(){this.isShowModal_=this.isShowModal},title:function(){this.title_=this.title},list:{handler:function(t,e){this.list_=this.list},deep:!0}}},o=n,r=a("2877"),c=Object(r["a"])(o,s,i,!1,null,null,null);c.options.__file="flow_detail.vue";e["a"]=c.exports},"8edb":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"不通过",width:422,"mask-closable":!1},on:{"on-cancel":t.cancel},model:{value:t.isShowModal_,callback:function(e){t.isShowModal_=e},expression:"isShowModal_"}},[a("div",{staticClass:"layer layer-nopass"},[a("h5",[t._v("请填写审批不通过原因")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"reason",domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{size:"default"},on:{click:t.cancel}},[t._v("取消")]),a("Button",{attrs:{type:"primary",size:"default"},on:{click:function(e){t.submit()}}},[t._v("  提交 ")])],1)])},i=[],n={props:{isShowModal:{type:Boolean}},data:function(){return{isShowModal_:this.isShowModal,text:"",list_:this.list}},methods:{cancel:function(){this.isShowModal_=!1,this.text="",this.$emit("emitText",{isShowModal:this.isShowModal_,text:this.text})},submit:function(){this.$emit("emitText",{isShowModal:this.isShowModal_,text:this.text})}},watch:{isShowModal:function(){this.isShowModal_=this.isShowModal,this.text=""}}},o=n,r=a("2877"),c=Object(r["a"])(o,s,i,!1,null,null,null);c.options.__file="flow_nopass.vue";e["a"]=c.exports},ce8b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix",attrs:{id:"main"}},[a("div",{staticClass:"containarea"},[a("h2",{staticClass:"commontit"},[t._v("合同审批")]),a("div",{staticClass:"container"},[a("div",{staticClass:"tabletop clearfix"},[a("div",{staticClass:"tab"},[a("ul",[a("li",{class:0==t.review_status?"current":"",on:{click:function(e){t.review_status=0}}},[a("a",[t._v("未完成审批")])]),a("li",{class:1==t.review_status?"current":"",on:{click:function(e){t.review_status=1}}},[a("a",[t._v("已完成审批")])])])])]),a("div",{staticClass:"tablecommondiv"},[a("table",{class:0==t.review_status?" tablecommon table-ctrapproval01 ":"tablecommon table-ctrapproval02"},[t._m(0),a("tbody",t._l(t.list,function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.contract_type_name))]),a("td",[t._v(" "+t._s(e.contract_code)+" ")]),a("td",[t._v(t._s(e.project_name)+" ")]),a("td",[t._v(t._s(e.client_name)+" "+t._s(e.supplier_name)+" ")]),a("td",{domProps:{innerHTML:t._s(t.toLine(e.service_desc))}}),a("td",[t._v(t._s(e.contract_amount))]),a("td",{domProps:{innerHTML:t._s(t.toLine(e.payment_desc))}}),a("td",[t._v(t._s(e.commission_desc))]),a("td",[t._v(t._s(t.dataFormat(e.expire_time)))]),a("td",{class:"rejected"==e.step?"red":""},[t._v(" "+t._s(e.stage_desc)+"\r\n                                ")]),a("td",[t._v(t._s(e.user_name))]),a("td",[a("a",{staticClass:"alink",on:{click:function(a){t.showFlowDetail(e)}}},[t._v("审批详情")]),0==t.review_status?a("a",{staticClass:"alink",on:{click:function(a){t.pass(e)}}},[t._v(" 同意  ")]):t._e(),0==t.review_status?a("a",{staticClass:"alink",on:{click:function(a){t.showNoPass(e)}}},[t._v("不同意")]):t._e()])])}),0)])]),a("div",{staticClass:"tablebottom"},[a("div",{staticClass:"pagewrap"},[a("Page",{attrs:{total:t.listCount,"show-sizer":"","page-size":t.pagination.pagerow,"show-total":"","show-elevator":"",current:t.pagination.pageno},on:{"update:pageSize":function(e){t.$set(t.pagination,"pagerow",e)},"update:current":function(e){t.$set(t.pagination,"pageno",e)},"on-change":t.init,"on-page-size-change":t.pageSizeChange}})],1)])])]),a("flowdetail",{attrs:{isShowModal:t.isShowDetail,list:t.flowDetailList},on:{emitShowDetail:t.emitShowDetail}}),a("flownopass",{attrs:{isShowModal:t.isShowNoPass},on:{emitText:t.emitText}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("合同类型")]),a("th",[t._v("合同编号")]),a("th",[t._v("项目名称")]),a("th",[t._v("客户名称")]),a("th",[t._v("服务内容")]),a("th",[t._v("合同金额")]),a("th",[t._v("付款方式")]),a("th",[t._v("佣金")]),a("th",[t._v("计费时间")]),a("th",[t._v("合同状态")]),a("th",[t._v("销售"),a("br"),t._v("/采购员")]),a("th",[t._v("操作")])])])}],n=(a("96cf"),a("3b8d")),o=a("494c"),r=a("8edb"),c=a("251d"),l=new o["a"],u={components:{flowdetail:c["a"],flownopass:r["a"]},data:function(){return{list:[],listCount:0,isShowDetail:!1,isShowNoPass:!1,flowDetailList:[],pagination:{pagerow:this.$store.state.pagination.pagerow,pageno:this.$store.state.pagination.pageno},ip_type:[],review_status:0,selectItem:{},RowData:[],text:""}},methods:{init:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.contract("select",this.getSelectItem());case 2:e=t.sent,1==e.meta.result?(this.list=e.data,this.listCount=e.meta.total):this.alertError(e.errors[0].abstract_info);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toLine:function(t){try{for(var e=JSON.parse(t),a="",s=0;s<e.length;s++)a+=e[s]["description"]+"<br>";return a}catch(i){return t}},pass:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm("确定此进行审批通过操作吗？")){t.next=5;break}return t.next=3,l.contract("flow",{id:e.id,status:1,desc:""});case 3:a=t.sent,1==a.meta.result?(this.$Message.info("操作成功"),this.init()):(this.alertError(a.errors[0].abstract_info),this.init());case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),emitShowDetail:function(t){this.isShowDetail=t},emitText:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isShowModal){t.next=8;break}if(!confirm("确定此进行审批不通过操作吗？")){t.next=6;break}return t.next=4,l.contract("flow",{id:this.RowData.id,status:2,desc:e.text});case 4:a=t.sent,1==a.meta.result?(this.$Message.info("操作成功"),this.isShowNoPass=!1,this.init()):(this.alertError(a.errors[0].abstract_info),this.init());case 6:t.next=9;break;case 8:this.isShowNoPass=e.isShowModal;case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),pageSizeChange:function(t){this.pagination.pagerow=t,this.init()},getSelectItem:function(){return{contract_code:"",contract_endtime:"",contract_starttime:"",contract_status:"",contract_type:"-1",our_name:"",partner_name:"",pageno:this.pagination.pageno,pagerow:this.pagination.pagerow,contract_flow_status:this.review_status}},showNoPass:function(t){this.RowData=t,this.isShowNoPass=!0},showFlowDetail:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.contract("flow_detail",{id:e.id});case 2:a=t.sent,1==a.meta.result?(this.isShowDetail=!0,this.flowDetailList=a.data):this.alertError(a.errors[0].abstract_info);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),watch:{review_status:function(){this.init()}}},h=u,_=a("2877"),d=Object(_["a"])(h,s,i,!1,null,null,null);d.options.__file="flow_contract.vue";e["default"]=d.exports}}]);