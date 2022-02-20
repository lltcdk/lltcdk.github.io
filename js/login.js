
function login()
{
	var pass="123456";
	var user='luolinteng';
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(password==pass&&username=='luolinteng'){
		window.open("page0.htm",'_self');
	}else{
		alert("账号或密码错误！");
	}
}