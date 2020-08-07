class CreateSubmissions < ActiveRecord::Migration[5.2]
  def change
    create_table :submissions do |t|
      t.string :language,              null: false
      t.string :codeBlock,              null: false
      t.string :translation,              null: false
      


      t.timestamps null: false
    end
  end
end
