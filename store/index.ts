type State = {
  searchWord: string
}

export const state = () => ({
  searchWord: ''
})

export const mutations = {
  updateSearchWord(state: State, value: any) {
    state.searchWord = value
  }
}
