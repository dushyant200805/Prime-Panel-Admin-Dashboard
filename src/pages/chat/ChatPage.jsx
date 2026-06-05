import { faAddressBook, faBarsStaggered, faCog, faComment, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import PageTitle from "../../components/Common/PageTitle";
import UserCard from "../../components/Ui/UserCard";
import GroupCard from "../../components/Ui/GroupCard";
import ChatRoom from "../../components/Ui/ChatRoom";
import UserDetails from "./UserDetails";
import { userslist } from "../../data/UserDetailList";
import { useState } from "react";
function ChatPage() {
     const [selectedUser, setSelectedUser] = useState(null);
    const [activeTab, setActiveTab] = useState("chats");
    const [mainTab, setMainTab] = useState("messages");
    return (
        <>
        <PageTitle title="Chat" />
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm rounded-3 ">
                        <h2 className="fs-4 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">primepanel chats</h2>
                    </div>
                    <div id="chatmain" className="px-0 py-3">
                        <div className="d-flex flex-wrap gap-2">
                            {/* <!-- First Layer (Vertical Tabs) --> */}
                            <section className="first-layer card-bg p-2 rounded-3">
                                <ul className="nav nav-pills flex-lg-column" id="firstLayer" role="tablist">
                                    <li className="nav-item mb-lg-2" aria-labelledby="messages-tab">
                                        <button className={`nav-link ${mainTab === "messages" ? "active" : ""}`} id="messages-tab" onClick={() =>  {setMainTab("messages"); setSelectedUser(null); }} type="button" role="tab">
                                            <FontAwesomeIcon icon={faComment} className="fs-5" />
                                        </button>
                                    </li>
                                    <li className="nav-item mb-lg-2" aria-labelledby="users-tab">
                                        <button className={`nav-link ${mainTab === "users" ? "active" : ""}`} id="users-tab" onClick={() => {  setMainTab("users"); setSelectedUser(null); }} type="button" role="tab">
                                            <FontAwesomeIcon icon={faAddressBook} className="fs-5" />
                                        </button>
                                    </li>
                                    <li className="nav-item" aria-labelledby="settings-tab">
                                        <button className={`nav-link ${mainTab === "settings" ? "active" : ""}`} id="settings-tab" onClick={() => {setMainTab("settings"); setSelectedUser(null);  }} type="button" role="tab">
                                            <FontAwesomeIcon icon={faCog} className="fs-5" />
                                        </button>
                                    </li>

                                </ul>
                            </section>

                            {/* <!-- Second Layer (Vertical Tabs Content) --> */}
                            <section className="second-layer card-bg p-2 rounded-3">
                                <div className="tab-content" id="secondLayer">

                                    {/* Messages Tab Content */}
                                    <div className={`tab-pane fade ${mainTab === "messages" ? "show active" : ""}`} id="messages" role="tabpanel">
                                        <ul className="nav nav-pills flex-column mb-3" id="messageList" role="tablist">
                                            <li className="chatswitch border-bottom light-border-bottom mb-2 pb-2">
                                                <Link to="#" className={`border-0 px-2 py-1 me-1 fs-7 text-capitalize fw-medium rounded-pill ${activeTab === "chats" ? "active" : ""}`}
                                                         onClick={() => { setActiveTab("chats"); setSelectedUser(null); }} >
                                                    all chats</Link>
                                                <Link to="#" className={`px-2 py-1 fs-7 text-capitalize fw-medium rounded-pill ${activeTab === "groups" ? "active" : ""}`}  onClick={() => {setActiveTab("groups");setSelectedUser(null);}} >Group chats</Link>
                                            </li>
                                            {/* <!-- chats --> */}
                                            {activeTab === "chats" && (
                                                <li id="chatbox">
                                                    <div className="d-flex justify-content-between align-items-center gap-3 border-bottom light-border-bottom pb-2 mb-3">
                                                        <h3 className="m-0 fs-5 text-capitalize head-text">Chat History</h3>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <button className="btn prime-btn">
                                                                <FontAwesomeIcon icon={faFilter} className="fs-6" />
                                                            </button>
                                                            <button className="btn prime-btn">
                                                                <FontAwesomeIcon icon={faBarsStaggered} className="fs-6" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <ul className="m-0 p-0" id="messagelistslide">
                                                        <UserCard setSelectedUser={setSelectedUser} />
                                                    </ul>
                                                </li>
                                            )
                                            }

                                            {/* <!-- Group Chat --> */}
                                            {activeTab === "groups" &&  (
                                                <li id="grpchatbox" >
                                                    <div className="w-100 d-flex justify-content-between align-items-center gap-3 border-bottom light-border-bottom pb-2 mb-3">
                                                        <h3 className="m-0 fs-5 text-capitalize head-text">Group Chats</h3>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <button className="btn prime-btn">
                                                                <FontAwesomeIcon icon={faFilter} className="fs-6" />
                                                            </button>
                                                            <button className="btn prime-btn">
                                                                <FontAwesomeIcon icon={faBarsStaggered} className="fs-6" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <ul className="m-0 p-0" id="grouplistslide">
                                                        <GroupCard setSelectedUser={setSelectedUser} />
                                                    </ul>
                                                </li>
                                            )
                                            }
                                        </ul>
                                    </div>

                                    {/* <!-- Users Tab Content --> */}
                                    <div className={`tab-pane fade ${mainTab === "users" ? "show active" : ""}`} id="users" role="tabpanel">
                                        <div className="d-flex justify-content-between align-items-center gap-3 border-bottom light-border-bottom pb-2 mb-3">
                                            <h3 className="m-0 fs-5 text-capitalize head-text">Contact List</h3>
                                            <div className="d-flex align-items-center gap-2">
                                                <button className="btn prime-btn">
                                                    <FontAwesomeIcon icon={faFilter} className="fs-6" />
                                                </button>
                                                <button className="btn prime-btn">
                                                    <FontAwesomeIcon icon={faBarsStaggered} className="fs-6" />
                                                </button>
                                            </div>
                                        </div>
                                        <ul className="nav nav-pills flex-column" id="userList" role="tablist">
                                            <UserCard setSelectedUser={setSelectedUser} />
                                        </ul>
                                    </div>

                                    {/* <!-- Settings Tab Content --> */}
                                    <div className={`tab-pane fade ${mainTab === "settings" ? "show active" : ""}`} id="settings" role="tabpanel">
                                        <div className="d-flex justify-content-between align-items-center gap-3 border-bottom light-border-bottom pb-2 mb-3">
                                            <h3 className="m-0 fs-5 text-capitalize head-text">Settings</h3>
                                            <div className="d-flex align-items-center gap-2">
                                                <button className="btn prime-btn">
                                                    <FontAwesomeIcon icon={faFilter} className="fs-6" />
                                                </button>
                                                <button className="btn prime-btn">
                                                    <FontAwesomeIcon icon={faBarsStaggered} className="fs-6" />
                                                </button>
                                            </div>
                                        </div>
                                        <ul className="nav nav-pills flex-column" id="settingsList" role="tablist">
                                            <li className="nav-item mb-2">
                                                <a href="#" className="nav-link head-text active" id="setting1-tab" data-bs-toggle="pill"
                                                    data-bs-target="#setting1-content" role="tab">General Settings</a>
                                            </li>
                                            <li className="nav-item mb-2">
                                                <a href="#" className="nav-link head-text" id="setting2-tab" data-bs-toggle="pill"
                                                    data-bs-target="#setting2-content" role="tab">Privacy Settings</a>
                                            </li>
                                            <li className="nav-item mb-2">
                                                <a href="#" className="nav-link head-text" id="setting3-tab" data-bs-toggle="pill"
                                                    data-bs-target="#setting3-content" role="tab">Notification Settings</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </section>

                            {/* <!-- Third Layer (Content Details) --> */}
                            <section className="third-layer flex-grow-1 card-bg p-2 rounded-3">
                                    {/* <!-- Message Details --> */}
                                   {mainTab === "messages" && selectedUser && (
                                        <ChatRoom selectedUser={selectedUser} />
                                        )}

                                    {/* <!-- User Details --> */}
                                    {mainTab === "users" && selectedUser && (
                                      <UserDetails selectedUser={selectedUser} />
                                    )}
                                    
                                    {mainTab === "settings" &&  (
                                <div className="tab-content" id="thirdLayer">
                                    {/* <!-- Settings Details --> */}
                                    <div className="tab-pane fade show active" id="setting1-content" role="tabpanel">
                                        <h5 className="m-0 mb-3 pb-3 fw-semibold border-bottom light-border-bottom px-2 head-text">General Settings</h5>

                                        <table className="table">
                                            <tbody id="settingsTable">
                                                <tr>
                                                    <td>Enable Chat Notifications</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="chatNotifications" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Allow Group Chats</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="groupChats" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Save Chat History</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="chatHistory" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mute Chats</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="muteChats" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Enable Read Receipts</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="readReceipts" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Auto-Delete Old Messages</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="autoDelete" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Enable Message Previews</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="messagePreviews" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Show Online Status</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="onlineStatus" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Enable Voice Notes</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="voiceNotes" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Allow File Attachments</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="fileAttachments" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="tab-pane fade p-3" id="setting2-content" role="tabpanel">
                                        <h5 className="m-0 mb-3 pb-3 fw-semibold border-bottom light-border-bottom px-2 head-text">Privacy Settings</h5>

                                        <table className="table">
                                            <tbody id="settingsTable">
                                                <tr>
                                                    <td>Enable Chat Notifications</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="chatNotifications" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Allow Group Chats</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="groupChats" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Save Chat History</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="chatHistory" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mute Chats</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="muteChats" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Enable Read Receipts</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="readReceipts" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Auto-Delete Old Messages</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="autoDelete" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Enable Message Previews</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="messagePreviews" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Show Online Status</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="onlineStatus" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Enable Voice Notes</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="voiceNotes" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Allow File Attachments</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="fileAttachments" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade p-3" id="setting3-content" role="tabpanel">
                                        <h5 className="m-0 mb-3 pb-3 fw-semibold border-bottom light-border-bottom px-2 head-text">Notification Settings</h5>
                                        <table className="table">
                                            <tbody id="settingsTable">
                                                <tr>
                                                    <td>Enable Chat Notifications</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="chatNotifications" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Allow Group Chats</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="groupChats" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Save Chat History</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="chatHistory" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mute Chats</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="muteChats" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Enable Read Receipts</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="readReceipts" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Auto-Delete Old Messages</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="autoDelete" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Enable Message Previews</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="messagePreviews" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Show Online Status</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="onlineStatus" />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Enable Voice Notes</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="voiceNotes" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Allow File Attachments</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" id="fileAttachments" defaultChecked />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                )}
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default ChatPage;