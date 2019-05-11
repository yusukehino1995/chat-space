class Api::MessagesController < ApplicationController
  def index
    @message = Message.new
    # //idが送信されたメッセージよりも後に投稿されたメッセージのみ取得
    @messages = @group.messages.includes(:user).where(message_params)
  end
 
  private
  def message_params
    params.require(:message).permit(:id, :content, :image)
  end
end
