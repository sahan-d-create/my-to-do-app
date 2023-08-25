import React from 'react';
import { Checkbox, Button } from 'antd';

interface TodoItemProps {
    todo: string;
    completed: boolean;
    onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, completed, onDelete }) => {
    return (
        <div className="todo-item">
            <Checkbox checked={completed}>
                {todo}
            </Checkbox>
            <Button className="delete-button" shape="round" onClick={onDelete}>
                Delete
            </Button>
        </div>
    );
};

export default TodoItem;
