class CreateSerials < ActiveRecord::Migration
  def change
    create_table :serials do |t|
      t.string :serial
      t.timestamps null: false
    end
    add_reference :serials, :user, index: true, foreign_key: true
  end
end
