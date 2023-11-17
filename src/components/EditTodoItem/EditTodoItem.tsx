import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { PropTypes } from '~/components/EditTodoItem/PropTypes';
import { editTodo } from '../../store/slice';
import schema from '../../schemaValidation/schema';


const EditTodoItem = (props: PropTypes) => {
  const { item, handleClose } = props;

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      id: item?.id,
      title: item?.title,
      description: item?.description,
      deadline: item?.deadline,
      completed: item?.completed,
    },
    resolver: yupResolver(schema())
  });
  const { errors } = formState;
  const dispatch = useDispatch();

  return (
    <Box display='flex'
      flexDirection='column'
      component="form"
      onSubmit={handleSubmit((data) => { dispatch(editTodo(data)), handleClose() })}
    >
      <TextField
        error={!!errors.title?.message}
        margin='normal'
        size='small'
        placeholder='Title'
        helperText={errors.title?.message}
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
        error={!!errors.deadline?.message}
        helperText={errors.deadline?.message}
        margin='normal'
        size='small'
        type='date' />
      <TextField margin='normal' type='submit' value='Edit' />
    </Box>
  );
};
export default EditTodoItem;
