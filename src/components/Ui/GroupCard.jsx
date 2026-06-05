import { Link } from "react-router";
import { grouplist } from "../../data/GroupList";
function GroupCard({ selectedUser, selectedType, setSelectedUser, setSelectedType }) {
    const handleUserClick = (item) => {
        setSelectedUser(item);
        setSelectedType("group");
    };
    return(
        <>
        {grouplist.map((item)=>{
            return (
            <li className="nav-item mb-1" key={item.id}>
                <button className={`d-flex align-items-center gap-2 bg-transparent border-0 ${selectedType === "group" && selectedUser?.id === item.id ? "active" : ""}`}
                 onClick={() => handleUserClick(item)}>
                    <img src={item.image} className="rounded-circle object-fit-cover" width="40" height="40" alt="chat-img"/>
                    <div className="chat-head-box">
                        <h4 className="m-0 fs-6 text-capitalize fw-semibold head-text">{item.name}</h4>
                        <span className="text-start  text-capitalize para-text fs-8 m-0">{item.members}</span>
                    </div>
                </button>
            </li>
            )
        })}
        </>
    );
}
export default GroupCard;
