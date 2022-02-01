public class GetMiddleCharacter {
  public static String getMiddleString(String originalString) {
    // write your code below this line
    StringBuilder result = new StringBuilder();
    char[] charArray = originalString.toCharArray();
    if(charArray.length != 0){
      if(charArray.length % 2 == 0){
        for(int i = charArray.length/2 - 1; i < charArray.length; i++){
          result.append(charArray[i]);
          result.append(charArray[i+1]);
          return result.toString();
        }
      } else {
        result.append(charArray[charArray.length/2]);
        return result.toString();
      }
    }
    return "";
    // write your code above this line
  }
}

public class RemoveOddChars {
  public static String removeOddChars(String originalString) {
    // write your code below this line
    char[] charArray = originalString.toCharArray();
    StringBuilder builder = new StringBuilder("");
    if(charArray.length != 0){
      for(int i = 0; i < charArray.length; i++){
        if(i % 2 == 0){
          builder.append(charArray[i]);
        }
      }
    }
    return builder.toString();
    // write your code above this line
  }
}

public class MarkStringEnds {
  public static String[] markStringEnds(String originalString) {
    // write your code below this line
    String first = originalString.substring(0, 1).toUpperCase() + originalString.substring(1);
        String last = originalString.substring(0, originalString.length() - 1) + originalString.substring(originalString.length() - 1).toUpperCase();
        return new String[]{first, last};
    // write your code above this line
  }
}

public class GetOccurrenceCount {
  public static int getOccurrenceCount(String[] colors, String targetColor) {
    // write your code below this line
    byte count = 0;
    if(colors.length != 0){
      for(int i = 0; i < colors.length; i++){
        if(colors[i].equals(targetColor)){
          count++;
        }
      }
    }
    return count;
    // write your code above this line
  }
}

public class GetAverageSalary {
  public static double getAverageSalary(double[] salaries) {
    // write your code below this line
    int count = salaries.length;
    double sum = 0;
    if(salaries.length != 0){
      for(int i = 0; i < count; i++){
        sum += salaries[i];
      }
    } else {
      return 0.0;
    }
    return sum / count;
    // write your code above this line
  }
}

public class CountTheMonkeys {
  public static int[] countTheMonkeys(int count) {
    // write your code below this line
    int[] monkeys = new int[count];
    for(int i = 0; i < count; i++){
      monkeys[i] = i+1;
    }
    return monkeys;
    // write your code above this line
  }
}

public class GetHighestAndLowestAge {
  public static int[] getHighestAndLowestAge(int[] ages) {
    // write your code below this line
    int[] age = {ages[0], ages[0]};
    if(ages.length != 0){
      for(int i = 1; i < ages.length; i++){
        if(ages[i] > age[0]){
          age[0] = ages[i];
        }
        if(ages[i] < age[1]){
          age[1] = ages[i];
        }
      }
    }
    return age;
    // write your code above this line
  }
}

public class DivisibleNumbers {
  public static int[] getDivisibleNumbers(int[] numbers, int divider) {
    //write your code below this line
    int[] dividedBuff = new int[numbers.length];
    int countDivided = 0;
    if(numbers.length != 0){
      for(int i = 0; i < numbers.length; i++){
        if(numbers[i] % divider == 0 && numbers[i] > 0){
          dividedBuff[countDivided] = numbers[i];
          countDivided++;
        }
      }
    }
    for(int i = 0; i < dividedBuff.length; i++){
      System.out.println(dividedBuff[i]);
    }
    int[] divided = new int[countDivided];
      for(int i = 0; i < divided.length; i++){
        divided[i] = dividedBuff[i];
      }
    return divided;
    //write your code above this line
  }
}
