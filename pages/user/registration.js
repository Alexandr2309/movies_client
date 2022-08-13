import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import cl from '../../styles/Auth.module.scss'
import Link from 'next/link'
import { registration } from '../api/http/userAPI'
import { UserContext } from '../_app'
import { useRouter } from 'next/router'
import { validateData } from '../../utils/helpFunc'
import { ErrorMessage } from '@hookform/error-message'
import { stylesForErr } from '../../utils/styles'

const Registration = () => {
	const na = useRouter()
	const { register, setError, handleSubmit, formState: { errors } } = useForm()
	const { user } = useContext(UserContext)
	
	const { setLoading } = useContext(UserContext)
	useEffect(() => {
		setLoading(false)
	}, [])
	
	const onSubmit = async (data) => {
		if (validateData(data.email, data.password) === false) {
			setError('email', { message: 'Неверный формат' }, { shouldFocus: true })
			setError('password', { message: 'Минимум 6 символов' })
			return
		}
		try {
			const response = await registration(data.email, data.password)
			user.setUser({ email: response.email, id: response.id })
			user.setIsAuth(true)
			na.push('/', undefined, { shallow: true })
		} catch (e) {
			console.log(e)
			alert(e.response.data.message)
		}
		
	}
	
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
			<h5 className={cl.formTitle}>Регистрация</h5>
			<input {...register('email', { required: 'Обязательное поле' })} className={cl.formInput} placeholder='Email' />
			<ErrorMessage errors={errors} name='email' as='div' style={{ ...stylesForErr }} />
			<input {...register('password', { required: 'Обязательное поле' })} className={cl.formInput}
						 placeholder='Пароль' type='password' />
			<ErrorMessage errors={errors} name='password' as='div' style={{ ...stylesForErr }} />
			<div className={cl.block}>
				<div>Есть аккаунт? <Link href='/user/login'>Войти</Link></div>
				<input type='submit' className={cl.blockInput} value='Зарегистрироваться' />
			</div>
		</form>
	)
}
export default Registration