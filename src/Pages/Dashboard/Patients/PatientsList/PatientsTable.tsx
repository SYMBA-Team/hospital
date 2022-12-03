import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Avatar, Button } from "@mui/material";
const start = new Date(2001, 0, 1);
const end = new Date(2003, 0, 3);

function randomDate() {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
const columns = [
    {
        field: "name",
        headerName: "Name",
        flex: 1,
        renderCell: (params: any) => {
            return (
                <>
                    <Avatar src={params.row.avatar} alt={params.value} sx={{ mr: 2 }} />
                    {params.value}
                </>
            );
        },
    },
    {
        field: "dateOfBirth",
        headerName: "Birth date",
        flex: 0.7,
        renderCell: () => {
            return randomDate().toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        },
    },
    { field: "city", headerName: "Home adress", flex: 0.7 },
    { field: "phone", headerName: "Phone", flex: 0.8 },

    {
        field: "id",
        headerName: "More details",
        flex: 0.8,
        renderCell: (params: any) => {
            return (
                <Button
                    sx={{
                        overflowX: "hidden",
                        display: "flex",
                        flexWrap: "nowrap",
                        justifyContent: "flex-start",
                    }}
                    variant="contained"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        return false;
                    }}
                >
                    More details
                </Button>
            );
        },
    },
];
export default function ToolbarGrid() {
    const { data } = useDemoData({
        dataSet: "Employee",
        rowLength: 25,
        maxColumns: 25,
    });
    return (
        <div style={{ height: 800, width: "100%" }}>
            <DataGrid sx={{ border: "none" }} columns={columns} rows={data.rows} rowHeight={80} />
        </div>
    );
}
