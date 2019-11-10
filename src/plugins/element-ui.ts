import Vue from "vue";
import {
  Select, Row, Col, Image, Menu, MenuItem, MenuItemGroup,
  Form, FormItem, Button, Input, Tooltip, Autocomplete,
  Breadcrumb, BreadcrumbItem, Card, Dialog, Popover, Avatar,
  PageHeader, Notification, Loading, Tag, Rate, Table, TableColumn,
  Carousel, CarouselItem
} from "element-ui";
import locale from "element-ui/lib/locale/lang/de";

export default () => {
  Vue.use(Select, { locale });
  Vue.use(Row, { locale });
  Vue.use(Col, { locale });
  Vue.use(Image, { locale });
  Vue.use(Menu, { locale });
  Vue.use(MenuItem, { locale });
  Vue.use(MenuItemGroup, { locale });
  Vue.use(Form, { locale });
  Vue.use(FormItem, { locale });
  Vue.use(Button, { locale });
  Vue.use(Input, { locale });
  Vue.use(Tooltip, { locale });
  Vue.use(Autocomplete, { locale });
  Vue.use(Breadcrumb, { locale });
  Vue.use(BreadcrumbItem, { locale });
  Vue.use(Card, { locale });
  Vue.use(Dialog, { locale });
  Vue.use(Popover, { locale });
  Vue.use(Avatar, { locale });
  Vue.use(PageHeader, { locale });
  Vue.use(Tag, { locale });
  Vue.use(Rate, { locale });
  Vue.use(Table, { locale });
  Vue.use(TableColumn, { locale });
  Vue.use(Carousel, { locale });
  Vue.use(CarouselItem, { locale });

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$notify = Notification;
}
