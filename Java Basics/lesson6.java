public class GetDriverLicense {
    public static String getDriverLicense(int age) {
      //Write code below this line
      return age < 16 ? "You can't get a license" : "You can get a license";
      //Write code above this line
    }
  }

public class CalculateTaxes {
  public static double calculateTaxes(double income) {
    //Write code below this line
    if(income <= 1000){
      return income * 0.02;
    } else if(income <= 10000){
      return income * 0.03;
    } else {
      return income * 0.05;
    }
    //Write code above this line
  }
}

public class GetTipsRating {
    public static String getTipsRating(int amount) {
      //Write code below this line
      if(amount == 0){
        return "terrible";
      } else if(amount <= 10){
        return "poor";
      } else if(amount <= 20){
        return "good";
      } else if(amount <= 50){
        return "great";
      } else{
        return "excellent";
      }
      //Write code above this line
    }
  }

  public class GetLargestExpressionResult {
    public static double getResult(double a, double b) {
      //Write code below this line
      double maximum = a + b;
      if(maximum < a - b){
        maximum = a - b;
      }
      if(maximum < a * b){
        maximum = a * b;
      }
      if(maximum < a / b){
        maximum = a / b;
      }
      return maximum;
      //Write code above this line
    }
  }
  