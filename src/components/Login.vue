<template>
  <div class="grid mt-3 login-card">
    <div class="col-12 sm:col-8 md:col-6 lg:col-6 xl:col-4">
      <Card class="border-card-sign">
        <template #title> <div class="primary-900">Login</div> </template>
        <template #content>
          <label for="email" class="label-sign">Email</label>
          <span class="p-input-icon-right mt-2 mb-2" style="width: 100%;">
            <InputText type="text" id="email" v-model="value2" style="width: 100%;"/>
            <i class="pi pi-at" />
          </span>
          <label for="password" class="label-sign">Password</label>
          <span class="p-input-icon-right mt-2" style="width: 100%;">
            <InputText :type="[isHidePassword? 'password': 'text']" id="password" v-model="value2" style="width: 100%;"/>
            <i :class="[isHidePassword? 'pi pi-eye': 'pi pi-eye-slash']" @click="onChangHiden" />
          </span>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save" />
          <Button
            icon="pi pi-times"
            label="Cancel"
            class="p-button-secondary"
            style="margin-left: 0.5em"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isHidePassword: true
    }
  },
  methods:{
    onChangHiden(){
      this.isHidePassword = !this.isHidePassword
    }
  }
};
</script>

<style scoped>
.login-card {
  display: flex;
  justify-content: center;
}
.border-card-sign {
  border: solid 1px rgb(24, 52, 98);
  border-top: solid 5px rgb(24, 52, 98);
  border-radius: 15px;
  box-shadow: 10px 10px 30px;
  background-color: rgba(255, 255, 255, 0.5);
}
.label-sign{
  font-weight: 700;
}
.primary-900 {
  color: rgb(24, 52, 98);
}
</style>