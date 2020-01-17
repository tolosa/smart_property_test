class CreateTenants < ActiveRecord::Migration[6.0]
  def change
    create_table :tenants, id: :uuid do |t|
      t.string :name
      t.string :access_key
      t.string :password_digest
      t.timestamps
    end
  end
end
