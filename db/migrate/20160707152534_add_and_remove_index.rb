class AddAndRemoveIndex < ActiveRecord::Migration
  def change
    remove_column :posts, :user_id_id, :integer, index: true
  end
end
