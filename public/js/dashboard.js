//$("#mm").text()
let tdata;
$(".category").submit((e)=>{
   e.preventDefault();
   $.post("/getgoods",$(".category").serialize()).then((res)=>{
     let datas=$.parseJSON(res);
	 if(datas.possible=="no"){
	   $("#ee").text("No pending goods data can be made available for individuals");
	   $("#nope").modal('show');
	 }
	 if(datas.data=="no"){
	   $("#ee").text("No goods data found under the selected category");
	   $("#nope").modal('show');
	 }
   });
});

function newgood(){
    $("#newgood").modal('show');
}

$('#arrived').on('change', function() {
    let soption = $( "#arrived option:selected" ).text();
    if(soption=="Yes"){
	  $(".arr").show();  
	}else{
	   $(".arr").hide();
	}
});

$("#gform").submit((e)=>{
  e.preventDefault();
  $.post("/newgood",$("#gform").serialize()).then((res)=>{
     let data=$.parseJSON(res);
	 if(data.status=="done"){
	   $("#newgood").modal('hide');
	   $("#ee").text("Good has been successfully added");
	   $("#nope").modal('show');
	 }
  });
});

$("#tform").submit((e)=>{
  e.preventDefault();
  $.post("/newtax",$("#tform").serialize()).then((res)=>{
     let data=$.parseJSON(res);
	 if(data.status=="done"){
	   $("#newtax").modal('hide');
	   if(r==0){
	     $("#ee").text("Tax data has been successfully added");
	     $("#nope").modal('show');
	   }else{
	     $("#ee2").text("Tax data has been successfully edited");
		 $("#nope2").modal('show');
		 r=0;
	   }
	 }
  });
});

let r=0;

function wowo(){
  $("#nope2").modal('hide');
  gettax();
}

function addtax(){
   $("#headis1").text("Add New Tax Data");
   $("#adds1").text("Add");
   $("#tform").trigger('reset');
   if($("#old").length){
     $("#old").remove();
   }
   $("#newtax").modal('show');
}

function backtax(){
  $(".ttable-data").hide();
  $(".intu").show();
}

function deletetax(m){
	$.post("/deletetax",{goodtype:tdata[m].goodtype}).then((res)=>{
	    let data=$.parseJSON(res);
		if(data.status=="done"){
		  gettax(1);
		}
	});
}

function edittax(i){
   $("#y1").val(tdata[i].goodtype);
   $("#y2").val(tdata[i].itax);
   $("#y3").val(tdata[i].ctax);
   $("#headis1").text("Edit tax data below");
   $("#adds1").text("Edit");
   $("#newtax").modal('show');
   $("#tform").append("<input type=\"hidden\" id=\"old\" name=\"oldones\" value=\""+tdata[i].goodtype+"\"></input>");
   r=1;
}

											
function gettax(a=0){
   $.get("/tax").then((res)=>{
    let data=$.parseJSON(res);
    if(data["exists"]=="no"){
	 if(a==1){
	   $("#ee1").text("Tax data seems to be empty now");
	   $("#nope1").modal('show');
	 }else{
	   $("#ee").text("Tax data seems to be empty");
	   $("#nope").modal('show');
	 }
	}else{		
	 $("#ttable").empty();
	 tdata=data["data"];
	 data["data"].forEach((val,i)=>{
	   $("#ttable").append("<tr id=\"tax"+i+"\"><td style=\"text-align:center;\">"+val.goodtype+"</td><td style=\"text-align:center;\">"+val.itax+"\
	   </td><td style=\"text-align:center;\">"+val.ctax+"</td><td><i class=\"far fa-edit\" onclick=\"edittax("+i+")\"></i></td> \
	   <td><i class=\"fa fa-trash\" onclick=\"deletetax("+i+")\"></i></td></tr>");
	 });
	 $(".ttable-data").show();
	 $(".intu").hide();
	}
   });
}