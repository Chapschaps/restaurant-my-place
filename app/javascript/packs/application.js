import "bootstrap";

import { preloader } from "../components/preloader";
import { navScrollEffect } from "../components/navbar_scroll_effect";
import { navOnClick } from "../components/navbar_on_click";
import { disableAnimAos } from "../components/disable_aos";
import { aosEffect } from "../plugins/aos";
import { bannerShowTakeaway } from "../components/banner_takeaway";


preloader();
navScrollEffect();
navOnClick();
disableAnimAos();
aosEffect();
bannerShowTakeaway();
