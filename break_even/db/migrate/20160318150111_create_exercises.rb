class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :exercise_name
      t.integer :calories_burned
      t.integer :minutes
      t.string :sets
      t.string :reps
      t.string :day
      t.timestamps null: false
    end
  end
end
