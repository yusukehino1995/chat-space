class Api::MessagesController < ApplicationController
  def index
    # //idが送信されたメッセージよりも後に投稿されたメッセージのみ取得
    respond_to do |format|
      format.html 
      format.json  { @messages = Message.where('id > ?', params[:id]) }
    end
  end
end
