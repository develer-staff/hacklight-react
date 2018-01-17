defmodule Backend.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :title, :string
      add :body, :text
      add :published_at, :date
      add :category_id, references(:categories, on_delete: :delete_all), null: false
      timestamps()
    end
  end
end
