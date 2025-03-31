import { defineStore } from "pinia";
import { store } from "@/store";
import { ref } from "vue";

export const useCachedViewStore = defineStore("cached-view", () => {
  // 缓存页面 keepAlive
  const cachedViewList = ref([]);

  function addCachedView(view) {
    // 不重复添加
    if (cachedViewList.value.includes(view.name)) return;
    if (!view?.meta?.noCache) {
      cachedViewList.value.push(view.name);
    }
  }

  function delCachedView(view) {
    const index = cachedViewList.value.indexOf(view.name);
    index > -1 && cachedViewList.value.splice(index, 1);
  }

  function delAllCachedViews() {
    cachedViewList.value = [];
  }

  return {
    cachedViewList,
    addCachedView,
    delCachedView,
    delAllCachedViews
  };
});

export function useCachedViewStoreHook() {
  return useCachedViewStore(store);
}
