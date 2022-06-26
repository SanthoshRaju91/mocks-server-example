import { Flex, Spinner, Text } from "@chakra-ui/react";

function Loader({ text }) {
  return (
    <Flex w="full" direction="column" alignItems="center" gap={4}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="pink.500"
        size="xl"
      />
      <Text fontSize="lg" color="gray.400">
        {text}
      </Text>
    </Flex>
  );
}

Loader.propTypes = {
  text: String,
};

export default Loader;
