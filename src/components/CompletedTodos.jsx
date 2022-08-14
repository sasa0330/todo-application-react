import React from "react";

export const CompletedTodos = (props) => {
    const { completedTodos, onClick } = props;
    return (
        <>
            <div>
                <h2>Completed</h2>
                <ul>
                    {completedTodos.map((completedTodo, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    {completedTodo}
                                    <button onClick={() => onClick(index)}>戻す</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};
