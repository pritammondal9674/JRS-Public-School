$(document).ready(function()
{
	$("#send-mail").click(function()
	{
		let inpFullName = $("#form-contact-name").val().trim();
		let inpEmail = $("#form-contact-email").val().trim();
		let inpMobile = $("#form-contact-phone").val().trim();
		let inpSubj = $("#form-contact-subject").val().trim();
		let inpMessage = $("#form-contact-message").val().trim();

		// Validations.
		if (inpFullName == "")
		{
			$("#form-contact-name").focus();
			return false;
		}

		if (inpEmail == "")
		{
			$("#form-contact-email").focus();
			return false;
		}

		if (inpMobile == "" || inpMobile.length != 10) 
		{
			$("#form-contact-phone").focus();
			alert("Invalid Mobile Number");
			return false;
		}

		if (inpSubj == "") 
		{
			$("#form-contact-subject").focus();
			return false;
		}

		if (inpMessage == "") 
		{
			$("#form-contact-message").focus();
			return false;
		}

		let newContact = 
		{
			// fullName: inpFullName,
			// email: inpEmail,
			// phone: inpMobile,
			// subject: inpSubj,
			// message: inpMessage,
			//schoolId: 260349,
			prefix: "mis-sl",
			schoolName: "Mother International School, saltlake",
			//sendEmailTo: "amit.trakkerz@gmail.com",//"chaitanyacollege2008@gmail.com" // This is the email id of the person to whom the enquiry should be sent.
			sendEmailTo: "principal.kpssaltlake@gmail.com,cnabamita9@gmail.com", // This is the email id of the person to whom the enquiry should be sent.
			// sendEmailTo: "kpublicschool@gmail.com", // This is the email id of the person to whom the enquiry should be sent.
			details: 
			[
				{
					name: "Full Name",
					value: inpFullName
				},
				{
					name: "Email Id",
					value: inpEmail
				},
				{
					name: "Mobile No",
					value: inpMobile
				},
				{
					name: "Subject title",
					value: inpSubj
				},
				{
					name: "Message",
					value: inpMessage
				}
			]
		};

		$.ajax
		({
			//url: "http://stage.vawsum.co.in/Websites/sendContactEnquiry",
			url: "https://institution.vawsum.com/Websites/sendContactEnquiry",//"http://stage.vawsum.co.in/Websites/sendContactEnquiry",
			type: "POST",
			data: JSON.stringify(newContact),
			contentType: "application/json"
		})
		.done(function (response) 
		{
			var res = JSON.parse(response);

			if (res.isOk == true)
			{
				alert("Your form has been sent");
				// Please save this Id: " + res.responseObject.contactId
				window.location.reload();
			}
			else
			{
				alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
			}
		});
	});
});