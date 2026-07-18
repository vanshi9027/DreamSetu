import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function testAuth() {
    const { user, setUser } = useContext(AuthContext);

    return (
        <>
            <button
                onClick={() =>
                    setUser({
                        name: "Vanshika",
                        email: "vanshika@gmail.com",
                    })
                }
            >
                Login
            </button>


            <button
                onClick={() => setUser(null)}
            >
                Logout
            </button>
            {user ? (
                <h2>Welcome {user.name}</h2>
            ) : (
                <h2>Please Login</h2>
            )}

        </>

    )
}