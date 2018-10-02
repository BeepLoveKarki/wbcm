function showup(){
  $(".sin").hide();
  $(".sup").show();
  $(".txt1").empty();
  $(".txt1").text("Already have an account?");
  $(".umma").hide();
  $(".umm").hide();
  $(".umm1").show();
}

function showin(){
  $(".sup").hide();
  $(".sin").show();
  $(".txt1").empty();
  $(".txt1").text("Create an account?");
  $(".umma").show();
  $(".umm").show();
  $(".umm1").hide();
}

$(".signup").submit((e)=>{
   e.preventDefault();
   if(emailcheck($("#email").val())){
     $.post("/signup",$(".signup").serialize()).then((res)=>{
	    let data=$.parseJSON(res);
		if(data.exists1=="yes"){
		  $("#err").text("An account under this email address already exists");
	      $("#err").show();
		}
		if(data.exists=="yes"){
		  $("#err").text("An account of this office under the specified post already exists");
	      $("#err").show();
		}
		if(data.done=="yes"){
		
		}
	 },(err)=>{
	 });
   }else{
     $("#err").text("Please enter a valid email address");
	 $("#err").show();
   }
});

function emailcheck(email){
	let tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
	if (!email)
		return false;
		
	if(email.length>254)
		return false;

	let valid = tester.test(email);
	if(!valid)
		return false;

	let parts = email.split("@");
	if(parts[0].length>64)
		return false;

	let domainParts = parts[1].split(".");
	if(domainParts.some(function(part) { return part.length>63; }))
		return false;

	return true;
 }