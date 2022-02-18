<script setup lang="ts">
import { t } from '~/i18n'
import { encodeWord } from '~/logic/utils'

const input = ref('')
const inputValue = ref('')

function handleInput(e: Event) {
  const el = (e.target! as HTMLInputElement)
  input.value = Array.from(el.value)
    .filter(i => /\p{Script=Han}/u.test(i))
    .slice(0, 4)
    .join('')
}

const isPassed = ref(false)

const href = ref('')
const getLocation = (word: string) => {
  const key = `${`${Math.random()}`.slice(2)}_${new Date().getTime()}`
  return `${location.origin}/?word=${encodeWord(word, key)}&key=${key}`
}

function issue() {
  showIssue.value = true
}

function close() {
  showIssue.value = false
}

function submit() {
  isPassed.value = inputValue.value.length === 4
  href.value = getLocation(inputValue.value)
}

</script>

<template>
  <div p="x5 y10" flex="~ col gap-2 y-center" relative>
    <div text-3xl="" font-serif="" tracking-widest="">
      {{ t('issue') }}
    </div>
    <div h-1px="" w-10="" border="b base" m4="" />
    <div absolute top-4 right-4 flex="~ gap-3">
      <button icon-btn @click="close()">
        <div i-carbon-close />
      </button>
    </div>
    <WordBlocks :word="input" @click="focus()" />
    <input
      ref="el"
      v-model="inputValue"
      type="text"
      autocomplete="false"
      outline-none
      :placeholder="t('input-placeholder')"
      w-86 p3
      border="2 base"
      text="center"
      bg="transparent"
      @input="handleInput"
      @keydown.enter="submit"
    >
    <button
      mt3
      btn p="x6 y2"
      :disabled="inputValue.length !== 4"
      @click="submit"
    >
      {{ t('ok-spaced') }}
    </button>
    <template v-if="isPassed">
      <div h-1px="" w-10="" border="b base" m4="" />
      <p>{{ t('issue-1') }}</p>
      <a class="link" target="_blank" text-primary :href="href" w-86 p3>
        {{ href }}
      </a>
    </template>
  </div>
</template>

<style scoped>
.link {
  user-select: text;
  word-break: break-all;
  text-decoration: underline;
}
</style>
