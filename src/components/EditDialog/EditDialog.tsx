
import {
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material';
import EditTodoItem from '../EditTodoItem/EditTodoItem';
import { PropTypes } from './PropTypes';

const EditDialog = (props: PropTypes) => {
    const {
        open,
        handleClose,
        item
    } = props;

    return (
        <Dialog onClose={handleClose} open={open} fullWidth>
            <DialogTitle>Edit Item</DialogTitle>
            <DialogContent>
                <EditTodoItem item={item} handleClose={handleClose} />
            </DialogContent>
        </Dialog>
    )
}
export default EditDialog;