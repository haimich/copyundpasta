import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faRss, faSearch, faTimesCircle, faUserCircle } from "@fortawesome/free-solid-svg-icons"; // fas
import { faEnvelope, faComment, faClock } from "@fortawesome/free-regular-svg-icons"; // far
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

config.autoAddCss = true;

export default () => {
  library.add(
    faRss, faPinterestP, faEnvelope, faSearch, faComment, faTimesCircle,
    faClock, faUserCircle,
  );
  
  Vue.component("FontAwesome", FontAwesomeIcon);
}
