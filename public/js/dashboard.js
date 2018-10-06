if($("#mm").text()=="Department Chief"){
   $(".choose1").hide();
   $("#ab").hide();
   $(".calculate").hide();
   $(".setting").hide();
   $(".choose").css({
     "margin-top":"-168px"
   });
   $("#yy").css({
     "margin-top":"70px"
   });
}else if($("#mm").text()=="Officer"){
    $(".choose1").hide();
	$(".choose").css("margin-top","-168px");
	$(".calculate").hide();
}else{
	$(".choose").hide();
	$(".reporting").hide();
    $(".setting").hide();
}


let tdata,gdata,x=0,y;

$.get("/goodtype").then((res)=>{
       let data=$.parseJSON(res);
	   if(data["types"]=="no"){
	      $("#tgoods").append("<option id=\"mc1\" value=\"\" disabled>No any goods categories found</option>");
	   }else{
		  if($("#mc1").length){
			  $("#mc1").remove();
		  }
		  if($("#mc2").length){
		     $("#mc2").remove();
		  }
	      data["types"].forEach((val)=>{
		     $("#tgoods").append("<option id=\"mc2\" value=\""+val+"\">"+val+"</option>");
		  });
	   }
	});

$(".taxc").submit((e)=>{
   e.preventDefault();
   $.post("/gettax",$(".taxc").serialize()).then((res)=>{
     let datas=$.parseJSON(res);
	 $("#jj").text("The tax for the given good at given price is Rs."+datas["tax"].toFixed(2)+" (at the rate of "+datas["rate"]+"%)");
   });
});

$(".category").submit((e)=>{
   e.preventDefault();
   $.post("/getgoods",$(".category").serialize()).then((res)=>{
     let datas=$.parseJSON(res);
	 if(datas.possible=="no"){
	   $("#ee").text("No pending goods data can be made available for individuals");
	   $("#nope").modal('show');
	 }else if(datas.data=="no"){
	   $("#ee").text("No goods data are found under the selected category presently");
	   $("#nope").modal('show');
	 }else{
		gdata=datas["data"];
		if($("#goods").val()=="pending"){
		  $("#cptable").empty();
		 datas["data"].forEach((val,i)=>{
		   if(val.barcode.length==0){
		     val.barcode="-";
		   }
		   $("#cptable").append("<tr id=\"cpgood"+i+"\"><td style=\"text-align:center;\">"+val.barcode+"</td><td style=\"text-align:center;\">"+val.exportCompany+"\
	       </td><td style=\"text-align:center;\">"+val.importCompany+"</td><td style=\"text-align:center;\">"+val.name+"</td>\
		   <td style=\"text-align:center;\">"+val.goodtype+"</td><td style=\"text-align:center;\">"+val.price+"</td>\
		   <td style=\"text-align:center;\">"+val.departureDate+"</td><td style=\"text-align:center;\">"+val.departureTime+"</td>\
		   <td><i class=\"far fa-edit\" onclick=\"editgood("+i+")\"></i></td> \
	       <td><i class=\"fa fa-trash\" onclick=\"deletegood("+i+")\"></i></td></tr>");
		 });
		 $(".yodata").hide();
		 $(".catable-data").hide();
		 $(".iatable-data").hide();
		 $(".cptable-data").show();
		}else{
		   if($("#group").val()=="corporate"){
		     $("#catable").empty();
		     datas["data"].forEach((val,i)=>{
			   if(val["pendingDetails"][0].barcode.length==0){
			     val["pendingDetails"][0].barcode="-";
			   }
			 $("#catable").append("<tr id=\"cpgood"+i+"\"><td style=\"text-align:center;\">"+val["pendingDetails"][0].barcode+"</td><td style=\"text-align:center;\">"+val["pendingDetails"][0].exportCompany+"\
	           </td><td style=\"text-align:center;\">"+val["pendingDetails"][0].importCompany+"</td><td style=\"text-align:center;\">"+val["pendingDetails"][0].name+"</td>\
		       <td style=\"text-align:center;\">"+val["pendingDetails"][0].goodtype+"</td><td style=\"text-align:center;\">"+val["pendingDetails"][0].price+"</td>\
		       <td style=\"text-align:center;\">"+val["pendingDetails"][0].departureDate+"</td><td style=\"text-align:center;\">"+val["pendingDetails"][0].departureTime+"</td>\
			   <td style=\"text-align:center;\">"+val.arrivalDate+"</td><td style=\"text-align:center;\">"+val.arrivalTime+"</td>\
			   <td style=\"text-align:center;\">"+val.taxrate+"</td><td style=\"text-align:center;\">"+val.taxamount+"</td>\
		       <td><i class=\"far fa-edit\" onclick=\"editgood("+i+")\"></i></td> \
	           <td><i class=\"fa fa-trash\" onclick=\"deletegood("+i+")\"></i></td></tr>");
		    });
		    $(".yodata").hide();
			$(".cptable-data").hide();
			$(".iatable-data").hide();
		    $(".catable-data").show();
		   }else{
		        $("#iatable").empty();
		        datas["data"].forEach((val,i)=>{
			    if(val["pendingDetails"][0].barcode.length==0){
			     val["pendingDetails"][0].barcode="-";
			    }
			    $("#iatable").append("<tr id=\"cpgood"+i+"\"><td style=\"text-align:center;\">"+val["pendingDetails"][0].barcode+"</td><td style=\"text-align:center;\">"+val["pendingDetails"][0].name+"</td>\
		         <td style=\"text-align:center;\">"+val["pendingDetails"][0].goodtype+"</td><td style=\"text-align:center;\">"+val["pendingDetails"][0].price+"</td>\
		         <td style=\"text-align:center;\">"+val["pendingDetails"][0].departureDate+"</td><td style=\"text-align:center;\">"+val["pendingDetails"][0].departureTime+"</td>\
			     <td style=\"text-align:center;\">"+val.arrivalDate+"</td><td style=\"text-align:center;\">"+val.arrivalTime+"</td>\
			     <td style=\"text-align:center;\">"+val.taxrate+"</td><td style=\"text-align:center;\">"+val.taxamount+"</td>\
		         <td><i class=\"far fa-edit\" onclick=\"editgood("+i+")\"></i></td> \
	             <td><i class=\"fa fa-trash\" onclick=\"deletegood("+i+")\"></i></td></tr>");
		       });
		       $(".yodata").hide();
			  $(".cptable-data").hide();
			  $(".catable-data").hide();
		      $(".iatable-data").show();
		   }
		}
	 }
   });
});

function editgood(i){
   $("#gform").trigger('reset');
  if($("#goods").val()=="pending"){
    $("#z1").val(gdata[i].barcode);
	$("#z2").val(gdata[i].name);
	$("#z3").val(gdata[i].price);
	$("#z4").val(gdata[i].departureDate);
	$("#z5").val(gdata[i].departureTime);
	$("#z6").val(gdata[i].exportCompany);
	$("#z7").val(gdata[i].importCompany);
	$("#arrived").val("no");
	$.get("/goodtype").then((res)=>{
       let data=$.parseJSON(res);
	   if(data["types"]=="no"){
	      $(".goodst").append("<option id=\"mc\" value=\"\" disabled>No any goods categories found</option>");
	   }else{
		  if($("#mc").length){
			  $("#mc").remove();
		  }
		  if($("#mc1").length){
		     $("#mc1").remove();
		  }
	      data["types"].forEach((val)=>{
		     $(".goodst").append("<option id=\"mc1\" value=\""+val+"\">"+val+"</option>");
		  });
	   }
	   $(".goodst").val(gdata[i].goodtype);
	   x=1;
	   y=i;
	   $("#headis0").text("Edit good below");
	   $("#adds0").text("Edit");
	   $("#newgood").modal('show');
	});
  }else{
    $("#z1").val(gdata[i]["pendingDetails"][0].barcode);
	$("#z2").val(gdata[i]["pendingDetails"][0].name);
	$("#z3").val(gdata[i]["pendingDetails"][0].price);
	$("#z4").val(gdata[i]["pendingDetails"][0].departureDate);
	$("#z5").val(gdata[i]["pendingDetails"][0].departureTime);
	$("#z6").val(gdata[i]["pendingDetails"][0].exportCompany);
	$("#z7").val(gdata[i]["pendingDetails"][0].importCompany);
	$("#arrived").val("yes");
	$.get("/goodtype").then((res)=>{
       let data=$.parseJSON(res);
	   if(data["types"]=="no"){
	      $(".goodst").append("<option id=\"mc\" value=\"\" disabled>No any goods categories found</option>");
	   }else{
		  if($("#mc").length){
			  $("#mc").remove();
		  }
		  if($("#mc1").length){
		     $("#mc1").remove();
		  }
	      data["types"].forEach((val)=>{
		     $(".goodst").append("<option id=\"mc1\" value=\""+val+"\">"+val+"</option>");
		  });
	   }
	   $(".goodst").val(gdata[i]["pendingDetails"][0].goodtype);
	   $("#z10").val(gdata[i].arrivalDate);
	   $("#z11").val(gdata[i].arrivalTime);
	   $(".arr").show();
	   x=1;
	   y=i;
	   $("#headis0").text("Edit good below");
	   $("#adds0").text("Edit");
	   $("#newgood").modal('show');
	});
  }
}

function deletegood(i){
  let json;
  if($("#goods").val()=="pending"){
    json={name:gdata[i].name};
  }else{
    json={name:gdata[i]["pendingDetails"][0].name};
  }
  $.post("/deletegood",json).then((res)=>{
     $("#ee3").text("The selected good has been successfully deleted");
	 $("#nope3").modal('show');
  });
}

function yup(){
  $("#nope3").modal('hide');
  backgood();
  $(".category").submit();
}

function backgood(){
  $(".yodata").show();
  $(".cptable-data").hide();
  $(".catable-data").hide();
  $(".iatable-data").hide();
}

function newgood(){
	$.get("/goodtype").then((res)=>{
       let data=$.parseJSON(res);
	   if(data["types"]=="no"){
	      $(".goodst").append("<option id=\"mc\" value=\"\" disabled>No any goods categories found</option>");
	   }else{
		  if($("#mc").length){
			  $("#mc").remove();
		  }
		  if($("#mc1").length){
		     $("#mc1").remove();
		  }
	      data["types"].forEach((val)=>{
		     $(".goodst").append("<option id=\"mc1\" value=\""+val+"\">"+val+"</option>");
		  });
	   }
	   $("#gform").trigger('reset');
	   $(".arr").hide();
	   x=0;
	   $("#headis0").text("Add New Good");
	   $("#adds0").text("Add");
	   $("#newgood").modal('show');
	});
}

let rh;
$.get("/getit").then((res)=>{
   let data=$.parseJSON(res);
   rh=data["year"];
   $("#target").text("Please set target for month "+data["month"]+" of fiscal year "+data["year"]);
});

$("#sform").submit((e)=>{
   e.preventDefault();
   $.post("/settarget",$("#sform").serialize()).then((res)=>{
      $("#targetit").modal('hide');
	  $("#ee").text("Target has been successfully set");
	  $("#nope").modal('show');
   });
});

function setit(){
   $("#targetit").modal('show');
}

function edituser(){
   $.get("/allinfo").then((res)=>{
      let data=$.parseJSON(res);
	  $("#o1").val(data["data"]["name"]);
	  $("#o2").val(data["data"]["license"]);
	  $("#o3").val(data["data"]["officeName"]);
	  $("#o4").val(data["data"]["email"]);
	  $("#o5").val(data["data"]["username"]);
	  $("#o7").val(data["data"]["post"]);
	  $("#edituser").modal('show');
   });
}

function reporttable(){
  if($("#an").val().length!=0){
   $.post("/reportdata",{year:$("#an").val()}).then((res)=>{
     let data=$.parseJSON(res);
	 if(data["data"]=="no"){
	   $("#ee").text("No data found for tabular analysis");
	   $("#nope").modal('show');
	 }else if(data["target"]=="no"){
	   $("#ee").text("Please set at least one fiscal year (month) target amount to view report");
	   $("#nope").modal('show');
	 }else{
	    $("#rtable").empty();
		data["dmonths"].forEach((val,i)=>{
		  let tamt,gap;
		  if(val==data["tmonths"][i]){
		     tamt=data["tamt"][i];
			 gap=data["itax"][i]+data["ctax"][i]-data["tamt"][i];
		  }else{
		    tamt="-";
			gap="-";
		  }
		  $("#rtable").append("<tr id=\"report"+i+"\"><td style=\"text-align:center;\">"+val+"-"+rh+"</td><td style=\"text-align:center;\">"+data["itax"][i]+"</td>\
		  <td style=\"text-align:center;\">"+data["ctax"][i]+"</td><td style=\"text-align:center;\">"+(data["itax"][i]+data["ctax"][i])+"</td>\
		  <td style=\"text-align:center;\">"+tamt+"</td><td style=\"text-align:center;\">"+gap+"</td></tr>");
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
   $(".rtable-data").hide();
   $("#plotly_div").hide();
   $(".reporta").show();
}

function graph(){
if($("#an").val().length!=0){
 $.post("/taxes",{year:$("#an").val()}).then((res)=>{
  let data=$.parseJSON(res);
  if(data["data"]=="no"){
    $("#ee").text("No data found for graphical analysis");
	$("#nope").modal('show');
  }else{
	let d=$.parseJSON(res);
    let d3 = Plotly.d3;
    let img_jpg= d3.select('#graph');
    let trace={x:d["dates"],y:d["itax"],name:"Individual tax",type:"bar"};
    let trace1={x:d["dates"],y:d["ctax"],name:"Corporate tax",type:"bar"};
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

$('#arrived').on('change', function() {
    let soption = $( "#arrived option:selected" ).text();
    if(soption=="Yes"){
	  $(".arr").show();  
	}else{
	   $(".arr").hide();
	}
});

$("#gform").submit((e)=>{
  let fdata=$("#gform").serialize();
  e.preventDefault();
  if(x==1){
     if($("#goods").val()=="pending"){
	   fdata+="&oldones="+gdata[y].name;
	 }else{
		fdata+="&oldones="+gdata[y]["pendingDetails"][0].name;
	 }
  }
  $.post("/newgood",fdata).then((res)=>{
     let data=$.parseJSON(res);
	 if(data.status=="done"){
	   $("#newgood").modal('hide');
	   if(x==1){
		 $("#ee3").text("Good has been successfully edited");
	     $("#nope3").modal('show');
	   }else{
	     $("#ee").text("Good has been successfully added");
	     $("#nope").modal('show');
	   }
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