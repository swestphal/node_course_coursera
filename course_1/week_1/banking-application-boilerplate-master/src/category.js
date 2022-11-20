var category = function category(key) {
  
  // Write the Logic here

  switch(key.toLowerCase()) {
    case('pl'): {
      return "Personal Loan";
    }
    case('vl'): {
      return "Vehicle Loan";
    }
    case('el'): {
      return "Education Loan";
    }
    case('hl'): {
      return "Home Loan"
    };
  }
  return key
  };
  
  module.exports = {
    category: category
  };