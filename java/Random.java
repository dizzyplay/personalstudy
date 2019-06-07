public class Random {
  public static void main(String[] args) {
    int value = 10;
    double r = Math.random();
    value = (int)(value*r);
    System.out.println(value);
  }
}
