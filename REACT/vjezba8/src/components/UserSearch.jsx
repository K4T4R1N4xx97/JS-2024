import { useContext, useState } from "react";

const UserSearch = () => {
    const [text, setText] = useState("");
    const { users, fetchUsers, clearUsers } = useContext(GithubContext);

    const handlechange = (event) => {
        const searchText = event.target.value;
        setText(searchText);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text === ""){
            alert("Molimo unesite nesto u polje za pretrazivanje.")
        } else {
            fetchUsers(text);
            setText("");
        }
    };

  return (
  <div className="flex gap-8 mb-4 justify-center">
    <form className="flex gap-2" onSubmit={handleSubmit}>
        <input 
         type="text" 
         placeholder="Pretrazi..." 
         className="bg-gray-200 p-1 rounded" 
         onChange={handlechange}
         value={text} 
        />
        <button className="bg-gray-500 px-4 text-white rounded">Trazi</button>
    </form>
    {users.length > 0 && (
        <button className="bg-gray-500 px-4 text-white rounded" onClick={clearUsers}>Resetiraj</button>
    )}    
  </div>
  );
};

export default UserSearch;