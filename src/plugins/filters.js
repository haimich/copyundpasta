import Vue from "vue";

import { $n } from "@/filters/numberFilter";
import { formatAsDate, formatAsDateWithTime } from "@/filters/dateFilter";

Vue.filter("$n", $n);
Vue.filter("formatAsDate", formatAsDate);
Vue.filter("formatAsDateWithTime", formatAsDateWithTime);