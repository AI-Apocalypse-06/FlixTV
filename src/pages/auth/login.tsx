import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Flex, Input, Paper, PasswordInput, Text } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { setSession } from 'utils';
// eslint-disable-next-line import/order
import * as yup from 'yup';

import { Api, Types } from 'modules/auth';
import { useAuth } from 'modules/auth/context/auth';

import { CButton, inputArgs, Logo, MyCheckBox } from 'components';

interface LoginProps {}

const schema = yup.object({
  username: yup.string().min(4).label('Username').required(),
  password: yup.string().min(1).label('Password').required()
});

export default function Login(props: LoginProps) {
  const navigate = useNavigate();
  const { methods } = useAuth();
  const [loading, setLoading] = useState(false);

  const { control, register: getInputProps, handleSubmit } = useForm<Types.IForm.Login>({ resolver: yupResolver(schema) });

  const onSubmit = async (values: Types.IForm.Login) => {
    try {
      setLoading(true);
      const { data: tokens } = await Api.Login(values);

      setSession(tokens);
      navigate('/');

      const { data: user } = await Api.Profile();

      methods.login(user);
    } catch (err: any) {
      /* empty */
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box h="100vh" w="100vw" display="grid" sx={{ placeItems: 'center' }} bg="#151f30">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" align="center" justify="center">
          <Paper w={400} p={40} h={566} bg="#131720" radius="lg" sx={{ boxShadow: '0 0 20px #2aa1ff' }}>
            <Flex direction="column" gap={40} align="center" justify="center">
              <Logo />
              <Flex gap={30} direction="column">
                <Input autoFocus placeholder="Email" {...inputArgs} {...getInputProps('username')} />
                <PasswordInput placeholder="Password" {...inputArgs} {...getInputProps('password')} />
                <MyCheckBox label="Remember Me" />
                <CButton text="sign in" props={{ type: 'submit', loading }} />
                <Flex direction="column" gap={30} align="center">
                  <Text color="#e0e0e0">
                    Don't have an account?{' '}
                    <Link className="linkStyle" to="/auth/register">
                      Sign up!
                    </Link>
                  </Text>
                  <Link className="linkStyle" to="/auth/reset-password">
                    Forgot password?
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Paper>
        </Flex>
      </form>
      <DevTool control={control} />
    </Box>
  );
}
