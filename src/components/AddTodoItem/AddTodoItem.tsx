
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { addTodo } from '../../store/slice';

const AddTodoItem = () => {
    const { register, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();

    return (
        <Box display='flex'
            flexDirection='column'
            component="form"
            onSubmit={handleSubmit((data) => {
                dispatch(addTodo(data));
                setValue('title', '');
                setValue('description', '');
                setValue('deadline', '');
            })}
        >
            <TextField
                margin='normal'
                size='small'
                placeholder='Title'
                {...register('title', { required: true })}
            />
            <TextField {...register('description', { required: false })}
                margin='normal'
                size='small'
                placeholder='Description'
            />
            <TextField {...register('deadline', { required: true })}
                margin='normal'
                size='small'
                type='date' />
            <TextField margin='normal' type='submit' value='Add' />
        </Box>
    );
};
export default AddTodoItem;
