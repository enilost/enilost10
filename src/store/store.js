import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    data:[
      { 
        name: 'List 1',
        id: 1,
        checked: true,
        items:[
          { 
            list: 1,
            id: 'id-1',
            name: 'item 1',
            checked: true,
            count: 7,
            color: '#ff0000'
          },
          {
            list: 1,
            id: 'id-2',
            name: 'item 2',
            checked: true,
            count: 3,
            color: '#cc0bda'
          },
          {
            list: 1,
            id: 'id-3',
            name: 'item 3',
            checked: true,
            count: 5,
            color: '#533B59'
          },
          {
            list: 1,
            id: 'id-4',
            name: 'item 4',
            checked: true,
            count: 6,
            color: '#25E1E4'
          },
        ]
      },
      { 
        name: 'List 2',
        id: 2,
        checked: true,
        items:[
          { 
            list: 2,
            id: 'id-5',
            name: 'item 1',
            checked: false,
            count: 7,
            color: '#C8C6D7'
          },
          {
            list: 2,
            id: 'id-6',
            name: 'item 2',
            checked: true,
            count: 3,
            color: '#08ddcf'
          },
          {
            list: 2,
            id: 'id-7',
            name: 'item 3',
            checked: true,
            count: 14,
            color: '#08dd22'
          },
          {
            list: 2,
            id: 'id-8',
            name: 'item 4',
            checked: true,
            count: 1,
            color: '#5F8C64'
          },
          {
            list: 2,
            id: 'id-9',
            name: 'item 5',
            checked: true,
            count: 3,
            color: '#AAe453'
          },
          {
            list: 2,
            id: 'id-10',
            name: 'item 6',
            checked: false,
            count:5,
            color: '#7068AC'
          },
        ]
      },
      { 
        name: 'List 3',
        id: 3,
        checked: false,
        items:[
          { 
            list: 3,
            id: 'id-11',
            name: 'item 1',
            checked: true,
            count: 7,
            color: '#C8C6D7'
          },
          {
            list: 3,
            id: 'id-12',
            name: 'item 2',
            checked: false,
            count: 3,
            color: '#08ddcf'
          },
          {
            list: 3,
            id: 'id-13',
            name: 'item 3',
            checked: true,
            count: 9,
            color: '#08dd22'
          },
          {
            list: 3,
            id: 'id-14',
            name: 'item 4',
            checked: true,
            count: 1,
            color: '#5F8C64'
          },
          {
            list: 3,
            id: 'id-15',
            name: 'item 5',
            checked: true,
            count: 3,
            color: '#AAe453'
          },
          {
            list: 3,
            id: 'id-16',
            name: 'item 6',
            checked: false,
            count:5,
            color: '#7068AC'
          },
          {
            list: 3,
            id: 'id-17',
            name: 'item 7',
            checked: true,
            count: 3,
            color: '#B45F75'
          },
        ]
      },
    ],
  },
  mutations: {
    DELETE_BOX_MUT(state, payload){
      state.data.find((list) => {
        return list.id === payload.id
      }).items.find((item) => {
        return item.id === payload.box.id
      }).count--
    },
    CHECK_LIST_MUT(state, payload){
      state.data.find((list) =>{
        if (list.id === payload.id) {
          list.checked = payload.check
        }
        return list.id === payload.id
      }).items.forEach((item) => {
        item.checked = payload.check
      });
    },
    CHECK_ITEM_MUT(state, payload){
      state.data.find((list) => {
        return list.id === payload.list
      }).items.find((item) => {
        return item.id === payload.id
      }).checked = payload.check
    },
    COUNT_ITEM_MUT(state, payload){
      state.data.find((list) => {
        return list.id === payload.list
      }).items.find((item) => {
        return item.id === payload.id
      }).count = +payload.count
    },
    COLOR_ITEM_MUT(state, payload){
      state.data.find((list) => {
        return list.id === payload.list
      }).items.find((item) => {
        return item.id === payload.id
      }).color = payload.color
    }
  },
  actions: {
    DELETE_BOX_ACTION(ctx, payload){
      ctx.commit('DELETE_BOX_MUT', payload);
    },
    CHECK_LIST_ACTION(ctx, payload){
      ctx.commit('CHECK_LIST_MUT', payload);
    },
    CHECK_ITEM_ACTION(ctx, payload){
      ctx.commit('CHECK_ITEM_MUT', payload);
    },
    COUNT_ITEM_ACTION(ctx, payload){
      ctx.commit('COUNT_ITEM_MUT', payload);
    },
    COLOR_ITEM_ACTION(ctx, payload){
      ctx.commit('COLOR_ITEM_MUT', payload);
    }
  },
  getters: {
    DATA_GETT(state){
      return  state.data
    }
  },
  modules: {
  }
})
