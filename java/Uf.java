import java.util.*;

public class Uf {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int a = scan.nextInt();
    if(a%2>0) System.out.println("Weird");
    else if(a>1||a<6) System.out.println("Not Weird");
  }
}
