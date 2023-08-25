import React, { useState } from 'react';
import { Input, Button } from 'antd';
import TodoItem from './TodoItem';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<{ todo: string; completed: boolean }[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { todo: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (index: number) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-app">
            <h1 className="title">TODO APP</h1>
            <div className="add-todo">
                <Input
                    placeholder="Enter a new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button
                    className="add-button"
                    type="primary"
                    shape="round"
                    onClick={handleAddTodo}
                >
                    Add Task
                </Button>
            </div>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo.todo}
                    completed={todo.completed}
                    onDelete={() => handleDeleteTodo(index)}
                />
            ))}
        </div>
    );
};

export default TodoApp;
