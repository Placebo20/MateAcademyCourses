public class LoopPractice {
  public static void printNumbers(int n) {
    for (int i = 1; i <= n; i = i + 1) {
      System.out.println(i);
    }
  }
}

public class CreateLoop {
  public static void printHello() {
    for (int i = 0; i < 10; i++) {
      System.out.println("hello");
    }
  }
}

public class LoopWithStep {
  public static void printNumbers(int n, int step) {
    for (int i = 0; i <= n; i += step) {
      System.out.println(i);
    }
  }
}

public class BackwardsLoop {
  public static void printNumbers(int n) {
    for (int i = n; i >= 0 ; i--) {
      System.out.println(i);
    }
  }
}

public class GetDrinks {
  public static int getDrinks(int guestNumber) {
    //Write code below this line
    byte countOfDrinks = 0;
    for(int i = 1; i <= guestNumber; i++){
      countOfDrinks += i;
    }
    return countOfDrinks;
    //Write code above this line
  }
}

public class GetDrinksWithStep {
  public static int getDrinksWithStep(int guestNumber, int step) {
    //Write code below this line
    int countOfDrinks = 0;
    for(int i = 1; i <= guestNumber; i += step){
      countOfDrinks += i;
    }
    return countOfDrinks;
    //Write code above this line
  }
}

public class CodeReview {
  public static void reviewCode(int maxAttempts) {
    //Write code below this line
    int solutionAttempts = 0;
    do{
      System.out.println("New solution is ready!");
      solutionAttempts++;
    }while(solutionAttempts < maxAttempts);
    //Write code above this line
  }
}

public class FizzBuzz {
  public static void playFizzBuzz(int start, int end) {
    for(int i = start; i <= end; i++){
      if(i % 5 == 0 && i % 7 == 0){
        System.out.println("fizzbuzz");
        continue;
      }
      if(i % 5 == 0){
        System.out.println("fizz");
        continue;
      }
      if(i % 7 == 0){
        System.out.println("buzz");
        continue;
      }
      System.out.println(i);
    }
  }
}