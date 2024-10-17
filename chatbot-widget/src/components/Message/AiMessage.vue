<script setup lang="ts">
import { IMessage } from '@/types'
import Message from './Message.vue'

const props = defineProps < {
  message: IMessage;
}>()

</script>

<template>
  <v-container class="pa-0">
    <v-row justify="start">
      <v-col cols="auto">
        <v-avatar class="border-thin elevation-1">
          <v-icon icon="mdi-robot" />
        </v-avatar>
      </v-col>
      <v-col cols="auto">
        <Message :message="props.message" />
      </v-col>
    </v-row>
  </v-container>
</template>
