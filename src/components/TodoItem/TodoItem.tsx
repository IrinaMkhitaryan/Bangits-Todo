import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '~/store/slice';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Button
} from '@mui/material';
import { PropTypes } from './PropTypes';

const TodoItem = (props: PropTypes) => {
  const { item, handleEditClick } = props;

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({ id: item.id, completed: item.completed })
    )
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: item.id }))
  };

  return <ListItem
    key={item.id}
    secondaryAction={
      <>
        <Button onClick={handleDeleteClick}>Delete</Button>
        <Button onClick={handleEditClick}>Edit</Button>
      </>
    }
    disablePadding
  >
    <ListItemIcon>
      <Checkbox
        edge="start"
        checked={item.completed}
        tabIndex={-1}
        disableRipple
        disabled={new Date(item.deadline) < new Date()}
        onChange={handleCompleteClick}
        inputProps={{ 'aria-labelledby': item.id?.toString() }}
      />
    </ListItemIcon>
    <ListItemText id={item.id?.toString()} primary={`${item.title}(${item.deadline})`} />
  </ListItem>;
};
export default TodoItem;
