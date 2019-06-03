import Vue from "vue"

import {$n} from "@/filters/formatNumber";
import {formatAsDate} from "@/filters/formatDate";

Vue.filter("$n", $n);
Vue.filter("formatAsDate", formatAsDate);