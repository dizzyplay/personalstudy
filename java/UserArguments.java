import java.util.ArrayList;

public class UserArguments{
  public static void main(String[] args) {
    String[] numbers={"one","two","three"};
    int a = 100;
    System.out.println(add(5,3));
  }
  public static int add(int a, int b){
    return a+b;
  }
  public static boolean isBig(int a, int b){
    return a>b;
  }
}
