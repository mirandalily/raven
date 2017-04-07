class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.string :body
      t.integer :organization_id
      t.integer :user_id
    end
  end
end
