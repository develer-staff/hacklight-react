defmodule Backend.Post do
  use Ecto.Schema
  import Ecto.Changeset
  alias Backend.{Category, Post}

  schema "posts" do
    field :published_at, :date
    field :body, :string
    field :title, :string
    belongs_to :category, Category
    timestamps()
  end

  @doc false
  def changeset(%Post{} = post, attrs) do
    post
    |> cast(attrs, [:title, :body, :published_at, :category_id])
    |> validate_required([:title, :body, :published_at, :category_id])
  end
end
