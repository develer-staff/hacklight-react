defmodule BackendWeb.Api.V1.CategoryController do
  use BackendWeb, :controller
  alias Backend.Repo
  alias Backend.Category
  alias BackendWeb.Api.V1.ChangesetView

  def index(conn, _params) do
    categories = Repo.all(Category)
    render conn, "index.json", categories: categories
  end

  def show(conn, %{"id" => id}) do
    category = Repo.get!(Category, id)
    render conn, "show.json", category: category
  end

  def create(conn, category_params) do
    changeset = Category.changeset(%Category{}, category_params)
    case Repo.insert(changeset) do
      {:ok, category} ->
        render conn, "show.json", category: category
      {:error, changeset} ->
        conn
        |> put_status(400)
        |> render(ChangesetView, "error.json", changeset: changeset)
    end
  end

  def update(conn, %{"id" => id, "category" => category_params}) do
    category = Repo.get!(Category, id)
    changeset = Category.changeset(category, category_params)

    case Repo.update(changeset) do
      {:ok, category} ->
        render conn, "show.json", category: category
      {:error, changeset} ->
        conn
        |> put_status(400)
        |> render(ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    category = Repo.get!(Category, id)
    Repo.delete!(category)
    conn
    |> send_resp(204, "")
  end
end
