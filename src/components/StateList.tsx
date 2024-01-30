import { List, ListItemButton, ListItemText } from "@mui/material";

interface StateData {
    name : string,
    GISJOIN : string
};

interface StateListProps {
    stateList : StateData[],
    setSelectedState : (name : string) => void
};

export default function StateList({ stateList, setSelectedState } : StateListProps ) {
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
            {stateList.map((state) => (
                <ListItemButton key={state.name} onClick={() => setSelectedState(state.name)}>
                    <ListItemText primary={state.name}></ListItemText>
                </ListItemButton>
            ))}
        </List>
    );
}