function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function copy()
{
	if(cbaddress.checked==true)
	{
		document.getElementById('txtAreaPerAddress').value=document.getElementById('txtAreaResAddress').value;
	}
}

$(document).ready(function()
{
	$("#send-mail").click(function()
	{
        let inpFullName = $("#txtFullName").val().trim();
        let inpResAddress = $("#txtAreaResAddress").val().trim();
        let inpPerAddress = $("#txtAreaPerAddress").val().trim();
        let inpBirthDate = $("#dtBirthDate").val().trim();
        let inpGender = $("#rdGender").val().trim();
        let inpNationality = $("#txtNationality").val().trim();
        let inpState = $("#txtState").val().trim();
        let inpReligion = $("#txtReligion").val().trim();
		let inpCaste = $("#txtCaste").val().trim();
		let inpFatherName = $("#txtFatherName").val().trim();
		let inpMotherName = $("#txtMotherName").val().trim();
        let inpResNumber = $("#txtResNumber").val().trim();
        let inpOffNumber = $("#txtOffNumber").val().trim();
        let inpEmail = $("#txtEmail").val().trim();
        let inpMobileNo = $("#txtMobileNo").val().trim();
        let inpFinResources = $("#txtFinResources").val().trim();
        let inpRelationWith = $("#txtRelationWith").val().trim();
        let inpMonthlyInc = $("#txtMonthlyInc").val().trim();
        let inpDesignation = $("#txtDesignation").val().trim();
        let inpDependent = $("#txtDependent").val().trim();
        let inpEarningMember = $("#txtEarningMember").val().trim();
        let inpclass = $("#ddlclass").val().trim();
        let inpCertificate = $("#rdCertificate").val().trim();
        let inpAadharStudent = $("#txtAadharStudent").val().trim();
        let inpAadharFather = $("#txtAadharFather").val().trim();
        let inpAadharMother = $("#txtAadharMother").val().trim();
        let inpSub1 = $("#txtSub1").val().trim();
        let inpSub2 = $("#txtSub2").val().trim();
        let inpSub3 = $("#txtSub3").val().trim();
        let inpSub4 = $("#txtSub4").val().trim();
        let inpSub5 = $("#txtSub5").val().trim();
        let inpSub6 = $("#txtSub6").val().trim();
		let inpBloodGroup = $("#txtBloodGroup").val().trim();
		
		
		// Validations.
		if (inpFullName == "")
		{
			$("#txtFullName").focus();
			return false;
		}

		if (inpEmail == "")
		{
			$("txtEmail").focus();
			return false;
		}

		if (inpMobileNo == "" || inpMobileNo.length != 10) 
		{
			$("#txtMobileNo").focus();
			alert("Invalid Mobile Number");
			return false;
		}

		if (inpSub2 == "") 
		{
			$("#txtSub2").focus();
			return false;
        }
        
        if (inpSub3 == "") 
		{
			$("#txtSub3").focus();
			return false;
        }

        if (inpSub4 == "") 
		{
			$("#txtSub4").focus();
			return false;
        }

        if (inpSub5 == "") 
		{
			$("#txtSub5").focus();
			return false;
        }

        if (inpSub6 == "") 
		{
			$("#txtSub6").focus();
			return false;
        }

		let newContact = 
		{
			prefix: "kps_saltlake",
			schoolName: "Kalyani Public School, Salt Lake",
			sendEmailTo: "principal.kpssaltlake@gmail.com,cnabamita9@gmail.com", // This is the email id of the person to whom the enquiry should be sent.
			
			// sendEmailTo: "pauldeep99@gmail.com,debdeeppaul.vawsum@gmail.com",
			// sendEmailTo: "debdeeppaul.vawsum@gmail.com",
			
			details: 
			[
				{
					name: "FULL NAME",
					value: inpFullName
				},
				{
					name: "RESIDENT ADDRESS",
					value: inpResAddress
				},
				{
					name: "PERMANENT ADDRESS",
					value: inpPerAddress
				},
				{
					name: "DATE OF BIRTH",
					value: inpBirthDate
				},
				{
					name: "GENDER",
					value: inpGender
				},
				{
					name: "NATIONALITY",
					value: inpNationality
				},
				{
					name: "STATE",
					value: inpState
				},
				{
					name: "RELIGION",
					value: inpReligion
				},
				{
					name: "CASTE",
					value: inpCaste
				},
				{
					name: "FATHER NAME",
					value: inpFatherName
				},
				{
					name: "MOTHER NAME",
					value: inpMotherName
				},
				{
					name: "PHONE (Father's/Guardian's): RESIDENCE",
					value: inpResNumber
				},
				{
					name: "PHONE (Father's/Guardian's): OFFICE",
					value: inpOffNumber
				},
				{
					name: "EMAIL ID",
					value: inpEmail
				},
				{
					name: "MOBILE NUMBER",
					value: inpMobileNo
				},
				{
					name: "FINANCIAL RESOURCES OF PARENT'S/GUARDIAN'S",
					value: inpFinResources
				},
				{
					name: "RELATION WITH GUARDIAN",
					value: inpRelationWith
				},
				{
					name: "MONTHLY INCOME",
					value: inpMonthlyInc
				},
				{
					name: "DESIGNATION",
					value: inpDesignation
				},
				{
					name: "NO. OF DEPENDENTS ON THE GUARDIAN",
					value: inpDependent
				},
				{
					name: "NO. OF EARNING MEMBERS IN THE FAMILY",
					value: inpEarningMember
				},
				{
					name: "ADMISSION FOR CLASS",
					value: inpclass
				},
				{
					name: "MEDICAL IMMUNISATION CERTIFICATE",
					value: inpCertificate
				},
				{
					name: "AADHAR CARD NO. (STUDENT)",
					value: inpAadharStudent
				},
				{
					name: "AADHAR CARD NO. (FATHER)",
					value: inpAadharFather
				},
				{
					name: "AADHAR CARD NO. (MOTHER)",
					value: inpAadharMother
				},
				{
					name: "SUBJECT 1",
					value: inpSub1
				},
				{
					name: "SUBJECT 2",
					value: inpSub2
				},
				{
					name: "SUBJECT 3",
					value: inpSub3
				},
				{
					name: "SUBJECT 4",
					value: inpSub4
				},
				{
					name: "SUBJECT 5",
					value: inpSub5
				},
				{
					name: "SUBJECT 6",
					value: inpSub6
				},
				{
					name: "BLOOD GROUP",
					value: inpBloodGroup
				}
			]
		};

		$.ajax({
			// url: "http://cakephp:8080/Websites/sendContactEnquiry",
			url: "https://institution.vawsum.com/Websites/sendContactEnquiry",
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
				// Please save this Id: " + res.responseObject.contactId)
				window.location.reload();
			}
			else
			{
				alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
			}
		});
	});

	
	
});