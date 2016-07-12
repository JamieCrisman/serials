class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.string :genre
      t.timestamps null: false
    end
    add_reference :genres, :post, index: true, foreign_key: true
  end
end
