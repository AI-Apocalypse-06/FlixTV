import { Box, Flex, Input, Paper, Text } from '@mantine/core';

import CButton from 'components/c-button';
import { inputArgs, Logo } from 'components/index';

interface ResetPasswordProps {}

const ResetPassword = (props: ResetPasswordProps) => (
  <>
    <Box h="100vh" sx={{ display: 'grid', placeItems: 'center', backgroundColor: '#151f30', boxShadow: '0 0 20px #2aa1ff' }}>
      <Paper h={380} w={400} radius={16} bg="#131720" p={20}>
        <Flex direction="column" align="center" justify="center" gap={30}>
          <Logo />
          <Flex direction="column" align="center" gap={30}>
            <Input placeholder="email" {...inputArgs} />
            <Flex direction="column" align="center" justify="center">
              <CButton text="send" />
              <Text color="#FFF" sx={{ userSelect: 'text' }}>
                We will send a password to your Email
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Paper>
    </Box>
  </>
);

export default ResetPassword;
