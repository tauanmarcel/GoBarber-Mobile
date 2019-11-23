import React, {useRef} from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingLinkText,
} from './styles';

export default function SingUp({navigation}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            placeholder="Seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit}
          />

          <SubmitButton onPress={() => {}}>Criar conta gratuita</SubmitButton>
        </Form>

        <SingLink onPress={() => navigation.navigate('SingIn')}>
          <SingLinkText>Já possuo uma conta</SingLinkText>
        </SingLink>
      </Container>
    </Background>
  );
}
