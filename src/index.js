import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header.js';
import SearchPanel from './components/search-panel.js';
import TodoList from './components/todo-list.js';
import ItemStatusFilter from './components/item-status-filter.js'



const App = () => {

        const todoData = [
        {label: 'Drink coffe', important: false, id:1},
        {label: 'Make APP', important: true, id:2},
        {label: 'Have a lunch', important: false, id:3},
        ];

        
        return (
        <div>
         <AppHeader />
         <SearchPanel />
         <ItemStatusFilter />
         <TodoList todos={todoData
         } />
 </div>
        );
};

ReactDom.render(<App />,document.getElementById('root'));

