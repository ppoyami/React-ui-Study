import React from 'react';
import { useForm } from 'react-hook-form';

import InputField from '../elements/InputField';
import * as S from './RegisterForm.styled';

export default function RegisterForm() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  // 해당하는 input 돔 요소의 value 값을 가져올 수 있음(변화가 계속 감시할 수 있음)
  const password = watch('password');
  const email = watch('email');

  console.log('errors', errors); // {email: {...}, password: {...}}

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="이메일"
        errors={[
          errors.email?.type === 'required' && '⚠️ 이메일을 입력해주세요',
          errors.email?.type === 'pattern' &&
            '⚠️ 이메일 형식이 올바르지 않습니다.',
        ]}
      >
        <input
          name="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/ })}
          type="email"
        />
      </InputField>
      <InputField
        label="이메일 확인"
        errors={[
          errors.confirmEmail?.type === 'equals' &&
            '⚠️ 이메일이 일치하지 않습니다.',
        ]}
      >
        <input
          name="confirmEmail"
          {...register('confirmEmail', {
            required: true,
            validate: {
              equals: value => value === email,
            },
          })}
          type="email"
        />
      </InputField>
      <InputField
        label="비밀번호"
        errors={[
          errors.password?.type === 'required' && '⚠️ 비밀번호를 입력해주세요',
          errors.password?.type === 'minLength' &&
            '⚠️ 5자 이상의 비밀번호를 입력하세요',
          errors.password?.type === 'maxLength' &&
            '⚠️ 12자 이하로 비밀번호를 입력하세요',
        ]}
      >
        <input
          name="password"
          {...register('password', {
            required: true,
            minLength: 5,
            maxLength: 12,
          })}
          type="password"
        />
      </InputField>
      <InputField
        label="비밀번호 확인"
        errors={[
          errors.confirmPassword?.type === 'validate' &&
            '⚠️ 비밀번호가 일치하지 않습니다.',
        ]}
      >
        <input
          name="confirmPassword"
          {...register('confirmPassword', {
            required: true,
            validate: value => value === password,
          })}
          type="password"
        />
      </InputField>
      <S.Button>가입하기</S.Button>
    </S.Form>
  );
}
