import React, {useMemo} from 'react';
import "./DataGrid.css"
import MaterialReactTable from "material-react-table";
import {userData} from "../../data/index.js";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const DataGrid = () => {
    const columns = useMemo(() => [
        {
            accessorKey: "name.firstName",
            header: "First name",
        },
        {
            accessorKey: "name.lastName",
            header: "Last name",
        },
        {
            accessorKey: "address",
            header: "Address",
        },
        {
            accessorKey: "city",
            header: "City",
        },
        {
            accessorKey: "state",
            header: "State",
        },
    ], [])
    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: "dark"
            }
        })
        , [])
    return (
        <div className="table-container">
            <ThemeProvider theme={theme}>
                <MaterialReactTable columns={columns} data={userData}/>
            </ThemeProvider>
        </div>
    );
};

export default DataGrid;