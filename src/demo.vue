<template>
  <div>
    <g-nav
      :selected.sync="selected"
      style="width: 200px;margin-left: 20px;margin-top: 20px"
    >
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title"
          >关于</template
        >
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title"
            >联系方式</template
          >
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <!--有子项-->
          <g-sub-nav name="phone">
            <template slot="title"
              >手机</template
            >
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cm">移动</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <p style="margin-bottom: 200px">你好，我是中文</p>
    <g-nav
      :selected.sync="selected"
      vertical
      style="width: 200px;margin-left: 20px;margin-top: 20px"
    >
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title"
          >关于</template
        >
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title"
            >联系方式</template
          >
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <!--有子项-->
          <g-sub-nav name="phone">
            <template slot="title"
              >手机</template
            >
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cm">移动</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>
<script>
import GNav from "./nav/nav.vue";
import GNavItem from "./nav/nav-item.vue";
import GSubNav from "./nav/sub-nav.vue";
export default {
  components: { GNav, GNavItem, GSubNav },
  data() {
    return {
      selected: "culture"
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
