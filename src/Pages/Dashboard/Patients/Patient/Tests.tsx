import { Paper, Typography, Grid, Box } from "@mui/material";

export default function Tests() {
    return (
        <Paper sx={{ width: "100%", py: 6, height: "calc(100vh - 10rem)", px: 2 }}>
            <Box sx={{ overflow: "auto", height: "100%", px: 2 }} className="hideThumbs">
                <Typography variant="h5" fontWeight={700} sx={{ color: (theme) => theme.palette.grey[600] }}>
                    Analysis Codes
                </Typography>
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="RBC" interval={[60, 70]} value={62} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
                <Result unit="%" id="WBC" interval={[80, 90]} value={70} />
            </Box>
        </Paper>
    );
}
export function Result({ unit, interval, value, id }: { unit: string; interval: number[]; value: number; id: string }) {
    return (
        <Paper
            sx={{
                bgcolor: (theme) => theme.palette.grey[100],
                borderRadius: 0.4,
                p: 2,
                my: 2,
                border: "1px solid #EBEAEF",
            }}
            elevation={0}
        >
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="body1" fontWeight={700}>
                        {id}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography
                        align="center"
                        variant="body1"
                        fontWeight={700}
                        sx={{ color: (theme) => theme.palette.grey[600] }}
                    >
                        {value}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography
                        align="right"
                        variant="body1"
                        fontWeight={700}
                        sx={{ color: (theme) => theme.palette.grey[600] }}
                    >
                        {interval[0]}-{interval[1]} {unit}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
