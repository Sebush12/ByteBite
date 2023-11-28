import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { ProfileSettings } from '@/components/ui/settings/profile-settings';
import { AccountSettings } from '@/components/ui/settings/account-settings';

export const SettingsPage = (): ReactElement => {
  return (
    <Stack spacing={4} p={4}>
      <ProfileSettings />
      <AccountSettings />
    </Stack>
  );
};

export default SettingsPage;
