import { Paper, Modal, Typography, Button, TextField, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
type medication = {
    name: string;
    description: string;
};
const initMed: medication = { name: "", description: "" };
export default function Prescription({ open, onDone }: { open: boolean; onDone: (data: any) => void }) {
    const [fields, setFields] = useState<medication[]>([{ ...initMed }]);
    const [diagnose, setDiagnose] = useState("");

    return (
        <Modal
            open={open}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
        >
            <Paper
                sx={{
                    height: "70%",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                }}
            >
                <Typography variant="h4" align="center" color="primary">
                    prespective
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{
                        ml: "auto",
                        my: 2,
                        "& >span": {
                            display: "none",
                        },
                        "&:hover > span": { display: "unset" },
                    }}
                    onClick={() => {
                        setFields(fields.concat({ ...initMed }));
                    }}
                >
                    <IconButton>
                        <AddIcon sx={{ color: "white" }} />
                    </IconButton>
                    <span>add more medications</span>
                </Button>
                <Box sx={{ overflow: "auto", height: "100%", p: 2, display: "flex", flexDirection: "column", my: 2 }}>
                    {fields.map((field, i) => (
                        <Box
                            display={"flex"}
                            alignItems="center"
                            sx={{ my: 2, border: "1px solid black", p: 2, borderRadius: 2 }}
                        >
                            <Box
                                display={"flex"}
                                alignItems="center"
                                flexDirection="column"
                                sx={{ width: "100%", mr: 1 }}
                            >
                                <TextField
                                    label={`Medication #${i} :`}
                                    value={field.name}
                                    placeholder="Medication"
                                    focused
                                    sx={{ width: "100%", mb: 2 }}
                                    onChange={(e: any) => {
                                        setFields((prev) => {
                                            const pr = [...prev];
                                            pr[i].name = e.target.value;
                                            return pr;
                                        });
                                    }}
                                />
                                <TextField
                                    label={`how to use #${i} :`}
                                    value={field.description}
                                    placeholder="Medication"
                                    focused
                                    sx={{ width: "100%" }}
                                    onChange={(e: any) => {
                                        setFields((prev) => {
                                            const pr = [...prev];
                                            pr[i].description = e.target.value;
                                            return pr;
                                        });
                                    }}
                                />
                            </Box>
                            <IconButton
                                onClick={() => {
                                    setFields((prev) => {
                                        return prev.filter((_, j) => i !== j);
                                    });
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                    <TextField
                        label={`Diagnose :`}
                        value={diagnose}
                        placeholder="Set the diagnose"
                        multiline
                        minRows={4}
                        focused
                        sx={{ width: "100%", mt: 3 }}
                        onChange={(e: any) => {
                            setDiagnose((prev) => e.target.value);
                        }}
                    />
                </Box>
                <Button
                    onClick={() => onDone({ medication: fields, diagnose })}
                    type="submit"
                    variant="contained"
                    sx={{ minWidth: "30rem", mt: "1" }}
                >
                    Submit
                </Button>
            </Paper>
        </Modal>
    );
}
