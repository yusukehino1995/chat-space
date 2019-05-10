$(function(){
  function buildErrMsgToHTML(msg){
    var html = `<div id = '#user-search-result'>${ msg }</div>`
    return html;
  }
  function buildUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    return html;
  }
  function userAppendGroup(user_id, user_name){
   var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                  <p class='chat-group-user__name'>${user_name}</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
              </div>`
    return html;
  }
  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      $("#user-search-result").empty();
      if(users.length !== 0){
        users.forEach(function(user){
            var html = buildUser(user);
          $('#user-search-result').append(html);
        });
      }
      else{
        var html = buildErrMsgToHTML("一致するユーザーが見つかりません")
        $('#user-search-result').append(html);
      }
    })
    .fail(function(){
      alert('ユーザー検索失敗');
    })
  });
  $(function(){
    $(document).on("click", ".user-search-add", function(){
      var user_id = $(this).attr("data-user-id");
      var name = $(this).attr("data-user-name");
      var html = userAppendGroup(user_id, name);
      $(this).parent().remove();
      $('.chat-group-users').append(html);
      // var html = userAddGroup(dataf-user-id, data-user-name);
    });
  });
  $(function(){
    $(document).on("click", ".user-search-remove", function(){
      $(this).parent().remove();
    });
  });
});
