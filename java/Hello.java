import java.util.*;
import java.lang.*;

public class Hello{
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    String m;
    int i=0;
    m="test";
    while(i<100){
      m=scan.nextLine();
      System.out.println(m);
      if(" ".equals(m)){
        System.out.println(" empy");
        break;
      } 
    }
  }
}
