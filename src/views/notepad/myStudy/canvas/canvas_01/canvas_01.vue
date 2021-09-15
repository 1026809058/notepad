<template>
  <div class="canvas-01" ref="canvas1">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  nextTick,
  onBeforeUnmount,
  watch,
} from "vue";
export default defineComponent({
  name: "Canvas_01",
  setup() {
    let canvas = ref();
    let canvas1 = ref();
    let frame: any;
    onMounted(() => {
      let ctx = canvas.value.getContext("2d");
      function time() {
        let wHeight = canvas1.value.offsetHeight;
        let wWidth = canvas1.value.offsetWidth;
        canvas.value.width = wWidth;
        canvas.value.height = wHeight;
        ctx.save(); //保存状态
        ctx.clearRect(0, 0, wWidth, wHeight); //清空矩形
        ctx.translate(wWidth / 2, wHeight / 2); // 设置中心点，此时以（300,300）为（0,0）坐标
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
          ((2 * Math.PI) / 12) * hour +
            ((2 * Math.PI) / 12) * (min / 60) -
            Math.PI / 2
        ); //旋转当前图案
        ctx.beginPath();
        ctx.moveTo(-10.5, 0.5); //movTo设置画布起点
        ctx.lineTo(40, 0); //lineTo设置画布经过点
        ctx.lineWidth = 10; //设置线宽
        ctx.stroke();
        ctx.closePath();
        /*分针*/
        ctx.rotate(
          ((2 * Math.PI) / 60) * min +
            ((2 * Math.PI) / 60) * (sec / 60) -
            Math.PI / 2
        );
        ctx.beginPath();
        ctx.moveTo(-10.5, 0.5);
        ctx.lineTo(60, 0);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "blue"; //颜色
        ctx.stroke();
        ctx.closePath();
        ctx.restore(); //恢复状态
        ctx.save();
        /*秒针*/
        ctx.rotate(((2 * Math.PI) / 60) * sec - Math.PI);
        ctx.beginPath();
        ctx.moveTo(-10.5, 0.5);
        ctx.lineTo(80, 0);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        ctx.save();
        /*刻度*/
        ctx.lineWidth = 1;
        for (let i = 0; i < 60; i++) {
          ctx.rotate((2 * Math.PI) / 60);
          ctx.beginPath();
          ctx.moveTo(90.5, 0.5);
          ctx.lineTo(100, 0);
          ctx.stroke();
          ctx.closePath();
        }
        ctx.restore();
        ctx.save();
        ctx.lineWidth = 5;
        for (let i = 0; i < 12; i++) {
          ctx.rotate((2 * Math.PI) / 12);
          ctx.beginPath();
          ctx.moveTo(85.5, 0.5);
          ctx.lineTo(100, 0);
          ctx.stroke();
          ctx.closePath();
        }

        ctx.restore();
        ctx.restore();

        frame = requestAnimationFrame(time);
      }
      frame = requestAnimationFrame(time);
    });
    onBeforeUnmount(() => {
      window.cancelAnimationFrame(frame); //终止requestAnimationFrame
    });
    return {
      canvas,
      canvas1,
    };
  },
});
</script>
<style lang="scss" scoped>
.canvas-01 {
  margin: auto;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
  background: linear-gradient(to bottom, #dcdcdc 0%, palevioletred 100%);
}
</style>
