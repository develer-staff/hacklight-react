defmodule BackendWeb.Api.V1.PostView do
  use BackendWeb, :view
  alias Backend.Attachment

  def render("index.json", %{posts: posts}) do
      %{data: render_many(posts, __MODULE__, "post.json")}
  end

  def render("show.json", %{post: post}) do
      %{data: render_one(post, __MODULE__, "post.json")}
  end

  def render("post.json", %{post: post}) do
      %{
          id: post.id,
          body: post.body,
          published_at: post.published_at,
          category_id: post.category.id,
          category: render_one(post.category, BackendWeb.Api.V1.CategoryView, "category.json")
      }
  end
end
