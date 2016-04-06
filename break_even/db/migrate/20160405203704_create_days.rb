class CreateDays < ActiveRecord::Migration
  def change
    create_table :days do |t|
      t.string :name_of_day
      t.timestamps null: false
    end
  end
end
