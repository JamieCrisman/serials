class CreateReactions < ActiveRecord::Migration
  def change
    create_table :reactions do |t|
      t.string :reaction , index: true
      t.timestamps null: false
    end
    add_reference :reactions, :user, index: true, foreign_key: true
    add_reference :reactions, :post, index: true, foreign_key: true
  end
end
