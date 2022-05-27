$("#btnSendForm").click(function()
{
	let formName = "Appointment";
	let formDesc = "Urgent! Someone has enquired about an appointment. Please find the details below.";
	let txtAppointmentWith = $("#txtAppointmentWith").val().trim();
	let txtMobileNo = $("#txtContactNo").val().trim();
	let emailEmailId = $("#emailEmailId").val().trim();
	let txtAppointmentDate = $("#txtAppointmentDate").val().trim();
	let textareaPurpose = $("#textareaPurpose").val().trim();

	// Validations.
	if(txtAppointmentWith == "")
	{
		$("#txtAppointmentWith").focus();
		return false;
	}

	if (txtMobileNo == "" || txtMobileNo.length != 10)
	{
		$("#txtContactNo").focus();
		return false;
	}

	if (emailEmailId == "") 
	{
		$("#emailEmailId").focus();
		return false;
	}

	if (txtAppointmentDate == "") 
	{
		$("#txtAppointmentDate").focus();
		return false;
	}

	if (textareaPurpose == "") 
	{
		$("#textareaPurpose").focus();
		return false;
	}

	let newUser = 
	{
		prefix: "kps_saltlake",
		schoolName: "Kalyani Public School, Salt Lake",
		formName: formName,
		formDesc: formDesc, 
		sendEmailTo: "principal.kpssaltlake@gmail.com,cnabamita9@gmail.com", // This is the email id of the person to whom the enquiry should be sent.
		// sendEmailTo: "debdeeppaul.vawsum@gmail.com", /* Demo check */
		details: 
		[
			{
				name: "Appointment With",
				value: txtAppointmentWith
			},
			{
				name: "Email",
				value: emailEmailId
			},
			{
				name: "Mobile",
				value: txtMobileNo
			},
			{
				name: "Appointment Date",
				value: txtAppointmentDate
			},
			{
				name: "Purpose",
				value: textareaPurpose
			}
		]
	};

	$.ajax
	({
		//url: "http://stage.vawsum.co.in/Websites/sendEmailOnAdmission",
		url: "https://institution.vawsum.com/Websites/sendEmailOnAdmission",
		type: "POST",
		data: JSON.stringify(newUser),
		contentType: "application/json"
	})
	.done(function (response) 
	{
		var res = JSON.parse(response);

		if (res.isOk == true)
		{
			alert("Your form has been saved. Please save this Id: " + res.responseObject.formId);
			window.location.reload();	
		}
		else
		{
			alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
		}
	});
});