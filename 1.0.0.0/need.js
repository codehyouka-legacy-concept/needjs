var pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41={};

	(function(pf){

/**
* This program was writtern by pein freccs.
* Please my repository for details and update
* https://github.com/hyoukageass/pf-js
**/
	
pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.src=[];	
	pf_internal_libry={};
	pf_internal_libry.config=[];
	pf_internal_libry.logic={};	
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.report={};
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.report.loadjs=[];
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.report.loadjs_error=[];
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control={};

	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extend={};
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extendview={};
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.loadlibrary={};
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.delegation_list={};
	var main_dom={

	document_ready:function(func){

				
				var dom_rdy_ctt=0;

		if(dom_rdy_ctt===0){
		 if(window.attachEvent){
			 //DOMContentLoaded
		window.attachEvent("onload",dom_load_ready);	
		window.attachEvent("onreadystatechange",dom_load_ready);	
		}
		else if(window.addEventListener){
		window.addEventListener("load", dom_load_ready, false);
	
		}

		}


		function dom_load_ready(){
				
					if(document.readyState==="complete" ){
					 func();
					 dom_rdy_ctt++;
						}
			}		
	},
	dom_delegation_event:function(elem,evnt,func){
			
				var body_event=document.body;
		pf$(body_event).on("click,mousemove,touchmove,touchstart",function(){
		

			pf$(elem).each(function(ek,ev){
				var get_del_act=pf$(ev[ek]).getattr(['pf_dom_delegate_active'])||false;
					if(get_del_act==false){
				pf$(ev[ek]).on(evnt,func);
					pf$(ev[ek]).setattr({'pf_dom_delegate_active':'true'});	
				}


			});
		});
				
	},	
	parentchild:function(pt_cld,de,cnt){
		var child_prnt=pt_cld;
	
	if(child_prnt===null){
		return true;
	}	
	else if(child_prnt==="first"){
		
		if(parseInt(cnt)===0)
			return true;
		else
			return false;	
	}
	else if(child_prnt==="last"){
		
		if((de.length-1)===parseInt(cnt))
			return true;
		else
			return false;	
	}
	else if(child_prnt==="haschild"){
		if(de[cnt].children.length>0)
			return true;
		else
			return false;	
	}
	else if(child_prnt==="hasChildNodes"){
		if(de[cnt].hasChildNodes())
			return true;
		else
			return false;	
	}
	else if(child_prnt==="childNodes"){
		if(de.childNodes.length > 0)
			return true;
		else
			return false;	
	}
	},
		css:function(id,d){
		var elem_str_class="";
		var get_attr=(typeof(main_dom.get_attr(id,['style']).style)!="undefined")?main_dom.get_attr(id,['style']).style:"";
		var split_style=get_attr.toString().split(";");
	
		_pf.each(split_style,function(spk,spv){ 
			var elem_d=spv.split(":");
			if(_pf.count(elem_d)>0 && typeof(spv)!="undefined"){
				if(typeof(d[elem_d[0]])=="undefined" && typeof(elem_d[1])!="undefined"){
				d[elem_d[0]]=elem_d[1];
				}
			}
		});		

		for(var v in d){
			
		elem_str_class+=(v+":"+d[v]+";");
		
try{
	if(typeof(id)!="undefined" && typeof(id)!="null"){
	if(typeof(id.style.setAttribute)!="undefined" && typeof(id.style.setAttribute)!="null"){ id.style.setAttribute(v,d[v]); }	
	}
}catch(e){ console.log(e); }
}
	try{
	if(typeof(id)!="undefined" && typeof(id)!="null"){
	if(typeof(id.setAttributeNode)!="undefined" && typeof(id.setAttributeNode)!="null"){
var creat_elem=document.createAttribute("style");
	creat_elem.value=elem_str_class;
	id.setAttributeNode(creat_elem);	
	}}
	}catch(e){ console.log(e); }
		
		},
		getcss:function(ele,prop){
		
		var golb_ret;

	this.loopstyle=function(dom,style,intt){
		var golb={};
		var golb_st="";
	
		
				if (!window.getComputedStyle) {
				golb[style] = dom.currentStyle[style];
				golb_st= dom.currentStyle[style];
				} else {
			golb[style] = window.getComputedStyle(dom).getPropertyValue(style);
			golb_st= window.getComputedStyle(dom).getPropertyValue(style);
			}
			return golb_st;
		};
		
		
		if(Object.prototype.toString.call(prop)==="[object Array]"){
		var golb_ret={};
			for(var fn in prop){
			
		golb_ret[prop[fn]]=this.loopstyle(ele,prop[fn],"array");
			}
			
			}
		else if(Object.prototype.toString.call(prop)==="[object String]"){
			golb_ret=this.loopstyle(ele,prop,"str");
		
				}
			 
			return golb_ret;
		},
		checkfile:function(s,s1){
			
		var r = new RegExp("(."+s+")$");
			if(r.test(s1)){
			return s1;
			}else{
				var bool_url=/[?]/gi.test(s1);
		
				var splt=s1.split("?");
		
				var url_site_rep=splt[0].replace(/[\/]$/i,"");
				
			return (bool_url===false)?(s1+"."+s):(url_site_rep+"."+s+"?"+splt[1]);
			}
		
		},
		checkurlvalid:function(s){
		if(/^(HTTP|HTTPS|SFTP|FTP|TCP|\/{2})/.test(s.toUpperCase())){
		
				return main_dom.url_filter_restriction(s);
			}
		else{
		var proto=window.location.protocol;
		var url=window.location.host;
	
			return main_dom.url_filter_restriction(proto+"//"+url+"/"+s);
			}
		
		},
		checkurlvalid_ajax:function(s){
			if(/^(http|https|sftp|ftp|tcp|\/{2}){1,4}/.test(s.toLocaleLowerCase())){
				
				return main_dom.url_filter_restriction(s);
				}
			else{
				
				if(typeof(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.config)==="undefined"){
			
			var proto=window.location.protocol;
			var url=window.location.host;
				return main_dom.url_filter_restriction(proto+"//"+url+"/"+s);
				}else{
					var url_m=pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.config.url;

					return main_dom.url_filter_restriction(url_m+""+s);
				}	
				}
			
			},
		dom_offset:function(_el){
			var target = _el,
      			 target_width = target.offsetWidth,
      			 target_height = target.offsetHeight,
      			 target_left = target.offsetLeft,
       		target_top = target.offsetTop,
      			 gleft = 0,
   			    gtop = 0,
    			   rect = {};

       var moonwalk = function( _parent ) {
        if (!!_parent) {
        	gleft += _parent.offsetLeft;
        	gtop += _parent.offsetTop;
        	moonwalk( _parent.offsetParent );
        } else {
        	return rect = {
        	top: target.offsetTop + gtop,
        	left: target.offsetLeft + gleft,
        	bottom: (target.offsetTop + gtop) + target_height,
        	right: (target.offsetLeft + gleft) + target_width
        	};
        }
    };
        moonwalk( target.offsetParent );
        return rect;
		},
		dom_manipulate:function(init,dom,loca){
			if(init==="find"){
				
			}
			else if(init==="last"){
				
			}
			else{
				return dom;
			}
		},
		get_scroll_position:function(){

			return {
				"top":document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,
				"left":document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft
				}
		},
		ajax_controller:function(boo){
		var xdr;
		var xhr_type;
		if (window.XDomainRequest && boo==true)
      {
			xdr = new XDomainRequest();
			xhr_type="ie";
		}else{
		xhr_type="noneie";
			
			if(window.XMLHttpRequest){
			xdr=new XMLHttpRequest();
			}else{
			try{
			xdr=new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				try{
			xdr=new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}catch(e){
			
			}
			}
			}
	
	
		}
		
		return {"xdr":xdr,"xhr_type":xhr_type};
		
		},
		js_event_type:function(xhr,htype,func,jsons){
		var retrn={};
			
		if(htype==="ie"){
		var ie=["error","timeout","progress","load"];
		 retrn["ie"]={};
		for(var i in ie){
		retrn["ie"][ie[i]]=(function(fnc){
	
						 xhr[fnc]=function(res){
						if(typeof(func)==="function"){
								
							func(((jsons==="false")?xhr.responseText:_pf.parseJson(xhr.responseText)),xhr);
							main_dom.setLibrary("ajax",{"status":xhr.status?"success":"failed"});
							}
						 }
							})("on"+ie[i]);
		}
		}
		else if(htype==="noneie"){
		retrn["noneie"]={};
			xhr.onreadystatechange=function(){
							
								if(xhr.readyState==4){ 
							if(typeof(func)==="function"){
								if(xhr.status==200){
								retrn["noneie"]["load"]=func(((jsons==="false")?xhr.responseText:_pf.parseJson(xhr.responseText)),xhr);
								main_dom.setLibrary("ajax",{"status":xhr.status?"success":"failed"});
								}else{
								retrn["noneie"]["error"]=func(((jsons==="false")?xhr.responseText:_pf.parseJson(xhr.responseText)),xhr);
								main_dom.setLibrary("ajax",{"status":xhr.status?"success":"failed"});

								}
								}
								}
							}
		}
		return retrn;
		
		
		},
			js_json_delimiters:function(jsn){
					if(typeof(jsn)==="object"){
					if(_pf.getJSONtypeof(jsn)=="json"){
						return _pf.delimiter(jsn,"=","&");
						}
					else if(_pf.getJSONtypeof(jsn)=="array"){
						var arry_psh=[];
						_pf.each(jsn,function(ck,cv){
								
								arry_psh.push(_pf.getKey(cv)+"="+_pf.getValue(cv));
						});
						
						return arry_psh.join("&");
					}else{
						return "";
					}
					}else if(typeof(jsn)==="string"){
					return jsn;
					}else{
					return "";
					}
					}
		,setLibrary:function(mth,d){
			if(_pf.indexOf(pf_internal_libry.config,mth)>=0){
				if(typeof(pf_internal_libry.logic[mth])!="undefined"){
				pf_internal_libry.logic[mth](d);
				}
			}
		},get_element_exist_attr:function(res){
				var attr_elem={};
			for (var att, i = 0, atts = res.attributes, n = atts.length; i < n; i++){
			    att = atts[i];
    			
				attr_elem[att.nodeName]=att.nodeValue;
			}
			return attr_elem;
		}
		,get_attr:function(meth,d){
			var	attr_type=((_pf.getJSONtypeof(d)=="array")?d:[d]);
			var globl={};
	 	if(typeof(meth)!="undefined"){
			if(typeof(meth.getAttributeNode) !="undefined" && typeof(meth.getAttributeNode) !="null"){
			
				_pf.each(attr_type,function(ky,vl){
					
					if(meth.getAttributeNode(vl))
					globl[vl]=meth.getAttributeNode(vl).value;		
				});
				
			}else{
				
				_pf.each(attr_type,function(ky,vl){
					if(meth.getAttribute)
					globl[vl]=meth.getAttribute(vl);
				});
			}
              }
			return globl; 
			},
			url_filter_restriction:function(url){
				var ur1=url.toLowerCase().replace(/^(https:)/g,"")
				return ur1;
			},
			domio_type:function(type,dom,htmll){
				
			var main_dom=null;
				if(type=="val"){
					
					if(typeof(htmll)!="undefined"){ 
						dom.value=htmll;
					} return dom.value;
					
				}
				if(type=="html"){
					if(typeof(htmll)!="undefined"){ 
						dom.innerHTML=htmll;
					} return dom.innerHTML;
						}
				if(type=="text"){
					if(typeof(htmll)!="undefined"){ 
						(typeof(dom.innerText)=="undefined")?dom.textContent:dom.innerText=htmll;
					} return (typeof(dom.innerText)=="undefined")?dom.textContent:dom.innerText;		
					
				}if(type=="outerhtml"){
					if(typeof(htmll)!="undefined"){ 
						dom.outerHTML=htmll;
					} return dom.outerHTML;					
				}		
			},
			initFadeElement:function(meth,typ_s,intrvl_s){
				var ot={"fadein":100,"fadeout":0,"fadeto":100};
				var timetofade={"fadein":"ot-20","fadeout":"ot+20","fadeto":"100"};
				var timetoequal={"fadein":"ot<10","fadeout":"ot>90","fadeto":"ot==100"};

				if(/(fadeout)/g.test(typ_s) ){
						
						main_dom.css(meth,{"display":""});
						
						}

		var intval=setInterval(function(){
				var func_check=new Function("ot","return "+timetoequal[typ_s]);
					if(func_check(ot[typ_s])){
						clearInterval(intval);

						if(/(fadein)/g.test(typ_s)){
						main_dom.css(meth,{"display":"none"});

						}
						if(/(fadeto)/g.test(typ_s)){
						main_dom.css(meth,{"display":""});
						fadefun(meth,intrvl_s.time/10);
						}
												
					}
			
					if(/(fadein|fadeout)/g.test(typ_s)){
							fadefun(meth,ot[typ_s]);

					}
				var func_ot=new Function("ot","return "+timetofade[typ_s]);
				ot[typ_s]=func_ot(ot[typ_s]);
				},intrvl_s.time);

					function fadefun(meth,fade){
						var agenttype=new pf_agenttype();
						if(agenttype.useragent().browser.msie){
					main_dom.css(meth,{"filter":("alpha(opacity=" + (fade) + ")")});
						}else{ 
					main_dom.css(meth,{"opacity":(fade/100)});
						}
					}
			}
	};	
	function pf_js_init(d){
	var tr=d;
	
	
		for(var tey in d){
		
			d[tey]();
		}
	
	
	this.main_d=d;
	}
	pf_js_init.prototype.init=function(){
	
	
	
	}
	function pf_config(d){
		if(typeof(d)!="undefined"){
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.config={};
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.config=d;

		}	
	}
	pf_config.prototype.getconfig=function(fnc){
		if(typeof(fnc)!="undefined"){
		fnc(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.config);
		}
		else{
			return pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.config;
		}
	
	}
	
	function pf_library(d){
		this.main=d;
	}
	pf_library.prototype.getMethod=function(fnc){

		
			pf_internal_libry.logic[this.main]=function(res){
				if(typeof(fnc)!='undefined'){	
				fnc(res);
				}	
		}
	}
	function pf_extender(){
	
	}
	pf_extender.prototype.extend={
	class_extnd:function(clas,id){
		
		for ( var key in clas ){
		 id[key] = clas[key]; 
			}
		return id;	
	        },
		
		obj_extnd:function(id){
			var pf_ob=new pf_observer(id);
			return pf_ob;
	        }
	
	
	}
	
	pf_extender.prototype.dom={
		
		html:{
		hasClass: function(s, klass) {
  			var r = new RegExp("(?:^| )(" + klass + ")(?: |$)")
    				, m = (""+s).match(r);
			  return (m) ? m[1] : null;
			},
		tag_value:function(tar,ar){
			
			var node =document;
			if(/\[/g.test(tar)){
			
				var fl_m="";
				var fl_va=[];
				var fl_va_cntnt={};
						var replc_str=tar.replace(/([a-zA-Z0-9:_-]{0,})\[([\w\s\d\=\_\-\[\]\'\"\;]{1,})\]/gm,function(m,m1,m2,m3){


						   var m2_split_count=m2.split(";");
						
							_pf.each(m2_split_count,function(sck,scv){
							  var m2_split_cnt=scv.split("=");
							if(_pf.count(m2_split_cnt)>0){
								fl_va.push(m2_split_cnt[0]);
								fl_va_cntnt[m2_split_cnt[0]]=m2_split_cnt[1].replace(/[\'\"]{0,}/g,"");
							}
						}); 
							fl_m=m1;
						
						return "asd";
					});
					
			if(_pf.count(fl_va_cntnt)>0){
					var fl_m_tot=fl_m;
					if(fl_m=="all:"){ fl_m_tot="*";}
				if(node.getElementsByTagName(fl_m_tot)!=null && node.getElementsByTagName(fl_m_tot)!=undefined){ 
					var node_elem=node.getElementsByTagName(fl_m_tot);
					 for(var i=0,j=node_elem.length; i<j; i++){
						
						var get_attr=main_dom.get_attr(node_elem[i],fl_va);
					
								if(_pf.count(_pf.where(get_attr,fl_va_cntnt))>0){
									
									ar.push(node_elem[i]);
									}							
						}
				}
				}
			}else{
			
			if(node.getElementsByTagName(tar)!=null && node.getElementsByTagName(tar)!=undefined){ 
				
				var els = node.getElementsByTagName(tar);
	
     for(var i=0,j=els.length; i<j; i++){
	
        		ar.push(els[i]);
			
		}
				}
			}
		},
			id:function(d,ar){
				
			var spltt=d.split(" ");
			if(spltt.length==1){
		var replce_dom=d.toString().replace(/^[#]/g,"");
		var idd_m=document.getElementById(replce_dom,ar);
		
		}
		else{
		var replce_dom=spltt[0].toString().replace(/^[#]/g,"");
		var idd_m=document.getElementById(replce_dom,ar).getElementsByTagName(spltt[1]);
		
			}
		if(typeof(idd_m) !=="undefined" && idd_m!==null){
					
			ar.push(idd_m);
				}
		
			},
			classs:function(classname,ar){
		var replce_dom=classname.toString().replace(/^[#]/g,"");

			var node =document;
			var clsnme=classname.toString().split(" ");
			var cls1="";
			var cls_tag="";
			var tagg="a";
				
			if(clsnme.length==1){
			var chd_dom=clsnme[0].toString().match(/^[.]{0,1}/g);
			var chd_dom_replace=clsnme[0].toString().replace(/^[.]/g,"");
			
					if(chd_dom[0]==="."){	
					cls1=chd_dom_replace;
					cls_tag="*";
					tagg="a";
					}else{
					cls1="------";
					cls_tag=chd_dom_replace;
					tagg="b";
					}		
			}else{
			var chd_dom_replace=clsnme[1].toString().replace(/^[.]/g,"");
					cls1=chd_dom_replace;
					cls_tag=clsnme[0];
					tagg="a";
			}
		
	
	if(node.getElementsByTagName(cls_tag)!=null && node.getElementsByTagName(cls_tag)!=undefined){ 
	 var els = node.getElementsByTagName(cls_tag);
	
    for(var i=0,j=els.length; i<j; i++){
	
        if(this.hasClass(els[i].className,cls1) && tagg==="a")
		ar.push(els[i]);
			else if(tagg==="b")
		ar.push(els[i]);
		}	
		
	}
			}	
	
		},
		
		init:function(s,ar){

		var sel={
			"#":"id",
			".":"classs"};
		var chd_dom=s.toString().match(/^[#.\w]{0,1}/g);
		
		var replce_dom=s.toString().replace(/^[#.]/g,"");
			if(chd_dom===null)
			return document;
			else{
			if(chd_dom[0]===""){
			
			return this.html["classs"](s,ar);
			}else{ 
			if(/\w/g.test(chd_dom[0])){
		
				
				return this.html["tag_value"](s,ar);
			}
			else{ 
				return this.html[sel[chd_dom[0]]](s,ar);
			}
		}
		}
		}
	}

	function pf_ajax(d){
	

this.dataform;
this.data=d;
this.setcnnt={};
this.iecross=false;		 
this.set_type="none";
this.time=0;
this.jsones="false";	
this.request_header={};
	}
	pf_ajax.prototype.setcontenttype=function(val){
		var main_jsn=this;
		_pf.each(val,function(k,v){
			main_jsn.request_header[k]=v;
		
		});
		return this;
	}
	pf_ajax.prototype.setRequestHeader=function(jsn){
		var req_hdr=this.request_header;
		_pf.each(jsn,function(kk,vv){

			req_hdr[kk]=vv;
		});
	}
	pf_ajax.prototype.json=function(){
		this.jsones="true";
		return this;
	}
	pf_ajax.prototype.setFormData=function(formda,bols){
		var boolsdata=bols||false;
		if(boolsdata=false){
			var formdom=pf$(formda).getlength();
			if(formdom>0){
				this.dataform= new FormData(pf$(formda).element[0]);
			}
		}else{
			this.dataform=formda;
		}
		return this;
	}
	pf_ajax.prototype.load=function(xdr,method,url,parameter,dataform){
		var main_jsn=this;
		try{
		var js_url=main_dom.checkurlvalid_ajax(url);
		try{
if(method==="get"){
	xdr.open(method,js_url+"?"+parameter,false);
	xdr.send(dataform);
	}
else if(method==="post"){
	xdr.open(method,js_url,false);
	if(typeof(xdr.setRequestHeader)!="undefined"){
	xdr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	
		if(_pf.count(main_jsn.request_header)>0){
			_pf.each(main_jsn.request_header,function(rk,rv){
				xdr.setRequestHeader(rk,rv);

			});
		}
	}
	if(_pf.count(main_jsn.request_header)>0){
		if(typeof(xdr.setRequestHeader)!="undefined"){
		
		
			_pf.each(main_jsn.request_header,function(rk,rv){
				xdr.setRequestHeader(rk,rv);

			});
		}
	}	
	if(typeof(dataform)=="null" || typeof(dataform)=="undefined"){
		xdr.send(parameter);
	}else{
		xdr.send(dataform);
	}
	
}	
else{
	xdr.open(method,js_url+"?"+parameter,false);
	xdr.send(dataform);
	}
	}catch(e){
		console.log(e);
	}
		}catch(e){
			console.log(e);
		}
	}
	pf_ajax.prototype.timeout=function(v){
		this.set_type="timeout";
		this.time=parseInt(v);
		return this;
	}
	pf_ajax.prototype.interval=function(v){
		this.set_type="interval";
		this.time=parseInt(v);
	return this;
	}
	pf_ajax.prototype.iecrosssite=function(){
		this.iecross=true;
		return this;
	}
	pf_ajax.prototype.ajax=function(config){ //meth,value,func
	var method=((typeof(config.method)=="undefined")?"get":config.method);
	var jsons=this.jsones; 
	
	var ajx=main_dom.ajax_controller(this.iecross);

try{
	if(typeof(config.value)=="function"){
	var js_event=main_dom.js_event_type(ajx.xdr,ajx.xhr_type,config.value,jsons);
		 js_event[ajx.xhr_type].load;
		
		}else if(typeof(config.value)=="object"){
	
		 _pf.each(config.value,function(i,v){
		
		var js_event=main_dom.js_event_type(ajx.xdr,ajx.xhr_type,v,jsons);
	 js_event[ajx.xhr_type][i];
		});
		}
		if(typeof(config.functions)=="function"){
		var js_event=main_dom.js_event_type(ajx.xdr,ajx.xhr_type,config.functions,jsons);
	 js_event[ajx.xhr_type].load;
	
		}else if(typeof(config.functions)=="object"){
		_pf.each(config.functions,function(i,v){
		
		var js_event=main_dom.js_event_type(ajx.xdr,ajx.xhr_type,v,jsons);
	 js_event[ajx.xhr_type][i];
		});
		
		}
		}catch(e){
		}
		var s_type=this.set_type;
		var s_time=this.time;
		var s_ajax=this.load;
		var s_data=this.data;
		var s_dataform=this.dataform;
		if(s_type==="timeout"){
		setTimeout(function(){
	s_ajax(ajx.xdr,method,s_data,main_dom.js_json_delimiters(((typeof(config.value)=="function")?"":config.value)),s_dataform);
			},s_time);
	}
		else if(s_type==="interval"){
		setInterval(function(){
	s_ajax(ajx.xdr,method,s_data,main_dom.js_json_delimiters(((typeof(config.value)=="function")?"":config.value)),s_dataform);
			},s_time);
	}else{
	s_ajax(ajx.xdr,method,s_data,main_dom.js_json_delimiters(((typeof(config.value)=="function")?"":config.value)),s_dataform);
	
	}
	
	}
	pf_ajax.prototype.get=function(value,func){
		var jsn_fn={};
		jsn_fn["method"]="get";
		jsn_fn["value"]=value||{};
		if(typeof(func)=="function"){
		jsn_fn["functions"]=func;	
		}	
		this.ajax(jsn_fn);
	
	}
	pf_ajax.prototype.post=function(value,func){
		var jsn_fn={};
		jsn_fn["method"]="post";
		jsn_fn["value"]=value||{};
		if(typeof(func)=="function"){
		jsn_fn["functions"]=func;	
		}	
		this.ajax(jsn_fn);
	
	}	
pf_ajax.prototype.returnvalue=function(value_s,func){
		var main_arr={};
		var val;
		var value =value_s||{};
		
		main_arr['method']=(typeof(value["method"])==="undefined")?"get":value["method"];
		main_arr['value']=(typeof(value["value"])==="undefined")?{}:value["value"];
		main_arr['functions']=function(res){
			val=res;
		}
		this.ajax(main_arr);
		return val;
	}
	pf_ajax.prototype.error=function(){
	
	
	
	}
	
	
	var c=0;

	function pf_amd(d,bol_clear_cache){
	var check_exist= (typeof(d)==="undefined" || d==="" )?false:true;
	if(check_exist===true){
	
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.src.push(main_dom.checkurlvalid(d));
	var url = main_dom.checkurlvalid(d);
	
	this.dms=d;
	this.js_url=main_dom.checkurlvalid(main_dom.checkfile("js",d));
	var loadd=false;
	var caches_bol=typeof(bol_clear_cache)==="undefined"?false:bol_clear_cache;

	var url_sep=/[\?]{1,}/.test(this.js_url);
	var url_sep1=/[\&]{1,}/.test(this.js_url);
	
	
	var caches=(caches_bol==true)?((url_sep==false?"?":(url_sep1==true?"&":""))+"jscache="+_pf.getUniq().substr(0,7)):"";
	var pf = document.createElement('script'); 
		pf.type = 'text/javascript';	
		pf.src=this.js_url+caches;
		pf.async = true;
		pf.onload=function(e){
		loadd=true;
	
		pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.report.loadjs.push(pf.src);
		};
		
		pf.onerror=function(e){
			loadd=true;
		
			pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.report.loadjs_error.push(pf.src);
			};
		(document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0]).appendChild(pf);
		
this.bool_load=loadd;

		}
	
	
	this.checkloop=function(s){
	
	
	}
		
		
	}
pf_amd.prototype.ready=function(func){
var eroor=this.js_url;
var loadd=this.bool_load;
document.onreadystatechange=function(){

if(document.readyState==="complete"){
	if(typeof(func)!="undefined"){
	try{
	if(typeof(func)==="function"){func();}
	else{

		
		var setds=setInterval(function(){
			
			if(_pf.indexOf(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.report.loadjs,eroor)>-1 || _pf.indexOf(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.report.loadjs_error,eroor)>-1){
					
	var ref_succsee=_pf.indexOf(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.report.loadjs,eroor);
	var ref_error=_pf.indexOf(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.report.loadjs_error,eroor);
	if(typeof(func.success)==="function"){
	
	if(ref_succsee>-1){func.success();clearInterval(setds);}
	}
	if(typeof(func.failed)==="function"){
	if(ref_error>-1){func.failed();clearInterval(setds);}
	}
	
	}
		},100);
	}}
	catch(e){
	
	}
	
	}
	}
	};
		return this;
};

	
	
	
	function pf_element(d){
	this.main=d;

	this.ScrollPosition=function(){
		return main_dom.get_scroll_position();
	}
	}	
	
	
	function pf_agenttype(d){
	var nav_browser=navigator.userAgent||navigator.vendor||window.opera;
	var nav_browser_lowerstr=nav_browser.toLowerCase();
	this.useragent=function(d){
		
		var br_p=[];
		var _browser = {};
		_browser.firefox = /mozilla/.test(nav_browser_lowerstr) && /firefox/.test(nav_browser_lowerstr);
		_browser.chrome = /webkit/.test(nav_browser_lowerstr) && /chrome/.test(nav_browser_lowerstr);
		_browser.safari = /applewebkit/.test(nav_browser_lowerstr) && /safari/.test(nav_browser_lowerstr)&& !/chrome/.test(nav_browser_lowerstr);
		_browser.opera = /opera/.test(nav_browser_lowerstr);
		_browser.msie = /msie/.test(nav_browser_lowerstr);
		
		var _os = {};
		_os.android = /android/.test(nav_browser_lowerstr);
		_os.blackBerry = /blackBerry/.test(nav_browser_lowerstr);
		_os.ios = /iphone|ipad|ipod/.test(nav_browser_lowerstr);
		_os.opera = /opera mini/.test(nav_browser_lowerstr);
		_os.windows_m = /iemobile/.test(nav_browser_lowerstr);
		_os.windows = /windows/.test(nav_browser_lowerstr);
		_os.mac = /mac/.test(nav_browser_lowerstr);
		_os.linux = /linux/.test(nav_browser_lowerstr);
		
		//https://code.google.com/p/mobileesp/source/browse/JavaScript/mdetect.js
		_pf.each(_browser,function(k,v){
			if(v==true){
				br_p.push(k);
			}
		});
		
		if(typeof(d)!="undefined" ){
			
			_pf.each(d,function(dk,dv){
				
				var dn_splt=dk.split("|");
				
				_pf.each(dn_splt,function(ddk,ddv){
					if(_pf.indexOf(br_p,ddv)!=-1){
						console.log();
						if(typeof(dv)==="function"){
							dv.call({'browser':ddv});
						}
						
					}
				});
				
				
			});
			
		}
		
		if(typeof(d)!="undefined"){
		if( typeof(_browser[d['browser']])!="undefined" || typeof(_os[d['os']])!="undefined"){
			var jsn;
		
			if(typeof(_browser[d['browser']])!="undefined" )jsn=_browser[d['browser']];
			else if(typeof(_os[d['os']])!="undefined" )jsn=_os[d['os']];
			
			return jsn;
		}
		
		}else{ return {"browser":_browser,"os":_os}};
	//	os
	}
	
	this.checkmobile=function(glo){
		var bol=false;
		/** reference http://detectmobilebrowsers.com/	**/
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(nav_browser)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(nav_browser.substr(0,4))){
		bol=true;
		}
		
		if(bol===true){
			if(typeof(glo)!="undefined" && typeof(glo['mobile'])!="undefined")glo['mobile']();
		}else{
			if(typeof(glo)!="undefined" &&typeof(glo['desktop'])!="undefined")glo['desktop']();
		}
		return bol;
	}					
	this.checkversion=function(d){
		var vers={};
		var _browser=this.useragent();
		
		if (!(_browser.msie || _browser.firefox || _browser.chrome ||_browser.safari || _browser.opera))
				{
				if (/trident/.test(nav_browser_lowerstr)) {
				
				vers['msie11']=11;
				}
				}
		for (x in _browser) {
		
			if (_browser[x]) {
				//alert(_browser[x]);
			
				_pf.each(_browser[x],function(kk,vv){
			
				if(vv==true){
					var brwse_vrsn=nav_browser_lowerstr.match(new RegExp("(" + kk + ")( |/)([0-9]+)"));	
				if(brwse_vrsn!=null)
				vers[kk] = brwse_vrsn[3];
				}
				});
			}
			}
		
		return vers;
	}
	};
	
	
	function pf_observer(d){
	this.element=d;	
	this.index_position=null;
	this.parent_child=null;
	this.index_position_type="";
	this.element_function=function(d){
		this.element=d;
	}
	this.addclass=function(d){
		this.each(function(td,meth){
		var clasd=meth[td].className;
		meth[td].className=clasd+" "+d;
		});
			return this;
		}
	this.removeclass=function(d){
		this.each(function(td,meth){

		var clasd=meth[td].className;

		var clasd_d=new RegExp("(" + d + ")");
  
		var clasd_rpl=clasd.replace(clasd_d,"");
		meth[td].className=clasd_rpl;
		});
			return this;
	}
	
	this.checked=function(d){
		var val_arry=[];	
		var cnt=0;
		this.each(function(td,meth){

			if(typeof(d)==="undefined"){
			val_arry.push(meth[td].checked);

			}else{
			meth[td].checked=d;
			}
			cnt++;
		});
		
			if(typeof(d)==="undefined"){
				return (cnt==1)?val_arry[0]:val_arry;
			}else{
				return this;
			}
	}
	
	this.remove=function(d){
var dom=((typeof(d)==="undefined")?"none":document.querySelector(d));

		this.each(function(td,meth){
			if(dom!="none"){
	
				meth[td] && meth[td].parentNode && meth[td].parentNode.removeChild(dom);
			}
			else{
		
				
				meth[td] && meth[td].parentNode && meth[td].parentNode.removeChild(meth[td]);
			}
			});
		
		return this;
	};
this.empty=function(){
		
		this.each(function(td,meth){
			
			while (meth[td].firstChild) meth[td].removeChild(meth[td].firstChild);
		});
		
		return this;
		
	}
this.fade=function(typ,intrvl){

var typ_s="";

var intrvl_s={};
	if(_pf.getJSONtypeof(intrvl)=="json"){
		if(typeof(intrvl.time)!="undefined"){
			intrvl_s.time=intrvl.time;
			}	
		
	}else{
		if(_pf.getJSONtypeof(intrvl)=="number"){
			intrvl_s.time=intrvl;
		}
		if(_pf.getJSONtypeof(intrvl)=="string"){
			var jsn_spd_type={"slow":400,"fast":200,"faster":100,"slower":500};
			if(typeof(jsn_spd_type[intrvl])!="undefined"){
			intrvl_s.time=jsn_spd_type[intrvl];
			}else{
			intrvl_s.time=400;

			}

		}
	}
	
	this.each(function(td,meth){
		if(/(fadetoggle)/g.test(typ)){
		typ_s=(main_dom.getcss(meth[td],"display")=="none")?"fadeout":"fadein";
		
	}else{
		typ_s=typ;
	}
		main_dom.initFadeElement(meth[td],typ_s,intrvl_s);
	});
	return this;
}

this.css=function(d){


	this.each(function(td,meth){
	
	main_dom.css(meth[td],d);
	});
		
			return this;
		};
	this.show_hide=function(d){
		var d_var=d||"";
		this.each(function(td,meth){

	var elem=meth[td].style.display||main_dom.getcss(meth[td],"display");
		main_dom.css(meth[td],{display:((elem=="none")?d_var:"none")});

		});
		return this;
	}
	this.getcss=function(d,c){
	var cntt=((typeof(c)==="undefined")?0:c-1);
	var val_g={};
	
		this.each(function(td,meth){
		if(parseInt(td)<=cntt){
	
	val_g[td]=main_dom.getcss(meth[td],d);

		}		
		});

		return ((cntt===0)?val_g[0]:val_g);
	};
	this.hide=function(){
	
		this.each(function(td,meth){

		main_dom.css(meth[td],{display:"none"});
		});
		return this;
	};
	this.show=function(){
	
		this.each(function(td,meth){

		main_dom.css(meth[td],{display:""});
		});
		return this;
	}
	this.getattr=function(d,bol){
		var cnt=0;
		var globl={};
		var var_bol=bol||false;
	
	var	attr_type=((_pf.getJSONtypeof(d)=="array")?d:[d]);
	
		this.each(function(td,meth){
			var get_attr=main_dom.get_attr(meth[td],attr_type);
			if( var_bol==true){
			
		if(_pf.count(get_attr)>0 ){
			globl[cnt]={};
			globl[cnt]=get_attr;		
					cnt++;
		}
			}else{
			globl[cnt]={};
			globl[cnt]=get_attr;		
					cnt++;

			}
		});	
	
			return (cnt==1 || cnt==0)?((attr_type.length==1)?((typeof(globl[0])==="undefined")?"undefined":globl[0][d]):globl[0]):globl;
		}

	this.getallattr=function(){
		var globl=[];
		this.each(function(td,meth){
			globl.push(main_dom.get_element_exist_attr(meth[td]));
		});
		return _pf.count(globl)==0?-1:(_pf.count(globl)==1)?globl[0]:globl;

	}
	this.getindexattr=function(d){
		var cnt=0;
		var globl=[];
	
		if(_pf.getJSONtypeof(d)!="json"){ return -1};
		var getkey=_pf.getKey(d);
		this.each(function(td,meth){
			var get_attr=main_dom.get_attr(meth[td],getkey);	
			var where_count=_pf.where(get_attr,d);
			
			if(_pf.count(where_count)>0){
			globl.push(cnt);	
			}
			cnt++;
		});
		
			return _pf.count(globl)==0?-1:(_pf.count(globl)==1)?globl[0]:globl;
		}
	
	this.removeattr=function(d){
		var attr_type=((_pf.getJSONtypeof(d)=="array")?d:new Array(d));
		this.each(function(td,meth){
			if(meth[td].removeAttribute){
				_pf.each(attr_type,function(ky,vl){
				meth[td].removeAttribute(vl);
				});
			} 
		});

		}
	this.setattr=function(d){
		this.each(function(td,meth){
	for(var v in d){
		var crte_elem=document.createAttribute(v);	
			crte_elem.value = d[v];

			if(meth[td].setAttribute)
	meth[td].setAttribute(v,d[v]);	
else
	meth[td].setAttributeNode(crte_elem);
		}});
		
			return this;
		}
	this.inserthtml=function(com,htm){
		
		this.each(function(td,meth){
			meth[td].insertAdjacentHTML(com,htm);
			
			});
			
	
		return this;
		}
	this.getdom=function(com,htm){
		var id_dm=[];
		this.each(function(td,meth){
	
			id_dm.push(meth[td]);
		});
	return id_dm;
	}
	
	
		this.getTagName=function(){
			var arry_pl=[];
			this.each(function(td,meth){
				
				arry_pl.push(meth[td].tagName);
			});
			return _pf.count(arry_pl)==1?arry_pl[0]:arry_pl;
		}
	
	this.setselected=function(v){
		var opt;
		
		this.each(function(td,meth){
			opt=meth[td].options;
			
			for(var i=0;i<opt.length;i++){
				
				
				if(opt[i].value===v){
				
					opt[i].selected=true;
				}
			}
		});
		return this;
	}
	this.getselected=function(bol){
		var opt;
		var sel_opt='';
		var sel_opt_ar=[];
		var opt_cnt=0;
		var booln=bol||false;
		this.each(function(td,meth){
			opt=meth[td].options;
			if(typeof(opt)!="undefined"){
			
			for(var i=0;i<opt.length;i++){
				
				if(opt[i].selected===true){
					sel_opt=opt[i].value;
					sel_opt_ar.push(opt[i].value);
			
			opt_cnt++;
				}
			}
			}
		});
		if(booln==false)
		return (opt_cnt>1)?sel_opt_ar:sel_opt;
		else return sel_opt_ar;
	}
	this.getselectedtext=function(bol){
		var opt;
		var sel_opt='';
		var sel_opt_ar=[];
		var opt_cnt=0;
		var booln=bol||false;
		this.each(function(td,meth){
			opt=meth[td].options;
			if(typeof(opt)!="undefined"){
			for(var i=0;i<opt.length;i++){
				
				
				if(opt[i].selected===true){
					
					sel_opt=opt[i].text;
					sel_opt_ar.push(opt[i].text);
			
			opt_cnt++;
				}
			}
			}
		});
		if(booln==false)
		return (opt_cnt>1)?sel_opt_ar:sel_opt;
		else return sel_opt_ar;
	}
	this.getselectedcount=function(bol){
		var opt;
		var sel_opt='';
		var sel_opt_ar=[];
		
		var select_count=0;
		this.each(function(td,meth){
			opt=meth[td].options;
			if(typeof(opt)!="undefined"){
			for(var i=0;i<opt.length;i++){
				
				
				if(opt[i].selected===true){
					select_count=i;
				}
			}
			}
		});
			return select_count;
	} 
	this.getparent=function(){
	
		var arry_pl=[];
			this.each(function(td,meth){
				
				arry_pl.push(meth[td].parentElement);
			});
			return _pf.count(arry_pl)==1?arry_pl[0]:arry_pl;

	} 
	this.getserializearray=function(){
	var form_name=this.element;
	var valr=((form_name.length>1)?[]:{});
	var valr_output=[];
	var html_form;
	var valr_oupt;
	this.each(function(td,meth){
	html_form=meth[td];
	 valr_oupt=((form_name.length>1)?(valr[td]={}):valr);
	for(var i=0;i<html_form.length;i++){
	
	
		var glb_arry={};
		var type_opt=['checkbox','radio'];
		if(typeof(html_form[i].type)!="undefined" && html_form[i].name.length>0){
		if(_pf.indexOf(type_opt,html_form[i].type)>-1){
			if(html_form[i].checked){ 
				glb_arry[html_form[i].name]=html_form[i].value;	
			}

		}else{
			glb_arry[html_form[i].name]=html_form[i].value;	
		}
		}
		
		valr_output.push(glb_arry);
			}
		});
			return valr_output;
		
			
			
	};
	this.eq=function(d){

		this.index_position=d;
		this.index_position_type="eq";
		return this;
		};
	this.noteq=function(d){

		this.index_position=d;
		this.index_position_type="noteq";
		return this;
		};
	this.on=function(f,fn){
		var spltt=f.split(",");
		var main=this;
	

		for(var v=0;v<spltt.length;v++){
		
			(function(main,m1,m2,m3,func){
			
				 main.event_loop(m1,m2,m3,func);
			
			
			})(main,spltt[v]+'','on'+spltt[v]+'','none',fn);
		}
		return this;
	};
	this.actionevent=function(elems11,ch,ie,mo,func){		
		var idd=this.id;
		
		
	if (elems11.attachEvent)
	{
	(function(elems11,ff,mob){elems11.attachEvent(ie,function(se){ff.call(elems11,se)},true)})(elems11,func,ie);  
	}else{
	if(elems11.addEventListener){	
	
	
		(function(elems11,ff,mob){elems11.addEventListener(ch,(function(e){
	if(typeof(e.targetTouches)!=="object"){
				
			ff.call(this,e);
		}
			
		}),false)})(elems11,func,ch);
	
		if(mo!=="none"){
		(function(elems11,ff,mob){elems11.addEventListener(mo,(function(e){	
			
			ff.call(this,e);
		}),false)})(elems11,func,mo);
		}
		}
	}
		return this;
		};
		
	this.event_loop=function(c1,c2,c3,func){
	
		var actione=this.actionevent;
		this.each(function(td,elemm){
		
		actione(elemm[td],c1,c2,c3,func);
	
		});
			return this;
		};
	this.delegate=function(evnt,sub_elem,func){
var evnt_splt=evnt.split(",");
	var main=this;


	var actione=main.actionevent;
		
		
		main_dom.dom_delegation_event(sub_elem,evnt,func);
		

			return this;
	}	
	this.index=function(doms){
		var arry_dm=[];
		this.each(function(td,elemm){
			
			arry_dm.push(elemm[td]);
			});
		
		return Array.prototype.indexOf.call(arry_dm, doms);

	}
	this.isDomNull=function(){
		var bool=false;
		this.each(function(td,elemm){
			
			if(elemm[td]==null){
				bool=true;
			}
		});
		return bool;
	}
	this.childposition=function(){
		 var i=1;
		
		 var node=((typeof(this.element[0])==="undefined")?this.element:this.element[0]);
		    while(node.previousSibling){
		        node = node.previousSibling;
		        if(node.nodeType === 1){
		            i++;
		        }
		    }
		    return i-1;
	};
	this.getElementDimension=function(){
		var arry_elem=[];
			
		this.each(function(td,elemm){
	
			if(typeof(elemm[td].getBoundingClientRect())!="undefined"){
		
			var gtrect=elemm[td].getBoundingClientRect();
			arry_elem.push({
				"bottom":gtrect.bottom,
				"height":gtrect.height,
				"left":gtrect.left,
				"right":gtrect.right,
				"top":gtrect.top,
				"width":gtrect.width
				});
			}
		});
		
		return _pf.count(arry_elem)==1?arry_elem[0]:arry_elem;
	}
	this.getElementOffSet=function(){

		var arry_elem=[];
			
		this.each(function(td,elemm){
			var gtelem=elemm[td];
			arry_elem.push(main_dom.dom_offset(gtelem));

		
		});
		return _pf.count(arry_elem)==1?arry_elem[0]:arry_elem;
	}
	this.getScrollPositon=function(){

		var arry_elem=[];
			
		this.each(function(td,elemm){
		
			var element = elemm[td]; 
		var rect = element.getBoundingClientRect();
		var elementLeft,elementTop; //x and y
		var scrollTop =  main_dom.get_scroll_position().top;

		var scrollLeft = main_dom.get_scroll_position().left;
			elementTop = rect.top+scrollTop;
			elementLeft = rect.left+scrollLeft;
			arry_elem.push({"top":elementTop,"left":elementLeft  });

		
		});
		return _pf.count(arry_elem)==1?arry_elem[0]:arry_elem;

	}
	this.domview=function(dom,htm){
		var domee=this.getlength();
			var str=((domee)>1?[]:"");
			this.each(function(td,meth){
				if(domee>1){	
					str.push(main_dom.domio_type(dom,meth[td],htm));
				}else{
					str=main_dom.domio_type(dom,meth[td],htm)+"";
				}
				
				main_dom.domio_type(dom,meth[td],htm);
				});
			if(typeof(htm)!="undefined"){	
				return this;
				}else{
					return str;
				}

	}
	this.getlength=function(){
	var cnt_i=0;
	
	this.each(function(td,elemm){

	cnt_i++;
	});
	return cnt_i;
	};
	
	this.each=function(func){
	
	var cnt=0;
	var ele_cnt=this.element;
	var prnt_chld=this.parent_child;
	
	
	if(this.index_position===null){
			for (var td in this.element) {
				(function(func,d,m){
				if(ele_cnt.length>cnt){	
			
				if(main_dom.parentchild(prnt_chld,ele_cnt,td)){
					func(d,m);
					}
					}
					cnt++;
				})(func,td,this.element);	
		
			}
		}else{
				if(this.index_position_type=="eq"){
					func(this.index_position,this.element);
				}else if(this.index_position_type="noteq"){
					for (var td in this.element) {
						(function(func,d,m,lastid){
						if(ele_cnt.length>cnt){	
			
						if(d!=lastid){
							func(d,m);
							}
							}
						cnt++;
					})(func,td,this.element,this.index_position);	
		
					}
				}else{}

		}
		};	
		
		}

var mevnt={'m_click':['click','onclick','touchstart'],'m_move':['mousemove','onmousemove','touchmove'],'m_mousedown':['mousedown','onmousedown','touchstart'],'m_mouseup':["mouseup","onmouseup","touchend"]};
var devnt=['scroll','focus','blur','change','abort','error','click','dblclick','mousemove','mouseout','mouseover','mousedown','mouseup','resize','keydown','keyup','keypress','touchstart','touchmove','touchend','contextmenu',
			'd_focus','d_blur','d_change','d_abort','d_error','d_click','d_dblclick','d_mousemove','d_mouseout','d_mouseover','d_mousedown','d_mouseup','d_resize','d_keydown','d_keyup','d_keypress','d_touchstart','d_touchmove','d_touchend','d_contextmenu'];		
var child={0:["firstChild","first"],1:["haschild","haschild"],2:["hasChildNodes","hasChildNodes"],3:["childNodes","hasChildNodes"],4:["lastChild","last"]};		
var appendhtml={0:["after","afterend"],1:["before","beforebegin"],2:["prepend","afterbegin"],3:["append","beforeend"]};
var styletype=['width','display','height','visible'];
var domview=['val','html','text','outerhtml'];
var elemfade=['fadein','fadeout','fadeto','fadetoggle'];
for(var f in mevnt){
		 (function(m,m1,m2,m3){		
		pf_observer.prototype[m]=function(func){
			 
			return	this.event_loop(m1,m2,m3,func);
		}	
		 })(f+'',mevnt[f][0]+'',mevnt[f][1]+'',mevnt[f][2]+'');
	}
for(var f1 in devnt){
		var check_mobile=(/(touchstart|touchmove|touchend)/.test(devnt[f1]))?devnt[f1]:"none";
		  (function(m,m1,m2,m3){		
		
		pf_observer.prototype[m]=function(func){
			
			return	this.event_loop(m1,m2,m3,func);
		}	
		 })(devnt[f1]+'',devnt[f1]+'','on'+devnt[f1]+'',check_mobile);
	}	




for(var f2 in child){
	
	(function(m1,m2){
	pf_observer.prototype[m1]=function(){
		this.parent_child=m2;
				return this;
					}
	})(child[f2][0],child[f2][1]);
		}
		
for(var f3 in appendhtml){	
		
		(function(m1,m2){	
		pf_observer.prototype[m1]=function(html){
			
				this.inserthtml(m2,html);
			return this;
				}
		})(appendhtml[f3][0],appendhtml[f3][1]);			
		}
		
for(var f4 in styletype){
			
			(function(m){
			
				pf_observer.prototype["get"+m]=function(cnt){
			
			return this.getcss(m,cnt);
				}
			
			})(styletype[f4]);
			}
for(var f5 in domview){
			
			(function(m){
			
				pf_observer.prototype[m]=function(cnt){
			
			return this.domview(m,cnt);
				}
			
			})(domview[f5]);
			}

for(var f6 in elemfade){
			
			(function(m){
			
				pf_observer.prototype[m]=function(intrvl,fncmthd){			
			return this.fade(m,intrvl,fncmthd);
				}
			
			})(elemfade[f6]);
			}

	var pf_core;
		pf_core=(function(){
			
			doc_set=function(idss){
			var domm=[];	
			
			try{
				var pf_ext=new pf_extender();
			if(_pf.getJSONtypeof(idss)==="object"){
			domm.push(idss);
			}
			else if(_pf.getJSONtypeof(idss)==="array"){
		
			_pf.each(idss,function(k,v){
				if(_pf.getJSONtypeof(v)==="object"){

				domm.push(v);
				}
				else if(_pf.getJSONtypeof(v)==="string"){
			pf_ext.dom.init(v,domm);
				
				}
				
				});
			}	
			else{
			var doc_loop=idss.toString().split(",");
		
			for (var t in doc_loop) {
				
				pf_ext.dom.init(doc_loop[t],domm);
			}
			
			}
			}catch(e){}	
		return pf_ext.extend.obj_extnd(domm);
		
			
			}
			doc_set_docall=function(idss){
			var domm=[];	
			
			try{
				var pf_ext=new pf_extender();
			if(_pf.getJSONtypeof(idss)==="object"){
			domm.push(idss);
			}
			else if(_pf.getJSONtypeof(idss)==="array"){
			_pf.each(idss,function(k,v){
				if(_pf.getJSONtypeof(v)==="object"){

				domm.push(v);
				}else if(_pf.getJSONtypeof(v)==="string"){
			pf_ext.dom.init(v,domm);
				
				}
				
				});
			}
			else{
			var doc_loop=idss.toString().split(",");
			if(doc_loop.length===0){
			domm.push(document.body.querySelectorAll(idss));
			}else{
		for(var itnd in doc_loop){
			domm.push(document.body.querySelectorAll(doc_loop[itnd]));
			}
			
			}
			}
			}catch(e){}	
		return pf_ext.extend.obj_extnd(domm[0]);
		
			
			}
			document_ready_exist=function(func){
				main_dom.document_ready(func);

			}
			document_dele_event=function(func){
						main_dom.dom_delegation_event(func);

			}
			
			return {
				
				doc:function(id){
				return doc_set(id);
					},
				docall:function(id){
				return doc_set_docall(id);
					},
				dom_ready:function(func){	
				return document_ready_exist(func);	
						},
				dom_dele:function(fnc){
					document_dele_event(fnc);
				
				}
								
				};				
				})();	
				
			
	var bootstrap={
			js_init:function(d){
			
				return new pf_js_init(d);
			},
			dom_delegate:function(fnc){
				var c=0;
			
				return pf_core.dom_dele(fnc);
			},
			dom:function(d){		
			
			return pf_core.doc(d);
		
			},
			dom_all:function(d){		
			return pf_core.docall(d);
		
			},
			config:function(s){
			if(Object.prototype.toString.call(s)==="[object Object]"){
			pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41=s;
			}
			
			},
			dom_ready:function(func){
					return pf_core.dom_ready(func);
			},
			element:function(){
					return new pf_element();			
			},
			ajax:function(d){
			return new pf_ajax(d);
			
			},
			agenttype:function(d){
				
			        return new pf_agenttype(d);				
			},
			
			amd:function(d,bol){
			
				return new pf_amd(d,bol);
				
			},
			config:function(d){
			
				return new pf_config(d);
			},
			library:function(d){
				pf_internal_libry.config.push(d);
				return new pf_library(d);
			},
			module:function(d){
			
			var mod=new pf_extender();
			
			return mod.extend.class_extnd(window.pf.module,{dom:pf_core.doc(d).getdom(),pf:pf_core.doc(d)});
					}
			
			
			
			
			};
	window.pf=function(d,f,f1){
	if(typeof(d) !=="undefined"){

	return	bootstrap[d](f,f1);
}};	
	window.pf.module=function(){};

	window.pf_js=window.pf;
	window.pf$=function(d){
		return bootstrap["dom"](d);
	};
	window.pf$$=function(d){
		return bootstrap["dom_all"](d);
	};
		})();
		 
		
//		json  


(function(window){

var main_helper={
		

		random_key:function(){
			var d=new Date();
			var str_rand=  Math.random().toString(36).substr(2);
			var str_rand1=  Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2);
			var gettme=d.getTime();
			
	
			return str_rand1;	
		}
		
		,datastring:function(str){
		
			var data_s="";

			if(typeof(str)=="string"){ 
			if(str.indexOf("'"))
			data_s='"'+(str)+'"';
			else if(str.indexOf('"'))
			data_s='"'+(str)+'"';
			else
			data_s=str;
			}else{
			data_s=str;

			}
			return data_s;
		},returnLoop:function(d,f,dl){
			var str="";
				str+="object";
			return f(d)+""+dl;
		},
		dateEventFormat:function(reg,ints,nm){
				var regp=reg;
				var intr=ints;
				if(regp.test(nm)){
			intr=nm;
			}		
		if(typeof(nm)=="undefined" || nm.toString()=="null" || nm.toString()=="NaN"){
		intr=ints;
		
		}

			return intr;
		},
		getKeyVal:function(jsn,typ){
			var typ_s=typ,ky=[],vl=[];
			_pf.each(jsn,function(kk,vv){
				ky.push(kk);vl.push(vv);
			});
			var ars=(typ=="key")?ky:vl;
			return (_pf.count(ars)==1)?ars[0]:ars;

		}	
			
		
}



window._pf=function(s){


};
_pf.repeat=function(str,rpt){

var nm_rpt=rpt||0;
var nm_str=str||"";
	if(nm_rpt>0)
	return new Array(nm_rpt+1).join(nm_str);
	else
	return nm_str;
}	


_pf.numberFormat=function(val,zrl,zr2){
	var arry=[];
	var val_zro=zr2||0;
	var ssd_va=val.toString();
	var splt_dec=ssd_va.split(".");

	var reg_exp=new RegExp("(\\d)(?=(\\d{"+(zrl||3)+"})+(?:\\.\\d+)?$)","g");

	var num_deli=splt_dec[0].replace(reg_exp, "$1,");	

	var ssd_va=num_deli+(_pf.count(splt_dec)>1?("."+splt_dec[1]):"");
	if(val_zro>0){
	
		var str_dec=ssd_va.split(".");
		if(_pf.count(str_dec)==1){
			ssd_va=ssd_va+"."+_pf.repeat("0",val_zro);
		}else{
		
			var dec_num=str_dec[1];
			if(dec_num.length>=val_zro){ 
				ssd_va=str_dec[0]+"."+(dec_num.substr(0,val_zro));
			}else{
				ssd_va=str_dec[0]+"."+dec_num+_pf.repeat("0",dec_num.length-val_zro);
			}
		} 
	}	

	return ssd_va;
}
_pf.getUniq=function(){
	return main_helper.random_key();
}
_pf.parseString=function(s){

var str="";
var str_strt="";
var str_end="";
var inc=0;
var inc_main; 
 if(typeof(s)!="undefined"){
if(Object.prototype.toString.call(s)==="[object Object]"){
	str_strt="{";
	str_end="}";
	
	

	_pf.each(s,function(i,m){
	
inc_main=((inc<_pf.count(s)-1)?",":"");
	if(typeof(m)==="object" && m!=null){
	str+=main_helper.datastring(i)+":"+main_helper.returnLoop(m,_pf.parseString,inc_main);

	}else{
	str+=main_helper.datastring(i)+":"+main_helper.datastring(m)+""+inc_main;
	}
	inc++;
	});
	
}
else if(Object.prototype.toString.call(s)==="[object Array]"){

		str_strt="[";
		str_end="]";
		
	_pf.each(s,function(i,m){
		inc_main=((inc<_pf.count(s)-1)?",":"");
		if(typeof(m)==="object"){

		str+=main_helper.returnLoop(m,_pf.parseString,inc_main);
		}else{
		str+=main_helper.datastring(m)+""+inc_main;
		}
	inc++;
		});
}
}

return str_strt+str+str_end;
};



_pf.parseJson=function(s){

var str_len=s.length;
var sub_str=s.substring(1,str_len-1);
var sub_str_split=sub_str.split(",");
var j;

if (/^[\],:{}\s]*$/.test(s.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
					
					if(s.length>0 && !/^\s*$/.test(s)) j = eval('(' + s + ')');
						
						}
				return j;		
};
_pf.insert=function(jsn,val){
	
	if(typeof(jsn)!="undefined"){
	var jsn_type=_pf.getJSONtypeof(val);
	if(jsn_type=="json"){
		_pf.each(val,function(k,v){
			jsn[k]=v;	
		});
	}else{
		jsn.push(val);
	}
}
}

_pf.getKey=function(jsn){
	return main_helper.getKeyVal(jsn,"key");

}
_pf.getValue=function(jsn){
	return main_helper.getKeyVal(jsn,"value");

}
_pf.update=function(jsn,where,val){
	if(typeof(jsn)!="undefined"){
	
		
	}
}	
_pf.getJSONtypeof=function(s){

	if(Object.prototype.toString.call(s)==="[object Object]"){
		return "json";
	}
	else if(Object.prototype.toString.call(s)==="[object Array]"){
		return "array";
	}else{
		return typeof(s);
	}
}
_pf.getJSONVariable=function(s){
		
	if(_pf.getJSONtypeof(s)==="json"){
		
		return {};
	}
	else if(_pf.getJSONtypeof(s)==="array"){
	
		return [];
	}else{
		return s;
	}
	
}




_pf.template_html=function(domm,reg){

	var dom_main=pf$(domm).html();

	return _pf.template_value(dom_main,reg);
}
_pf.template_value=function(str,reg){
	try{
	function queryJSString(txt,reg)
	{

	var fnc_js=/[\r\t\n]{0,}<!([^-]{0}|[=]{1,})[\r\t\n\s](.*?)!>[\r\t\n]{0,}/g;
	if(fnc_js.test(txt)){	

var cls_render=new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
	
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        txt
          .replace(/[\r\t\n]/g, " ")
          .split("<!").join("\t")
          .replace(/((^|!>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)!>/g, "',$1,'")
          .split("\t").join("');")
          .split("!>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
	var reg=reg||{};
	return cls_render(reg);
	}else{
		return txt;
	}
	};	
	var strs=str;
	
try{
	
		var regs=new RegExp("[\\r\\t\\n\\s]{0,}<![-]\\s{0,}(.*?)\\s{0,}!>[\\r\\t\\n\\s]{0,}","g");
			strs=strs.replace(regs,function(f,m,m1){
				var strs_perd=m.replace(".",":");
				var gtdata=_pf.getdata(reg,strs_perd);
			
				return _pf.getJSONtypeof(gtdata)=="json"?"":gtdata;
			});		
}catch(e){
	console.log(e);
}		}catch(e){
		console.log(e);
	}
		var strs_finl=String(queryJSString(strs,reg));
strs_finl.replace(/f(!\s{0,}[A-Za-z0-9_]{0,}\s{0,}!)/gi,"");
			return 	strs_finl.replace(/<![-_=]{0,}\s{0,}(.*?)\s{0,}!>/gi,"");

}
_pf.JsonToArray=function(jsn,val){
	var arry=[];
	_pf.each(jsn,function(k,v){
		if(typeof(val)=="undefined"){
			arry.push(v);
		}else{
		if(typeof(v[val])!="undefined"){
		arry.push(v[val]);
		}
		}
		
	});
	return arry;
}
_pf.indexOf=function(jsn,val){
	if(!Array.indexOf){
		    Array.prototype.indexOf = function(obj){
		        for(var i=0; i<this.length; i++){
		            if(this[i]==obj){
		                return i;
		            }
		        }
		        return -1;
		    }
		}

	var jsn_type=_pf.getJSONtypeof(jsn);
	if(jsn_type=="array")
	return jsn.indexOf(val);
	else
	return -1;
}
_pf.random=function(jsn,min,max){
var ran_var=[];
var ran_ctt=0;
var ran_min=(typeof(min)=="undefined")?0:min;
var ran_max=(typeof(max)=="undefined")?_pf.count(jsn):max;

var jsn_var=_pf.getJSONVariable(jsn);

	_pf.each(jsn,function(k,v){	
			ran_var.push(k);	
		});

}
_pf.each=function(jsn,func,boll){
var re_loop=[];
	var ctt=0;
	var ctt_e=0;
	var boll_d=boll||true;

if(typeof(jsn)==="object"){

	for(var ins in jsn){
		ctt_e++;
	try{
if(typeof(func)!="undefined"){
		
	if(typeof(jsn[ins])!="function" && boll_d==true){
		
		func(ins,jsn[ins],ctt);
		ctt++;
	}	
	
	}else{
		if(typeof(jsn[ins])!="function" && boll_d==true){
	re_loop[ins]=jsn[ins];
		}
	}
	}
	catch(e){
		console.log(e);
	}
}

}
else if(typeof(jsn)==="string"){
	if(typeof(func)!="undefined"){
		if(typeof(jsn)!="function" && boll_d==true){
		re_loop[0]=jsn;
	func(0,jsn,ctt);
		}
		}else{
			if(typeof(jsn)!="function" && boll_d==true){
		re_loop[0]=jsn;
			}
		}
}


	if(typeof(func)=="undefined"){
		return re_loop;
	}
};


_pf.delimiter=function(jsn,dlmtr,sprt){
var str="";
var cnt=0;
var sprt_r=((typeof(sprt)=="undefined")?"":sprt);
var d_cnt=_pf.count(jsn);

		_pf.each(jsn,function(i,m){
	str+=(i+dlmtr+m);
		cnt++;
	
	if(cnt<d_cnt)
	str+=sprt_r;
	
	
		});
		
	return str;
	}

_pf.sort=function(jsn,index,ascs){
	var jsonn=jsn;
	var asc=(typeof(ascs)=="undefined")?true:ascs;
	var pjsn=[];
	
	
	var js_m=(_pf.getJSONtypeof(jsonn)=="json")?_pf.each(jsonn):jsonn;
	 jsonn=js_m.sort(function(a,b){
			if (asc) return (a[index] > b[index]);
        else return (b[index] > a[index]);
	
		});
		return jsonn;
}	
_pf.map=function(jsn,func){
	var value_arry=[];
	var cnt=0;
	console.log(jsn);
	var jsn_var=_pf.getJSONVariable(jsn);
	var jsn_type=_pf.getJSONtypeof(jsn);
	_pf.each(jsn,function(k,v){
		if(typeof(func)!="undefined"){
		value_arry.push(func(v,k,cnt));
		cnt++;
		}
		
	});
	return value_arry;
}

_pf.first=function(jsn){
	
}
_pf.last=function(jsn){
	
}
_pf.filter=function(jsn,func){


	var jsn_var=_pf.getJSONVariable(jsn);
	var jsn_type=_pf.getJSONtypeof(jsn);
	
	_pf.each(jsn,function(k,v){
		
		if(typeof(func)!="undefined"){
			if(func(k,v)==true){
				if(/(json|array)/g.test(jsn_type)){
				_pf.append(jsn_var,v,k);
				}else{
					jsn_var=v;
				}
			}
		}
	});
	return jsn_var;
}


_pf.clone=function(jsn){
	var typeofs=_pf.getJSONtypeof(jsn);
	var variable=_pf.getJSONVariable(jsn);
			_pf.each(jsn,function(k,v){
				_pf.append(variable,v,k);
			});
			
			return variable;	
}
_pf.append=function(jsn,val,key){
	var typeofs=_pf.getJSONtypeof(jsn);
	var variable=_pf.getJSONVariable(jsn);
	
	if(typeofs==="json"){
		jsn[key]=val;
	}else if(typeofs==="array"){
		jsn.push(val);
	
	}
	return jsn;
}
_pf.isExact=function(key,val){
	if (val==null) return false;
	var get_key=_pf.getValue(key);
	var val_s=/(json|array)/g.test(_pf.getJSONtypeof(val))?val:[val];
	var key_s=/(json|array)/g.test(_pf.getJSONtypeof(key))?key:[key];
		
	var obj = key;
	var cnt=0;

	_pf.each(key_s,function(kk,kv){

	
		if(_pf.getJSONtypeof(val)=="json"){
			
			if(typeof(val_s[kk])!="undefined"){ 
			   if(val_s[kk]==kv){
				cnt++;
				}	
			}
		}
		if(_pf.getJSONtypeof(val)=="array"){ 
			if(_pf.indexOf(val_s,kv)>-1){
				cnt++;
			}
		}
	});
return cnt==_pf.count(val);
}
_pf.where=function(jsn,whr,func){
		var jsn_val={};

		var jsn_s=(_pf.count(jsn,true)==0)?((_pf.getJSONtypeof(jsn)=="array")?jsn:[jsn]):jsn;
		var whr_s=whr||{};
		var variable=_pf.getJSONVariable(jsn);
		_pf.each(jsn_s,function(jk,jv){
		
			if(_pf.isExact(jv,whr_s)){
			
				_pf.append(variable,jv,jk);
			}
		});

		return variable;
};


_pf.count=function(jsn,bol){
var cnt=0;
var bol_d=bol||false;
var get_json=_pf.getJSONtypeof(jsn);

_pf.each(jsn,function(i,m){
	cnt++;
});

	if(get_json=="json" && bol_d==true){
	
		var jsn_parse=_pf.parseString(jsn).match(/(:{)/gi);
		var cnts=0;
		_pf.each(jsn_parse,function(jk,jv){
			cnts+=1;
			});
		return cnts;
	}else{
	return cnt;
	}
};	
	
_pf.getdata=function(jsn,split_str){
var spl_len=split_str.split(":");
var spl=[];
var jsn_total={};
var jsn_cnt=0;

	if(typeof(jsn)=="undefined"){
		return "";
	}

	_pf.each(spl_len,function(i,v){
	
		spl.push(v);
	});
			
		_pf.each(spl,function(i,v){
		
			try{
		if(typeof(jsn[v])!="undefined"){
		if(/^\s+$/.test(jsn[v])==false){
		
		jsn_total=jsn[v];
			jsn_cnt++; 
					}
		}else{
		
				if(typeof(jsn_total) !="undefined" ){
			if( typeof(jsn_total[v])!="undefined"){
				
				jsn_total=jsn_total[v];
				jsn_cnt++;	

			}}else{

		
			}
		}
		}
		catch(e){ console.log(e);
	
		}
		});
	return (_pf.count(spl)==jsn_cnt)?jsn_total:{};	
	
}
_pf.unserialize=function(data){
	//  discuss at: http://phpjs.org/functions/unserialize/
  // original by: Arpad Ray (mailto:arpad@php.net)
  // improved by: Pedro Tainha (http://www.pedrotainha.com)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Chris
  // improved by: James
  // improved by: Le Torbi
  // improved by: Eli Skeggs
  // bugfixed by: dptr1988
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //  revised by: d3x
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Martin (http://www.erlenwiese.de/)
  //    input by: kilops
  //    input by: Jaroslaw Czarniak
  //        note: We feel the main purpose of this function should be to ease the transport of data between php & js
  //        note: Aiming for PHP-compatibility, we have to translate objects to arrays
  //   example 1: unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}');
  //   returns 1: ['Kevin', 'van', 'Zonneveld']
  //   example 2: unserialize('a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}');
  //   returns 2: {firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'}
	
	
	var serial_ver=(data.slice(0, 0+ 1)).toLowerCase();
	var arry_type=['i','b','d','n','s','a'];
	if(typeof(data)=="undefined" || _pf.indexOf(arry_type,serial_ver)<0){
		return {};
	}
 
		
			  var that = this,
				utf8Overhead = function(chr) {
				
				  var code = chr.charCodeAt(0);
				  if (code < 0x0080) {
					return 0;
				  }
				  if (code < 0x0800) {
					return 1;
				  }
				  return 2;
				};
			  error = function(type, msg, filename, line) {
				throw new that.window[type](msg, filename, line);
				return {};
			  };
			  read_until = function(data, offset, stopchr) {
				var i = 2,
				  buf = [],
				  chr = data.slice(offset, offset + 1);

				while (chr != stopchr) {
				  if ((i + offset) > data.length) {
					error('Error', 'Invalid');
				  }
				  buf.push(chr);
				  chr = data.slice(offset + (i - 1), offset + i);
				  i += 1;
				}
				return [buf.length, buf.join('')];
			  };
			  read_chrs = function(data, offset, length) {
				var i, chr, buf;

				buf = [];
				for (i = 0; i < length; i++) {
				  chr = data.slice(offset + (i - 1), offset + i);
				  buf.push(chr);
				  length -= utf8Overhead(chr);
				}
				return [buf.length, buf.join('')];
			  };
			  _unserialize = function(data, offset) {
				var dtype, dataoffset, keyandchrs, keys, contig,
				  length, array, readdata, readData, ccount,
				  stringlength, i, key, kprops, kchrs, vprops,
				  vchrs, value, chrs = 0,
				  typeconvert = function(x) {
					return x;
				  };

				if (!offset) {
				  offset = 0;
				}
				dtype = (data.slice(offset, offset + 1))
				  .toLowerCase();

				dataoffset = offset + 2;

				switch (dtype) {
				  case 'i':
					typeconvert = function(x) {
					  return parseInt(x, 10);
					};
					readData = read_until(data, dataoffset, ';');
					chrs = readData[0];
					readdata = readData[1];
					dataoffset += chrs + 1;
					break;
				  case 'b':
					typeconvert = function(x) {
					  return parseInt(x, 10) !== 0;
					};
					readData = read_until(data, dataoffset, ';');
					chrs = readData[0];
					readdata = readData[1];
					dataoffset += chrs + 1;
					break;
				  case 'd':
					typeconvert = function(x) {
					  return parseFloat(x);
					};
					readData = read_until(data, dataoffset, ';');
					chrs = readData[0];
					readdata = readData[1];
					dataoffset += chrs + 1;
					break;
				  case 'n':
					readdata = null;
					break;
				  case 's':
					ccount = read_until(data, dataoffset, ':');
					chrs = ccount[0];
					stringlength = ccount[1];
					dataoffset += chrs + 2;

					readData = read_chrs(data, dataoffset + 1, parseInt(stringlength, 10));
					chrs = readData[0];
					readdata = readData[1];
					dataoffset += chrs + 2;
					if (chrs != parseInt(stringlength, 10) && chrs != readdata.length) {
					  error('SyntaxError', 'String length mismatch');
					}
					break;
				  case 'a':
					readdata = {};

					keyandchrs = read_until(data, dataoffset, ':');
					chrs = keyandchrs[0];
					keys = keyandchrs[1];
					dataoffset += chrs + 2;

					length = parseInt(keys, 10);
					contig = true;

					for (i = 0; i < length; i++) {
					  kprops = _unserialize(data, dataoffset);
					  kchrs = kprops[1];
					  key = kprops[2];
					  dataoffset += kchrs;

					  vprops = _unserialize(data, dataoffset);
					  vchrs = vprops[1];
					  value = vprops[2];
					  dataoffset += vchrs;

					  if (key !== i)
						contig = false;

					  readdata[key] = value;
					}

					if (contig) {
					  array = new Array(length);
					  for (i = 0; i < length; i++)
						array[i] = readdata[i];
					  readdata = array;
					}

					dataoffset += 1;
					break;
				  default:
					error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
					break;
				}
				return [dtype, dataoffset - offset, typeconvert(readdata)];
			  };

			  return _unserialize((data + ''), 0)[2];
		}
_pf.limit=function(jsn,s1,s2,func){
	var cnt=0;
	var glo_jsn={};
	var glo_indtfd;
var s1_m=((typeof(s1)=="undefined")?0:s1);
var s2_m=((typeof(s2)==="undefined")?_pf.count(jsn):s2);
	_pf.each(jsn,function(i,m){
	if(cnt>=s1_m && cnt<=s2_m){
	glo_jsn[i]=m;
		if(typeof(func)!="undefined"){
		glo_indtfd=func(i,m);
		if(typeof(glo_indtfd)!="undefined")
		glo_jsn[i]=glo_indtfd;		
		};		
	}
	cnt++;
	});
	return glo_jsn;
}

_pf.double=function(nm){

			return parseFloat(main_helper.dateEventFormat(/(\d\.)/g,0.00,nm));

}
_pf.integer=function(nm){
		return parseInt(main_helper.dateEventFormat(/(\d)/g,0,nm));

}

_pf.remove=function(arry,kys){
	var type_js=_pf.getJSONtypeof(arry);
	
	if(type_js==="array"){
		var reslt=[];
		_pf.each(arry,function(ak,av){
			if(_pf.indexOf(arry,kys)<0){

				reslt.push(av);	
			}
		});
		console.log(reslt);
		return reslt;	
	}else if(type_js==="json"){
		var reslt={};
		var jsn_vw=[];
		_pf.each(arry,function(ak,av){
			_pf.where(arry,kys,function(jk,jv){
				jsn_vw.push(jk);
			});
		});

		_pf.each(arry,function(ak,av){
			if(_pf.indexOf(jsn_vw,ak)<0){
				reslt[ak]=av;
			}
		});
		return reslt;
	}
}


})(window);
		
// mvc
(function(window){
var pf_core_val={}
pf_core_val['render']={};
function pf_core_load(func){


		if(pf("agenttype").useragent({browser:'msie'})==true){	
			try{
		var te=setInterval(function(){
		
			if(document.readyState=="complete"){
				if(typeof(func)!="undefined"){
					func();
					clearInterval(te);
				}
			}
		},150);
			}catch(e){
				console.log(e);
			}
		}else{
			try{
			 pf('dom_ready',function(){
			if(typeof(func)!="undefined"){
					func();
				}
					});		
			}catch(e){
				console.log(e);
			}
		}
			
	
}
var pf_dom_main={
		template:function(dom,res){
		
			var str_dom=pf$(res).html();
			pf_core_library.set_attr_templ("template_id",res);
	
			

			var str_rep=str_dom.replace(/(--){0,}/gi,"");
				var gbl_var=pf.Control.Collection.get()||{};
					
					gbl_var["__elements__"]=pf$(res).getallattr();
				pf$(res).html(_pf.template_value(str_rep.toString(),gbl_var));

			},
		
		tooltip:function(dom,res){

			var content=pf$(res).getattr(['pf_content']);
			var content_attr=pf$(res).getattr(['pf_attribute']);
			var jsn_style=pf$(res).getattr(['pf_style']);		
			var uniq=_pf.getUniq();
			var id_uniq="tip_tool_"+uniq;
			var style_json={};
			var attr_json={};
			var dom_layet="<div id='"+id_uniq+"' >"+content+"</div>";

			if(typeof(jsn_style)!="undefined"){
			_pf.each(jsn_style.split(";"),function(sk,sv){
				var spl_t=sv.split(":");
				style_json[spl_t[0]]=spl_t[1];

				});
			}
			if(typeof(content_attr)!="undefined"){
			_pf.each(content_attr.split(";"),function(ssk,ssv){
				var spl_t=ssv.split(":");
				 if(spl_t[0]!="id"){
					attr_json[spl_t[0]]=spl_t[1];
				 }
				});

			}
				style_json['position']="absolute";
				style_json['margin-left']="5px";
				style_json['display']="inline-block";
				pf_core_library.set_attr_templ("tooltip_id",res);

			pf$(res).mouseover(function(){
			
				pf$(this).after(dom_layet);
				pf$("#"+id_uniq).css(style_json);
				pf$("#"+id_uniq).setattr(attr_json);
			}).mouseout(function(){
				pf$("#"+id_uniq).remove();
			});
		},
		
		event_duplicate_element:function(dom,res){

			var list_type=["after","before","prepend","append"];
			
			var main_lib=pf_core_library;
			var elem_from=pf$(res).getattr(['pf_element_from']);
			var elem_to=pf$(res).getattr(['pf_element_to']);
			var insert_type=pf$(res).getattr(['pf_insert_type'])||"html";
			var json_var=pf$(res).getattr(['pf_get_variable'])||"-";
			var event_type=pf$(res).getattr(['pf_event'])||"click";
			pf_core_library.set_attr_templ("event_duplicate_element_id",res);
			pf$(res).on(event_type,function(){
					var gbl_var=pf.Control.Collection.get(json_var)||{};
					gbl_var["__elements__"]=pf$(res).getallattr();
				var copy_elem=_pf.template_html(elem_from,gbl_var);
				if(insert_type=="html"){
					pf$(elem_to).html(copy_elem);
				}else{
					if(_pf.indexOf(list_type,insert_type)>=0){
					pf$(elem_to)[insert_type](copy_elem);
					}

				}
				pf_core_library.set_delegate_dom();
				pf_core_library.load_cls_renderView(this,true);
			});
		},
		element_forms:function(dom,res){

		},
		element_remove:function(dom,res){

			var event_type=pf$(res).getattr(['pf_event'])||"click";
			var element_remove=pf$(res).getattr(['pf_element_remove']);
			
			pf$(res).on(event_type,function(){
				pf$(element_remove).remove();

			});
		},
		toggle_display:function(dom,res){
				var event_type=pf$(res).getattr(['pf_event'])||"click";
				var display_group=pf$(res).getattr(['pf_display_group']);
				
					

			function style_json(res){
				var style_json={};
				var display_style=pf$(res).getattr(['pf_display_toggle_style']);
					if(typeof(display_style)!="undefined"){
					
							_pf.each(display_style.split(";"),function(sk,sv){
								var spl_t=sv.split(":");
								if(typeof(spl_t[1])!="undefined"){
								style_json[spl_t[0]]=spl_t[1];	
								}
								});
							}
				return style_json;
			}
				var pf_index=0;
			var has_typ=(_pf.indexOf(['a'],pf$(res).getTagName())>-1)?{"href":location.hash}:{"pf_href":location.hash}
			var ceck_exist_href=_pf.count(pf$("all:[pf_display_group='"+display_group+"']").getattr(_pf.getKey(has_typ),true));
					if(location.hash.length>0 && typeof(ceck_exist_href)!="undefined" && ceck_exist_href!="undefined" )
					pf_index=pf$("all:[pf_display_group='"+display_group+"']").getindexattr(has_typ);
				
				pf$("all:[pf_display_group_tab='"+display_group+"']").noteq((pf_index==-1)?0:pf_index).hide();
				pf$("all:[pf_display_group_tab='"+display_group+"']").eq((pf_index==-1)?0:pf_index).show();
				pf$("all:[pf_display_group='"+display_group+"']").eq((pf_index==-1)?0:pf_index).css(style_json(res));
				var display_class_main=pf$(res).getattr(['pf_display_class']);

				if(typeof(display_class_main)!="undefined"){
					pf$("all:[pf_display_group='"+display_group+"']").eq((pf_index==-1)?0:pf_index).addclass(display_class_main);
				}
			
			pf$(res).on(event_type,function(){ 
				var pfhref=pf$(res).getattr("pf_href");
					if(typeof(pfhref)!="undefined" || pfhref=="undefined"){
					location.hash=pfhref;
					}
					var indxof=pf$(this).childposition();
					var show_active=pf$(this).getattr(['pf_display_active'])||true;
					var show_active=pf$(this).getattr(['pf_display_active'])||true;
					var display_class=pf$(this).getattr(['pf_display_class']);
				if(show_active==true || show_active=="true"){
					
					pf$("all:[pf_display_group='"+display_group+"']").removeattr("style");
					
					pf$(this).css(style_json(this));
					pf$("all:[pf_display_group_tab='"+display_group+"']").hide();
					pf$("all:[pf_display_group_tab='"+display_group+"']").eq(indxof).show();
					  }	

					if(typeof(display_class)!="undefined"){
					pf$("all:[pf_display_group='"+display_group+"']").eq(indxof).addclass(display_class);
					}
				});
		},
		text_copy:function(dom,res){
			var key_event=pf_core_library.get_key_event_type(res);
				var event_type=pf$(res).getattr(['pf_event'])||key_event.event;
				var key_to_copy=pf$(res).getattr(['pf_copy_to']);
				var key_to_empty=pf$(res).getattr(['pf_empty'])||false;
				var keyCode_res=[39,37,38,40,9,13,20,8,45,17,18,144,27,32];
				var keyCode_event=["keydown","keypress"];
				
				if(key_to_empty==true || key_to_empty=="true"){
					pf$(res).mousedown(function(){
						pf$(res).val("");
					});
				}

				if(typeof(key_to_copy)!="undefined"){
				pf_core_library.set_attr_templ("text_copy_id",res);
				pf$(res).on(event_type,function(e){
					var res_get_text_id=pf$(res).getattr("text_copy_id");
						var res_text=pf_core_library.get_html_value(this);
					var e=window.event||e;
				pf$(key_to_copy).each(function(thk,thv){
					var string_type=pf$(thv[thk]).getattr(['pf_string_type'])||"";
					var string_logic=pf$(thv[thk]).getattr(['pf_string_logic']);
					var string_regexp=pf$(thv[thk]).getattr(['pf_regexp']);
					var string_regexp_pattern=pf$(thv[thk]).getattr(['pf_regexp_pattern'])||"";
					var string_replace=pf$(thv[thk]).getattr(['pf_replace_to']);
					
					var key_text=pf_core_library.get_key_event_type(thv[thk]);	
					pf_core_library.set_attr_templ("text_copy_id",thv[thk]);
					
					if(res_get_text_id==pf$(thv[thk]).getattr("text_copy_id")){
						if(_pf.indexOf(keyCode_res,e.keyCode)==-1 && _pf.indexOf(keyCode_event,e.type)==-1){
							pf$(thv[thk])[key_text.text](pf_core_library.str_interpolcation(res_text,string_type,string_logic,string_regexp,string_replace,string_regexp_pattern));			
						}
					}else{
						pf$(thv[thk])[key_text.text](pf_core_library.str_interpolcation(res_text,string_type,string_logic,string_regexp,string_replace,string_regexp_pattern));			
					  }		
						});	
					});
				}

		},links:function(dom,res){
				pf_core_library.set_attr_templ("links_id",res);
				pf$(res).on("click",function(){
					var link_src=pf$(this).getattr(['pf_link_src']);
					var link_target=pf$(this).getattr(['pf_link_target'])||"-";
					var link_path_splice=pf$(this).getattr(['pf_link_path_slice']);

					var link_src_bool=pf$(this).getattr(['pf_url_config'])||false;
					
					if(typeof(link_src)!="undefined"){	
					var str_link_src=link_src;
						var url=pf_core_library.config("url",location.protocol+"//"+location.host+"/");
						var protocol=pf_core_library.config("protocol",location.protocol);
						var modd=pf_core_library.conf_replace((location.protocol+"//"+location.host+location.pathname),pf_core_library.config("url",location.protocol+"//"+location.host+"/"),"");
			
						
						if(/^(http|https|sftp|ftp|tcp|mailto){1,4}/.test(link_src.toLocaleLowerCase()) ==false ){
								
								if(typeof(link_path_splice)!="undefined"){
									var path_splice=link_path_splice.split(",");
									var splice_splt=modd.split("/");	
									if(_pf.count(path_splice)==1){
										modd=splice_splt.slice(0,path_splice[0]).join("/");
									}else{
										modd=splice_splt.slice(path_splice[0],path_splice[1]).join("/");
									}
								
								}
							if(link_src_bool==true || link_src_bool=="true"){
							str_link_src=protocol+"//"+url+link_src;
							}else{
							
							str_link_src=location.protocol+"//"+location.host+"/"+modd+"/"+link_src;

							}	
							}
					
						if(link_target=="top"){

						}else{
						location.href=str_link_src;
						}
					}			
				});
		}
		
	};

var pf_core_library={
	
		routes:function(){
			var val={};
				val['url']=pf_core_library.config("url",location.protocol+"//"+location.host+"/");
				val['protocol']=pf_core_library.config("protocol",location.protocol);
				
				val['search']=pf_core_library.get_url_search();
				var oc=0;
				var modd=pf_core_library.conf_replace((location.protocol+"//"+location.host+location.pathname),pf_core_library.config("url",location.protocol+"//"+location.host+"/"),"").split("/");		
				val['pathname']=modd;
				
			return val;
		},

		config:function(key,val){
		var cnfg=pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.config;
		
		try{
			
		if(typeof(cnfg[key])!="undefined"){
			
			return cnfg[key];
			
		}
		else{
			return val;
		}}catch(e){
		return val;
		}
		
		},
		conf_replace:function(str,rplac,torplac){
			
		var fd=new RegExp("^("+rplac+")");
	

			return str.replace(fd,torplac);
		},
		global_config:function(){
		var globlas={
		set:function(ky,val){
		if(typeof(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting)==="undefined")
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting={};
		try{	
			
			if(typeof(ky)!="object"){
			
		pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting[ky]=val;
		}
	else	
		pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting=ky;
	
	}
	catch(e){
	console.log("date can`t log");
		}	
	
		},
		insert:function(where,val){
			if(typeof(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting)==="undefined")
				pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting={};
				
			var ech=pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting;
			var vall=_pf.getdata(ech,where);
			if(typeof(val)!="undefined")
					_pf.insert(vall,val);
		},
		
		get:function(ky){
			try{
	
			if(typeof(ky)!="undefined"){
				var ech=pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting;
				var vall=_pf.getdata(ech,ky);	
			return vall;
			}else{
			return pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting;
			}
			
			}
			catch(e){
		
			}
		},
		remove:function(ky){
			var ech=pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting;
			var vall=_pf.getdata(ech,ky);
			if(typeof(vall)!="undefined"){
				var typ_js=_pf.getJSONVariable(vall);
				vall=typ_js;
			}
		},
		get_all:function(){
			
			return pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting;
		},
		get_list:function(){
			var cntn=[];
			_pf.each(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting,function(k,v){
				cntn.push(k);
			});
			return cntn;
		
		},
		count:function(d){
			var cnt=0;
			this.each(d,function(){
				cnt++;
			});
				return cnt;
		},
		each:function(d,func){
			try{
		var ech=pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.global_setting;
		var vall=_pf.getdata(ech,d);	
		if(typeof(func)!="undefined"){
			
			_pf.each(vall,function(i,v){
			
				func(i,v);			
			});
		}else
			
		return vall;
		}
		catch(e){
			console.log(e);
		}	
		}
	};
		return globlas;
		},
		check_each_element:function(dom_main,clsnme,fnc){
			
			_pf.each(dom_main,function(domk,domv){
				
				var dom_main_list;
				var dom_mains;
			
		if(typeof(dom_main[domk])==="object" && typeof(dom_main[domk])!="undefined" && dom_main[domk]!=null){
			if(dom_main[domk].getAttributeNode){
				dom_main_list=dom_main[domk].getAttributeNode(clsnme);
				dom_mains=dom_main[domk];
			
			}else {
				if(dom_main[domk].getAttribute){
				dom_main_list=dom_main[domk].getAttribute(clsnme);
				dom_mains=dom_main[domk];
				}
				
			}
				if(typeof(dom_main_list)!="undefined" && dom_main_list!=null){
					fnc(dom_main_list,dom_mains);
				}
			
		}
			});
		},
		set_attr_templ:function(tag,dom){
			var attr_s=pf$(dom).getattr(tag);
				
				if(typeof(attr_s)=="undefined"){
					var gtx={};
					gtx[tag]=_pf.getUniq();
					pf$(dom).setattr(gtx);
				}
		},render_dom_element:function(){

	var dom_main=document.body.getElementsByTagName("*");
		pf_core_library.check_each_element(dom_main,"pf_dom",function(domk,domv){
			_pf.each(domk.nodeValue.split(","),function(ssk,ssv){
			
			if(typeof(pf_dom_main[ssv])!="undefined"){
				var act_pf=pf$(domv).getattr(["pf_active"])||false;
				
			if( act_pf==false){
					
					var pf_dom_attr=pf$(domv).getattr(['pf_dom']).split(",");
					_pf.each(pf_dom_attr,function(trk,trv){
					pf_dom_main[trv](domk,domv);
					});
				pf$(domv).setattr({"pf_active":true});
				}
			}
			});
			load_logic_cnt++;
		});
		},
		load_cls_renderView:function(domss,bool){
			var main_bool=bool||false;
			var libb=pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.loadlibrary;
			
			for(var kl in libb){
				
				if(typeof(libb[kl])!="undefined"){
			
				var cls_nm=libb[kl];
				
				    	if( main_bool==true){
					libb[kl]['__renderDOM__']=domss;
				libb[kl]['__loadLogic__'].call(libb[kl]);
						}					
				}
			}

		},
		load_delegation_event:function(cntt){

			var libb=pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.delegation_list;
			
			for(var kl in libb){
				if(typeof(libb[kl])!="undefined"){
					var cls_nm=libb[kl];
					if(typeof(cls_nm.__delegation__)=="function"){
						var lst_delegate=cls_nm.__delegation__();
						
						_pf.each(lst_delegate,function(lstk,lstv){
					
				
							var lstk_splt=lstk.split("|");
							if(_pf.count(lstk_splt)==2){
							
							pf$(lstk_splt[0]).on(lstk_splt[1],function(e){
							
								var getattr=pf$(this).getattr(["pf_control_delegation_press"])||false;
								
								if(typeof(cls_nm[lstv])!="undefined" && getattr==false){
								cls_nm.__renderIDEvent__=this;
								cls_nm[lstv].call(cls_nm,e);
								pf$(this).setattr({"pf_control_delegation_press":true});

									}
							cntt++;
								});
							}
							
				
						});
								}
					
				}
			}
			
		},
		set_delegate_dom:function(){
			var libb=pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.delegation_list;
			
			for(var kl in libb){
				if(typeof(libb[kl])!="undefined"){
					var cls_nm=libb[kl];
					if(typeof(cls_nm.__delegation__)=="function"){
						var lst_delegate=cls_nm.__delegation__();
						
								}
					
				}
			}
			

		},get_html_value:function(res){
			var res_html=pf$(res).getTagName().toLowerCase();
			var res_str="";
			if(res_html=="select"){
				res_str=pf$(res).getselected();
			}else if(res_html=="input"){
				res_str=pf$(res).val();
			}else{
				res_str=pf$(res).html();
			}
			return res_str;
		},get_key_event_type:function(res){
			var str="";
			var str_type="";
			var gettag=pf$(res).getTagName().toLowerCase();
			var int_type=["text","password","email","number"];
			if(gettag=="input"){
				var attr_type=pf$(res).getattr(['type']);
				if(_pf.indexOf(int_type,attr_type)>-1){
					str="keydown,keypress,keyup";
					res_str="val";

				}else{
					str="click";
					res_str="val";
				}	
			}else if(gettag=="textarea"){
				gettag="keydown,keypress,keyup";
				res_str="val";
			}
			else if(gettag=="select"){
				gettag="change";
				res_str="setselected";
			}
			else{
				str="click";
				res_str="html";
			}
			return {"event":str,"text":res_str};
		}
		,str_interpolcation:function(str,str_type,str_logic,reg,rplc_str,regexp_pattern){
			var res_str=str;
			
			var str_type_splt=str_type.split("|");
				
			if(typeof(reg)!="undefined" && typeof(rplc_str)!="undefined" )	{
					var reg_rexp=new RegExp(reg,regexp_pattern);
					res_str=str.replace(reg_rexp,rplc_str);
					
								}		
			if(_pf.indexOf(str_type_splt,"tolowercase")>=0){
				res_str=res_str.toLowerCase();
			}	
			if(_pf.indexOf(str_type_splt,"touppercase")>=0){
				res_str=res_str.toUpperCase();
			}
			if(_pf.indexOf(str_type_splt,"trim")>=0){
				res_str=res_str.trim();
			}
			
			if(_pf.indexOf(str_type_splt,"first_capital")>=0){
				res_str=res_str.toLowerCase().replace(/\b(\w{2,}|\w{1}\s{1,})/g,function(wrd){
					return wrd.charAt(0).toUpperCase()+wrd.slice(1);
					
				});
			}
			return res_str;
		
			if(typeof(str_logic)!="undefined"){

			var fnc=new Function("value","return "+str_logic);
			return fnc(str);
		}
		},
		get_url_search:function(){

				var var_sn={};
				var glbl_vsn=location.search.substring(1,location.search.length).split("&");
				for(var f in glbl_vsn){
					
			if(typeof(glbl_vsn[f])!="function" && typeof(glbl_vsn[f])!="undefined"){
				try{
					var f1 = glbl_vsn[f].split("=");
				if(typeof(f1[1])!="undefined")
				var_sn[f1[0]]=f1[1];
			
				}catch(e){
					console.log(e)
				}}}
				return var_sn;

		}
	

	};

function pf_external(){
		
		this.cls_event=function(cls,mthd,para){
			
			var cls_var=para||{};
			if(typeof(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extendview[cls])!="undefined"){
				if(typeof(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extendview[cls][mthd])!="undefined"){
					pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extendview[cls][mthd].call(cls_var);
			
				}else{
					console.log("Class method extension doesnt exist");
			
				}
			}
			else{
				console.log("Class extension doesnt exist");
			}
			return this;
		}
		this.get_url_search=function(){
			return pf_core_library.get_url_search();
		}
		
	
	};
function pf_init(){


}
pf_init.prototype.Collection=pf_core_library.global_config();
pf_init.prototype.Collection.addModel=function(key,val){
	pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extend[key]=val;
}
pf_init.prototype.Collection.getModel=function(key,val){
	if(typeof(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extend[key])!="undefined"){
	return pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extend[key];
	}else{
		return null;
	}
}

pf_init.prototype.Collection.getView=function(key){
	if(typeof(pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extendview[key])!="undefined"){
	
	
	return pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extendview[key];
	}else{
		return null;
	}
}
pf_init.prototype.Load=function(func){
	pf_core_load(func);
}

pf_init.prototype.Model=function(glb){
	
	function pf_model(){
		
	}
	

	pf_model.prototype=glb;
	pf_model.prototype.global=pf_core_library.global_config();
	if(typeof(pf_model.prototype.__init__)!="undefined"){
		pf_model.prototype.__init__();
	}
	
	return new pf_model();
}

pf_init.prototype.Route=function(glb){

	function pf_route(){

		
	}
	pf_route.prototype.urls=function(jsn_url,pf_route){
		var urlss=pf_core_library.routes();
	
		_pf.each(jsn_url,function(k,v){
			var reg=new RegExp(k);
			if(reg.test(urlss.pathname.join("/"))){
				if(typeof(pf_r.route[v])!="undefined"){
					
					pf_r.route[v].call(pf_route);
					
			
				}
			}
		});
	
	}

		pf_route.prototype.route=glb;
	
	
	var pf_r=new pf_route();
	
	if(typeof(pf_r.route.__init__)!="undefined"){
		pf_r.route.__init__.call(this,pf_core_library.routes());
		
	}
	pf_r.route.__getRoutes__=	pf_core_library.routes();
	if(typeof(pf_r.route.__route__)!="undefined"){
		pf_r.urls(pf_r.route.__route__(),pf_r.route);
	}
	return pf_r;
}
pf_init.prototype.Controller=function(cntlr_m,glb){
function pf_view(){

}

var cntlr =cntlr_m||"none";


pf_view.prototype.EventTrigger=function(clases,act){
var jsn_g=_pf.getJSONtypeof(act)=="json"?act:{};
var arr_action=pf_core_val.render;

	var jsn_bol=false;
	try{
	_pf.each(jsn_g,function(k,v){
		var k_s=k.split("|");
		var func;
		if(k_s.length==2){
			if(_pf.getJSONtypeof(v)==="string"){
				func=v;
			}
			else if(_pf.getJSONtypeof(v)==="function"){
				func=v;	
				jsn_bol=true;
			}
		
				if(pf("dom",k_s[0]).isDomNull()==false){
					 
				pf("dom",k_s[0]).on(k_s[1],function(e){
					
					var func_str_split=	func.split("|");
					
					var main_this=this;
						_pf.each(func_str_split,function(spl_k,spl_v){
						if(typeof(pf_view.prototype.view[spl_v])!="undefined"){
						
							pf_view.prototype.view.__renderIDEvent__=main_this;
							pf_view.prototype.view.__viewLaunch__="event";
							if(typeof(arr_action[spl_v])!="undefined"){
								
								pf_view.prototype.view.__renderID__=arr_action[spl_v];
							}
					pf_view.prototype.view[spl_v].call(pf_view.prototype.view,e);
						
						
						}
						});
					});
			
				}
		}
	
	});
	
	}catch(e){console.log(e);}
}
pf_view.prototype.loadLibrary=function(cls_glb,classes,ldb){

	var cls={};
try{
		for(var in_cls in classes){
			cls[in_cls]=classes[in_cls];
			
			}
		
		pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control[ldb][cntlr_m]=cls;
		if(ldb=="delegation_list"){

			pf_core_library.set_delegate_dom();
		}
}catch(e){console.log(e);}
}
pf_view.prototype.allowView=function(cls_glb,classes){
	var bool_glb=cls_glb['allow']||false;
	var cls_name=cls_glb['class_name']||"default";
	var cls={};
try{
	if(bool_glb==true && typeof(cls_glb['method'])!="undefined" ){

			for(var in_cls in classes){
				if(_pf.indexOf(cls_glb['method'],in_cls)>=0){
				
				cls[in_cls]=classes[in_cls];
			}
			}
		if(typeof(classes.__renderID__)!="undefined"){
		cls['__renderID__']=classes.__renderID__;
		}
		if(typeof(classes.__renderIDEvent__)!="undefined"){
			cls['__renderIDEvent__']=classes.__renderIDEvent__;
		}
		pf_ew4sd12m23mkk13k13m12k3mdasdsds4ffjmlpsdjjn344n24j2bjb313n31m3n1m31m3n1m44csdf41n41.control.extendview[cls_name]=cls;
	}
}catch(e){console.log(e);}
}
pf_view.prototype.renderView=function(glb,classes){
	var jsn_g=_pf.getJSONtypeof(glb)=="json"?glb:{};
	var arr_action=pf_core_val.render;
	var dom_main=document.body.getElementsByTagName("*");
	var arry_push={};
	var arry_validate=[];
	var cls_bool=false;

	try{
	
	pf_core_library.check_each_element(dom_main,"pf_controller",function(domk,domv){
				
			if(domk.nodeValue==cntlr ){
				pf_core_library.check_each_element(domv.getElementsByTagName("*"),"pf_render",function(mk,mv){
				arry_push[mk.nodeValue]=mv;	
				arry_validate.push(mk.nodeValue);
				});
			cls_bool=true;
			}
		});
		
		_pf.each(jsn_g,function(k,v){
			
			var s_v=v.split("|");
				_pf.each(s_v,function(ss_k,ss_v){
				if(typeof(pf_view.prototype.view[ss_v])!="undefined"){
					
					if(_pf.indexOf(arry_validate,k)>=0){
					pf_view.prototype.view.__renderID__=arry_push[k];
					pf_view.prototype.view.__viewLaunch__="view";
					pf_view.prototype.view[ss_v].call(pf_view.prototype.view);
					arr_action[ss_v]=arry_push[k];
							}
				}
			});
		});
		if(cls_bool==false){
			console.log("Controller class name not found");
		}
}catch(E){console.log(E);}
}
pf_view.prototype.view=glb;

var pf_v=new pf_view();
try{

	if(typeof(pf_view.prototype.view.__init__)!="undefined")
	pf_view.prototype.view.__init__();
	if(typeof(pf_view.prototype.view.__render__)!="undefined")
	pf_v.renderView(pf_view.prototype.view.__render__(),pf_view.prototype.view);
	if(typeof(pf_view.prototype.view.__events__)!="undefined")
	pf_v.EventTrigger(pf_view.prototype.view,pf_view.prototype.view.__events__());
	if(typeof(pf_view.prototype.view.__delegation__)!="undefined")
	pf_v.loadLibrary(pf_view.prototype.view.__loadLogic__,pf_view.prototype.view,'delegation_list');
	if(typeof(pf_view.prototype.view.__allow__)!="undefined")
	pf_v.allowView(pf_view.prototype.view.__allow__(),pf_view.prototype.view);
	if(typeof(pf_view.prototype.view.__loadLogic__)!="undefined")
	pf_v.loadLibrary(pf_view.prototype.view.__loadLogic__,pf_view.prototype.view,'loadlibrary');
	if(typeof(pf_view.prototype.view.__afterload__)!="undefined")
	pf_view.prototype.view.__afterload__();

}catch(e){};

	return pf_v;
}
var load_logic_cnt=0;

window.pf.Control=new pf_init();
window.pf_js.Control=window.pf.Control;

window.pf.Ext=new pf_external();
window.pf_js.Ext=window.pf.Ext;


	pf_core_load(function(){
	
		pf_core_library.render_dom_element();
	

	var cntt=0;
	pf$(document.body).on("click,mouseover",function(e){
		var arry=["test","event_duplicate_element"];
		 var dom_target=e.target||e.srcElement;
		var get_dom=pf$(dom_target).getattr(["pf_dom"]);
		if(typeof(get_dom)!="undefined"){
		_pf.each(get_dom.split(","),function(gk,gv){
		
			pf_core_library.render_dom_element();
		});
		
		}
		
			pf$(dom_target).removeattr(["pf_control_delegation_press"]);
			pf_core_library.load_delegation_event(cntt);			
	});
	
	});


})(window);
