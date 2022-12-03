import { Box, Button } from "@mui/material";
import { useState } from "react";
import Prescription from "./Prescription";

export default function PatientInterface({ onDone }: any) {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", pt: 3 }}>
            <img src="/images/body.png" alt="body" height={"95%"} style={{ margin: "4rem auto" }} />
            <Button
                variant="contained"
                sx={{ mx: "auto", my: 2 }}
                onClick={() => {
                    setOpen(true);
                }}
            >
                Give Prescription
            </Button>
            <Prescription open={open} onDone={onDone} />
        </Box>
    );
}
