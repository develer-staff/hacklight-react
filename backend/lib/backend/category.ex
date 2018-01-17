defmodule Backend.Category do
  use Ecto.Schema
  import Ecto.Changeset
  alias Backend.{Category, Post}


  schema "categories" do
    field :title, :string
    has_many :posts, Post
    timestamps()
  end

  @doc false
  def changeset(%Category{} = category, attrs) do
    category
    |> cast(attrs, [:title])
    |> unique_constraint(:title)
    |> validate_required([:title])
  end
end
