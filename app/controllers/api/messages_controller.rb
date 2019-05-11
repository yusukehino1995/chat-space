class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
        # //idが送信されたメッセージよりも後に投稿されたメッセージのみ取得
    respond_to do |format|
      format.html 
      format.json  { @new_messages = Message.where('id > ?', params[:message][:id]) }
    end
  end
 
  # private
  # def message_params
  #   params.require(:message).permit(:id, :content, :image)
  # end
end
