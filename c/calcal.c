#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define SUN 1
#define MON 2
#define TUE 3
#define WED 4
#define THU 5
#define FRI 6
#define SAT 7

int main(int argc, char *argv[]){
  int daylength=28,weeks=0;
  int startday=SUN;

  if(startday >= MON && startday <= SAT){
    weeks += 1;
  }
  
  switch(startday){
    case MON:
      daylength -= 6;
      break;
    case TUE:
      daylength -= 5;
      break;
    case WED:
      daylength -= 4;
      break;
    case THU:
      daylength -= 3;
      break;
    case FRI:
      daylength -= 2;
      break;
    case SAT:
      daylength -= 1;
      break;
    default:
      break;
  }
  weeks += daylength / 7;
  if(daylength % 7 > 0){
    weeks += 1;
  }

  printf("weeks length is : %d\n", weeks);
}
