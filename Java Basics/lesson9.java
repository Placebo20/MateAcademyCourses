public class PizzaIngredients {
  public static void buyIngredients() {
    //Write code below this line
    String[] ingredients = {"apple", "orange", "banana", "kiwi", "pineapple"};
    for(String ingredient : ingredients){
      System.out.println("I bought some yummy " + ingredient + " for my pizza!");
    }
    //Write code above this line
  }
}

public class MaxArrayValue {
  public static int getMaxNumber(int[] numbers) {
    //Write code below this line
    int maxValue = numbers[0];
    for(int i = 1; i < numbers.length; i++){
      if(maxValue < numbers[i]){
        maxValue = numbers[i];
      }
    }
    return maxValue;
    // Write code above this line
  }
}

public class DoublePower {
  public static int[] getDoublePower(int[] powers) {
    //Write code below this line
    for(int i = 0; i < powers.length; i++){
      powers[i] *= 2;
    }
    return powers;
    //Write code above this line
  }
}

public class IgnoreEvenNumbers {
  public static void printNumbers(int[] numbers) {
    //Write code below this line
    for(int i = 0; i < numbers.length; i++){
      if(numbers[i] % 2 != 0){
        System.out.println(numbers[i]);
      } else {
        continue;
      }
    }
    //Write code above this line
  }
}

public class LoopBreaker {
  public static void printNumbers(int[] numbers) {
    //Write code below this line
    if(numbers.length == 0){
      return;
    }
    for(int i = numbers.length/2; i < numbers.length; i++){
      if(numbers[i] == 0){
        break;
      }
      System.out.println(numbers[i]);
    }
    //Write code above this line
  }
}

public class SpeedStatistic {
  public static int[] getSpeedStatistic(int[] results) {
    //Write code below this line
    int[] arr = new int[2];
    if(results.length == 0){
      return arr;
    }
    int lowestSpeed = results[0]; 
    int highestSpeed = results[0];
    for(int i = 1; i < results.length; i++){
      if(lowestSpeed > results[i]){
        lowestSpeed = results[i];
      }
      if(highestSpeed < results[i]){
        highestSpeed = results[i];
      }
    }
    arr[0] = lowestSpeed;
    arr[1] = highestSpeed;
    return arr;
    //Write code above this line
  }
}
