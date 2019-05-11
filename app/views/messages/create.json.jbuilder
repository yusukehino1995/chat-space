json.id @message.id
json.user_name @message.user.name
json.content @message.content
json.image @message.image
json.created_at format_posted_time(@message.created_at)
