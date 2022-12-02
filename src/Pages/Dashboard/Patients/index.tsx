import { Grid, MenuItem, Paper, Select, SelectChangeEvent, Typography } from "@mui/material";
import Orders from "Components/Orders";
import { useState } from "react";

const Filters = [{ label: "All", value: "all" }];

export default function Patients() {
    const [filter, setFilter] = useState("all");
    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ ml: "auto" }}>
                    Patients:{" "}
                    <Select
                        sx={{
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
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                    <Orders />
                </Paper>
            </Grid>
        </Grid>
    );
}
