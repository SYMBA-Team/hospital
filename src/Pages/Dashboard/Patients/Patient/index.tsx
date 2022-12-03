import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import History from "./History";
import PatientInterface from "./PatientInterface";
import Tests from "./Tests";
const dataI: { [key: string]: any } = {
    "63875be02c03016f1e17774c": {
        old: 24,
        data: [],
    },
    "": { old: 0, data: [] },
};
export default function Patient() {
    const { id } = useParams();
    const [data, setdata] = useState(dataI[id ?? ""]);
    useEffect(() => {
        setdata(dataI[id ?? ""]);
    }, [id]);

    const onDone = (d: any) => {
        if (!id) return;
        setdata((o: any) => ({ ...o, data: [d, ...o.data] }));
    };
    return (
        <Grid container id="Patient">
            <Grid item md={3}>
                <History id={id ?? ""} old={data.old} data={data} />
            </Grid>
            <Grid item md={6}>
                <PatientInterface onDone={onDone} />
            </Grid>
            <Grid item md={3}>
                <Tests />
            </Grid>
        </Grid>
    );
}
