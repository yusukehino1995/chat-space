$(function(){
  function buildHTML(message){
    //imageのパスをsrc属性にいれてもし存在しなければコンテンツ
    var image = message.image.url == null ? "" : `<img src="${message.image.url}" class="lower-message__image">`
    var html = `<div class = "message" >
                  <div class = "upper-message" >
                    <div class = "upper-message__user-name" >
                      ${message.user_name}
                    </div>
                    <div class = "upper-message__date" >
                      ${message.created_at}
                    </div>
                  </div>
                  <div class = "lower-message"> 
                    <p class = "lower-message__content">
                      ${message.content}
                    </p>
                      ${image}
                  </div>
                </div>`
    return html;
  }
  $("#new_message").on('submit', function(e){      
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    //ajax通信
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    //成功時の処理
    .done(function(data){
      //buildHTMLに取ってきたdataの値をいれたhtmlを作成
      var html = buildHTML(data);
      //messagesクラスにbuildHTMLメソッドで作成したhtmlを追加
      $('.messages').append(html);
      //入力フォームを空にする
      $("#new_message")[0].reset();
      //画像も
      $('.hidden').val('');
      //そのままだとsubmitボタンは1度しか押下できないので再度押せるように
      $('.form__submit').prop('disabled', false);
      //To fix 画面を下までスクロール
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('error')
    })
  })
})
