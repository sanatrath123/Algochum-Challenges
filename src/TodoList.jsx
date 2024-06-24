import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AddTodo, EditTodo, RemoveTodo} from './store/TodoSlice'

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.TodoArray);

  const [newTodo, setNewTodo] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(AddTodo({
        id: Date.now(),
        text: newTodo,
        completed: false
      }));
      setNewTodo('');
    }
  };

  const handleEditTodo = (id) => {
    dispatch(EditTodo({
      id:id,
      text: editedText,
      completed: false
    }));
    setEditMode(null);
    setEditedText('');
  };

  const handleDeleteTodo = (id) => {
    dispatch(RemoveTodo(id));
  };

  const handleToggleTodo = (id) => {
   // dispatch(toggleTodo(id));
  };


  useEffect(()=>{

  },[todos])

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editMode === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => handleEditTodo(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <button onClick={() => setEditMode(todo.id)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
