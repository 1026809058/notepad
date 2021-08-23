<template>
  <div class="canvas-01" id="canvas1">
    <canvas ref="canvas" width="600" height="600"></canvas>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, nextTick } from "vue";
import formatDate from "../../../../../utils/formateDate";
export default defineComponent({
  name: "Canvas_01",
  setup() {
    let canvas = ref();
    onMounted(() => {
      console.log(canvas, 222);
      function time() {
        let ctx = canvas.value.getContext("2d");
        ctx.translate(300, 300); // 设置中心点，此时以（300,300）为（0,0）坐标
        ctx.save(); //保存状态
        /*大圆*/
        ctx.beginPath(); //开始路径
        ctx.arc(0, 0, 100, 0, 2 * Math.PI); //画圆线，使用arc(中心点x，中心点y，半径，起始角度，结束角度)
        ctx.stroke(); //执行划线操作
        ctx.closePath(); //结束路径
        /*小圆*/
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        let date = new Date(); //获取当前时间
        let hour = date.getHours() % 12;
        let min = date.getMinutes();
        let sec = date.getSeconds();

        /*时针*/
        ctx.rotate(
          (2 * Math.PI) / 12 + ((2 * Math.PI) / 12) * (min / 60) - Math.PI / 2
        ); //旋转当前图案
        ctx.beginPath();
        ctx.moveTo(-10, 0); //movTo设置画布起点
        ctx.lineTo(40, 0); //lineTo设置画布经过点
        ctx.lineWidth = 10; //设置线宽
        ctx.stroke();
        ctx.closePath();
        /*分针*/
        ctx.rotate(
          ((2 * Math.PI) / 60) * min +
            ((2 * Math.PI) / 60) * (sec / 60) -
            Math.PI
        );
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "blue"; //绘制颜色
        ctx.stroke();
        ctx.closePath();
        ctx.restore(); //回复状态
        ctx.save();
      }
      time();
    });
    return {
      canvas,
    };
  },
});
</script>
<style lang="scss" scoped>
.canvas-01 {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
  background: linear-gradient(to bottom, #dcdcdc 0%, palevioletred 100%);
}
</style>
