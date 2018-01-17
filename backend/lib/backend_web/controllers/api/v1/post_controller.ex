defmodule BackendWeb.Api.V1.PostController do
  use BackendWeb, :controller
  alias Backend.Repo
  alias Backend.Post
  alias BackendWeb.Api.V1.ChangesetView

  def index(conn, _params) do
      posts = Repo.all(Post) |> Repo.preload(:category)
      render conn, "index.json", posts: posts
  end

  def show(conn, %{"id" => id}) do
      post = Repo.get!(Post, id) |> Repo.preload(:category)
      render conn, "show.json", post: post
  end

  def create(conn, post_params) do
    changeset = Post.changeset(%Post{}, post_params)

    case Repo.insert(changeset) do
      {:ok, post} ->
        post = Repo.preload(post, :category)
        conn
        |> put_status(:created)
        |> render("show.json", post: post)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ChangesetView, "error.json", changeset: changeset)
    end
  end

  def update(conn, %{"id" => id, "post" => post_params}) do
    post = Repo.get!(Post, id) |> Repo.preload(:category)
    changeset = Post.changeset(post, post_params)

    case Repo.update(changeset) do
      {:ok, post} ->
        conn
        |> put_status(:ok)
        |> render("show.json", post: post)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    post = Repo.get!(Post, id)
    Repo.delete!(post)
    conn
    |> send_resp(204, "")
  end
end
