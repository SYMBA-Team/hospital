import { Box, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useZxing } from "react-zxing";

export default function NewPatients() {
    const [isRecording, setIsRecording] = useState(true);
    const [result, setResult] = useState("");
    const navigate = useNavigate();

    const { ref } = useZxing({
        onResult(result) {
            const id = result.getText();
            if (id) {
                setResult(id);
                setIsRecording(false);
            }
        },
    });
    useEffect(() => {
        if (result)
            setTimeout(() => {
                navigate("/dashboard/Patients/" + result);
            }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result]);
    return (
        <Box sx={{}}>
            <Paper sx={{ mx: "auto", width: "600px", p: 8 }}>
                <Box>
                    <Typography variant="h3" fontWeight={900} align="center">
                        Check In
                    </Typography>
                    {isRecording && <video width={"100%"} ref={ref} />}
                </Box>
            </Paper>
        </Box>
    );
}
