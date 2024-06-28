import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const UserList = () => {
    const users=  useSelector ((store) => store.users);
        {
            id: "1",
            ime: "Petra",
            email: "petra@example.hr"
        },
        {
            id: "2",
            ime: "Nensi",
            email: "nensi@example.hr"
        },
        {
            id: "3",
            ime: "Maja",
            email: "maja@example.hr"
        },
    ];

    const userList = () => 
        users.map((user) => (
        <div key={user.id}>
            <div>
                <h2>{user.ime}</h2>
                <p>{user.email}</p>
            </div>
            <div>
                <Link to={`edit-user/${user.id}`}>
                  <FaEdit />
                </Link>
                <FaRegTrashAlt />
            </div>
        </div>
    ));
    
    return (
        <>
            <div>
                <Link to="/add-user">
                    <Button />
                </Link>
            </div>
        <div>{users.length ? userList() : <p>Nema Korisnika</p>}</div>
        </>
    );
};

export default UserList;
