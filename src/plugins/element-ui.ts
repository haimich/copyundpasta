import Vue from "vue";
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/de";

export default () => {
  Vue.use(Element, { locale });
}
