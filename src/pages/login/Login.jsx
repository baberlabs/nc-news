import { useState } from "react";
import useUsername from "./useUsername";

export default function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [username, setUsername] = useState("");

  function handleChange(e) {
    setUsernameInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setUsername(usernameInput);
  }

  const { loggedInUser, hasLoggedIn, isError } = useUsername(username);

  const validUsernames = ["grumpy19", "tickle122", "jessjelly"];

  return (
    <section className="flex flex-col items-center gap-16 p-4 md:p-8">
      <h2 className="hidden">Login</h2>
      <form className="mt-20 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            placeholder="Your username"
            className="w-48 border-b border-gray-300 px-4 py-2"
          />
          {isError && (
            <p className="w-fit self-end rounded-xl bg-red-200 px-4 py-2 text-sm">
              User does not exist
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 rounded-xl bg-blue-100 p-4 hover:bg-blue-50">
          <h3 className="text-sm font-bold">Valid Usernames</h3>
          <ul className="flex flex-col gap-2">
            {validUsernames.map((validUsername, index) => (
              <li className="text-sm" key={`valid-username-${index}`}>
                {validUsername}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleClick}
          className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-bold text-white"
        >
          Login
        </button>
        {hasLoggedIn && (
          <p className="rounded-xl bg-green-200 px-4 py-2 text-center text-sm">
            Logged in as {loggedInUser?.username}
          </p>
        )}
      </form>
    </section>
  );
}
