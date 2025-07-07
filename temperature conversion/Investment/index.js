function calculateInterest(){
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);
    
    const simpleInterest = (principal * rate * years) / 100;
    const futureValue = principal + simpleInterest;
    
    document.getElementById("result").textContent 
    = `Future Value: $${futureValue.toFixed(2)}`;

}