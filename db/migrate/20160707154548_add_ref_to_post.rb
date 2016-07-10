class AddRefToPost < ActiveRecord::Migration
  def change
    remove_column :posts, :user_id, :integer
    add_reference :posts, :user, index: true, foreign_key: true
  end
end
