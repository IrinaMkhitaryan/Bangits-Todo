import { TodoItemType } from "~/store/models/models";
export type PropTypes = {
  item: TodoItemType;
  handleEditClick: () => void;
};
