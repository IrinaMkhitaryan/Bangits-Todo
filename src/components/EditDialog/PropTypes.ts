import { TodoItemType } from "~/store/models/models";

export type PropTypes = {
   open: boolean;
   handleClose: () => void;
   item: TodoItemType | null;
}
  