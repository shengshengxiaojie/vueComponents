<template>
  <div class="g-nav" :class="{ vertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GNav",
  //  依赖注入
  provide() {
    return {
      root: this,
      vertical: this.vertical
    };
  },
  props: {
    selected: {
      type: String,
      default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [],
      namePath: []
    };
  },
  mounted() {
    this.updateChildren();
    this.listenToChildren();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    addItem(vm) {
      this.items.push(vm);
    },
    updateChildren() {
      this.items.forEach(vm => {
        if (this.selected === vm.name) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on("update:selected", name => {
          // if (this.multiple) {
          //   if (this.selected.indexOf(name) < 0) {
          //     let copy = JSON.parse(JSON.stringify(this.selected));
          //     copy.push(name);
          //     this.$emit("update:selected", copy);
          //   }
          // } else {
          this.$emit("update:selected", name);
          // }
        });
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/var";
.g-nav {
  display: flex;
  border-bottom: 1px solid $grey;
  color: $color;
  cursor: default;
  user-select: none;
  &.vertical {
    flex-direction: column;
    border: 1px solid $grey;
  }
}
</style>
