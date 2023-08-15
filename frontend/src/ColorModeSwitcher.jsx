import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <IconButton
      size={"md"}
      fontSize={"lg"}
      aria-label={`Switch to ${text} mode`}
      variant={"ghost"}
      color={"current"}
      position={"fixed"}
      top={"4"}
      right={"4"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;