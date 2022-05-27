
$(document).ready(function () {

    $("#mainContainer").hide();
    setDatatableView();
});


function checkLogin() {
    let password = $("#password").val();

    if (password == "321Kps.Saltlake") {
        $("#loginCard").hide();
        $("#mainContainer").show();
        $("#tableContainer").show();

    }
    else {
        alert("Check your password");
    }
}

async function setDatatableView() {
    // url = "https://institution.vawsum.com/TempForms/getUserDataAngelGroup";
    url = "https://institution.vawsum.com/TempForms/getUserDataAngelGroup";


    var param = {prefix: "kps_saltlake"};

    // let response = await promisingAjaxCall(url, "POST", dataString, "application/JSON");
    $.ajax
        ({
            url: url,
            type: "POST",
            data: JSON.stringify(param),
            contentType: "application/json",
            // prefix: "kps_saltlake"
        })
        .done(function (res) {
            var response = JSON.parse(res);

            if (response.isOk == true) {
                var dataTableContent = new Array();

                var studentData = response.responseObject;

                localStorage.setItem("studentData", JSON.stringify(studentData));
                studentData.forEach((data, index) => {
                    var temp = new Array();

                    let paramObject = {
                        "formId": data["id"],
                    };
                    let encodedParamObject = btoa(JSON.stringify(paramObject));

                    index++;

                    //student
                    temp.push(index);
                    temp.push(data["name"]);
                    temp.push(data["resident_address"]);
                    temp.push(data["permanent_address"]);
                    temp.push(data["date_of_birth"]);
                    temp.push(data["gender"]);
                    temp.push(data["nationality"]);
                    temp.push(data["state"]);
                    temp.push(data["religion"]);
                    temp.push(data["caste"]);

                    

                    //parents
                    temp.push(data["father_name"]);
                    temp.push(data["mother_name"]);
                    temp.push(data["phone_residence"]);
                    temp.push(data["phn_office"]);
                    temp.push(data["email_id"]);
                    temp.push(data["mobile_no"]);
                    temp.push(data["financial_resources"]);
                    temp.push(data["relation_with_guardian"]);
                    temp.push(data["monthly_income"]);
                    temp.push(data["designation"]);
                    temp.push(data["no_of_dependants"]);
                    temp.push(data["no_of_earning_members"]);
                    temp.push(data["admission_for_class"]);
                    temp.push(data["medical_immunisation_certificate"]);
                    temp.push(data["student_aadhar_no"]);
                    temp.push(data["father_aadhar_no"]);
                    temp.push(data["mother_aadhar_no"]);

                    //subjects
                    temp.push(data["subject_1"]);
                    temp.push(data["subject_2"]);
                    temp.push(data["subject_3"]);
                    temp.push(data["subject_4"]);
                    temp.push(data["subject_5"]);
                    temp.push(data["subject_6"]);
                    temp.push(data["bloodgroup"]);


                    temp.push(("hello") ? `<a href="https://web.vawsum.com/forms/admission/781196/email.html?=${encodedParamObject}" style="color: blue!important">Click Me..</a>` : "Not Uploaded");

                    dataTableContent.push(temp);
                });
                $("#tableContainer").DataTable
                    ({
                        destroy: true,
                        dom: "Bfrtip",
                        "columns": [
                            { "title": "ID" },
                            { "title": "Name" },
                            { "title": "Permanent Address" },
                            { "title": "Resident Address" },
                            { "title": "Date of Birth" },
                            { "title": "Gender" },
                            { "title": "Nationality" },
                            { "title": "State" },
                            { "title": "Religion" },
                            { "title": "Caste" },
                            { "title": "Father's Name" },
                            { "title": "Mother's Name" },
                            { "title": "Residence Phone" },
                            { "title": "Office Phone" },
                            { "title": "E-mail" },
                            { "title": "Mobile Number" },
                            { "title": "Financial Resources Of Parent/Guardian" },
                            { "title": "Relation With Guardian" },
                            { "title": "Monthly Income" },
                            { "title": "Designation" },
                            { "title": "No. Of Dependents On Guardian" },
                            { "title": "No. Of Earning Members In The Family" },
                            { "title": "Admission For Class" },
                            { "title": "Medical Immunisation Certificate" },
                            { "title": "Student's Aadhar Card No." },
                            { "title": "Father's Aadhar Card No." },
                            { "title": "Mother's Aadhar Card No." },
                            { "title": "Subject 1" },
                            { "title": "Subject 2" },
                            { "title": "Subject 3" },
                            { "title": "Subject 4" },
                            { "title": "Subject 5" },
                            { "title": "Subject 6" },
                            { "title": "Blood Group" },
                        ],

                        buttons: [
                            {
                                extend: "excelHtml5",
                                text: '<i class="fa fa-file-excel-o"></i>',
                                titleAttr: "Excel"
                            },
                            "colvis"
                        ],
                        pageLength: 500,
                        data: dataTableContent,
                    });
            }
            else 
            {
                alert("we are facing some difficulties. Please try again after sometime!");
            }
        });
}

async function promisingAjaxCall(url, type, dataString, contentType) {
    var promise = new Promise((resolve, reject) => {
        $.ajax(
            {
                url: url,
                type: type,
                data: dataString,
                contentType: contentType,

                success: function (data) {
                    resolve(data);
                },
                error: function (jqXHR, textStatus, ex) {
                    reject(jqXHR, textStatus, ex);
                }
            });
    });

    return promise;
}

// function downloadPDF(index)
// {
//     var data = JSON.parse(localStorage.getItem("studentData"));

//     var science = data[index]["science_elective_1"];

//     var doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text("Personal Information : ", 15, 15);

//     doc.setFontSize(14);

//     if(science != "" && science != undefined)
//     {
//         var elementHTML = 
//         `



//             Name : ${data[index]["first_name"]}
//             Present Adress : ${data[index]["present_address"]}
//             Permanent Adress : ${data[index]["permanent_address"]}
//             Father's Name : ${data[index]["father_name"]}
//             Father's Occupation : ${data[index]["father_occupation"]}
//             Father's Phone : ${data[index]["father_phone"]}
//             Mother's Name : ${data[index]["mother_name"]}
//             Mother's Occupation : ${data[index]["mother_occupation"]}
//             Mother's Phone : ${data[index]["mother_phone"]}
//             Local Guardian's Name ( If Any) : ${data[index]["lg_name"]}
//             Local Guardian's Occupation : ${data[index]["lg_occupation"]}
//             Local Guardian's Phone : ${data[index]["lg_phone"]}
//             Date Of Birth : ${data[index]["dob"]}
//             Religion : ${data[index]["religion"]}
//             Tribe / Community : ${data[index]["community"]}
//             Caste : ${data[index]["caste"]}
//             Gender : ${data[index]["gender"]}
//             Last Institute Name : ${data[index]["last_institute_name"]}
//             Email Id : ${data[index]["email"]}
//             WhatsApp Number : ${data[index]["whatsapp"]}
//         `;

//         doc.text(elementHTML, 10, 5);

//         doc.addPage();

//         doc.setFontSize(16);
//         doc.text("Last Examination Information : ", 15, 15);

//         doc.setFontSize(14);

//         elementHTML = 
//         `


//             Examination Name : ${data[index]["examination_1"]}
//             Board : ${data[index]["board_1"]}
//             Year : ${data[index]["year_1"]}
//             Division : ${data[index]["div_1"]}

//             Subject Combination Details : ( Science )

//             Elective 1 : ${data[index]["science_elective_1"]}
//             Elective 2 : ${data[index]["science_elective_2"]}
//             Optional : ${data[index]["science_optional_1"]}


//             Note

//             Criteria For Admission:

//             1. Free Studentship for HSLC Rank Holder.
//             2. 60% marks to be obtained in MATHS and SCIENCE seperately,
//             year of passing HSLC is 2020.
//             3. 5 marks relaxation for female candidates.
//             4. The H.S.L.C pass Marksheet and Admit card (1 copy each).

//             Selected students are to submit the following at the School Office:

//             1. 2 (two) copies of passport size photograph.
//             2. Attested copy of H.S.L.C pass Marksheet and Admit card (1 copy each).
//             3. A Character Certificate from the last school attended.
//             4. Pupil Cumulative Record Book.
//             5. Orignal Migration Certificate 
//             (Only for the students who passed class 10 from other board other than N.B.S.E).
//             6. 1 (one) copy Caste Certificate.
//         `;

//         doc.text(elementHTML, 10, 5);
//     }
//     else
//     {
//         var elementHTML = 
//         `



//             Name : ${data[index]["first_name"]}

//             Present Adress : ${data[index]["present_address"]}

//             Permanent Adress : ${data[index]["permanent_address"]}

//             Father's Name : ${data[index]["father_name"]}

//             Father's Occupation : ${data[index]["father_occupation"]}

//             Father's Phone : ${data[index]["father_phone"]}

//             Mother's Name : ${data[index]["mother_name"]}

//             Mother's Occupation : ${data[index]["mother_occupation"]}

//             Mother's Phone : ${data[index]["mother_phone"]}

//             Local Guardian's Name ( If Any) : ${data[index]["lg_name"]}

//             Local Guardian's Occupation : ${data[index]["lg_occupation"]}

//             Local Guardian's Phone : ${data[index]["lg_phone"]}

//             Date Of Birth : ${data[index]["dob"]}

//             Religion : ${data[index]["religion"]}

//             Tribe / Community : ${data[index]["community"]}

//             Caste : ${data[index]["caste"]}

//             Gender : ${data[index]["gender"]}

//             Last Institute Name : ${data[index]["last_institute_name"]}

//             Email Id : ${data[index]["email"]}

//             WhatsApp Number : ${data[index]["whatsapp"]}
//         `;

//         doc.text(elementHTML, 10, 5);

//         doc.addPage();

//         doc.setFontSize(16);
//         doc.text("Last Examination Information : ", 15, 15);

//         doc.setFontSize(14);

//         elementHTML = 
//         `


//             Examination Name : ${data[index]["examination_1"]}
//             Board : ${data[index]["board_1"]}
//             Year : ${data[index]["year_1"]}
//             Division : ${data[index]["div_1"]}

//             Subject Combination Details : ( Commerce )

//             Elective : ${data[index]["commerce_elective_1"]}
//             Optional 1 : ${data[index]["commerce_optional_1"]}
//             Optional 2 : ${data[index]["commerce_optional_2"]}


//             Note

//             Criteria For Admission:

//             1. Free Studentship for HSLC Rank Holder.
//             2. 55% marks to be obtained in MATHS and SCIENCE seperately,
//             year of passing HSLC is 2020.
//             3. 5 marks relaxation for female candidates.
//             4. The H.S.L.C pass Marksheet and Admit card (1 copy each).

//             Selected students are to submit the following at the School Office:

//             1. 2 (two) copies of passport size photograph.
//             2. Attested copy of H.S.L.C pass Marksheet and Admit card (1 copy each).
//             3. A Character Certificate from the last school attended.
//             4. Pupil Cumulative Record Book.
//             5. Orignal Migration Certificate
//             (Only for the students who passed class 10 from other board other than N.B.S.E).
//             6. 1 (one) copy Caste Certificate.
//         `;

//         doc.text(elementHTML, 10, 5);
//     }

//     doc.save(`${data[index]["first_name"]}.pdf`);
// }