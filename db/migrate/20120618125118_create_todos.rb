class CreateTodos < ActiveRecord::Migration
  def up
    create_table :todos do |t|
      t.string :name
      t.boolean :done, :default => false
    end
  end

  def down
    drop_table :todo
  end
end
