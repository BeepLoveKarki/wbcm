$(".signin").submit((e)=>{
   e.preventDefault();
     $.post("/signin",$(".signin").serialize()).then((res)=>{
	    let data=$.parseJSON(res);
		if(data.exists=="no"){
		   $("#err1").text("No account found with entered credentials");
	       $("#err1").show();
		}
		if(data.exists=="yes"){
           window.location.href="/";			
		}
	 });
});

