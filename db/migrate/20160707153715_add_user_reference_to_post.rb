class AddUserReferenceToPost < ActiveRecord::Migration
  def change
    remove_column :posts, :user, :integer
  end
end
