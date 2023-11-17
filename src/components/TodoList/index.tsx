import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TodoItemType } from '~/store/models/models';
import { RootState } from '~/store/store';
import { Box, List, Button } from '@mui/material';
import TodoItem from '../TodoItem/TodoItem';
import AddTodoItem from '../AddTodoItem/AddTodoItem';
import EditDialog from '../EditDialog/EditDialog';
import RemovedTasksDialog from '../RemovedTasksDialog/RemovedTasksDialog';

const TodoList = () => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openRemovedTaskDialog, setOpenRemovedTaskDialog] = useState(false);
  const [changingItem, setChangingItem] = useState<TodoItemType | null>(null);
  const todos = useSelector((state: RootState) => state.todos.todos);


  return (
    <Box mx={4} my={3} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
      <Box width='50%'><AddTodoItem /><Button onClick={() => setOpenRemovedTaskDialog(true)}>Trush</Button></Box>
      <List sx={{ width: {xs: '100%', sm: '80%', md: '50%'}, bgcolor: 'background.paper' }}>
        {todos.map((todo: TodoItemType) => {
          return <React.Fragment key={todo.id}><TodoItem item={todo} handleEditClick={() => { setOpenEditDialog(true); setChangingItem(todo) }} /></React.Fragment>
        })}
      </List>
      <EditDialog open={openEditDialog} handleClose={() => setOpenEditDialog(false)} item={changingItem} />
      <RemovedTasksDialog open={openRemovedTaskDialog} handleClose={() => setOpenRemovedTaskDialog(false)}/>
    </Box>
  );
};

export default TodoList;
