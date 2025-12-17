import { Outlet, Link } from "react-router";
import { useParams } from "react-router";
import Popeye from "./components/Popeye";
import Spinach from "./components/Spinach";
import DefaultProfile from "./components/DefaultProfile";

export default function Profile() {
    const { name } = useParams();
    return (
        <div>
            <h1>Hello from Profile page!</h1>
            <h2>This is a profile page</h2>
            <hr />
            <h2>The Profile visited is here:</h2>
            {name === "popeye" ? (
                <Popeye />
            ) : name === "spinach" ? (
                <Spinach />
            ) : (
                <DefaultProfile />
            )}
        </div>
    )
}

