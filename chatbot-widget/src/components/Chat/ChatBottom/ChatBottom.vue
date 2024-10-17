<script setup lang="ts">
import { type Ref, ref } from 'vue'
import ChatTestService from '../ChatService/ChatTestService'

const inputValue: Ref<string> = ref('')
const props = defineProps<{
  id?: string;
  type?: string;
}>()

const handleInput = () => {
  ChatTestService.sendMessage(inputValue.value)
  inputValue.value = ''
}

</script>

<template>
  <v-container class="w-full d-flex" color="white">
    <v-row align="center">
      <v-col>
        <v-text-field :id="props.id"
                      v-model="inputValue"
                      class="pl-4"
                      clearable
                      hide-details
                      label="message"
                      placeholder="Write your message here"
                      prepend-icon="mdi-comment"
                      rounded="pill"
                      variant="outlined"
                      @keydown.enter="handleInput"
        />
      </v-col>
      <v-col cols="1">
        <v-btn class="ma-2" icon="mdi-send" @click="handleInput" />
      </v-col>
    </v-row>
  </v-container>
</template>
