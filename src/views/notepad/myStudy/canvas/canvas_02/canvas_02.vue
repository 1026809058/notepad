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
        let interval: number = 0;
        let unnecessaryX: number;
        let unnecessaryY: number;
        switch (canvasSize) {
          case 301:
            unnecessaryX = 210;
            unnecessaryY = 270;
            interval = wHeight / 25 - 3;
            break;
          case 601:
            unnecessaryX = 500;
            unnecessaryY = 560;
            interval = wHeight / 25 - 5;
            break;
          case 721:
            unnecessaryX = 620;
            unnecessaryY = 680;
            interval = wHeight / 25 - 5;
            break;
          default:
            unnecessaryX = 0;
            unnecessaryY = 0;
            break;
        }
        canvas.value.width = wWidth;
        canvas.value.height = wHeight;
        const ctx = canvas.value.getContext("2d");
        ctx.translate(0.5, 0.5);
        for (let i = 1; i < interval; i++) {
          ctx.beginPath();
          ctx.moveTo(20, 30 * i);
          ctx.lineTo(canvasSize - 20, 30 * i);
          ctx.stroke();
          ctx.closePath();
        }
        for (let i = 1; i < interval; i++) {
          ctx.beginPath();
          ctx.moveTo(30 * i, 20);
          ctx.lineTo(30 * i, canvasSize - 20);
          ctx.stroke();
          ctx.closePath();
        }
        //是否黑棋
        let isBlack = true;
        //棋盘二维数组
        let cheeks: any[] = [];
        let arrLength = parseInt(`${interval}`);
        for (let i = 0; i < interval - 1; i++) {
          cheeks[i] = new Array(arrLength).fill(0);
        }
        console.log("cheeks", cheeks);
        //创建棋子点击事件
        canvas.value.onclick = function (e: any) {
          try {
            const clientX = e.clientX;
            const clientY = e.clientY;
            console.log("clientY", clientX, clientY);
            console.log(canvasSize);
            //取整，确保棋子落在交叉点
            const x = Math.round(clientX / 30) * 30 - unnecessaryX + 30;
            let y = 0;
            if (clientY % 30 < 4) {
              y = Math.round(clientY / 30) * 30 - unnecessaryY + 30;
              console.log("y", y, clientY / 30);
            } else {
              y = (Math.round(clientY / 30) - 1) * 30 - unnecessaryY + 30;
              console.log("y", y, clientY / 30);
            }
            console.log("x", x, y, clientY % 30);
            // cheeks二维数组的索引
            const cheeksX = x / 30 - 1;
            const cheeksY = y / 30 - 1;
            console.log(cheeksX, cheeksY);
            // 对应元素不为0说明此地方已有棋，返回
            if (
              cheeks[cheeksY][cheeksX] ||
              cheeksY < 0 ||
              cheeksX < 0 ||
              cheeksX > interval - 1 ||
              cheeksY > interval - 1
            )
              return;
            // 黑棋为1，白棋为2
            cheeks[cheeksY][cheeksX] = isBlack ? 1 : 2;
            ctx.beginPath();
            // 画圆
            ctx.arc(x + 0.5, y + 0.5, 15, 0, 2 * Math.PI);
            // 判断白棋走还是黑棋，填充色
            ctx.fillStyle = isBlack ? "black" : "white";
            //填充
            ctx.fill();
            ctx.closePath();
            // 切换黑白
            isBlack = !isBlack;
          } catch (e) {
            console.log(e);
          }
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
  $line: 721px;
  .chessboard {
    width: $line;
    min-height: $line;
    max-height: $line;
  }
}
</style>
