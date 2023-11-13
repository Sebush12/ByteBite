import { Stack } from "@chakra-ui/react";
import React from "react";
import { ProfileSettings } from "./profile-settings";
import { AccountSettings } from "./account-settings";

export const SettingsPage = () => {
  return (
    <Stack spacing={4} p={4}>
      <ProfileSettings />
      <AccountSettings />
    </Stack>
  );
};
