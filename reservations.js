const { table } = require("console");



$.get("/api/characters/" + searchedCharacter, function (data) {
    console.log(data);
    if (data) {

        $("#name").text(data.name);
        $("#phnenumber").text(data.phonenumber);
        $("#email").text(data.email);
        $("#id").text(data.id);
    }
});
  
