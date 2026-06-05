
import React, { useEffect, useRef, useState } from "react"
function TaskCheckboxTable() {

  const tableData = [
    {
      date: "12/06/2024",
      day: "Wednesday",
      task: "Create homepage banner designs",
      assign: "John Smith",
      team: "Design Team",
    },
    {
      date: "12/07/2024",
      day: "Thursday",
      task: "Develop website header component",
      assign: "Alice Johnson",
      team: "Development Team",
    },
    {
      date: "12/08/2024",
      day: "Friday",
      task: "Write blog post on holiday themes",
      assign: "Emma Brown",
      team: "Content Team",
    },
    {
      date: "12/09/2024",
      day: "Saturday",
      task: "Test responsive design",
      assign: "Mark Wilson",
      team: "QA Team",
    },
    {
      date: "12/10/2024",
      day: "Thursday",
      task: "Create promotional email template",
      assign: "Sarah Taylor",
      team: "Marketing Team",
    },
    {
      date: "12/11/2024",
      day: "Monday",
      task: "Organize team meeting",
      assign: "Oliver King",
      team: "HR Team",
    },
    {
      date: "12/12/2024",
      day: "Tuesday",
      task: "Update project timeline",
      assign: "Emily Davis",
      team: "Project Management",
    },
    {
      date: "12/13/2024",
      day: "Wednesday",
      task: "Fix navigation menu bug",
      assign: "Chris Brown",
      team: "Development Team",
    },
    {
      date: "12/14/2024",
      day: "Thursday",
      task: "Design user testimonials section",
      assign: "Lisa White",
      team: "Design Team",
    },
    {
      date: "12/15/2024",
      day: "Friday",
      task: "Optimize website for SEO",
      assign: "David Moore",
      team: "SEO Team",
    },
  ];

  const tableRef1 = useRef(null);
  
    useEffect(() => {
       // Table 1
    
      const table = $(tableRef1.current).DataTable({
          responsive: true,
        lengthMenu: [5, 15, 20, 25],
      });
  
      return () => {
        if ($.fn.DataTable.isDataTable(tableRef1.current)) {
          table.destroy();
        }
      };
    }, []);

  const [selectedRows, setSelectedRows] = useState([]);

  // Select Single Row
  const handleRowSelect = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((item) => item !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  // Select All Rows
  const handleSelectAll = () => {
    if (selectedRows.length === tableData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tableData.map((_, index) => index));
    }
  };

  return (
    <div className="table-responsive">

      <table ref={tableRef1} id="datamain4" className="display table table-striped table-bordered" >
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"className="selectAllTable" defaultChecked={selectedRows.length === tableData.length} onChange={handleSelectAll}/>
            </th>
            <th>Date</th>
            <th>Day</th>
            <th>Task</th>
            <th>Assign To</th>
            <th>Team</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>
                <input  type="checkbox" className="row-checkbox" defaultChecked={selectedRows.includes(index)} onChange={() => handleRowSelect(index)}/>
              </td>
              <td>{item.date}</td>
              <td>{item.day}</td>
              <td>{item.task}</td>
              <td>{item.assign}</td>
              <td>{item.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskCheckboxTable;