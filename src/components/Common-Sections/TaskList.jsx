import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClose, faFloppyDisk, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// ================= UI Framework =================
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal } from "bootstrap";
import { initializeCollapseCards, handleSingleToggle } from "../../assets/collapseHandler";


function TaskList() {

  useEffect(() => {
  initializeCollapseCards();
}, [])

    const [tasks, setTasks] = useState(() => {
        try {
            const saved = localStorage.getItem("tasks");
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error("Failed to load tasks from localStorage", error);
            return [];
        }
    });
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDetail, setTaskDetail] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const modalRef = useRef(null);

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function formatDate(date) {
        const d = new Date(date);
        const month = ("0" + (d.getMonth() + 1)).slice(-2);
        const day = ("0" + d.getDate()).slice(-2);
        const year = d.getFullYear();
        return `${month}-${day}-${year}`;
    }

    function handleAddTask(e) {
        e.preventDefault();
        if (taskTitle.trim() && taskDetail.trim() && taskDate.trim()) {
            const newTask = {
                id: Date.now(),
                title: taskTitle.trim(),
                detail: taskDetail.trim(),
                taskDate: taskDate,
                createdDate: new Date().toISOString(),
                isEditing: false,
            };
            setTasks((prev) => [...prev, newTask]);
            setTaskTitle("");
            setTaskDetail("");
            setTaskDate("");

            // Close the Bootstrap modal
            if (modalRef.current) {
                const modalInstance = Modal.getInstance(modalRef.current);
                if (modalInstance) {
                    // Clean up after the hide transition completes
                    const cleanup = () => {
                        document.body.classList.remove("modal-open");
                        document.body.style.removeProperty("overflow");
                        document.body.style.removeProperty("padding-right");
                        document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
                        modalRef.current?.removeEventListener("hidden.bs.modal", cleanup);
                    };
                    modalRef.current.addEventListener("hidden.bs.modal", cleanup);
                    modalInstance.hide();
                }
            }
        }
    }

    function handleDelete(id) {
        const isConfirmed = confirm("Are you sure you want to delete this item?");
        if (isConfirmed) {
            setTasks((prev) => prev.filter((task) => task.id !== id));
        }
    }

    function handleEdit(id) {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, isEditing: true } : task
            )
        );
    }

    function handleSave(id) {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, isEditing: false } : task
            )
        );
    }

    function handleTaskFieldChange(id, field, value) {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, [field]: value } : task
            )
        );
    }

    return (
        <>
            <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 position-relative">
                <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                    Task List
                   <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" aria-expanded="true"  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Link>
                </h2>
                <div id="taskListmain" className="collapse tasklist show p-2 ">
                    <div className="text-capitalize mb-2 fw-semibold">
                        <Link
                            to="#"
                            className="prime-text"
                            data-bs-toggle="modal"
                            data-bs-target="#taskModal"
                        >
                            add tasks
                        </Link>
                    </div>
                    <ul className="task-list">
                        {tasks.map((task) => (
                            <li key={task.id} className="task-item">
                                {/* Created Date */}
                                <div className="created-date">
                                    <span className="fw-bold">Task Created Date : </span>
                                    {formatDate(task.createdDate)}
                                </div>

                                {/* Editable Title */}
                                {task.isEditing ? (
                                    <input
                                        type="text"
                                        className="form-control mb-1 input-bg"
                                        value={task.title}
                                        onChange={(e) =>
                                            handleTaskFieldChange(task.id, "title", e.target.value)
                                        }
                                        autoFocus
                                    />
                                ) : (
                                    <h3 className="editable">{task.title}</h3>
                                )}

                                {/* Editable Detail */}
                                {task.isEditing ? (
                                    <textarea
                                        className="form-control mb-1 input-bg overflow-hidden"
                                        rows="3"
                                        value={task.detail}
                                        onChange={(e) =>
                                            handleTaskFieldChange(task.id, "detail", e.target.value)
                                        }
                                    />
                                ) : (
                                    <p className="editable">{task.detail}</p>
                                )}

                                {/* Editable Task Date */}
                                {task.isEditing ? (
                                    <input
                                        type="date"
                                        className="form-control mb-1 input-bg head-text"
                                        value={task.taskDate}
                                        onChange={(e) =>
                                            handleTaskFieldChange(task.id, "taskDate", e.target.value)
                                        }
                                        style={{ display: 'block' }}
                                    />
                                ) : (
                                    <div className="task-date">
                                        <span className="fw-bold">Task Date : </span>
                                        {formatDate(task.taskDate)}
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="actions">
                                    {task.isEditing ? (
                                        <button
                                            className="save-btn"
                                            onClick={() => handleSave(task.id)}
                                            style={{ display: 'inline-block' }}
                                        >
                                            <i className="fa-solid fa-floppy-disk text-success"></i>
                                        </button>
                                    ) : (
                                        <button
                                            className="edit-btn"
                                            onClick={() => handleEdit(task.id)}
                                            style={{ display: 'inline-block' }}
                                        >
                                            <i className="fa-solid fa-pen-to-square text-success"></i>
                                        </button>
                                    )}
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(task.id)}
                                    >
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Add Task Modal */}
            <div className="modal fade" id="taskModal" tabIndex="-1" aria-labelledby="liveToastLabel" aria-hidden="true" ref={modalRef}>
                <div className="modal-dialog">
                    <div className="modal-content rounded-4">
                        <div className="modal-header d-flex justify-content-between card-bg p-2">
                            <h2 className="text-capitalize fw-bold modal-title head-text fs-6" id="liveToastLabel">
                                Add Task
                            </h2>
                            <button
                                type="button"
                                className="btn prime-btn px-2 py-1"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                        <div className="modal-body card-bg rounded-bottom-2 p-2">
                            <form
                                className="add-task-container"
                                onSubmit={handleAddTask}
                            >
                                <input
                                    type="text"
                                    placeholder="Task Title"
                                    className="input-bg"
                                    value={taskTitle}
                                    onChange={(e) => setTaskTitle(e.target.value)}
                                    required
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Task Detail"
                                    className="input-bg overflow-hidden"
                                    value={taskDetail}
                                    onChange={(e) => setTaskDetail(e.target.value)}
                                    required
                                />
                                <input
                                    type="date"
                                    className="input-bg head-text"
                                    value={taskDate}
                                    onChange={(e) => setTaskDate(e.target.value)}
                                    required
                                />
                                <button type="submit">Add Task</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskList;