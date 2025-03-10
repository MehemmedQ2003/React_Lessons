import { useState } from 'react'
import Headers from './components/Headers';
import EmployeeList from './components/EmployeeList';
import AddEmployeeModal from './components/AddEmployeeModal';

function App() {
    const [employees, setEmployees] = useState([{
        id: 1,
        name: 'Muhammad Gardashov',
        email: 'mehemmed.qardasov2003@gmail.com',
        address: "Hovsan, Baku",
        phone: '0557135290',
        gender: 'male',
        department: 'IT'
    }]);

    function addEmployee(newEmployee) {
        setEmployees(prevEmployees => [
            ...prevEmployees,
            {
                ...newEmployee,
                id: Math.max(...prevEmployees.map(employee => employee.id), 0) + 1
            }
        ])
    }

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);


    return (
        <div className='container'>
            <div className="table-wrapper">
                <Headers onOpenAddModal={() => setIsAddModalOpen(true)} />
                <EmployeeList employees={employees} />
                <AddEmployeeModal isOpen={isAddModalOpen} onCloseAddModal={() => setIsAddModalOpen(false)} onAddEmployee={addEmployee}/>
            </div>
        </div>
    )
}

export default App
