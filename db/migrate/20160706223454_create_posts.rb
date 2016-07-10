class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :user_id
      t.timestamps null: false
    end

    add_reference :posts, :user_id, index: true
  end
end
