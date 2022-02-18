<script setup lang="ts">
import { isDark, showCheatSheet, showFailed, showHelp, showHint, showIssue, showSettings, showVariants, useMask } from '~/state'
import { t } from '~/i18n'

const toggleDark = useToggle(isDark)
const toggleSettings = useToggle(showSettings)

function openHelp() {
  showHelp.value = true
  useMask.value = false
}

function openIssue() {
  showIssue.value = true
  useMask.value = false
}

</script>

<template>
  <nav border="b base" relative>
    <div absolute font-serif text-2xl left-0 right-0 top-0 bottom-0 z--1 tracking-2 flex>
      <div ma leading-1em>
        {{ t('name') }}
      </div>
    </div>
    <div flex="~" items-center justify-between md:max-w-md ma p4>
      <div flex="~ gap-4" items-center>
        <button class="icon-btn" @click="openHelp()">
          <div i-carbon-help />
        </button>
        <button class="icon-btn" @click="openIssue()">
          <div i-carbon-edit />
        </button>
      </div>
      <div flex="~ gap-4" items-center>
        <button class="icon-btn" @click="toggleSettings()">
          <div i-carbon-settings />
        </button>
        <button class="icon-btn" @click="toggleDark()">
          <div i-carbon-sun dark:i-carbon-moon />
        </button>
      </div>
    </div>
  </nav>

  <Modal v-model="showSettings" direction="top">
    <Settings />
  </Modal>
  <Modal v-model="showHelp" direction="top">
    <WelcomePage />
  </Modal>
  <Modal v-model="showIssue" direction="top">
    <Issue />
  </Modal>
  <Modal v-model="showHint" direction="top">
    <Hint />
  </Modal>
  <Modal v-model="showFailed" direction="top">
    <FailedPage />
  </Modal>
  <Modal v-model="showVariants" direction="top">
    <VariantLinks />
  </Modal>
  <Modal v-model="showCheatSheet" direction="top">
    <CheatSheet />
  </Modal>
</template>
