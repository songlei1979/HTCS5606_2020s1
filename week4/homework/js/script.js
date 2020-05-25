$(document).ready(function () {
    getPeople();

    $("#addBtn").click(function () {
        name1 = $("#name").val();
        email = $("#email").val();
        msg = $("#msg").val();
        addPersion(name1, email, msg);
    })
});

function getPeople() {
    $.ajax({
        type: 'GET', //post
        url: 'https://djangorestframestudy.herokuapp.com/api/leads/',
        dataType: "JSON", // data type expected from server
        success: function (data) {
            i = 0; //set counter i
            while (i < data.length){ //data from our console, it is an array, I don't the size of that array, I use length
                person = data[i]; //each item in array (data), it is a person record
                $("#records").append("<tr>" +
                    "<td>"+person.id+"</td>" +
                    "<td>"+person.name+"</td>" +
                    "<td>"+person.email+"</td>" +
                    "<td>"+person.message+"</td>" +
                    "<td>" +
                    "<button class='showPerson' personID='"+person.id+"'>Show</button>" +
                    "<button class='deletePerson' personID='"+person.id+"'>Delete</button>" +
                    "</td>" +
                    "</tr>");
                i = i+1;
            }
            $(".showPerson").click(function () {
                personID = $(this).attr("personID"); // this is the clicked button, we take value of person ID on this button
                getPersionInfo(personID);
            });
            $(".deletePerson").click(function () {
                personID = $(this).attr("personID"); // this is the clicked button, we take value of person ID on this button
                deletePersion(personID);
                $(this).parent().parent().remove();
            });
        },
        error: function() {
            console.log('Error: ' + data);

        }
    });
}

function getPersionInfo(personID) {
    $.ajax({
        type: 'GET', //delete
        url:'https://djangorestframestudy.herokuapp.com/api/leads/'+personID+'/',
        success: function (person) {
            console.log(person);
            $("#personInfo").empty(); //clean my divider
            $("#personInfo").append("" +
                "<p>ID: "+person.id+"</p>" +
                "<p>Name: "+person.name+"</p>" +
                "<p>Email: "+person.email+"</p>" +
                "<p>Message: "+person.message+"</p>" +
                "");
        },
        error: function () {
            alert("error");
        }
    })
}

function deletePersion(personID) {
    $.ajax({
        type: 'DELETE', //delete
        url:'https://djangorestframestudy.herokuapp.com/api/leads/'+personID+'/',
        success: function (data) {
            $("#personInfo").empty();
            alert("Person Deleted");
        },
        error: function () {
            alert("error");
        }
    })
}

function addPersion(name, email, msg) {
    $.ajax({
        type: "POST",
        url: "https://djangorestframestudy.herokuapp.com/api/leads/",
        dataType: "JSON",
        data: {
            "name":name,
            "email":email,
            "message": msg
        },
        success: function () {
            alert("person added");
        },
        error: function(){
            alert("add failed");
        }
    });
}
