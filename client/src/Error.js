import { Flex, Text } from "@chakra-ui/react";
import { GiTerror } from "react-icons/gi";

function Error({ text }) {
  return (
    <Flex w="full" direction="column" alignItems="center" gap={3}>
      <GiTerror size="64px" color="red.500" />
      <Text fontSize="lg" color="red.500">
        {text}
      </Text>
    </Flex>
  );
}

Error.propTypes = {
  text: String,
};

export default Error;
