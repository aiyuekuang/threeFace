Component({
  properties: {
    // 3column | column-4 | add | add-circle | adjust | arrow-up-circle | arrow-right-circle | arrow-down | ashbin | arrow-right | browse | bottom | back | bad | arrow-double-left | arrow-left-circle | arrow-double-right | caps-lock | camera | chart-bar | attachment | code | close | check-item | calendar | comment | column-vertical | column-horizontal | complete | chart-pie | cry | customer-service | delete | direction-down | copy | cut | data-view | direction-down-circle | direction-right | direction-up | discount | direction-left | download | electronics | drag | elipsis | export | explain | edit | eye-close | email | error | favorite | file-common | file-delete | file-add | film | fabulous | file | folder-close | filter | good | hide | home | history | file-open | forward | import | image-text | keyboard-26 | keyboard-9 | link | layout | fullscreen-shrink | layers | lock | fullscreen-expand | map | meh | menu | loading | help | minus-circle | modular | notification | mic | more | pad | operation | play | print | mobile-phone | minus | navigation | pdf | prompt | move | refresh | run-up | picture | run-in | pin | save | search | share | scanning | security | sign-out | select | stop | success | smile | switch | setting | survey | task | skip | text | time | telephone-out | toggle-left | toggle-right | telephone | top | unlock | user | upload | work | training | warning | zoom-in | zoom-out | add-bold | arrow-left-bold | arrow-up-bold | close-bold | arrow-down-bold | minus-bold | arrow-right-bold | select-bold | arrow-up-filling | arrow-down-filling | arrow-left-filling | arrow-right-filling | caps-unlock-filling | comment-filling | check-item-filling | clock-filling | delete-filling | decline-filling | dynamic-filling | intermediate-filling | favorite-filling | layout-filling | help-filling | history-filling | filter-filling | file-common-filling | news-filling | edit-filling | fullscreen-expand-filling | smile-filling | rise-filling | picture-filling | notification-filling | user-filling | setting-filling | switch-filling | work-filling | task-filling | success-filling | warning-filling | folder-filling | map-filling | prompt-filling | meh-filling | cry-filling | top-filling | home-filling | sorting
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
