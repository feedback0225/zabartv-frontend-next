import { getSessionId } from "@/utils/getSessionId";
import { IUpdateResponse } from "@/types/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";

export const getMe = createAsyncThunk('user/getMe', async () => {
	const { data: { id } } = await axios.get('/session/getid');

	/* Генерация хэша. Много вопросов, мало ответов */
	const hash = `0${getSessionId()}-posddiosdfuyu-ln-${id}-zspdaasid`

	const { data } = await axios.get('/session/getuserdata', {
		params: {
			hash
		}
	});

	return data;
});

export const getHistoryPayments = createAsyncThunk('user/historyPayments', async (id: number) => {
	const { data } = await axios.get('/session/getuserorders', {
		params: {
			id
		}
	});

	return data;
});

export const updateUser = createAsyncThunk('auth/update', async ({ password, date_of_birth, email }: IUpdateResponse) => {
	const { data } = await axios({
		url: '/session/updateuserdata',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'post',
		data: `password=${password}&date_of_birth=${date_of_birth}&email=${email}`,
	});

	return data;
});