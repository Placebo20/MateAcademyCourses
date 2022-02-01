public class CorruptedData {
  public static String getValue(String dataFromDatabase) {
    // write your code below this line
    if(!dataFromDatabase.isEmpty()){
      String result = dataFromDatabase.toLowerCase();
      char[] charArray = result.toCharArray();
      boolean canSave = false;
      result = "";
      StringBuilder builder = new StringBuilder();
      for(int i = 0; i < charArray.length; i++){
        if(canSave){
          builder.append(charArray[i]);
        }
        if(charArray[i] == '='){
          canSave = true;
        }
      }
      return builder.toString();
    }
    return "";
    // write your code above this line
  }
}

public class GetSuccessRate {
  public static double getSuccessRate(String statistic) {
    // write your code belowe this line
    double whoGetIt = 0;
    double result = 0;
    char[] charArray = statistic.toCharArray();
    if(charArray.length != 0){
      for(int i = 0; i < charArray.length; i++){
        if(charArray[i] == '1'){
          whoGetIt++;
        }
      }
    } else {
      return 0;
    }
    System.out.println(whoGetIt + " * " + charArray.length + " / " + 100.0);
    result = whoGetIt / charArray.length;
    return result;
    // write your code above this line
  }
}

public class DetectWerewolf {
  public static boolean isWerewolf(String target) {
    // write your code below this line
    target.replace(" ","");
    target.replace("?","");
    StringBuilder direct = new StringBuilder(target);
    StringBuilder reversed = new StringBuilder(target);
    reversed = reversed.reverse();
    if(direct.toString().equals(reversed.toString())){
      return true;
    }
    return false;
    // write your code above this line
  }
}

public class MakeAbbr {
  public static String makeAbbr(String fullName) {
    // write your code below this line
    StringBuilder abbr = new StringBuilder();
    char[] charArray = fullName.toCharArray();
    if(charArray.length != 0){
      abbr.append(charArray[0]);
      for(int i = 0; i < charArray.length; i++){
        if(charArray[i] == ' '){
          abbr.append(charArray[i+1]);
        }
      }
      return abbr.toString().toUpperCase();
    }
    return "";
    // write your code above this line
  }
}

public class FixNullPointer {
  public static String getUpperCase(String inputString) {
    // write your code below this line
    if(inputString != null){
      return inputString.toUpperCase();
    } else {
      return "The string is null!";
    }
    // write your code above this line
  }
}

public class CompareStrings {
  public static boolean compareStrings(String firstString, String secondString) {
    // write your code below this line
    if(firstString != null && secondString != null){
      return firstString.equals(secondString);
    } else if(firstString == null && secondString == null){
      return true;
    } else {
      return false;
    }
    // write your code above this line
  }
}