import { Box, Modal, Typography } from "@mui/material";
import ExampleLineChart from "./ExampleLineChart";
import StartLetterPieChart from "./StartLetterPieChart";

interface ChartModelProps {
    open: boolean,
    onClose: () => void,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ChartsModal({ open, onClose }: ChartModelProps) {


    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ "z-index":5001 }}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Chart Examples
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Blah Blah Blah
                </Typography>
                <StartLetterPieChart/>
            </Box>

        </Modal>
    )
}