import { useState } from 'react';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Flex, Group, Input, Paper } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Api, Types } from 'modules/auth';

import { inputArgs, Logo } from 'components';
import CButton from 'components/c-button';

interface VerificationProps {}

const schema = yup.object({
  email: yup.string().min(4).label('email').required(),
  activationCode: yup.number().min(6).label('activationCode').required()
});

const Verification = (props: VerificationProps) => {
  const { register: getInputProps, handleSubmit } = useForm<Types.IForm.verification>({ resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values: Types.IForm.verification) => {
    try {
      setLoading(true);

      await Api.Verification(values);

      navigate('/');
    } catch (error: any) {
      notifications.show({ message: error?.data?.invalid_code, color: 'red' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box w="100vw" h="100vh" bg="#151f30">
      <Flex justify="center" align="center" direction="column" h="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paper w={400} h={300} bg="#131720" radius={16} p={30} sx={{ boxShadow: '0 0 20px #2aa1ff' }}>
            <Flex align="center" justify="center" direction="column" gap={20}>
              <Logo />
              <Flex align="center" justify="center" direction="column" gap={30} h="100%">
                <Input placeholder="email" {...inputArgs} autoFocus {...getInputProps('email')} />
                <Group position="center">
                  <Input {...inputArgs} type="number" placeholder="verification code" {...getInputProps('activationCode')} />
                </Group>
                <CButton text="send" props={{ type: 'submit', loading }} />
              </Flex>
            </Flex>
          </Paper>
        </form>
      </Flex>
    </Box>
  );
};

export default Verification;
