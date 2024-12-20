import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { useUser } from '../../hooks/UsersContext';

import Logo from '../../assets/logo-login.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';

export function Login() {
  const navigate = useNavigate();

  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup.string().email('email is a required field').required(),
      password: yup
        .string()
        .min(6, 'Password must have six caracteres')
        .required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Checking your data',
        success: {
          render() {
            setTimeout(() => {
              navigate('/');
            }, 2000);
            return 'Welcome👌';
          },
        },
        error: 'Make sure your email or password are correct 🤯',
      },
    );

    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Hi, Welcome to <span>Burger Shop!</span>
          <br />
          Acess with your <span>Login and password.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Password</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Login</Button>
        </Form>

        <p>
          Don't have an account?
          <Link to="/register"> Click here. </Link>
        </p>
      </RightContainer>
    </Container>
  );
}
