class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :organization_id
      t.integer :user_id
    end
  end
end
