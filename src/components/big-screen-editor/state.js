import Vue from 'vue';

export const state = Vue.observable({
  width: 0,
  height: 0,
  zoom: 1,
  boardSpace: 200,
  // deprecated
  panX: 0,
  panY: 0,
});

export const initState = (containerRect, width, height) => {
  console.log('initState', containerRect, width, height);
  state.width = width;
  state.height = height;
  const zoom = containerRect.width / (width + state.boardSpace * 2);
  state.zoom = zoom;
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
