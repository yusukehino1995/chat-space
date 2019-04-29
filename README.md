## usersテーブル

|Column|Type|Options|
|------|----|-------|

|name|text|null: false, foreign_key: false|
|email|text|null: false, foreign_key: false|
|password|string|null: false, foreign_key: false|

### Association
  has_many :messages
  has_many :groups, through: users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|

|name|text|null: false, foreign_key: false|

### Association
- has_many :messages
  has_many :users, through: users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|

|body|text|null: false, foreign_key: false|
|image|string|null: true, foreign_key: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
  belongs_to :group
  belongs_to :user
