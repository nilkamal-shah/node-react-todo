export const BASE_URL = window.location.hostname() === 'localhost' ? 'http://localhost:5000': '';

export const getTodos = async () => {
    const todos = await fetch(`${BASE_URL}/api/todos`);
    const data = await todos.json();
    return data;
}

export const saveTodo = async (todo) => {
    const request = await fetch(`${BASE_URL}/api/todo`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(todo)})
    if(todo.id) {
        return request.json();
    }
    return request.status;
}

export const deleteTodo = async (id) => {
    const request = await fetch(`${BASE_URL}/api/todo`, {method: 'DELETE', headers: {'Content-Type': 'application/json'},body: JSON.stringify({id})});
    return request.status;
}

export const getTodo = async (id) => {
    const request  = await fetch(`${BASE_URL}/api/todo/${id}`);
    const data = await request.json();
    return data;
}