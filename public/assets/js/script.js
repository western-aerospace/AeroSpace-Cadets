$(document).ready(function(){
  $.ajax({
      url: "/api/allmakes",
      type: 'get',
      dataType: 'json',
      success:function(response){

          var len = response.length;

          $("#dropdown1").empty();
              
          $("#dropdown1").append('<option value="" disabled  selected>Choose your option</option>');
          for( var i = 0; i<len; i++){
              var id = response[i]['id'];
              var name = response[i]['name'];
              
              $("#dropdown1").append("<option value='"+id+"'>"+name+"</option>");

          }
          $('#dropdown1').formSelect();
      }
  });
  $("#dropdown1").change(function(){
    var makeid = $(this).val();
    $.ajax({
        url: "/api/model/make/" + makeid,
        type: 'get',
        dataType: 'json',
        success:function(response){
  
            var len = response.length;
  
            $("#dropdown2").empty();
                
            $("#dropdown2").append('<option value="" disabled  selected>Choose your option</option>');
            for( var i = 0; i<len; i++){
                var id = response[i]['id'];
                var name = response[i]['name'];
                
                $("#dropdown2").append("<option value='"+id+"'>"+name+"</option>");
  
            }
            $('#dropdown2').formSelect();
        }
    });

  });

});



//use jquery and ajax

//ajax call to api route, a GET
// ajax -> route for all makes

//in the .then jquery build options to add list make items to the id dropdown1, information from list items will come from database

// data[i].name (how cesna would show on page) use a for loop to create a list item for everything in the database

//look at GIphy school work

// on change [var chosenID]
// remove models
// set class
// ajax get e 
// models array
// .then 
/// if chosenID === models.makeID
// appemnd models.name to models dropdown

// $(document).ready(function() {
  
  
// // ajax routes for all makes
// app.get("/api/allmakes", function(req, res) {
//   db.make.findAll({}).then(function(results) {
//     res.json(results);
//   });
// });
//   $("#makesList").append(results);
//   $("#dropdown1").append(modelDiv);
  
      
  
//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
//         .then(function(response) {
//           var results = response.data;
  
//           for (var i = 0; i < results.length; i++) {
//             var modelDiv = $("<div class=\"model-item\">");
  
            
  
           
  
//             $("#models").append(modelDiv);
//           }
//         });
//     });

//     $(document).on("change", "#dropdown1", function() {
//       //remove models
//     $("#models").empty();
//     console.log("change");
  
//     $(document).on("change", "#dropdown1", function() {
  
//       var state = $(this).attr("data-state");
  
//       if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//       }
//       else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//       }
//     });
  
//     $("#add-model").on("click", function(event) {
//       event.preventDefault();
//       var newmodel = $("input").eq(0).val();
  
//       if (newmodel.length > 2) {
//         models.push(newmodel);
//       }
  
//       populateButtons(models, "model-button", "#model-buttons");
  
//     });
  
//     populateButtons(models, "model-button", "#model-buttons");
//   });
  