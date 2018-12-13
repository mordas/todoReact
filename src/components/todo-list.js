import React from 'react';

import './todo-list.css';

import TodoListItem from './todo-list-item.js';

const TodoList = ({todos}) => {


        const elements = todos.map((item) => {

        const{id, ...itemProps } = item; /// с помощью деструктуризации item
                //(item получился в резултате выполнения map на todos)
                //мы получаем id и все остальные параметры в спред ...itemProps, можем передать полученную переменную id в качестве key,
                //А все остальное в виде ...в наш элемент TodolostItem

                return (

                 <li key={id} className="list-group-item"><TodoListItem {...itemProps}/></li>
                );//// Можно заменить этот код на <TodoListItem {...item} /> //// он возьмет каждое свойство item и передаст его в качестве значения.
        });
        ///key обязательно используй, благодаря ему JSX понимет какие элементы нужно заново отрендерить
        return (
         <ul className="list-group todo-list">
                 { elements }
                </ul>
        );
};


export default TodoList;
