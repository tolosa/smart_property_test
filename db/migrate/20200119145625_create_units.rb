class CreateUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :units, id: :uuid do |t|
      t.integer :number, null: false
      t.string :area, null: false
      t.timestamps
    end
  end
end
