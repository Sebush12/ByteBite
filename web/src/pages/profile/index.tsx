import { Flex, Stack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { ProfileSettings } from "@/components/ui/settings/profile-settings";
import { AccountSettings } from "@/components/ui/settings/account-settings";

export const SettingsPage = (): ReactElement => {
  return (
    <Flex direction="column" minH="90vh" position="relative">
      <Stack spacing={4} p={4}>
        <ProfileSettings />
        <AccountSettings />
      </Stack>
    </Flex>
  );
};

export default SettingsPage;
