
		jQuery(document).ready(function($) {
			$("#ifsc_box").click(function() {
				$("#employee_details").css("display","none");
			});


			
			$(".btn").click(function() {
				var value1 = $(".ifsc_class").val();
				console.log(value1);
				$.ajax({
					url: 'https://cors-anywhere.herokuapp.com/https://ifsc.razorpay.com/'+value1,
					// url: 'https://ifsc.razorpay.com/SBIN0000021',
					// url: 'http://ip-api.com/json',
					type: 'GET',
					dataType: 'JSON',
					// data: 'value1',
					success: function(result){
						console.log(result);
						$("#employee_details").css("display","block");
						$('#name').text(result.BRANCH);
						$('#district').text(result.DISTRICT);
						$('#state').text(result.STATE);
						$('#address').text(result.ADDRESS);
						$('#contact').text(result.CONTACT);
						$('#city').text(result.CITY);
						$('#micr').text(result.MICR);
						$('#bank').text(result.BANK);
						$('#ifsc').text(result.IFSC);
					}
				})
				.done(function() {
					console.log("success");
				})
				.fail(function() {
					console.log("error");
				})
				.always(function() {
					console.log("complete");
					$(".ifsc_class").val('')
				});
				
			});
		});
