$(function(){
  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    
    $.ajax({
      type: 'GET',
      url: 'user/index',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      $("#user-search-result").empty();
      if(users.length !== 0){
        users.foreach(function(user){
          appendUser(user);
        });
      }
      else{
        appendErrMsgToHTML("一致するユーザーが見つかりません")
      }
    })
  });
});