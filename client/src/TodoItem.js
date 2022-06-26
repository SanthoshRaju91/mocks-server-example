import { ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdCheckCircle, MdOutlineRadioButtonUnchecked } from "react-icons/md";

function TodoItem({ completed, item, onItemClick }) {
  return (
    <ListItem
      display="flex"
      alignItems="center"
      cursor="pointer"
      onClick={onItemClick}
    >
      <ListIcon
        as={completed ? MdCheckCircle : MdOutlineRadioButtonUnchecked}
        color={`${completed ? "green.500" : "gray.400"}`}
      />
      <Text fontSize="lg" color="gray.700" as={`${completed ? "s" : "p"}`}>
        {item}
      </Text>
    </ListItem>
  );
}

TodoItem.propTypes = {
  completed: Boolean,
  item: String,
  onItemClick: Function,
};

TodoItem.defaultProps = {
  completed: false,
};

export default TodoItem;
