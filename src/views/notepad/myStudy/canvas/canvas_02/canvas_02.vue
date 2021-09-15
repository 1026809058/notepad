<template>
  <div class="canvas_02" ref="canvas1">
    <div class="chessboard" ref="canvas2">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "canvas_02",
  setup() {
    let canvas = ref();
    let canvas1 = ref();
    let canvas2 = ref();
    onMounted(() => {
      function chess() {
        //获取页面宽高
        let wWidth = canvas2.value.offsetWidth;
        let wHeight = canvas2.value.offsetHeight;
        let canvasSize = wHeight;
        //线条条数
        let interval: number = wHeight / 25;
        canvas.value.width = wWidth;
        canvas.value.height = wHeight;
        const ctx = canvas.value.getContext("2d");
        ctx.translate(0.5, 0.5);
        for (let i = 0; i < interval; i++) {
          ctx.beginPath();
          ctx.moveTo(0, 30 * i);
          ctx.lineTo(canvasSize, 30 * i);
          ctx.stroke();
          ctx.closePath();
        }
        for (let i = 0; i < interval; i++) {
          ctx.beginPath();
          ctx.moveTo(30 * i, 0);
          ctx.lineTo(30 * i, canvasSize);
          ctx.stroke();
          ctx.closePath();
        }
        //是否黑棋
        let isBlack = true;
        //棋盘二维数组
        let cheeks: number[] = [];
        let arrLength = parseInt(interval);
        for (let i = 0; i < interval; i++) {
          cheeks[i] = new Array(arrLength).fill(0);
        }
        console.log("cheeks", cheeks);
        //创建棋子点击事件
        canvas.value.onclick = function (e: any) {
          const clientX = e.clientX;
          const clientY = e.clientY;
          console.log("clientY", clientX, clientY);
          //取整，确保棋子落在交叉点
          const x = Math.round(clientX / 30) * 30 + 20;
          const y = Math.round(clientY / 30) * 30 + 20;
          console.log("x", x, y);
          // cheeks二维数组的索引
          const cheeksX = (x - 20) / 30;
          const cheeksY = (y - 20) / 30;
          console.log(cheeksX, cheeksY);
          // 对应元素不为0说明此地方已有棋，返回
          if (cheeks[cheeksY][cheeksX]) return;
          // 黑棋为1，白棋为2
          cheeks[cheeksY][cheeksX] = isBlack ? 1 : 2;
          ctx.beginPath();
          // 画圆
          ctx.arc(x, y, 20, 0, 2 * Math.PI);
          // 判断走黑还是白
          ctx.fillStyle = isBlack ? "black" : "white";
          ctx.fill();
          ctx.closePath();
          // 切换黑白
          isBlack = !isBlack;
        };
      }
      chess();
    });
    return {
      canvas,
      canvas1,
      canvas2,
    };
  },
});
</script>
<style lang="scss" scoped>
.canvas_02 {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #ff821b 0%, #ffa954 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 0) {
  $line: 301px;
  .chessboard {
    width: $line;
    min-height: $line;
    max-height: $line;
  }
}
@media screen and (min-width: 45em) {
  $line: 601px;
  .chessboard {
    width: $line;
    min-height: $line;
    max-height: $line;
  }
}
@media screen and (min-width: 70em) {
  $line: 811px;
  .chessboard {
    width: $line;
    min-height: $line;
    max-height: $line;
  }
}
</style>
