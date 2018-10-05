
$(".signin").submit((e)=>{
   e.preventDefault();
     $.post("/adminsignin",$(".signin").serialize()).then((res)=>{
	    let data=$.parseJSON(res);
		if(data.exists=="no"){
		   $("#err1").text("Admin account credentials error");
	       $("#err1").show();
		}
		if(data.exists=="yes"){
		   window.location.href="/admin";			
		}
	 });
});