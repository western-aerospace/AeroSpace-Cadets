function displayPlaneInput() {
    var queryURL = "/api/userPlane"
  
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
  console.log(response)
  
  for (var i =0;i<response.length;i++){
    $("#userPlaneData").append($userPlaneDiv)
    var $userPlaneDiv = $("<div>")
    $userPlaneDiv.append($id)
    $userPlaneDiv.append($serial)
    $userPlaneDiv.append($make)
    $userPlaneDiv.append($model)
    $userPlaneDiv.append($UserId)
    $userPlaneDiv.append(lineBreak)
    var $serial = $("<p>")
    var $id = $("<p>")
    var $make =$("<p>")
    var $model =$("<p>")
    var $UserId =$("<p>")
    var lineBreak =$("<hr>")
    $id.append("id: " + JSON.stringify(response[i].id))
    $serial.append("Serial: " + JSON.stringify(response[i].serial))
    $make.append("Make: " + JSON.stringify(response[i].make))
    $model.append("Model: " + JSON.stringify(response[i].model))
    $UserId.append("User ID: " + JSON.stringify(response[i].UserId))
    
  }});
  }
  displayPlaneInput();