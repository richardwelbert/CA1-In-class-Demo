//Code adapted from the structure that can be found on the link below

//Title: CA1-In-Class-Demo
//Author: Mikhail Timofeev
//Date: 08/12/2019 (last accessed)
//Availability: https://github.com/mikhail-cct/CA1-In-class-Demo

function draw_table()
{
    $("#results").empty();
    $.getJSONuncached = function(url) 
    {
        return $.ajax(
        {
            url: url,
            type: 'GET',
            cache: false,
            success: function(html)
            {
                $("#results").append(html);
                select_row();
            }
        });
    };
    $.getJSONuncached("/get/html")
};

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='4']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};

function delete_row(sec, ent)
{
	$("#delete, .close").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
                entree: ent
            },
			cache: false,
            success: setTimeout(draw_table, 1000),
        })
        swal("Deleted!", "You just deleted an Album!", "info"); //pop up alert
	})
};

function highlightNumberOne(idTable, bShowNone) {
										// if bShowNone is true, then we're highlighting vegetarian
										//	meals, otherwise we're unhighlighting them.
	var i=0;
	var oTable = document.getElementById(idTable);

	var oTBODY = oTable.getElementsByTagName('TBODY')[0];
	var aTRs = oTBODY.getElementsByTagName('TR');
											// walk through each of the table rows and see if it has a 
											// "vegetarian" attribute on it.
	for (i=0; i < aTRs.length; i++) {
		if (aTRs[i].getAttribute('numberOne') && aTRs[i].getAttribute('numberOne') == "true") {
			if (bShowNone){
				aTRs[i].style.backgroundColor = "lightGreen";
			} else {
				aTRs[i].style.backgroundColor = "";
			};
		};
	};
};

//this method is to validate the user input
function validateForm() {
    var genre = document.forms["newAlbumForm"]["sec_n"].value;
    var artist = document.forms["newAlbumForm"]["artist"].value;
    var album = document.forms["newAlbumForm"]["album"].value;
    var year = document.forms["newAlbumForm"]["year"].value;
    //checks if the field genre is selected
    if (genre == "Choose...") {
        alert("You must choose a genre");
        return false;
    } else if (artist == "") {
        //checks if the artist genre is typed
        alert("Artist must be filled out");
        return false;
    } else if (album == "") {
        //checks if the album genre is typed
        alert("Album must be filled out");
        return false;
    } else if (year == "") {
        //checks if the field year is typed
        alert("Year must be filled out");
        return false;
    } else if (isNaN(year)){
        //checks if the input if year is a number
        alert("Year must be a number and have 4 digits");
        return false;
    } else if (year.length < 4 || year.length > 4){
        //checks if the input of year has 4 numbers
        alert("Year must have 4 digits");
        return false;
    }

    swal("Good job!", "You just added an Album!", "success"); //pop up alert

};

$(document).ready(function(){
    draw_table();
});