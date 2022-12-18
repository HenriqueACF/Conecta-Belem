<template>
  <div class="q-pa-md">
    <q-banner class="bg-blue-2" dense rounded>
      <span class="text-caption text-weight-medium">
        Preencha todos os campos abaixo para poder ter acesso ao Conecta-Belém.
      </span>
    </q-banner>

    <div class=" q-gutter-md q-pt-md form">
      <q-input filled v-model="name" label="Nome Completo" class="" style="width: 450px"/>
      <q-input filled v-model="cpf" label="CPF" class="" style="width: 450px"/>
      <q-input filled v-model="phone" label="Telefone" class="" style="width: 450px"/>
      <q-input filled v-model="email" label="E-mail" class="" style="width: 450px"/>
      <q-input filled v-model="cep" label="CEP" class="" style="width: 450px"/>
      <q-input filled v-model="address" label="Endereço Completo" class="" style="width: 450px"/>
      <q-input filled v-model="password" label="Senha" class="" style="width: 450px"/>
      <q-input filled v-model="confirmPassword" label="Repita Sua Senha" class="" style="width: 450px"/>
      <div class="row">
        <q-btn
          label="Voltar"
          color="primary"
          icon="add"
          size="md"
          to="/user"
        />
        <q-btn
          class="q-ml-md"
          label="Finalizar"
          color="secondary"
          icon="add"
          size="md"
          to="/dashboard"
        />

      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    return {
      name: ref(''),
      cpf: ref(''),
      phone: ref(''),
      email: ref(''),
      cep: ref(''),
      address: ref(''),
      password: ref(''),
      confirmPassword: ref('')
    }
  }
}
</script>

<style scoped>
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}
</style>
