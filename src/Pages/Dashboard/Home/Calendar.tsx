import { Paper, styled } from "@mui/material";
import { CalendarPicker, CalendarPickerProps } from "@mui/x-date-pickers/CalendarPicker";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function Calendar({ date, onChange }: { date: Dayjs | null; onChange: (newDate: any) => void }) {
    const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
        transform: scale(calc(1.4)) translate(0, 1rem);
        margin: auto;
    `;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Paper elevation={4} sx={{ width: "100%", pt: 10, pb: 8 }}>
                <CustomCalendarPicker date={date} onChange={onChange} />
            </Paper>
        </LocalizationProvider>
    );
}
