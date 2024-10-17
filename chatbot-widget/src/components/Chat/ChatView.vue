<script setup lang="ts">
import ChatTop from './ChatTop/ChatTop.vue'
import ChatMiddle from './ChatMiddle/ChatMiddle.vue'
import ChatBottom from './ChatBottom/ChatBottom.vue'
import { IChatroom } from '@/types'
import { nextTick } from 'vue'

const props = defineProps < {
  activeChatroom: IChatroom
}>()

const viewHeight = ref(0)
const viewWidth = ref(0)
const topHeight = ref(0)
const bottomHeight = ref(0)

const middleHeight = computed(() => {
  console.log(viewHeight.value)
  return (viewHeight.value - topHeight.value - bottomHeight.value - 50) + 'px'
})
const middleMargin = computed(() => {
  return topHeight.value + 'px'
})
const topWidth = computed(() => {
  return viewWidth.value + 'px'
})

const getViewHeight = async () => {
  const mainElement = document.querySelector('#main')
  if (mainElement) {
    viewHeight.value = (mainElement as HTMLElement).offsetHeight
  }

  const viewElement = document.querySelector('#chat-view')
  if (viewElement) {
    viewWidth.value = (viewElement as HTMLElement).offsetWidth
  }

  const topElement = document.querySelector('#chat-top')
  if (topElement) topHeight.value = (topElement as HTMLElement).offsetHeight

  const bottomElement = document.querySelector('#chat-bottom')
  if (bottomElement) bottomHeight.value = (bottomElement as HTMLElement).offsetHeight
}

window.addEventListener('resize', getViewHeight)

onMounted(async () => {
  await nextTick()
  getViewHeight()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', getViewHeight)
})

</script>

<template>
  <v-container id="chat-view" class="position-relative d-flex flex-column ma-0 pa-0 h-full">
    <ChatTop id="chat-top" :chat-room-id="1" class="position-fixed top-0" :style="{'max-width': topWidth}"/>
    <ChatMiddle id="chat-middle" :chatroom-id="1" :style="{ 'margin-top': middleMargin, 'min-height': middleHeight, 'max-height': middleHeight}" />
    <ChatBottom id="chat-bottom" class="position-fixed bottom-0" />
  </v-container>
</template>
