<template>
  <div class="pb">
    <div class="pb-item" v-for="(item, index) in pbData" :key="index">
      <div class="pd-item-elem">
        <div
          class="pb-item-elem-rdn iconfont"
          :class="
            currPos >= index ? `icon-${item.icon} textActive` : 'deactive'
          "
        >
          <span :class="currPos >= index ? 'textActive' : 'deactive'">
            {{ item.process }}
          </span>
        </div>
      </div>
      <!-- <div class="pd-text">{{ item.process }}</div> -->
      <div class="pb-line" :class="currPos > index ? 'activeLine' : ''"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currPos: 0
    };
  },
  computed: {
    precent() {
      return (this.currPos / this.pbData.length) * 100;
    }
  },
  methods: {
    processLift() {
      this.currPos =
        this.currPos < this.pbData.length - 1
          ? this.currPos + 1
          : this.pbData.length;
    }
  },
  props: {
    pbData: Array
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "iconfont";
  src: url("https://at.alicdn.com/t/font_1180980_vwqswx96f7f.eot?t=1560168712190"); /* IE9 */
  src: url("https://at.alicdn.com/t/font_1180980_vwqswx96f7f.eot?t=1560168712190#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAR0AAsAAAAACaQAAAQmAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqGQIUKATYCJAMUCwwABCAFhG0HTBsaCMgekiSCKAUUAKhiD0BRPDyt/e/cmdl9Ku2LY0ksiVYSIeKJ6pUEoREq2UsmFLf0BtvMnJhnZqfGVDiVSkLTtYFSar/M/ISJiD31NdgYG+dkEl1cGqeNB6yuncWllU2rhUoHDAU0b2+lN5JWgF70RfiHsYvLOJpA27L+3M4MH1sJfBXaSoG4QQQN8I0ZlBJ6aKrrnC2LeAS8NNMD9xt46L5+fLQ/fEmqTDvWhUvD9GDgm7AvxIP9ZxozA6w/G5jtyNgHKMTNXMcNHn5iHw9tKebpBCDHmpLU12y9vtR/If8XQOmKVG39Hx4hyQpR07CLaCd0xc6JTILgXS+CxLt6gsw7Ir4xWKHl2xgDvgJxHtCmmE6uutsd+fp2617PyxoMRqGhYfbfcuvBgzx8yOPHPno0vTo7unrRpO1zoqqExXO2spYHT3n4VnuN7fGzPnoX16NPffzZhx958OEi9XA5J87eFu+2fPucrXFgyRZn5OnYf9O2Sdt7BWzcyra4yI9Ub4pftjqmZvPBnSsiK1VV4k/hmL0oetGqhJrFh3ssXBlbqW4wsHiUkJpl1dC3+3CPqkKnusGCzAmL0Zfsm+Krl60+fjCqaumSyEiVMLIVZA4VZpUc8/z71/OYzrN5luZ4WD1+dK9ex+HxtjYoczi/oygBAU+hHYJLzbw9OkQrCNqQaDsfE11XHxOTmsvGB70/9tRzFXo+1XWrEEvDKOC20uqQD+e7nTEOY7Ftgt2ZB+6JPZg7dsvqF+Fhzwyf8IClB7Z0Bm1HhuTmIkwveG6r5R5r+0c5X79VZ0rmmrOq5Z10Ge2a4lDvtvJ/rTxHV3t7/ZdaOUpGrz7uzcpD2wpf9+z1jIaGoZzPmkzK/WuDPt44h2f5RXvUGnysk1pb8d1LtvKkcEyo5R5HWyV3v8cc5cXfGwctOG55x1HWluIPu145AzyAxfX8wqMUac9kXXXin1rKr/Lo6JaQ4l++ARdz4nV3oy9uWLAC8n0Afgyl2qI/SFRzoMgSzVgVsdkUiq7Kk7eDSZpo47/xjL3qRzWrXUpomoWQNCxB1rRJKrR9UOk4CLWm49C214jtOyZkHqK0sMc0AGFoNyR9ryAbukkqtJdQmfsJtWF4QNvFiNhjx3YQ/yEy0ihID7UuSHQixYZZ8ffKy5FgM2nkqMRlVCPZSsIwIzU9mR6BKJL7WMdqFzIVBUMsi2Y4HBwPmUwilGTRiHRKqkFRpMK0NJz3SKk60Qz8nSZDNBSIHqTlAhE6Igrb4xX+qZcvhwhsTDTkkpYSdzVEZkVmDmVIlV6DNAJprZZzuY6VnSCTQoFBmExkBg0HNsSkJ0SQlL+YEaKjSGVoEZMUSkOjcF1MHV9lvsai77et9pBVpMhRoopavizaPLQa6iMjE9JYUaCDUP0Ak6jREyoAAAAA")
      format("woff2"),
    url("https://at.alicdn.com/t/font_1180980_vwqswx96f7f.woff?t=1560168712190")
      format("woff"),
    url("https://at.alicdn.com/t/font_1180980_vwqswx96f7f.ttf?t=1560168712190")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("https://at.alicdn.com/t/font_1180980_vwqswx96f7f.svg?t=1560168712190#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gou:before {
  content: "\e611";
}

.icon-ban:before {
  content: "\e827";
}

.icon-release:before {
  content: "\e85a";
}

.icon-wind-loading:before {
  content: "\e869";
}
.textActive {
  color: blue;
  background: transparent;
}
.pb {
  width: 100%;
  display: flex;
  padding: 50px 0;
  &-item {
    width: 100%;
    display: flex;
    position: relative;
    &:last-child {
      width: 30px;
      .pb-line {
        display: none;
      }
    }
    &-elem {
      width: 100%;
      height: 30px;
      &-rdn {
        width: 30px;
        height: 30px;
        font-size: 30px;
        line-height: 30px;
        border-radius: 50%;
        position: relative;
        transform-origin: 0 0;
        transition: all 0.5s ease 1s;
        &.deactive {
          background: rgb(221, 221, 221);
        }
        & > span {
          position: absolute;
          font-size: 16px;
          // color: gray;
          width: 96px;
          left: -100%;
          top: 30px;
          text-align: center;
        }
      }
    }
  }
  &-line {
    flex: 1;
    background: rgb(221, 221, 221);
    height: 10px;
    margin-top: 10px;
    transform-origin: 0 0;
    transition: all 1s ease-in;
    &.activeLine {
      background: blue;
    }
  }
  &-text {
    width: height;
    line-height: 30px;
  }
}
</style>
