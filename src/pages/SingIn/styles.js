import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SingLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SingLinkText = styled.Text`
  color: #fff;
  font-size: 14px;
`;
