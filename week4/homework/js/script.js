$(document).ready(function () {
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
                    "<td><button class='showPerson' personID='"+person.id+"'>Show</button></td>" +
                    "</tr>");
                i = i+1;
            }
            $(".showPerson").click(function () {
                personID = $(this).attr("personID"); // this is the clicked button, we take value of person ID on this button
                $.ajax({
                    type: 'GET', //delete
                    url:'https://djangorestframestudy.herokuapp.com/api/leads/'+personID+'/',
                    success: function (data) {
                        console.log(data);
                        $("#personInfo").empty(); //clean my divider
                        $("#personInfo").append("" +
                            "<p>ID: "+data.id+"</p>" +
                            "<p>Name: "+data.name+"</p>" +
                            "<p>Email: "+data.email+"</p>" +
                            "<p>Message: "+data.message+"</p>" +
                            "");
                    },
                    error: function () {
                        alert("error");
                    }
                })
            });
        },
        error: function() {
            console.log('Error: ' + data);

        }
    });
});
