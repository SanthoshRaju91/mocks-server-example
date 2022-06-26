import { Box, Container, Flex, Heading, List } from "@chakra-ui/react";
import Error from "./Error";
import Loader from "./Loader";
import TodoItem from "./TodoItem";
import useTodoList from "./useTodoList";

function TodoList() {
  const { isFetching, isError, todoList, handleItemClick } = useTodoList();

  return (
    <Container my={20}>
      <Flex direction="column" gap={10}>
        <Heading
          fontSize={"4xl"}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          My Awesome Todo List
        </Heading>
        <Box
          border="1px"
          borderColor="gray.300"
          p={6}
          borderRadius={4}
          shadow="xs"
        >
          {isFetching && <Loader text="Fetching Your List..." />}
          {isError && <Error text="Could not fetch Your List." />}
          {!isFetching && !isError && (
            <List spacing={2}>
              {todoList.map((current) => (
                <TodoItem
                  completed={current.completed}
                  item={current.item}
                  key={current.item}
                  onItemClick={() => handleItemClick(current)}
                />
              ))}
            </List>
          )}
        </Box>
      </Flex>
    </Container>
  );
}

export default TodoList;
