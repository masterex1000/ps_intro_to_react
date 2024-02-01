import { List, ListItemButton, ListItemText, TextField } from "@mui/material";
import { StateData, CountyData, CountyRecord } from "../library/DataSources.ts"
import { useEffect, useState } from "react";

interface CountyListProps {
    counties: CountyRecord[]
};

export default function CountyList({ counties }: CountyListProps) {

    const [countySearch, setCountySearch] = useState("");
    const [filteredCounties, setFilteredCounties] = useState([] as CountyRecord[]);

    useEffect(() => {

        if (countySearch.length === 0) {
            setFilteredCounties(counties);
            return;
        }

        const filteredList = counties.filter(
            (entry) => entry.name.toLowerCase().includes(
                countySearch.toLowerCase()
                )
            );

        setFilteredCounties(filteredList);

    }, [counties, countySearch])

    return (
        <>
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                value={countySearch}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCountySearch(event.target.value);
                }}
            />
            <List
                sx={{
                    width: '100%',
                    // maxWidth: 360,
                    bgColor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 }
                }}>
                {filteredCounties.map((county) => (
                    <ListItemButton key={county.name}>
                        <ListItemText primary={county.name}></ListItemText>
                    </ListItemButton>
                ))}
            </List>
        </>
    );
}