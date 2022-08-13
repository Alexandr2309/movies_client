import React, { useContext, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import cl from '../../styles/Auth.module.scss'
import Link from 'next/link'
import { login } from '../api/http/userAPI'
import { UserContext } from '../_app'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { ErrorMessage } from '@hookform/error-message'
import { validateData } from '../../utils/helpFunc'
import { stylesForErr } from '../../utils/styles'

const Login = observer(() => {
	const na = useRouter()
	const { user } = useContext(UserContext)
	
	const { setLoading } = useContext(UserContext)
	useEffect(() => {
		setLoading(false)
	}, [])
	
	const { register, setError, handleSubmit, formState: { errors } } = useForm()
	
	const onSubmit = async (data) => {
		if (validateData(data.email, data.password) === false) {
			setError('email', { message: 'Неверный формат' }, { shouldFocus: true })
			setError('password', { message: 'Минимум 6 символов' })
			return
		}
		
		try {
			const response = await login(data.email, data.password)
			user.setUser({ email: response.email, id: response.id })
			user.setIsAuth(true)
			na.push('/', undefined, { shallow: true })
		} catch (e) {
			alert(e.response.data.message)
		}
	}
	
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
			<h5 className={cl.formTitle}>Авторизация</h5>
			<input {...register('email', { required: 'Обязательное поле' })} className={cl.formInput} placeholder='Email' />
			<ErrorMessage errors={errors} name='email' as='div' style={{ ...stylesForErr }} />
			<input {...register('password', { required: 'Обязательное поле' })} className={cl.formInput}
						 placeholder='Пароль' type='password' />
			<ErrorMessage errors={errors} name='password' as='div' style={{ ...stylesForErr }} />
			<div className={cl.block}>
				<div>Нет аккаунта? <Link href='/user/registration' className={cl.blockLink}>Зарегистрируйтесь!</Link></div>
				<input type='submit' className={cl.blockInput} value='Войти' />
			</div>
		</form>
	)
})
export default Login

