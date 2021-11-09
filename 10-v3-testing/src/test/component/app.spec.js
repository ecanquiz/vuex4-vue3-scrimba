import { nextTick } from "vue";
import { shallowMount } from "@vue/test-utils";
import App from "../../App.vue";
import store from "../../store";

describe("App.vue", () => {
  it("renders app", () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.text()).toMatch("Count: 0");
  });

  it("increment count", async () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [store],
      },
    });

    const button = wrapper.find("#increment");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);

    await nextTick();
    expect(wrapper.text()).toMatch("Count: 1");
  });
});
