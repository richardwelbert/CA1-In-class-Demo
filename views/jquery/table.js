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
	$("#delete").click(function ()
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
			success: setTimeout(draw_table, 1000)
		})
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

function validateForm() {
    var genre = document.forms["newAlbumForm"]["sec_n"].value;
    var artist = document.forms["newAlbumForm"]["artist"].value;
    var album = document.forms["newAlbumForm"]["album"].value;
    var year = document.forms["newAlbumForm"]["year"].value;
    if (genre == "Choose...") {
        alert("You must choose a genre");
        return false;
    } else if (artist == "") {
        alert("Artist must be filled out");
        return false;
    } else if (album == "") {
            alert("Album must be filled out");
            return false;
        } else if (year == "") {
            alert("Year must be filled out");
            return false;
        } else if (isNaN(year)){
            alert("Year must be a number and have 4 digits");
            return false;
            } if (year.length < 4 || year.length > 4){
                alert("Year must have 4 digits");
                return false;
        }
};

$("#success-btn, .close").click(function () {
        $("#buttonSuccess").toggleClass("hidden");
        swal("Good job!", "You just added an Album!", "success");

});

$("#delete, .close").click(function () {
        $("#buttonDelete").toggleClass("hidden");
        swal("Deleted!", "You just deleted an Album!", "info");
});

$(document).ready(function(){
    draw_table();
});