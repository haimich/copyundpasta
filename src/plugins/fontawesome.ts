import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faRss, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

config.autoAddCss = true;

export default () => {
  library.add(
    faRss, faPinterestP, faEnvelope, faSearch, faComment,
  );
  
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
