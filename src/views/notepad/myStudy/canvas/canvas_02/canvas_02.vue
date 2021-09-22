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
        switch (canvasSize) {
          case 350:
            interval = wHeight / 25;
            break;
          case 600:
            interval = wHeight / 25;
            break;
          default:
            break;
        }
        canvas.value.width = wWidth;
        canvas.value.height = wHeight;
        const ctx = canvas.value.getContext("2d");
        ctx.translate(0.5, 0.5);
        //画棋盘
        for (let i = 1; i < interval; i++) {
          ctx.beginPath();
          ctx.moveTo(20, 25 * i);
          ctx.lineTo(canvasSize - 20, 25 * i);
          ctx.stroke();
          ctx.closePath();
        }
        for (let i = 1; i < interval; i++) {
          ctx.beginPath();
          ctx.moveTo(25 * i, 20);
          ctx.lineTo(25 * i, canvasSize - 20);
          ctx.stroke();
          ctx.closePath();
        }
        //是否黑棋
        let isBlack = true;
        //棋盘二维数组
        let cheeks: any[] = [];
        let arrLength = parseInt(`${interval}`);
        for (let i = 0; i < interval; i++) {
          cheeks[i] = new Array(arrLength).fill(0);
        }
        //创建棋子点击事件
        canvas.value.onclick = function (event: any) {
          try {
            //获取画布相对于窗口的位置
            let rect = canvas.value.getBoundingClientRect();
            //计算鼠标点击位置相对于画布的坐标
            const clientX =
              event.clientX - rect.left * (canvas.value.width / rect.width);
            const clientY =
              event.clientY - rect.top * (canvas.value.height / rect.height);
            //取整，确保棋子落在交叉点
            const x = Math.round(clientX / 25) * 25;
            const y = Math.round(clientY / 25) * 25;
            // cheeks二维数组的索引
            const cheeksX = x / 25 - 1;
            const cheeksY = y / 25 - 1;
            // 对应元素不为0说明此地方已有棋，二维数组为负的坐标也不能有棋子，返回
            if (
              cheeks[cheeksY][cheeksX] ||
              cheeksY < 0 ||
              cheeksX < 0 ||
              cheeksX > interval - 2 ||
              cheeksY > interval - 2
            )
              return console.log("这里不能下");
            // 黑棋为1，白棋为2
            cheeks[cheeksY][cheeksX] = isBlack ? 1 : 2;
            ctx.beginPath();
            // 画圆
            ctx.arc(x + 0.5, y + 0.5, 12, 0, 2 * Math.PI);
            // 判断白棋走还是黑棋，填充色
            ctx.fillStyle = isBlack ? "black" : "white";
            //填充
            ctx.fill();
            ctx.closePath();
            //保证画出来了再检测输赢
            setTimeout(() => {
              if (iswin(cheeksX, cheeksY)) {
                alert(`${isBlack ? "黑棋" : "白棋"}赢了！`);
                // 重新开局,清空画布
                ctx.clearRect(0, 0, canvasSize, canvasSize);
                chess();
              }
              // 切换黑白
              isBlack = !isBlack;
            }, 100);
          } catch (e) {
            console.log("这里不能下子");
          }
        };
        //判断是否连子五个
        function iswin(x: number, y: number) {
          const flag = isBlack ? 1 : 2;
          //上下
          if (up_down(x, y, flag)) {
            return true;
          }
          //左右
          if (left_right(x, y, flag)) {
            return true;
          }
          //左上右下
          if (lu_rd(x, y, flag)) {
            return true;
          }
          // 右上左下
          if (ru_ld(x, y, flag)) {
            return true;
          }
        }
        //上下连子
        function up_down(x: number, y: number, flag: number): Boolean {
          let num = 1;
          //向上找
          for (let i = 1; i < 5; i++) {
            let tempY = y - i;
            if (tempY < 0 || cheeks[tempY][x] !== flag) break;
            if (cheeks[tempY][x] === flag) num += 1;
          }
          // 向下找
          for (let i = 1; i < 5; i++) {
            let tempY = y + i;
            if (tempY > interval - 1 || cheeks[tempY][x] !== flag) break;
            if (cheeks[tempY][x] === flag) num += 1;
          }
          return num >= 5;
        }
        //左右连子
        function left_right(x: number, y: number, flag: number): Boolean {
          let num = 1;
          //向左找
          for (let i = 1; i < 5; i++) {
            let tempX = x - i;
            if (tempX < 0 || cheeks[y][tempX] !== flag) break;
            if (cheeks[y][tempX] === flag) num += 1;
          }
          //向右找
          for (let i = 1; i < 5; i++) {
            let tempX = x + i;
            if (tempX > interval - 1 || cheeks[y][tempX] !== flag) break;
            if (cheeks[y][tempX] === flag) num += 1;
          }
          return num >= 5;
        }
        //左上右下
        function lu_rd(x: number, y: number, flag: number): Boolean {
          let num = 1;
          // 向左上找
          for (let i = 1; i < 5; i++) {
            let tempX = x - i;
            let tempY = y - i;
            if (tempX < 0 || tempY < 0 || cheeks[tempY][tempX] !== flag) break;
            if (cheeks[tempY][tempX] === flag) num += 1;
          }
          // 向右下找
          for (let i = 1; i < 5; i++) {
            let tempX = x + i;
            let tempY = y + i;
            if (
              tempX > interval - 1 ||
              tempY > interval - 1 ||
              cheeks[tempY][tempX] !== flag
            )
              break;
            if (cheeks[tempY][tempX] === flag) num += 1;
          }
          return num >= 5;
        }
        //右上左下
        function ru_ld(x: number, y: number, flag: number): Boolean {
          let num = 1;
          // 向右上找
          for (let i = 1; i < 5; i++) {
            let tempX = x - i;
            let tempY = y + i;
            if (tempX < 0 || tempY > 14 || cheeks[tempY][tempX] !== flag) break;
            if (cheeks[tempY][tempX] === flag) num += 1;
          }
          // 向左下找
          for (let i = 1; i < 5; i++) {
            let tempX = x + i;
            let tempY = y - i;
            if (
              tempX > interval - 1 ||
              tempY < 0 ||
              cheeks[tempY][tempX] !== flag
            )
              break;
            if (cheeks[tempY][tempX] === flag) num += 1;
          }
          return num >= 5;
        }
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
  $line: 350px;
  .chessboard {
    width: $line;
    min-height: $line;
    max-height: $line;
  }
}
@media screen and (min-width: 45em) {
  $line: 600px;
  .chessboard {
    width: $line;
    min-height: $line;
    max-height: $line;
  }
}
</style>
