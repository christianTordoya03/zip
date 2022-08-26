import { apiFetch, BASE_URL } from "./api_fetch.js";

function TodoService() {
  if (!TodoService.instance) {
    TodoService.instance = this;
  }
  return TodoService.instance;
}

TodoService.prototype.list = () =>
  apiFetch(`${BASE_URL}/doables`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

  TodoService.prototype.create = (title) =>
  apiFetch(`${BASE_URL}/doables`, {
    method: "POST",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  TodoService.prototype.delete = (playlistId) =>
  apiFetch(`${BASE_URL}/doables/${playlistId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

export default TodoService;
