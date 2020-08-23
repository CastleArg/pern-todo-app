import React, { Fragment, useEffect, useState } from "react";
import { List, Typography } from 'antd';
import moment from "moment";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    //delete todo function

    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`/api/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getTodos = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/todos`);
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    console.log(todos);

    return (
        <Fragment>
            {" "}
            {/* {todos.map(x => <div>your todo: {x.description}</div>)} */}
            <List
                header={<div>your todos:</div>}
                footer={<div>thanks for viewing</div>}
                bordered
                dataSource={todos}
                renderItem={item => (
                    <List.Item>
                        <div>{item.description} due:{new moment(item.due_date).format('DD/MM/YYYY')}</div>
                    </List.Item>
                )}
            />
        </Fragment>
    );
};

export default ListTodos;
