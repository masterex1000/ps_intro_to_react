import { Box, Modal, Typography } from "@mui/material"
import StartLetterPieChart from "./StartLetterPieChart"
import CountyLineChart from "./CountyLineChart"
import CountyHistogramChart from "./CountyHistogramChart"

interface ChartModelProps {
    open: boolean,
    onClose: () => void,
}

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
    maxHeight: 800
}

export default function ChartsModal({ open, onClose }: ChartModelProps) {


    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ "z-index": 5001 }}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Chart Examples
                </Typography>
                <StartLetterPieChart />
                <CountyLineChart></CountyLineChart>
                <CountyHistogramChart></CountyHistogramChart>
            </Box>

        </Modal>
    )
}