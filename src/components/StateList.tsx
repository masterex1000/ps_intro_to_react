import { List, ListItemButton, ListItemText } from "@mui/material";
import { StateRecord } from "../library/DataSources";
import React from "react";


interface StateListProps {
    stateList : StateRecord[],
    setSelectedState : (name : string) => void
};

export default function StateList({ stateList, setSelectedState } : StateListProps ) {

    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const handleListItemClick = (
        _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        if(selectedIndex === index) {
            setSelectedIndex(-1);
            setSelectedState("");
            return;
        }

        setSelectedIndex(index);
        setSelectedState(stateList[index].name);
    };

    return (
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
            {stateList.map((state, index) => (
                <ListItemButton
                    key={state.name} 
                    selected={selectedIndex === index} 
                    onClick={(event) => handleListItemClick(event, index)}>

                    <ListItemText primary={state.name}></ListItemText>
                </ListItemButton>
            ))}
        </List>
    );
}