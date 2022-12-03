import { Button, Grid, MenuItem, Paper, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import PatientsTable from "./PatientsTable";

const Filters = [{ label: "All", value: "all" }];

export default function PatientsList() {
    const [filter, setFilter] = useState("all");
    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ mr: "auto" }}>
                    Patients:{" "}
                    <Select
                        sx={{
                            color: "palette.primary",

                            ".MuiOutlinedInput-notchedOutline": {
                                border: 0,
                                outline: "none",
                            },
                            ".MuiSelect-outlined": {
                                borderRadius: 0,
                                p: 0,
                            },
                        }}
                        value={filter}
                        onChange={handleChange}
                    >
                        {Filters.map(({ value, label }) => (
                            <MenuItem value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                </Typography>
                <Button variant="contained" component={Link} to="/dashboard/patients/new">
                    Check in
                </Button>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                    <PatientsTable />
                </Paper>
            </Grid>
        </Grid>
    );
}
