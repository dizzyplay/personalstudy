import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int n = scan.nextInt();
    String s="";
    for(int i=1; i<=n; i++){
      for(int j=0; j<i; j++){
        s+='*';
      }
      System.out.println(s);
      s="";
    }
  }
}
