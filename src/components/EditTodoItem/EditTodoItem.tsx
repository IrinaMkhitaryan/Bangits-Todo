import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../store/slice';
import { Box, TextField } from '@mui/material';
import { PropTypes } from '~/components/EditTodoItem/PropTypes';

const EditTodoItem = (props: PropTypes) => {
  const { item, handleClose } = props;
  
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: item?.id,
      title: item?.title,
      description: item?.description,
      deadline: item?.deadline,
      status: item?.status,
    }
  });
  const dispatch = useDispatch();
 
  return (
    <Box display='flex'
      flexDirection='column'
      component="form"
      onSubmit={handleSubmit((data) => { dispatch(editTodo(data)), handleClose() })}
    >
      <TextField
        margin='normal'
        size='small'
        placeholder='Title'
        {...register('title', {
          required: true,
        })}
      />
      <TextField {...register('description', {
        required: false,
      })}
        margin='normal'
        size='small'
        placeholder='Description'
      />
      <TextField {...register('deadline', {
        required: true,
      })}
        margin='normal'
        size='small'
        type='date' />
      <TextField margin='normal' type='submit' value='Edit' />
    </Box>
  );
};
export default EditTodoItem;
