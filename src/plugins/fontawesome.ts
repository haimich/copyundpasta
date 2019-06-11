import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faRss, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default () => {
  library.add(
    faRss,
    faPinterestP,
    faEnvelope,
    faSearch,
  );
  
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
