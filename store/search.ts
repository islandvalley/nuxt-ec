import { ActionContext } from 'vuex'

const types: { [Key: string]: string } = {
  SEARCH_START: 'SEARCH_START',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FAIL: 'SEARCH_FAIL',
  UPDATE_SEARCH_WORD: 'UPDATE_SEARCH_WORD'
}

type State = {
  items: any
  searchedWord: string
  searchWord: string
  searching: boolean
}

interface IContext<T> {
  [key: string]: T
}

export const state = () => ({
  items: [],
  searchedWord: '',
  searchWord: '',
  searching: false
})

export const actions = {
  // 検索中に当たる挙動
  searchItems({ commit }: ActionContext<any, never>) {
    commit(types.SEARCH_START)

    const cond = true
    let itemsResponse: any = []

    if (cond) {
      itemsResponse = items
    }

    if (itemsResponse.length > 0) {
      // 擬似的に検索時間分遅延させる
      setTimeout(() => {
        commit(types.SEARCH_SUCCESS, {
          items: itemsResponse
        })
      }, 2000)
    } else {
      commit(types.SEARCH_FAIL)
    }
  },
  updateSearchWord({ commit }: any, searchWord: string) {
    commit(types.UPDATE_SEARCH_WORD, {
      searchWord
    })
  }
}

export const mutations = {
  UPDATE_SEARCH_WORD(state: State, context: IContext<{ searchWord: string }>) {
    state.searchWord = context.searchWord
  },
  SEARCH_START(state: State) {
    state.searching = true
    state.searchedWord = state.searchWord
    state.searchWord = ''
  },
  SEARCH_SUCCESS(state: State, context: IContext<{ items: any }>) {
    state.items = context.items
    state.searching = false
  }
}

const items = [
  {
    name: 'item 1',
    description: '商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  },
  {
    name: 'item 2',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150x300'
  },
  {
    name: 'item 3タイトルがめっちゃ長くなってる',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/300x150'
  },
  {
    name: 'item 4',
    description: '商品の説明商品の説明',
    src: 'https://via.placeholder.com/200'
  },
  {
    name: 'item 5',
    description: '',
    src: ''
  },
  {
    name: 'item 6',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  },
  {
    name: 'item 7',
    description: '商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  },
  {
    name: 'item 8',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150x300'
  },
  {
    name: 'item 9タイトルがめっちゃ長くなってる',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/300x150'
  },
  {
    name: 'item 10',
    description: '商品の説明商品の説明',
    src: 'https://via.placeholder.com/200'
  },
  {
    name: 'item 11',
    description: '',
    src: ''
  },
  {
    name: 'item 12',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  },
  {
    name: 'item 13',
    description:
      '商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明',
    src: 'https://via.placeholder.com/150'
  }
]
