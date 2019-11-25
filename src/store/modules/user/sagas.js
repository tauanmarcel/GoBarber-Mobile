import {Alert} from 'react-native';
import {takeLatest, all, call, put} from 'redux-saga/effects';

import api from '~/services/api';

import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;

    // eslint-disable-next-line prefer-object-spread
    const profile = Object.assign(
      {name, email, avatar_id},
      rest.oldPassword ? rest : {},
    );

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Successo!', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    console.tron.log(err);

    Alert.alert(
      'Falha na atualização',
      'Erro ao atualizar perfil, confira seus dados',
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
