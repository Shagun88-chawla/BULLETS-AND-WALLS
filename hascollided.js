function hascollided(bulletl,walll) {
    bulletRightEdge=bulletl.x + bulletl.width;
    wallLeftEdge= walll.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
      return false;
    }