function viewuser(){
   $.get("/allusers").then((res)=>{
     let data=$.parseJSON(res);
	 if(data["status"]=="no"){
	   $("#ee").text("No any existing users found");
	   $("#nope").modal('show');
	 }else{
	   $("#ptable").empty();
	   data["users"].forEach((val,i)=>{
	    $("#ptable").append("<tr id=\"user"+i+"\"><td style=\"text-align:center;\">"+val["officeName"]+"</td><td style=\"text-align:center;\">"+val["name"]+"</td>\
	     <td style=\"text-align:center;\">"+val["post"]+"</td><td style=\"text-align:center;\">"+val["license"]+"</td>\
		  <td style=\"text-align:center;\">"+val["email"]+"</td></tr>");
	   });
	   $(".ptable-data").show();
	   $(".employees").hide();
	 }
   });
}

function backemployee(){
  $(".ptable-data").hide();
  $(".employees").show();
}

function adduser(){
  $("#newuser").modal('show');
}

$("#uform").submit((e)=>{
  e.preventDefault();
  if(emailcheck($("#email").val())){
     $.post("/signup",$(".signup").serialize()).then((res)=>{
	    let data=$.parseJSON(res);
		if(data.exists=="yes"){
		  $("#err").text("An account under this email address already exists");
	      $("#err").show();
		}
		if(data.exists1=="yes"){
		  $("#err").text("An account of this office under the specified post already exists");
	      $("#err").show();
		}
		if(data.done=="yes"){
		   $("#ee").text("User has been successfully added");
	       $("#nope").modal('show');
		}
	 },(err)=>{
	 });
   }else{
     $("#err").text("Please enter a valid email address");
	 $("#err").show();
   }
});

function reporttable(){
  if($("#an").val().length!=0){
   $.post("/allreportdata",{year:$("#an").val()}).then((res)=>{
     let data=$.parseJSON(res);
	 if(data["data"]=="no"){
	   $("#ee").text("No data found for tabular analysis");
	   $("#nope").modal('show');
	 }else{
	    $("#rtable").empty();
		data["office"].forEach((val,i)=>{
	      $("#rtable").append("<tr id=\"tax"+i+"\"><td style=\"text-align:center;\">"+val+"</td><td style=\"text-align:center;\">"+data["itax"][i]+"</td>\
	      <td style=\"text-align:center;\">"+data["ctax"][i]+"</td><td style=\"text-align:center;\">"+(data["ctax"][i]+data["itax"][i])+"</td></tr>");
		});
		$("#mmd").text("Tax report for "+$("#an").val());
		$(".rtable-data").show();
		$(".reporta").hide();
	 }
   });
  }else{
    $("#ee").text("Please input year to analyze");
	$("#nope").modal('show');
  }
}

function backreport(){
  $("#an").val("");
  $(".rtable-data").hide();
  $("#plotly_div").hide();
  $(".reporta").show();
}

function graph(){
 if($("#an").val().length!=0){
   $.post("/allreportdata",{year:$("#an").val()}).then((res)=>{
     let data=$.parseJSON(res);
	 if(data["data"]=="no"){
	   $("#ee").text("No data found for tabular analysis");
	   $("#nope").modal('show');
	 }else{
		 let d=$.parseJSON(res);
         let d3 = Plotly.d3;
         let img_jpg= d3.select('#graph');
         let trace={x:d["office"],y:d["itax"],name:"Individual tax",type:"bar"};
         let trace1={x:d["office"],y:d["ctax"],name:"Corporate tax",type:"bar"};
         let data = [trace,trace1];
         let layout = {
	       title : "Tax Report for "+$("#an").val(),
         }
       Plotly.newPlot(
       'plotly_div',
       data,
       layout)
       .then(
       function(gd)
       {
        Plotly.toImage(gd,{height:600,width:800})
         .then(
            function(url)
         {
             img_jpg.attr("src", url);
             return Plotly.toImage(gd,{format:'jpeg',height:400,width:400});
         }
         )
      });
      $("#plotly_div").show();
      $(".rtable-data").hide();
      $(".reporta").hide();
	 }
   });
 }else{
   $("#ee").text("Please input year to analyze");
	$("#nope").modal('show');
 }
}



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