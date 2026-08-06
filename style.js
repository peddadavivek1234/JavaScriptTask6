/*

//Task 1: Student attendance

function attendance() {
    var today = new Date();

    console.log("Employee Attendance");
    console.log("-------------------------");
    console.log("Date: ",today.getDate());
    console.log("Month: ",(today.getMonth() + 1));    
    console.log("Year: ",today.getFullYear());
    console.log("Day Number: ",today.getDay());
    console.log("Hours: ",today.getHours());
    console.log("Minutes: ",today.getMinutes());
    console.log("Seconds: ",today.getSeconds());
    if(today.getHours() < 12) {
        console.log("Good Morning");
    }
    else if(today.getHours() < 5) {
        console.log("Good Afternoon");
    }
    else {
        console.log("Good Evening");
    }
}

attendance();

*/

/*

//Task 2: Cricket Match Booking System

function cricketBooking() {
    let customerName = "Vivek";
    let matchName = "India vs Australia";
    let stadium = "Rajiv Gandhi Stadium";
    let ticketPrice = 1500;
    let tickets = 2;
    let matchDate = new Date();
    matchDate.setFullYear(2026);
    matchDate.setMonth(9);
    matchDate.setDate(25);
    matchDate.setHours(18);
    matchDate.setMinutes(30);
    matchDate.setSeconds(0);
    let year = matchDate.getFullYear();
    let month = matchDate.getMonth() + 1;
    let date = matchDate.getDate();
    let day = matchDate.getDay();
    let hours = matchDate.getHours();
    let minutes = matchDate.getMinutes();
    let seconds = matchDate.getSeconds();
    let totalAmount = ticketPrice * tickets;
    console.log("Customer Name: ",customerName);
    console.log("Match Name: ",matchName);
    console.log("Stadium: ",stadium);
    console.log("Ticket Price: ",ticketPrice);
    console.log("Tickets: ",tickets);
    console.log("Total Amount: ",totalAmount);
    console.log("Match Year: ",year);
    console.log("Match Month: ",month);
    console.log("Match Date: ",date);
    console.log("Match Day: ",day);
    console.log("Match Hours: ",hours);
    console.log("Match Minutes: ",minutes);
    console.log("Match Seconds: ",seconds);
    console.log("Booking Successfull")
}

cricketBooking();

*/

/*

//Task 3: Water Bill Payment

function waterBillPayment() {
    let customerName = "Vivek";
    let connectionNumber = 123456;
    let billAmount = 850;
    let paymentDate = new Date();
    paymentDate.setFullYear(2026);
    paymentDate.setMonth(8);
    paymentDate.setDate(15);
    paymentDate.setHours(11);
    paymentDate.setMinutes(45);
    paymentDate.setSeconds(0);
    let year = paymentDate.getFullYear();
    let month = paymentDate.getMonth() + 1;
    let date = paymentDate.getDate();
    let day = paymentDate.getDay();
    let hours = paymentDate.getHours();
    let minutes = paymentDate.getHours();
    let seconds = paymentDate.getSeconds();
    console.log("Customer Name: ",customerName);
    console.log("Connection Number: ",connectionNumber);
    console.log("Bill Amount: ",billAmount);
    console.log("Payment Year: ",year);
    console.log("Payment Month: ",month);
    console.log("Payment Date: ",date);
    console.log("Payment Day: ",day);
    console.log("Payment Hours: ",hours);
    console.log("Payment Minutes: ",minutes);
    console.log("Payment Seconds: ",seconds);
    console.log("Water bill Payment Successful");
}

waterBillPayment();

*/

//Task 19: Vehicle Insurance Renewal System

function vehicleInsuranceRenewal() {
    let ownerName = "Vivek";
    let vehicleNumber = "Ap39ap1234";
    let insuranceCompany = "ICICI Lombard";
    let renewalDate = new Date();
    let expiryDate = new Date();
    renewalDate.setFullYear(2026);
    renewalDate.setMonth(7);
    renewalDate.setDate(20);
    renewalDate.setHours(10);
    renewalDate.setMinutes(30);
    renewalDate.setSeconds(0);

    expiryDate.setFullYear(2027);
    expiryDate.setMonth(7);
    expiryDate.setDate(20);
    expiryDate.setHours(10);
    expiryDate.setMinutes(30);
    expiryDate.setSeconds(0);

    let renewalYear = renewalDate.getFullYear();
    let renewalMonth = renewalDate.getMonth() + 1;
    let renewalDay = renewalDate.getDate();
    let renewalWeek = renewalDate.getDay();

    let expiryYear = expiryDate.getFullYear();
    let expiryMonth = expiryDate.getMonth() + 1;
    let expiryDay = expiryDate.getDate();
    let expiryWeek =expiryDate.getDay();

    console.log("OwnerName: ",ownerName);
    console.log("Vehicle Number: ",vehicleNumber);
    console.log("Insurance Company: ",insuranceCompany);

    console.log("Renewal Year: ",renewalYear);
    console.log("Renewal Month: ",renewalMonth);
    console.log("Renewal Date: ",renewalDay);
    console.log("Renwenal Day: ",renewalWeek);

    console.log("Expiry Year: ",expiryYear);
    console.log("Expiry Month: ",expiryMonth);
    console.log("Expiry Date: ",expiryDay);
    console.log("Expiry Day: ",expiryWeek);

    console.log("Vehicle Insurance Renewed Successfully");
}

vehicleInsuranceRenewal();