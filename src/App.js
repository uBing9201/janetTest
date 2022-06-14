import Header from "./components/header/Header";
import HotKeyword from "./components/hotkey/HotKeyword";
import Info from "./components/info/Info";
import PopSlider from "./components/popslide/PopSlider";

import $ from "jquery";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    $(window).scroll(function () {
      var y = $(document).scrollTop();
      if (y > 130) {
        $("#hd").addClass("fixed");
      } else {
        $("#hd").removeClass("fixed");
      }
    });

    let sw = 0;
    $(".gnb_menu_btn").click(function () {
      if (sw === 0) {
        $("#gnb_all").stop().slideDown();
        sw = 1;
      } else {
        $("#gnb_all").stop().slideUp();
        sw = 0;
      }
    });

    $(".hd_sch").click(function () {
      $(".hd_sch").addClass("active");
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div id="wrap">
          <Info />
          <PopSlider />
          <HotKeyword />
        </div>
      </div>
    );
  }
}

export default App;
