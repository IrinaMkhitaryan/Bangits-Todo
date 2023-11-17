
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { addTodo } from '../../store/slice';
import schema from '../../schemaValidation/schema';

const AddTodoItem = () => {
    const { register, handleSubmit, setValue, formState } = useForm({
        resolver: yupResolver(schema())
    });
    const { errors } = formState;
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
                error={!!errors.title?.message}
                margin='normal'
                size='small'
                placeholder='Title'
                {...register('title', { required: true })}
                helperText={errors.title?.message}
            />
            <TextField {...register('description', { required: false })}
                margin='normal'
                size='small'
                placeholder='Description'
            />
            <TextField {...register('deadline', { required: true })}
                error={!!errors.deadline?.message}
                margin='normal'
                size='small'
                type='date'
                helperText={errors.deadline?.message} />
            <TextField margin='normal' type='submit' value='Add' />
        </Box>
    );
};
export default AddTodoItem;
