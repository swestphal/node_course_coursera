var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      if (!customerList.some(item=>item[0]==CustomerId)){
            customerList.push([CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category])
      
            return customerList.length 
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      const indexToUpdate = customerList.findIndex((item)=>{ return item[0] == CustomerId})
      console.log(CustomerName, customerList[indexToUpdate])
      if (indexToUpdate!=-1) {
            customerList[indexToUpdate] =  [CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category]
      } 
}

const getAllCustomers=()=>{
      return customerList
  // Write the Logic here
}

module.exports={addCustomer,updateCustomer,getAllCustomers}