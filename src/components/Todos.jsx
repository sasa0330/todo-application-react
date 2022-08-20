import React from "react";

export const Todos = (props) => {
    const { onClickDelete, onClickCompleted, todos } = props;
    return (
        <>
            <div>
                <h2>Todos</h2>
                <ul className="todo-list">
                    {todos.map((todo, index) => {
                        return (
                            <li className="todo-list-item" key={index}>
                                <div>
                                    {todo}
                                    <div
                                        onClick={() => {
                                            onClickDelete(index);
                                        }}
                                    >
                                    </div>
                                    <button
                                        onClick={() => {
                                            onClickCompleted(index);
                                        }}
                                    >
                                        済み
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};
