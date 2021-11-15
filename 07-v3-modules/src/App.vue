<template>
  <div>
    <p>Count Root: {{ count }}</p>
    <button @click="increment">+ Count Root</button>
    <button @click="decrement">- Count Root</button>
    <button @click="asyncIncrement">+ (async) Count Root</button>

    <p>Module A Count: {{ aCount }}</p>
    <p>Module A Double Count: {{ aDoubleCount }}</p>
    <p>Module A Sum Count With Root Count: {{ aSumWithRootCount }}</p>
    <button @click="aIncrement">+ Module A Count</button>
    <button @click="aIncrementIfOdd">+ Module A Count (If Odd)</button>
    <button @click="aIncrementIfOddOnRootSum">
      + Module A Count (If Odd On Root Sum)
    </button>

    <p>Module B Count: {{ bCount }}</p>
    <p>SubModule B Count: {{ bSubCount }}</p>
    <p>SubModule B Double Count: {{ bDoubleSubCount }}</p>
    <button @click="sBIncrement">+ SubModule B Count</button>
    <button @click="asyncSBIncrement">+ (async) SubModule B Count</button>

    <p>Module C Count: {{ cCount }}</p>
    <p>Sum Of All Triple Counters: {{ cSumOfAllTripleCounters }}</p>

    <button @click="cSomeAction">+ Module C Some Action</button>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      console.log("Init Count Root", store.state.count);
      console.log("Init Module A Count", store.state.moduleA.count);
      console.log("Init Module B Count", store.state.moduleB.count);
      console.log(
        "Init SubModule B Count",
        store.state.moduleB.subModule.count
      );
      console.log("Init Module C Count", store.state.moduleC.count);
    });

    return {
      count: computed(() => store.state.count),
      aCount: computed(() => store.state.moduleA.count),
      bCount: computed(() => store.state.moduleB.count),
      bSubCount: computed(() => store.state.moduleB.subModule.count),
      cCount: computed(() => store.state.moduleC.count),
      aDoubleCount: computed(() => store.getters["moduleA/doubleCount"]),
      aSumWithRootCount: computed(
        () => store.getters["moduleA/sumWithRootCount"]
      ),
      bDoubleSubCount: computed(
        () => store.getters["moduleB/subModule/doubleCoun"]
      ),
      cSumOfAllTripleCounters: computed(
        () => store.getters["moduleC/sumOfAllTripleCounters"]
      ),
      increment: () => store.commit({ type: "increment" }),
      decrement: () => store.commit({ type: "decrement" }),
      aIncrement: () => store.commit({ type: "moduleA/increment" }),
      sBIncrement: () => store.commit({ type: "moduleB/subModule/increment" }),
      asyncIncrement: () => store.dispatch("asyncIncrement"),
      aIncrementIfOdd: () => store.dispatch("moduleA/incrementIfOdd"),
      aIncrementIfOddOnRootSum: () =>
        store.dispatch("moduleA/incrementIfOddOnRootSum"),
      asyncSBIncrement: () =>
        store.dispatch("moduleB/subModule/asyncIncrement"),
      cSomeAction: () => store.dispatch("moduleC/someAction"),
    };
  },
};
</script>
