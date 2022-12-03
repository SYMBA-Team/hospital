import { Paper, Box, Typography, Chip, Grid, IconButton } from "@mui/material";
import { alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { Result } from "../Tests";

export default function History({ id, old, data }: { id: string; old: number; data: any[] }) {
    return (
        <Paper sx={{ width: "100%", py: 6, height: "calc(100vh - 10rem)", px: 2 }}>
            <Box sx={{ px: 2, overflow: "auto", height: "100%" }} className="hideThumbs">
                <Box sx={{ display: "flex" }}>
                    <Typography>
                        ID: <span style={{ fontWeight: "bold", fontSize: "1.1em", color: "black" }}>{id}</span>
                    </Typography>
                    <Typography sx={{ ml: "auto" }}>
                        Age: <span style={{ fontWeight: "bold", fontSize: "1.2em", color: "blue" }}>{old}</span>
                    </Typography>
                </Box>
                <Typography variant="h4" fontWeight={900}>
                    Alla Rakik
                </Typography>
                <Typography variant="h5" fontWeight={700} sx={{ color: (theme) => theme.palette.grey[600], my: 3 }}>
                    Medical history
                </Typography>

                <Visit name={"Bradycardia"} date={"2019-07-07"} label={"Physical Analysis"} />
                <Visit name={"Bradycardia"} date={"2019-07-07"} label={"Physical Analysis"} borderColor={"#F36122"} />
                <Visit name={"Bradycardia"} date={"2019-07-07"} label={"Physical Analysis"} />
                <Visit name={"Bradycardia"} date={"2019-07-07"} label={"Physical Analysis"} />
                <Visit name={"Bradycardia"} date={"2019-07-07"} label={"Physical Analysis"} />
                <Visit name={"Bradycardia"} date={"2019-07-07"} label={"Physical Analysis"} />
                <Visit name={"Bradycardia"} date={"2019-07-07"} label={"Physical Analysis"} />
            </Box>
        </Paper>
    );
}
function Visit({
    label,
    date,
    name,
    borderColor = "#22A8F3",
}: {
    label: string;
    date: string;
    name: string;
    borderColor?: string;
}) {
    const [open, setOpen] = useState(false);
    return (
        <Grid container sx={{ mt: 4 }}>
            <Box sx={{ height: "100%", width: "100%" }}>
                <Grid
                    container
                    sx={{ borderBottom: "1px solid #c0c0c0", pb: 2, overflow: "auto", height: "100%" }}
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <Grid item xs={8}>
                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.grey[600] }}>
                            {date}
                        </Typography>
                        <Typography variant="h4" fontWeight={900}>
                            {name}
                        </Typography>
                        <Chip
                            label={label}
                            sx={{
                                border: "1px solid transparent",
                                borderColor,
                                backgroundColor: borderColor ? alpha(borderColor, 0.2) : "#22A8F341",
                                borderRadius: 0.8,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} sx={{ alignItems: "center", justifyContent: "end", display: "flex" }}>
                        <IconButton>
                            <KeyboardArrowDownIcon
                                sx={{
                                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform .3s ease-in",
                                }}
                            />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sx={{ display: open ? "flex" : "none", flexDirection: "column" }}>
                        <Typography variant="h5" sx={{ mt: 3, color: blue[600] }}>
                            Diognosis Info
                        </Typography>
                        <Grid container sx={{ width: "100%" }}>
                            <Grid container sx={{ backgroundColor: "#22A8F341", p: 2, borderRadius: "1rem" }}>
                                <Grid item xs={6}>
                                    <Typography variant="h6" fontWeight={900}>
                                        Date
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.grey[600] }}>
                                        {date}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" fontWeight={900}>
                                        Doctor
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.grey[600] }}>
                                        Madadi Youcef
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" fontWeight={900}>
                                        Hospital
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.grey[600] }}>
                                        Bouzeri3a mor dora
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" fontWeight={900} sx={{ my: 3 }}>
                                    Analysis Codes
                                </Typography>
                                <Box>
                                    <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                                    <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                                    <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                                    <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}
