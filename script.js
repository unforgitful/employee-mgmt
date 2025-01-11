document.getElementById("addEmployeeBtn").addEventListener("click",function(){
    const employeeName = prompt("Enter Employee Name");
    if (employeeName) {
        const roles = ['HR Staff', 'IT Staff', 'Network Staff', 'Security Staff'];
        let roleDropdown = '<select>';
        roles.forEach(role => {
            roleDropdown += `<option value="${role}">${role}</option>`;
        })
        roleDropdown += '</select>';

        const clients = ['Client A', 'Client B', 'Client E', 'Client D'];
        let clientDropdown = '<select>';
        clients.forEach(client => {
            clientDropdown += `<option value="${client}">${client}</option>`;

        });

        clientDropdown += '</select>';
        
        const tableBody = document.getElementById("employeeTable");

        const newRow = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = employeeName;

        const roleCell = document.createElement("td");
        roleCell.innerHTML = roleDropdown;

        const clientCell = document.createElement("td");
        clientCell.innerHTML = clientDropdown;

        const statusCell = document.createElement("td");

        const statusButton = document.createElement("button")
        statusButton.textContent = "Active";
        statusButton.classList.add("status-button", "active");
        statusButton.addEventListener("click", function() {
            toggleStatus(statusButton);
        });

        statusCell.appendChild(statusButton);

        const optionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa fa-trash">Delete</i>';
        // deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            deleteEmployee(newRow);
        });

        optionCell.appendChild(deleteButton);

        newRow.appendChild(nameCell);
        newRow.appendChild(roleCell);
        newRow.appendChild(clientCell);
        newRow.appendChild(statusCell);
        newRow.appendChild(optionCell);

        tableBody.appendChild(newRow);
    }
});


function toggleStatus(button) {
    if (button.classList.contains("active")) {
        button.classList.remove("active");
        button.classList.add("inactive");
        button.textContent = "Inactive";
    } else {
        button.classList.remove("inactive");
        button.classList.add("active");
        button.textContent = "Active";
    }
}

function deleteEmployee(row) {
    if (confirm("Are you sure you want to delete this employee?")){
       row.remove(); 
    }
    
}