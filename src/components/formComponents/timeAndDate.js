// import dayjs from 'dayjs';
import moment from 'moment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
const TimeAndDate = ({ startDateHandler, startTimeHandler, endDateHandler, endTimeHandler }) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                    <MobileDatePicker
                        // className='mt-3'
                        label="Start Date"
                        // value={startD}
                        onChange={(newValue) =>
                            startDateHandler(moment(newValue.$d.toISOString()).format('YYYY-MM-DD'))
                        }
                    />
                </DemoItem>
                <DemoItem>
                    <MobileTimePicker
                        className='mt-3'
                        label="Start Time"
                        // value={startT}
                        onChange={(newValue) =>
                            startTimeHandler(moment(newValue.$d.toISOString()).format("HH:mm"))}
                    />
                </DemoItem>
                <DemoItem>
                    <MobileDatePicker
                        className='mt-3'
                        label="End Date"
                        // value={endD}
                        onChange={(newValue) => endDateHandler(moment(newValue.$d.toISOString()).format('YYYY-MM-DD'))}
                    />
                </DemoItem>
                <DemoItem>
                    <MobileTimePicker
                        className='mt-3'
                        label="Stop Time"
                        // value={endT}
                        onChange={(newValue) => endTimeHandler(moment(newValue.$d.toISOString()).format("HH:mm"))}
                    />
                </DemoItem>
            </LocalizationProvider>
        </>
    )
}

export default TimeAndDate;