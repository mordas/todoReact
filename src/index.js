import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header.js';
import SearchPanel from './components/search-panel/search-panel.js';
import TodoList from './components/todo-list/todo-list.js';
import ItemStatusFilter from './components/item-status-filter/item-status-filter.js';

import './index.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));
