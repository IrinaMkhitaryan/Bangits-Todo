import { useSelector } from 'react-redux';
import { RootState } from '~/store/store';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Box
} from '@mui/material';
import { PropTypes } from './PropTypes';

const RemovedTasksDialog = (props: PropTypes) => {
    const {
        open,
        handleClose,
    } = props;
    const deletedTodos = useSelector((state: RootState) => state.todos.deletedTodos);
console.log(deletedTodos);
    return (
        <Dialog onClose={handleClose} open={open} fullWidth>
            <DialogTitle>Removed</DialogTitle>
            <DialogContent>
                {deletedTodos.map(todo => (
                    <Box key={todo.id}>{todo.title}</Box>
                ))}

            </DialogContent>
        </Dialog>
    )
}
export default RemovedTasksDialog;