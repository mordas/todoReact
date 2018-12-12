import React from 'react';
import ReactDom from 'react-dom';
/////1
const TodoList = () => {
        return (
         <ul>
                 <li>Learn React</li>
                 <li>Build Awesome Ap</li>
         </ul>
        );
};
const AppHeader = () => {
        return (
         <h1>My Todo List</h1>
        );
};
const SearchPanel = () => {
        const searchStyle = {
                fontSize: '25px'
        }
        return (
        <input
                style={searchStyle}
                placeholder="search"
                />
        );
}; 

const App = () => {
        return (
        <div>
         <AppHeader />
         <SearchPanel />
         <TodoList />
 </div>
        );
};

ReactDom.render(<App />,document.getElementById('root'));

