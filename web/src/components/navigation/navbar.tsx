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
  Image,
  Heading
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Login } from '../forms/login';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export const Navbar: FC = () => {
  const router = useRouter();
  const {data, status} = useSession();
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
            <NavbarLink page="Calculator" route="calc" />
            <NavbarLink page="About Us" route="about" />
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
                  {status === 'authenticated' ?
                    <>
                      <Heading size={'md'} textAlign={'center'}>{data.user?.name}</Heading><hr/>
                      <MenuItem>
                        <NavbarLink page="Home" route="" />
                      </MenuItem>
                      <MenuItem>
                        <NavbarLink page="Profile" route="profile" />
                      </MenuItem>
                      <MenuItem>
                        <NavbarLink page="About Us" route="about" />
                      </MenuItem>
                      <MenuItem>
                        <NavbarLink page="Contact Us" route="contact" />
                      </MenuItem>
                    </>
                    :
                    <>
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
                    </>
                  }
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
