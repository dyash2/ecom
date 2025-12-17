import React from "react";
import { useOutletContext } from "react-router";

export default function Child() {
    const [count, setCount] = useOutletContext();
    const increment = () => setCount((c) => c + 1);
    return (
        <div>
            <button onClick={increment}>{count}</button>
        </div>
    )
}