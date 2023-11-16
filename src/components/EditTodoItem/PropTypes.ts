import { TodoItemType } from '~/store/models/models';

export type PropTypes = {
  item: TodoItemType | null;
  handleClose: () => void;
};
