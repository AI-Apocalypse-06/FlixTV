import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Flex, Input, Paper, PasswordInput, Text } from '@mantine/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Api, Types } from 'modules/auth';

import { CButton, inputArgs, Logo, MyCheckBox } from 'components';

interface RegisterProps {}

const schema = yup.object({
  email: yup.string().email().label('Email').required(),
  username: yup.string().min(5).label('Username').required(),
  password: yup.string().min(8).label('Password').required(),
  confirmPassword: yup.string().min(8).label('confirmPassword').required()
});

export default function Register(props: RegisterProps) {
  const navigate = useNavigate();
  const { register: getInputProps, handleSubmit } = useForm<Types.IForm.Register>({ resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: Types.IForm.Register) => {
    try {
      setLoading(true);
      const { data: user } = await Api.Register(values);

      navigate('/auth/verification');
    } catch (err: any) {
      /* empty */
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box h="100vh" display="grid" sx={{ placeItems: 'center' }} bg="#151f30">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap={20} align="center">
          <Paper w="400px" p={40} h="auto" bg="#131720" radius="lg">
            <Flex direction="column" gap={40} align="center">
              <Logo />
              <Flex direction="column" gap={20} align="center">
                <Input autoFocus placeholder="email" {...inputArgs} {...getInputProps('email')} />
                <Input placeholder="username" {...inputArgs} {...getInputProps('username')} />
                <PasswordInput placeholder="password" {...inputArgs} {...getInputProps('password')} />
                <PasswordInput placeholder="confirmPassword" {...inputArgs} {...getInputProps('confirmPassword')} />
              </Flex>
            </Flex>
            <Flex mt="20px" direction="column" gap={20} align="start">
              <MyCheckBox
                label={
                  <>
                    I agree to the{' '}
                    <Link to="/privacy-policy" className="linkStyle">
                      <span>privacy-policy</span>
                    </Link>
                  </>
                }
              />
              <CButton text="sign up" props={{ type: 'submit', loading }} />
            </Flex>
            <Flex justify="center" align="center">
              <Text color="#e0e0e0" mr="5px">
                Already have an account?
              </Text>
              <Link to="/auth/login" className="linkStyle" style={{ marginBottom: '-2px' }}>
                Sign in!
              </Link>
            </Flex>
          </Paper>
        </Flex>
      </form>
    </Box>
  );
}
