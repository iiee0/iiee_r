let bf_url = "https://coolors.co/9b5de5-f15bb5-fee440-00bbf9-00f5d4";
let url = bf_url.split("/");
//console.log(  url[3] );

//get colors
let new_color = url[3].split("-");
let colors = [];
for(let i= 0; i < new_color.length; i++) {
 colors[i] = "#" + new_color[i];
}

//let colors = ["#006d77", "#83c5be", "#edf6f9", "#ffddd2", "#e29578"];

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);

  angleMode(DEGREES);
  background(0,0,0);

// background dot
 for (let i = 0; i < width * height * 5 / 100; i++) {
   fill(255);
   stroke(255, 255, 255,70);
   
    let px = random(width);
    let py = random(height);
    point(px, py);
  }

  let cells = int(random(3,12)); 
  let offset = width / 10;
  let margin = offset / 5;
  let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      let x = offset + i * (w + margin);
      let y = offset + j * (h + margin);
      let cx = x + w / 2;
      let cy = y + h / 2;
      let d = w;
      let rotate_num = int(random(4)); 
      rotate_num = rotate_num * 90; 
      let shape_num = int(random(4));

      let c = random(colors);

      push();
      translate(cx, cy);
      rotate(rotate_num);
      if (random(100) > 50) {
        noStroke();
        fill(c);
      } else {
        noFill();
        stroke(c);
      }
      if (shape_num == 0) {
        // heart shape    
        console.log(-d/2);
        beginShape();
        vertex(0, -d/2+10);
        bezierVertex(0, -d/2-10, 40, -d/2+10, 0, -d/2+35);
        vertex(0, -d/2+10);
        bezierVertex(0, -d/2-10, -40, -d/2+10, 0, -d/2+35);
        endShape();
        
      } else if (shape_num == 1) {
        rectMode(CENTER);
        rect(0, 0, d, d);
      } else if (shape_num == 2) {
        ellipse(0, 0, d, d);
      } else if (shape_num == 3) {
        arc(-d / 2, -d / 2, d * 2, d * 2, 0, 90);
      }
      pop();
    }
  }
  
  let s = 'Happy New Year with Special Luck 2021 ';
fill(255);
  noStroke();
text(s, 10, 10, 70, 80); // Text wraps within text box
}
