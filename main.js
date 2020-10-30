	function myFunction()
		{
		    event.preventDefault();
			
			var IsValid =true;
			
			if(IsValid)
			{
			    if($("#name").val() == ''){
				IsValid = false;
				$("#name").css("border","1px solid red");	
			     }
			    else{
				$("#name").css("border","1px solid #ccc");
				}
				
				 if($("#contactNum").val() == ''){
				IsValid = false;
				$("#contactNum").css("border","1px solid red");	
			    }
			    else{
				$("#contactNum").css("border","1px solid #ccc");
				}
				
			    if($("#emailId").val() == ''){
				IsValid = false;
				$("#emailId").css("border","1px solid red");	
			    }
			    else{
				$("#emailId").css("border","1px solid #ccc");
				}
			   
				if($("#lastName").val() == ''){
				IsValid = false;
				$("#lastName").css("border","1px solid red");	
			    }
			    else{
				$("#lastName").css("border","1px solid #ccc");
				}
				
				var IsValid= true;
				if(IsValid){
				$('#LoadStatus').show();
					var form = $('#myForm')[0];
					
					var htmlRequestStatus="";
					var objEnquiry = {
						
					Name : $("#name").val(),
					LastName : $("#lastName").val(),
					Email : $("#email").val(),
					Contactinfo :$("#contactNum").val()	
				};
					ajax({
						type: "POST",
						enctype:'multipart/form-data',
						contentType:"application/json; charset=utf-8",
						url:"index_process.php",
						data: JSON.stringify(objEnquiry),
						dataType: "json",
						
					success: function (response){
					  consol.log(response);
					if(response.indexOf("Error")!= -1){
						htmlRequestStatus ="<div class='status alert alert-danger' style='margin:0'>Error: Please try again </div>";
						$("#RequestStatus").html(htmlRequestStatus);
						$("#RequestStatus").show();
					    Alert("error");
						}
					else if( response == "Success"){
						
						htmlRequestStatus ="<div class='status alert alert-info' style='margin:0'>Info:Your Details has been Submitted.</div>";
						$("#RequestStatus").html(htmlRequestStatus);
						$("#RequestStatus").show();
					    Alert("Success");						
						}
				         else {
						 htmlRequestStatus = "<div class='status alert alert-danger' style='margin:0'>" + response + "</div>";
					     $("#RequestStatus").html(htmlRequestStatus);
						 $("#RequestStatus").show();
					
					}
						$('#LoadStatus').hide();
						$("#submit").prop("disabled",false);
					},
					error: function(result){
						
						var htmlRequestStatus="<div class='status alert alert-danger'>Please try again</div>";
						 $("#RequestStatus").html(htmlRequestStatus);
						 $("#RequestStatus").show();
						 $("#submit").prop("disabled",false);
						 $("#LoadStatus").show();
					}
						});
					     }					
					
				   $('#LoadStatus').hide();
			}
        }