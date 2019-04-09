<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="用户名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="性别">
			<el-radio-group v-model="form.gender">
				<el-radio label="男"></el-radio>
				<el-radio label="女"></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="出生日期">
			<el-col :span="11">
				<el-date-picker type="date" placeholder="选择日期" v-model="form.bir" style="width: 100%;"></el-date-picker>
			</el-col>
		</el-form-item>
		<el-form-item label="公开信息">
			<el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
		</el-form-item>
		<el-form-item label="兴趣爱好">
			<el-checkbox-group v-model="form.type">
				<el-checkbox label="吃" name="type"></el-checkbox>
				<el-checkbox label="喝" name="type"></el-checkbox>
				<el-checkbox label="玩" name="type"></el-checkbox>
				<el-checkbox label="乐" name="type"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="学历">
		<el-select v-model="form.edu" placeholder="请选择">
			<el-option label="博士及以上" value="1"></el-option>
			<el-option label="硕士" value="2"></el-option>
			<el-option label="本科" value="3"></el-option>
			<el-option label="专科" value="4"></el-option>
			<el-option label="高中及以下" value="5"></el-option>
		</el-select>
	</el-form-item>
		<el-form-item label="自我介绍">
			<el-input type="textarea" v-model="form.intro"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					gender:'',
					bir: '',
					edu: '',
					delivery: false,
					type: [],
					intro: ''
				}
			}
		},
		methods: {
			onSubmit() {
				alert('submit!');
			}
		}
	}

</script>