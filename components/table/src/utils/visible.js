/**
 * 判断单元格是否在可视区域内
 * x：左上角x坐标
 * y: 左上角y坐标
 * w：宽度
 * h：高度
 */

function isVisible (wrapper, cell) {
  return (cell.x + cell.w) >= wrapper.x &&
    cell.x <= (wrapper.x + wrapper.w) &&
    (cell.y + cell.h) >= wrapper.y &&
    cell.y <= (wrapper.y + wrapper.h)
}

export {
  isVisible
}
