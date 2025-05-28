import { useState, useEffect, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz.withParams({
    headerTextColor: 'white',
    headerBackgroundColor: 'black',
});

const ShowEmployees = () => {
    const Navigate = useNavigate()
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("employees") || "[]");
        setEmployees(stored);
    }, []);

    const columns = useMemo(() => [
        { headerName: "Name", field: "name" },
        { headerName: "Email", field: "email" },
        { headerName: "Phone", field: "phone" },
        { headerName: "Role", field: "role" },
        { headerName: "Joining Date", field: "joiningDate" },
    ], []);

    return (
        <div className="flex justify-center mt-10">
            <div className="bg-white  rounded-2xl w-full min-h-[100%] ">
                <div className="flex justify-between items-center ">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center  uppercase">
                        <span className=' bg-[#269fe8] px-2 text-white  rounded'> Employee </span>  List
                    </h2>
                    <Button onClick={() => Navigate("/")} className=' bg-[#269fe8] p-2 text-white  rounded text-center'><FaPlus title='Add Employee' /></Button>
                </div>

                <div className="ag-theme-alpine" style={{ height: "100%", width: '100%' }}>
                    <AgGridReact
                        rowData={employees}
                        columnDefs={columns}
                        defaultColDef={{
                            flex: 1,
                            minWidth: 100,
                            sortable: true,
                            filter: true,
                            resizable: true,
                        }}
                        domLayout="autoHeight"
                        theme={myTheme}
                    />
                </div>
            </div>
        </div>
    );
};

export default ShowEmployees;
