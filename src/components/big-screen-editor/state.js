import Vue from 'vue';

export const state = Vue.observable({
  width: 0,           // 真实坐标
  height: 0,          // 真实坐标
  zoom: 1,
  boardSpace: 650,    // 真实坐标
  initBoardSpace: 85, // 真实坐标
  scrollLeft: 0,      // 缩放坐标
  scrollTop: 0,       // 缩放坐标
  // deprecated
  panX: 0,
  panY: 0,
});

export const computeViewSize = () => {
  return [state.width + state.boardSpace * 2, state.height + state.boardSpace * 2];
}

export const initState = (containerRect, width, height) => {
  console.log('initState', containerRect, width, height);
  state.width = width;
  state.height = height;
  // 容器宽高为画布宽高 + boardSpace * 2
  const zoom = (containerRect.width - 85 * 2) / width;
  state.zoom = zoom;
  // state.scrollLeft = 
  state.panX = (containerRect.width - width) / 2;
  state.panY = (containerRect.height - height) / 2;
}

export const handleWheelPan = (deltaX, deltaY) => {
  let {panX, panY} = state;
  panX -= deltaX * 0.5;
  panY -= deltaY * 0.5;
  state.panX = panX;
  state.panY = panY;
}

export const handleWheelZoom = (containerRect, contentRect, pointerPosition, delta) => {
  console.log(containerRect, contentRect, pointerPosition, delta);
}
