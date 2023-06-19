<template>
  <div class="login flex">
    <div class="login-box">
      <svg-icon
        class="block m-auto"
        icon-class="login-mall"
        style="width: 56px; height: 56px; color: #409eff"
      ></svg-icon>
      <h3 class="center my-4">mall-admin</h3>
      <el-form ref="formRef" :model="form" class="my-form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="" clearable>
            <template #prefix>
              <svg-icon
                class="block"
                icon-class="user"
                style="width: 20px; height: 20px; color: #409eff"
              ></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="mt-6" prop="password">
          <el-input
            v-model="form.password"
            placeholder=""
            clearable
            type="password"
          >
            <template #prefix>
              <svg-icon
                class="block"
                icon-class="password"
                style="width: 20px; height: 20px; color: #409eff"
              ></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="submit-btn m-auto mt-4"
            type="primary"
            @click="onSubmit('formRef')"
          >
            {{ $t('common.login') }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
  <Particles />
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import Particles from '@/components/particles/index.vue'
import usePinia from '@/store'

const router = useRouter()
const { user } = usePinia()
const form = reactive({
  username: 'admin',
  password: 'macro123',
})
const formRef = ref()
const loading = ref(false)
const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  try {
    loading.value = true
    await user.LOGIN(form)
    ElMessage.success('登录成功')
    router.push('/home')
  } catch (err: any) {
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  // background-color: #ecf0f3;
  position: relative;
  justify-content: center;
  align-items: center;
}
.login-box {
  position: relative;
  width: 400px;
  height: 350px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 5px 6px 7px #d1d9e6, -5px -5px 7px #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: $main-color;
  }
  h3 {
    color: $main-color;
    font-size: 25px;
  }
}
:deep(.my-form) {
  .el-input__wrapper {
    background-color: #ecf0f3;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
    &:focus-within {
      box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9 !important;
    }
  }
  .user {
    width: 20px;
    height: 20px;
  }
  .submit-btn {
    width: 100%;
  }
}
</style>
