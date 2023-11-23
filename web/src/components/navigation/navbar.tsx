import { FC } from 'react';
import { NavbarLink } from './navbar-link';
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Login } from '../forms/login';
import { useRouter } from 'next/router';

export const Navbar: FC = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    isOpen: loginModalOpen,
    onOpen: openLoginModal,
    onClose: closeLoginModal
  } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            {colorMode === 'dark' ? (
              <Image
                src="images\ByteBiteLogoWhite.png"
                alt="Logo"
                w={100}
                h={75}
              />
            ) : (
              <Image src="images\ByteBiteLogo.png" alt="Logo" w={100} h={75} />
            )}
          </Box>
          <Flex gap={'20px'}>
            <NavbarLink page="Home" route="" />
            <NavbarLink page="About Us" route="about" />

            <NavbarLink page="Calculator" route="calc" />
            <NavbarLink page="Contact Us" route="contact" />
          </Flex>
          <Flex alignItems={'center'}>
            <Stack direction={'row'}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  size={'lg'}
                >
                  <HamburgerIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem pl={'20px'} onClick={openLoginModal}>
                    Login
                  </MenuItem>
                  <MenuItem pl={'20px'} onClick={(): Promise<boolean> => router.push('/new-user')}>
                    Sign Up
                  </MenuItem>
                  <MenuItem>
                    <NavbarLink page="About Us" route="about" />
                  </MenuItem>
                  <MenuItem>
                    <NavbarLink page="Contact Us" route="contact" />
                  </MenuItem>
                  <Modal
                    isCentered
                    onClose={closeLoginModal}
                    isOpen={loginModalOpen}
                    motionPreset="slideInBottom"
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalCloseButton />
                      <ModalBody>
                        <Login />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                  <Flex
                    justifyContent={{ base: 'center', md: 'flex-end' }}
                    marginTop={{ base: '10px', md: '0' }}
                  ></Flex>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
