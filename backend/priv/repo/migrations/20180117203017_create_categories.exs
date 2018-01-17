defmodule Backend.Repo.Migrations.CreateCategories do
  use Ecto.Migration

  def change do
    create table(:categories) do
      add :title, :string

      timestamps()
    end

    create index(:categories, [:title], unique: true)
  end
end
