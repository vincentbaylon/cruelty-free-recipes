class CreateRanks < ActiveRecord::Migration[6.1]
  def change
    create_table :ranks do |t|
      t.integer :ref_key
      t.string :comment
      t.integer :rank
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
