class CreateProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :properties, id: :uuid do |t|
      t.string :name, null: false
      t.string :description
      t.text :address, null: false
      t.boolean :archived, default: false, null: false
      t.timestamps
    end
  end
end
