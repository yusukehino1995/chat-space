class UsersController < ApplicationController
  def index
    respond_to do |format|
      format.html {redirect_to group_messages_path(@group), notice: 'メッセージが送信されました'}
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end