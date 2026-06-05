function Settingcard({ Title }) {
    return (
        <>
            <div className="border-bottom pb-3 mb-3">
                <h2 className="text-capitalize m-0 mb-2 fs-5 head-text">{Title.name1}</h2>
                <p className="para-text m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium neque explicabo ut voluptatum ipsum nobis alias, quisquam suscipit eveniet fugit inventore quia officiis molestias, consequuntur repellat provident blanditiis velit adipisci deleniti optio eligendi. Distinctio accusamus unde quam! Autem magnam dicta quae assumenda sint incidunt iste! Mollitia eum excepturi nisi fugiat!</p>
            </div>
            <table className="table mb-3">
                <tbody id="settingsTable">
                    <tr>
                        <td className="fs-7">Enable Chat Notifications</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="chatNotifications"  defaultChecked/>
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-7">Allow Group Chats</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="groupChats" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-7">Save Chat History</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="chatHistory" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-7">Mute Chats</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="muteChats" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-7">Enable Read Receipts</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="readReceipts" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-7">Auto-Delete Old Messages</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="autoDelete" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-7">Enable Message Previews</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="messagePreviews" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-7">Show Online Status</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="onlineStatus" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-7">Enable Voice Notes</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="voiceNotes" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="fs-7">Allow File Attachments</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id="fileAttachments" defaultChecked />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="border p-2 mb-3">
                <div className="mb-3">
                    <h3 className="fs-6 m-0 mb-2 head-text text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                    <select className="form-select fs-7 rounded-0 text-capitalize input-text input-bg" aria-label="Default select example">
                        <option defaultValue>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="mb-3">
                    <h3 className="fs-6 m-0 mb-2 head-text text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                    <select className="form-select fs-7 rounded-0 text-capitalize input-text input-bg" aria-label="Default select example">
                        <option defaultValue>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className=" d-flex justify-content-end gap-2">
                <button className="btn red-btn">reset to default changes</button>
                <button className="btn prime-btn">save changes</button>
            </div>
        </>
    );
}
export default Settingcard;