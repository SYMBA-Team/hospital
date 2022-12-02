import { Chip, FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export function Multiple({
    onChange,
    defaultValue = [],
    label,
}: {
    onChange: (values: string[]) => void;
    defaultValue: string[];
    label: string;
}) {
    const [values, setValues] = useState(defaultValue);
    const [currValue, setCurrValue] = useState("");
    useEffect(() => {
        onChange(values);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);
    const handleKeyUp: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
        if (e.keyCode === 32) {
            setValues((oldState) => [...oldState, (e.target as any).value]);
            setCurrValue("");
            e.preventDefault();
            return false;
        }
    };

    const handleChange = (e: any) => {
        setCurrValue(e.target.value);
    };

    const handleDelete = (index: number) => {
        let arr = [...values];
        arr.splice(index, 1);
        setValues(arr);
    };
    return (
        <FormControl>
            <TextField
                focused
                label={/* @ts-ignore */ label}
                onKeyDown={handleKeyUp}
                margin="normal"
                fullWidth
                value={currValue}
                placeholder="Click on space to add more"
                onChange={handleChange}
            />
            <div className={"container"}>
                {values.map((item, index) => (
                    <Chip
                        color="secondary"
                        sx={{ mr: 1 }}
                        size="small"
                        onDelete={() => handleDelete(index)}
                        label={item}
                    />
                ))}
            </div>
        </FormControl>
    );
}
