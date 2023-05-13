import React from "react";
import { Button, Switch, Checkbox, TextInput } from 'react-native-paper';
import { View, TouchableOpacity, Text } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
	email: yup.string().required().min(3),
	password: yup.string().required(),
}).required();

export default function Home() {
	const { handleSubmit, control, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data) => {
		console.log(data, 'data');
	};

	return (
		<View className="flex-1 mt-4 p-2">
			<View className="w-100">
				<Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
					Press me
				</Button>
			</View>
			<View className="flex">
				<Switch value={true} />
				<Switch value={false} />
			</View>
			<View className="flex">
				<Checkbox.Item label="Item" status="checked" />
				<Checkbox.Item label="Item" />
			</View>
			<Text className="text-center">React form hook & Yup</Text>
			<View>
				<View className="my-2">
					<Controller
						name="email"
						control={control}
						render={({ field }) => {
							return (
								<>
									<TextInput
										label="Email"
										value={field.value}
										onChangeText={field.onChange}
										placeholder="Nhập email"
										error={errors?.email}
									/>
								</>
							)
						}}
					/>
					<Text className="text-[#ff4d4f] mt-1">{errors?.email?.message}</Text>
				</View>
				<View>
					<Controller
						name="password"
						control={control}
						render={({ field }) => {
							return (
								<TextInput
									label="Password"
									value={field.value}
									onChangeText={field.onChange}
									placeholder="Nhập mật khẩu"
								/>
							)
						}}
					/>
					<Button className="my-2" mode="contained" onPress={handleSubmit(onSubmit)} >
						Đăng nhập
					</Button>
				</View>
			</View>
		</View >
	);
}
