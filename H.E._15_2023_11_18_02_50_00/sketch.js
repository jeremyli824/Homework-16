class CityScape {
  constructor() {
    this.colors = {
      red: '#FF0000',
      darkRed: '#800000', 
      yellow: '#FFFF00',
      lightYellow: '#FFFF99', 
      orange: '#FFA500',
      green: '#008000', 
      skyBlue: '#87CEEB', 
      groundBrown: '#8B4513', 
    };
  }

  drawBuilding() {
    fill(this.colors.red);
    
    const buildingHeight = 150;
    const canvasWidth = width;
    const canvasHeight = height;
    
    const lowerWidth = canvasWidth * 3 / 4; 
    const upperWidth = lowerWidth - 100; 
    
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2 - buildingHeight / 2; 

    quad(
      centerX - lowerWidth / 2, centerY + buildingHeight, 
      centerX + lowerWidth / 2, centerY + buildingHeight, 
      centerX + upperWidth / 2, centerY, 
      centerX - upperWidth / 2, centerY  
    );

    fill(this.colors.red);
    const secondFloorHeight = 70; 
    const secondFloorUpperWidth = 2/3 * upperWidth; 
    rect(centerX - secondFloorUpperWidth / 2, centerY - secondFloorHeight, secondFloorUpperWidth, secondFloorHeight);
    
    fill(this.colors.yellow); 
textSize(20); 
textAlign(CENTER, CENTER);
text("天安门", centerX, centerY - secondFloorHeight / 2);

    fill(this.colors.orange);
    beginShape();
    vertex(centerX - secondFloorUpperWidth / 2, centerY - secondFloorHeight);
    vertex(centerX + secondFloorUpperWidth / 2, centerY - secondFloorHeight);
    vertex(centerX + secondFloorUpperWidth / 3, centerY - secondFloorHeight - 30); 
    vertex(centerX - secondFloorUpperWidth / 3, centerY - secondFloorHeight - 30); 
    endShape(CLOSE);

    fill(this.colors.red);
    const thirdFloorHeight = 50; 
    const thirdFloorUpperWidth = 2/3 * secondFloorUpperWidth; 
    rect(centerX - thirdFloorUpperWidth / 2, centerY - secondFloorHeight - 30 - thirdFloorHeight, thirdFloorUpperWidth, thirdFloorHeight);
    

fill(this.colors.yellow);
const starRadius = 20;
drawStar(centerX, centerY - secondFloorHeight - 30 - thirdFloorHeight + thirdFloorHeight / 2, starRadius);

function drawStar(x, y, radius) {
  const angle = TWO_PI / 5;
  const halfAngle = angle / 2;
  beginShape();
  for (let i = -PI / 2; i < TWO_PI - PI / 2; i += angle) {
    const x1 = x + cos(i) * radius;
    const y1 = y + sin(i) * radius;
    const x2 = x + cos(i + halfAngle) * (radius / 2);
    const y2 = y + sin(i + halfAngle) * (radius / 2);
    vertex(x1, y1);
    vertex(x2, y2);
  }
  endShape(CLOSE);
}

    fill(this.colors.orange);
    beginShape();
    vertex(centerX - thirdFloorUpperWidth / 2, centerY - secondFloorHeight - 30 - thirdFloorHeight);
    vertex(centerX + thirdFloorUpperWidth / 2, centerY - secondFloorHeight - 30 - thirdFloorHeight);
    vertex(centerX + thirdFloorUpperWidth / 3, centerY - secondFloorHeight - thirdFloorHeight - 60); 
    vertex(centerX - thirdFloorUpperWidth / 3, centerY - secondFloorHeight - thirdFloorHeight - 60);
    endShape(CLOSE);

fill(this.colors.lightYellow);
rect(centerX - 30, centerY + 20, 60, 60); 

fill(this.colors.lightYellow);
rect(centerX - 200, centerY + 30, 120, 20); 
rect(centerX + 80, centerY + 30, 120, 20); 


    fill(this.colors.darkRed); 
    for (let i = 0; i < 5; i++) {
      const doorX = centerX - (i - 2) * (upperWidth / 4);
      const doorY = centerY + buildingHeight;
      const doorWidth = 40; 
      const doorHeight = (i === 2) ? 80 : 60; 
      const doorRadius = doorWidth / 2;
      arc(doorX, doorY, doorWidth, doorHeight, PI, 0, CHORD); 
    }



  }

 
 drawTrees() {
    fill(this.colors.darkRed);
    rect(100, height /3, 20, 100); 
    rect(width - 120, height /3, 20, 100);

    fill(this.colors.green);
    ellipse(110, height /3, 120, 100); 
    ellipse(width - 110, height /3, 120, 100);
  }

  drawGround() {
    fill(this.colors.groundBrown);
    rect(0, height / 2, width, 300);
  }

  drawSky() {
    fill(this.colors.skyBlue);
    rect(0, 0, width, height );
  }

  display() {
    this.drawSky();
    this.drawGround();
    this.drawTrees();
    this.drawBuilding();
  }
}

let myCityScape;

function setup() {
  createCanvas(800, 600); 
  myCityScape = new CityScape(); 
}

function draw() {
  background(220); 
  myCityScape.display(); 
}
