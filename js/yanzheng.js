window.onload=function(){
				var inp1=document.form1.userName
				var pwd=document.form1.pwd
				var form1=document.getElementsByName('form1');
				
				form1[0].onsubmit=function(event){
					if(inp1.value=='admin' && pwd.value=='123'){
			     			alert('登录成功');
			     	  }else{
							alert('用户名或密码错误');
							inp1.value='';
							pwd.value='';
							inp1.focus();
							return false;
				}
			}
				
		    var btn1=document.getElementById('btn1');
		    var div1=document.getElementById('div1')
		    var div3=document.getElementById('div3');
		    btn1.onclick=function(){	
			div3.style.display='block';
		 	}
		    function getElementById(id){
				return document.getElementById(id);
			}
		    function checks(id,reg){
				getElementById(id).onblur=function(){
					var span=this.nextElementSibling;
					if(reg.test(this.value)){
						span.innerHTML='<span style="color: green; display: inline-block;">√</span>';
					}else{
						span.innerHTML='<span style="color: red; display: inline-block;">×</span>';
					}
				}
			}
			checks('qq',/^[1-9][0-9]{4,10}$/);
			checks('phone',/^[1](([385][0-9])|([4][37])|([7][01367]))[0-9]{8}$/);
			checks('email',/^\w+@\w+.[a-z]{3}$/);
			checks('telphone',/^[0][0-9]{2,3}-[0-9]{8}$/);
			checks('fullName',/^[\u4e00-\u9fa5]{2,6}$/);
			
			var btn2=document.getElementById('btn2')
			btn2.onclick=function(){
				div3.style.display='none'
			}
			
			getElementById('pwd').onkeyup=function(){
				getElementById('strengthLevel').className='strengthLv'+(this.value.length>=6?getLv(this.value):0);
				}
				function getLv(pwd){
					var lv1=0;
					if(/[0-9]/.test(pwd)){
						lv1++;
					}
					if(/[a-zA-Z]/.test(pwd)){
						lv1++;
					}
					if(/[^0-9a-zA-Z_]/.test(pwd)){
						lv1++;
					}
				return lv1;
			}
		}		
