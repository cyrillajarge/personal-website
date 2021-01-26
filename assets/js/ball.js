// class Ball {
//   constructor(x, y, el) {
//     this.x = x
//     this.y = y
//     this.xdir = -1.0 + Math.random() * 2.0
//     this.ydir = -1.0 + Math.random() * 2.0
//     this.el = el
//   }

//   update() {
//     var w = window.innerWidth
//     var h = window.innerHeight
//     this.x += 2.0 * this.xdir
//     this.y += 2.0 * this.ydir
//     if (this.x > w + 50) {
//       this.x = 0
//     }
//     if (this.x < -50) {
//       this.x = w
//     }
//     if (this.y > h + 50) {
//       this.y = 0
//     }
//     if (this.y < -50) {
//       this.y = h
//     }

//     this.el.style.left = this.x + 'px'
//     this.el.style.top = this.y + 'px'
//   }

//   run() {
//     setTimeout(this.update, 20)
//   }
// }
