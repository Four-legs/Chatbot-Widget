<script setup lang="ts">
import { IMessage } from '@/types'

const props = defineProps < {
  message: IMessage
}>()

const messageShape = props.message.role === 'human' ? 'rounded-s-lg' : 'rounded-e-lg'

</script>
<template>
  <v-container :id="props.message.message_id" class="w-25" :class="messageShape" style="max-width: 100rem;" justify-end>
    <v-row align="end">
      <v-sheet id="message-content" class="pa-4" color="white">
        {{ props.message.content }}
      </v-sheet>
      <p class="ml-4" style="font-size:small;">{{ props.message.created_at }}</p>
    </v-row>
  </v-container>
</template>
