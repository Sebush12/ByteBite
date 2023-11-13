import {
  EditablePreview,
  EditableTextarea,
  Box,
  useColorModeValue,
  Input,
  useDisclosure,
  useEditableControls,
  ButtonGroup,
  SlideFade,
  Editable,
  Tooltip,
  EditableInput,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton
        aria-label="Edit-textfield"
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
      />
      <IconButton
        aria-label="Edit-textfield"
        icon={<CloseIcon />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : (
    // <Flex justifyContent="center">
    <IconButton
      aria-label="edit-textfield"
      size="sm"
      icon={<EditIcon />}
      margin={"10px"}
      {...getEditButtonProps()}
    />
    //</Flex>
  );
}

export default EditableControls;
