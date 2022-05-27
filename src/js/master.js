var formClass = "";
var formEmail = "";
var formFullName = "";
var formNo = "";
var firstName = "";
var lastName = "";
var datePicKer = "";
var classDetails = "";
var presentSchool = "";
var city = "";
var description = "";

function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

// <!--Start of Tawk.to Script-->

// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () 
// {
// 	var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
// 	s1.async = true;
// 	s1.src = 'https://embed.tawk.to/60b893d76699c7280daa763f/1f78g315r';
// 	s1.charset = 'UTF-8';
// 	s1.setAttribute('crossorigin', '*');
// 	s0.parentNode.insertBefore(s1, s0);
// })();

// <!--End of Tawk.to Script-->


$(document).ready(function () 
{
	// new wow().init();
	new WOW().init();
	$("#txtFullName").on('change', function (e) 
	{
		formFullName = e.target.value;
	})
	$("#txtPhoneNo").on('change', function (e) 
	{
		formNo = e.target.value;
	})
	$("#emailEmailId").on('change', function (e) 
	{
		formEmail = e.target.value;
	})
	$("#selectClass").on('change', function (e) 
	{
		formClass = e.target.value;
	})
	$("#emailSubscribeEmail").on('change', function (e) 
	{
        subscribeEmail = e.target.value;
    })

	$('#btnDownloadForm').on('click', function () 
	{
		if (formEmail && formFullName && formNo) 
		{
			alert("YOU WILL BE CONTACTED SOON !");
			$("#admissionEnquiryFormModal").modal('hide');
			let newContact =
			{
				// fullName: inpFullName,
				// email: inpEmail,
				// phone: inpMobile,
				// subject: inpSubj,
				// message: inpMessage,
				//schoolId: 260349,
				prefix: "kps-saltlake",
				schoolName: "Kalyani Public School, Salt Lake",
				sendEmailTo: "principal.kpssaltlake@gmail.com,cnabamita9@gmail.com",// This is the email id of the person to whom the enquiry should be sent.
				//sendEmailTo: "amit.trakkerz@gmail.com",//"chaitanyacollege2008@gmail.com" // This is the email id of the person to whom the enquiry should be sent.
				// sendEmailTo: "principal.kpssaltlake@gmai.com,", // This is the email id of the person to whom the enquiry should be sent.
				// sendEmailTo: "kpublicschool@gmail.com", // This is the email id of the person to whom the enquiry should be sent.

				details:
					[
						{
							name: "Full Name",
							value: formFullName
						},
						{
							name: "Email Id",
							value: formEmail
						},
						{
							name: "Mobile No",
							value: formNo
						},

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
				.done(function (response) {
					var res = JSON.parse(response);

					if (res.isOk == true) {
						window.location.reload();
					}
					else {
						alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
					}
				});
		}
		else 
		{
			alert("please fill all the information");
		}

	});

	$('#subscribeButton').on('click', function () 
	{

        if (subscribeEmail) 
		{
            alert("YOU HAVE SUBSCRIBED FOR NEWSLETTER !");
            let newContact =
            {
                // fullName: inpFullName,
                // email: inpEmail,
                // phone: inpMobile,
                // subject: inpSubj,
                // message: inpMessage,
                //schoolId: 260349,
				prefix: "kps-saltlake",
				schoolName: "Kalyani Public School, Salt Lake",
				sendEmailTo: "principal.kpssaltlake@gmail.com,cnabamita9@gmail.com",// This is the email id of the person to whom the enquiry should be sent.

                details:
                    [
                        {
                            name: "Email",
                            value: subscribeEmail
                        },
                        {
                            name: "Reason",
                            value: "SUBSCRIBED FOR NEWS LETTER"
                        },

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
                .done(function (response) {
                    var res = JSON.parse(response);
                    //console.log(res);
                    // console.log(res.responseObject.contactId);

                    if (res.isOk == true) {
                        window.location.reload();
                    }
                    else {
                        alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
                    }
                });
        }
        else 
		{
            alert("PLEASE ENTER YOUR EMAIL");
        }

    });

	$("#txtFirstName").on('change', function (e) 
	{
		firstName = e.target.value;
	});
	$("#txtLastName").on('change', function (e) 
	{
		lastName = e.target.value;
	});
	$("#txtFatherName").on('change', function (e) 
	{
		fatherName = e.target.value;
	});
	$("#datePickerDOB").on('change', function (e) 
	{
		datePicKer = e.target.value;
	});
	$("#ddlAdmissionForClass").on('change', function (e) 
	{
		classDetails = e.target.value;
	});
	$("#txtPresentSchool").on('change', function (e) 
	{
		presentSchool = e.target.value;
	});
	$("#txtCity").on('change', function (e) 
	{
		city = e.target.value;
	});
	$("#textareaDescription").on('change', function (e) 
	{
		description = e.target.value;
	});
	$('#send-admission-enquiry').on('click', function () 
	{
		if (lastName && firstName && fatherName && datePicKer && presentSchool && city && description) 
		{
			alert("YOU WILL BE CONTACTED SOON !");
			let newContact =
			{
				// fullName: inpFullName,
				// email: inpEmail,
				// phone: inpMobile,
				// subject: inpSubj,
				// message: inpMessage,
				//schoolId: 260349,
				prefix: "kps-saltlake",
				schoolName: "Kalyani Public School, Salt Lake",
				sendEmailTo: "principal.kpssaltlake@gmail.com,cnabamita9@gmail.com",// This is the email id of the person to whom the enquiry should be sent.
				//sendEmailTo: "amit.trakkerz@gmail.com",//"chaitanyacollege2008@gmail.com" // This is the email id of the person to whom the enquiry should be sent.
				// sendEmailTo: "principal.kpssaltlake@gmai.com", // This is the email id of the person to whom the enquiry should be sent.
				// sendEmailTo: "kpublicschool@gmail.com", // This is the email id of the person to whom the enquiry should be sent.

				details:
					[
						{
							name: "First Name",
							value: firstName
						},
						{
							name: "Last Name",
							value: lastName
						},
						{
							name: "Father Name",
							value: fatherName
						},
						{
							name: "Date Of Birth",
							value: datePicKer
						},
						{
							name: "Present School",
							value: presentSchool
						},
						{
							name: "City",
							value: city
						},
						{
							name: "Description",
							value: description
						},
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
						window.location.reload();

					}
					else {
						alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
					}
				});
		}
		else 
		{
			alert("please fill all the information");
		}

	});

	$("#advModal").modal({
		show: true,
		keyboard: false,
		backdrop: 'static'
	});
	
});

$(function () 
{
	$('[data-toggle="tooltip"]').tooltip()
});

$('.multi-level-dropdown .dropdown > a').on("mouseenter", function (event) 
{
	$('.multi-level-dropdown .dropdown-menu').addClass('show');
	event.stopPropagation();
});

$('.multi-level-dropdown .dropdown-submenu > a').on("mouseenter", function (event) 
{
	$('.multi-level-dropdown .dropdown-submenu .dropdown-menu').removeClass('show');
	$(this).next('.dropdown-menu').addClass('show');
	event.stopPropagation();
});

$('.multi-level-dropdown .dropdown').on("mouseleave", function () 
{
	$('.multi-level-dropdown .dropdown-menu.show').removeClass('show');
});

$('.multi-level-dropdown .dropdown-menu').on("mouseleave", function () 
{
	$('.multi-level-dropdown .dropdown-menu.show').removeClass('show');
});

$('.dropdown-menu .dropdown-submenu').on("mouseleave", function () 
{
	$('.dropdown-submenu .dropdown-menu.show').removeClass('show');
});

$(document).find("#admissionEnquiryFormModal").modal('hide');
$(document).find("#admissionEnquiryFormModalShow").modal('show');
$(document).find(".display").css('display', 'none');

$(document).find(".mdb-select").materialSelect();

$('.datepicker').pickadate();

$('.file-upload').file_upload();