import {
    Avatar,
    Box,
    Chip,
    Divider,
    Grid,
    IconButton,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Typography,
} from "@mui/material";
import Orders from "Components/Orders";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Calendar } from "./Calendar";
import { green, orange } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import { addDays, startOfDay, startOfWeek } from "date-fns";
import EditIcon from "@mui/icons-material/Edit";

const Filters = [{ label: "this week", value: "week" }];
type TaskI = { state: "completed" | "uncompleted"; title: string; date: Date; type: "event" | "reminder" };
const tasks: TaskI[] = [
    {
        state: "completed",
        title: "Send health state to Oussama SEDDIKI",
        date: new Date("December 03, 2022"),
        type: "reminder",
    },
    {
        state: "completed",
        title: "Anis ADLAOUI will Visit to submit its X-RAY",
        date: new Date("December 05, 2022"),
        type: "reminder",
    },
    { state: "uncompleted", title: "Doctors meeting", date: new Date("December 05, 2022"), type: "reminder" },
];

export default function Home() {
    const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));

    const onChange = (newDate: any) => setDate(newDate);
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8}>
                <Paper
                    elevation={4}
                    sx={{
                        py: 6,
                        px: 4,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Tasks />
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item container xs={12} md={4} spacing={3}>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Calendar date={date} onChange={onChange} />
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper elevation={4} sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                        <Orders />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

function Tasks() {
    const [filter, setFilter] = useState("week");
    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };
    const finished = tasks.filter((elm) => elm.state === "completed").length;
    const all = tasks.length;
    const startOfweek = startOfWeek(new Date());
    const startOfToday = startOfDay(new Date());
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body1">
                    {finished} task completed out of {all}
                </Typography>
                <Typography variant="body1" sx={{ ml: "auto" }}>
                    Show{" "}
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
                        id="filter"
                        value={filter}
                        onChange={handleChange}
                    >
                        {Filters.map(({ value, label }) => (
                            <MenuItem value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                </Typography>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "6px",
                    my: 4,
                    bgcolor: (theme) => theme.palette.grey[500],
                    borderRadius: "3px",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        width: `${Math.floor((finished / all) * 100)}%`,
                        height: "100%",
                        top: 0,
                        left: 0,
                        bgcolor: green["500"],
                        borderRadius: "3px",
                    }}
                ></Box>
            </Box>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: "bold",
                }}
            >
                03 December, Saturday
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {Array<Date | null>(7)
                    .fill(null)
                    .map((elm, i) => {
                        const day = addDays(startOfweek.getTime(), i);
                        return <DateDay date={day} selected={startOfToday.getTime() === day.getTime()} />;
                    })}
            </Box>
            <Divider sx={{ my: 2 }} />
            {tasks.map((task, i) => (
                <Task {...task} />
            ))}
        </Box>
    );
}
function Task({ state, title, date }: TaskI) {
    const [hover, setHover] = useState(false);
    const HoverInHandler: any = () => setHover(true);
    const HoverOutHandler: any = () => setHover(false);
    return (
        <Paper
            onMouseEnter={HoverInHandler}
            onMouseLeave={HoverOutHandler}
            sx={{
                px: 6,
                py: 2,
                my: 1,
                borderRadius: 0.5,
            }}
        >
            <Typography variant="h6" fontWeight={"700"}>
                {title}
            </Typography>
            <Typography variant="subtitle1">
                Due date:{" "}
                <span style={{ fontWeight: "700" }}>
                    {date.toLocaleString("En-en", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                    })}
                </span>
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
                <Avatar src="/images/pic_1.JPG" alt="Youcef Madadi" />
                <Typography variant="h6" sx={{ my: "auto", ml: 2, color: (theme) => theme.palette.grey["500"] }}>
                    Youcef Madadi
                </Typography>
                <Box
                    sx={{
                        ml: "auto",
                    }}
                >
                    {hover && (
                        <>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </>
                    )}
                    <Chip
                        label={state}
                        sx={{
                            borderRadius: 0.7,
                            ml: 2,
                            my: 1,
                            color: "white",
                            backgroundColor: state === "completed" ? green["500"] : orange["500"],
                        }}
                    />
                </Box>
            </Box>
        </Paper>
    );
}

function DateDay({ date, selected = false }: { date: Date; selected: boolean }) {
    return (
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Typography
                variant="h6"
                sx={{
                    color: (theme) => theme.palette.grey["500"],
                    fontWeight: "bold",
                    mt: 6,
                }}
            >
                {date.toLocaleDateString("En-en", { weekday: "short" })}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    bgcolor: selected ? "#109CF1" : "inherit",
                    color: selected ? "white" : (theme) => theme.palette.grey["500"],
                    px: 2,
                    py: 1.5,
                    borderRadius: "50%",
                }}
            >
                {date.toLocaleDateString("En-en", { day: "2-digit" })}
            </Typography>
        </Box>
    );
}
