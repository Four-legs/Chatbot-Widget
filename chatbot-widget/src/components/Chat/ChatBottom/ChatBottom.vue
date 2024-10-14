<script setup lang="ts">
import { type Ref, ref } from 'vue'

const inputValue: Ref<string> = ref('')
const props = defineProps<{
  id?: string;
  type?: string;
}>()

const emit = defineEmits(['inputValueUpdate'])

const handleInput = () => {
  emit('inputValueUpdate', inputValue.value)
}

</script>

<template>
  <v-container class="w-100">
    <v-row align="center" justify="space-between">
      <v-icon icon="mdi-comment" />
      <v-text-field :id="props.id"
                    v-model="inputValue"
                    class="pl-4"
                    clearable
                    hide-details
                    label="message"
                    placeholder="Write your message here"
                    rounded="pill"
                    variant="outlined"
                    @keydown.enter="handleInput"
      />
      <v-btn class="ma-2" icon="mdi-send" @click="handleInput" />
    </v-row>
  </v-container>
</template>
