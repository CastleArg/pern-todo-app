import React, { Fragment, useState } from "react";
import { Form, Input, Button, Checkbox , Radio, Switch, DatePicker} from 'antd';
import { useHistory } from "react-router-dom";
const InputTodo = () => {
    // const [description, setDescription] = useState("");
    // const [isImportant, setIsImportant] = useState(false);
    let history = useHistory();
    const onSubmitForm = async formValues => {
        console.log(formValues);
     
        

        try {
            const body = { ...formValues };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            history.push('/list');
        } catch (err) {
            console.error(err.message);
        }
    };




    return (
        <Fragment>
            <h1>Pern Todo List</h1>
            <Form
                onFinish={onSubmitForm}
            >
                <Form.Item
                    label="Description"
                    name="description"
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item valuePropName="checked"
                    label="Is Important"
                    name="isImportant"
                >
                    <Checkbox />
                </Form.Item>

                <Form.Item
                    label="due date"
                    name="dueDate"
                   
                >
                     <DatePicker  />
                   

                </Form.Item>


                <Button type="primary" htmlType="submit">
                    Submit
               </Button>
            </Form>
        </Fragment>
    );
};

export default InputTodo;
