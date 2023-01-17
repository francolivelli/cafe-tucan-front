import { ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Button,
  Flex,
  Divider,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  ChakraProvider,
} from "@chakra-ui/react";

const SpecialtyBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Flex
        direction="column"
        padding="15px 20px"
        border="1px"
        backgroundColor="black"
        borderRadius="15px"
        borderColor="white"
        marginBottom="10px">
        <Text fontSize={14} color="white">
          Especialidad de la semana
        </Text>
        <Divider mt="2" mb="4" />
        <Flex direction="row" justifyContent="space-between">
          <Flex direction="row">
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" />
            <Flex ml="3" direction="column" alignItems="center">
              <Text fontWeight="bold" ml="1" color="white" fontSize={18}>
                Catuaí Rojo
              </Text>
              <Badge ml="1" colorScheme="green">
                Minas Gerais
              </Badge>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <IconButton
              onClick={onOpen}
              colorScheme="green"
              borderRadius="50px"
              size="sm"
              icon={<ViewIcon />}
            />
          </Flex>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
            <Flex
              direction="column"
              border="2px"
              margin="7px"
              justifyContent="center">
              <Flex direction="column" border="1px" margin="2.5px"
              justifyContent="center">
                <ModalHeader display="flex" justifyContent="center" alignItems="center">
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam odio esse, voluptates consequuntur deserunt laudantium
                  fugit officiis sapiente eum nisi a ipsam suscipit, eveniet
                  voluptatibus inventore autem culpa tenetur. Provident?
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </Flex>
            </Flex>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default SpecialtyBox;
