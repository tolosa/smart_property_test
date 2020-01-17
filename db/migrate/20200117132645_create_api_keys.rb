class CreateApiKeys < ActiveRecord::Migration[6.0]
  def change
    create_table :api_keys, id: :uuid do |t|
      t.string :token
      t.uuid :tenant_id, index: true
      t.timestamps
    end
  end
end
