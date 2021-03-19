import { Todo } from "../src/types/todo";

// 保存数据到浏览器缓存中
export function saveTodo(todos: Todo[]) {
  localStorage.setItem("todos_key", JSON.stringify(todos));
}
// 从浏览器缓存中获取数据
export function getTodo(): Todo[] {
  return JSON.parse(localStorage.getItem("todos_key") || "");
}
