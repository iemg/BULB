export const useSnow = defineStore('snow', () => {
  const now = new Date()

  const snowEnabled = ref(true)
  const yearlyMessage = ref<number | null>(null)
  const currentYear = now.getFullYear()

  const isWinter = computed(() => (now.getMonth() === 11 && now.getDate() >= 15) || (now.getMonth() === 0 && now.getDate() <= 5))

  function checkYearlyMessage() {
    if (yearlyMessage.value !== currentYear) {
      yearlyMessage.value = currentYear
      return true
    }
    return false
  }

  return {
    isWinter,
    snowEnabled,
    yearlyMessage,
    checkYearlyMessage,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})
