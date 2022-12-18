<template>
  <div class="q-pa-md">
    <q-banner class="bg-blue-2" dense rounded>
      <span class="text-caption text-weight-medium">
        Preencha os campos abaixo para poder realizar seu login e ter acesso completo ao Conecta-Belém.
      </span>
    </q-banner>

    <div class="q-gutter-md q-pt-md form">
      <q-input filled v-model="cpf" label="CPF" class="" style="width: 450px"/>
      <q-input filled v-model="password" label="Senha" class="" style="width: 450px"/>
      <q-toggle
        v-model="toggle"
        checked-icon="check"
        color="primary"
        label="Manter Logado"
        unchecked-icon="clear"
      />
      <div class="row">
        <q-btn
          label="Registrar"
          color="primary"
          icon="add"
          size="md"
          to="/user/signup"
        />
        <q-btn
          class="q-ml-md"
          label="Entrar"
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
      cpf: ref(''),
      password: ref(''),
      toggle: ref(false)
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
