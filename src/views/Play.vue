<script>

export default {
  data () {
    return {
      row: 1000,
      col: 1000,
      scrollTop: 0,
      scrollLeft: 0
    }
  },
  computed: {
    width () {
      return this.col * 80 + 'px'
    },
    height () {
      return this.row * 40 + 'px'
    }
  },
  methods: {
    getPosition (x, y) {
      return {
        width: '80px',
        height: '40px',
        left: y * 80 + 'px',
        top: x * 40 + 'px'
      }
    },
    scroll (e) {
      this.scrollTop = e.target.scrollTop
      this.scrollLeft = e.target.scrollLeft
    },
    visible (i, j) {
      const left = j * 80
      const right = left + 80
      const top = i * 40
      const bottom = top + 40

      return left >= this.scrollLeft && right <= this.scrollLeft + 500 && top >= this.scrollTop && bottom <= this.scrollTop + 500
    }
  },
  render () {
    const cells = []
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        if (this.visible(i, j)) {
          cells.push(<div class="cell" style={this.getPosition(i, j)}>{'r' + i + 1}/{'c' + j + 1}</div>)
        }
      }
    }
    return (
      <div class="demo">
        <div>{this.scrollLeft}</div>
        <div>{this.scrollTop}</div>
        <div class="wrapper" onScroll={this.scroll}>
          <div class="content" style={{ width: this.width, height: this.height }}>
            { cells }
          </div>
        </div>
      </div>
    )
  }
}
</script>

<style>
.wrapper {
  width: 500px;
  height: 500px;
  border: 1px solid red;
  overflow: auto;
}
.content {
  position: relative;
}

.cell {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
</style>
