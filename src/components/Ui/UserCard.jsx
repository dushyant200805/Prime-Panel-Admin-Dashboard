import { Link } from "react-router";
import { useState } from "react";
import { userslist } from "../../data/UserDetailList";
function UserCard({ setSelectedUser }) {
    const [activeUser, setActiveUser] = useState(null);

    const handleUserClick = (item) => {
        setSelectedUser(item);
        setActiveUser(item.id);
    };
    return (
        <>
            {userslist.map((item) => {
                return (
                    <li className="nav-item mb-1" key={item.id}>
                        <button  className={`d-flex align-items-center gap-2 bg-transparent border-0  ${activeUser === item.id ? "active" : ""}`} onClick={() => handleUserClick(item)} >
                            <img src={item.image} className="rounded-circle object-fit-cover" width="40" height="40" alt="chat-img" />
                            <div className="chat-head-box">
                                <h4 className="m-0 fs-6 text-capitalize fw-semibold head-text">{item.name}</h4>
                                <span className="text-start text-capitalize para-text fs-8 m-0">{item.status}</span>
                            </div>
                        </button>
                    </li>
                )
            })}
        </>
    );
}
export default UserCard;
