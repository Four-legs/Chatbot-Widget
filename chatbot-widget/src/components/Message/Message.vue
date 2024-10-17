<script setup lang="ts">
import { IMessage } from '@/types'

const props = defineProps < {
  message: IMessage
}>()

</script>
<template>
  <v-sheet class="w-auto h-auto border-thin rounded pa-4">
    {{ props.message.content }}
  </v-sheet>
  <p class="text-caption">{{ props.message.created_at }}</p>
</template>
