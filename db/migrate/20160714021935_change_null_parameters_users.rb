class ChangeNullParametersUsers < ActiveRecord::Migration
  def change
    change_column :users, :username, :string, :null => true
    change_column :users, :email, :string, :null => true
    change_column :users, :password_digest, :string, :null => true
    change_column :posts, :title, :string, :null => true
    change_column :posts, :body, :text, :null => true
  end
end
