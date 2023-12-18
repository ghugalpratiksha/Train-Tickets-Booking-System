import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secondproject';
  data: string = 'Train Booking System'
  trainName = "Train Name: Mumbai-Pune Express"
  tickets = 136

  // bookTickets(){
  //   console.log("Available Tickets are", this.tickets)
  //   if(this.tickets=this.tickets)
  //   alert("the Available Tickets are.i--")
  // }
  // cancleTickets(){
  //   console.log("Available Tickets are.this")
  //   if(this.tickets=this.tickets)
  //   alert("the Availble Tickets are.i++")
  // }

  // bookTickets(){
  //   {
  //     console.log("136")
  //     this.tickets--
  //     alert("Congratulations your Ticket is Book")
  //   }
  // }
  // cancleTickets(){
  //   {
  //     console.log("136")
  //     this.tickets++
  //     alert('ooo you just canclled your booking')
  //   }
  // }

  bookTickets(){
    {
      if(this.tickets!==0)
      this.tickets--;
    console.log('book Tickets', this.tickets);
    alert('Your Tickets Booked successfully');
    }
  }
  cancleTickets(){
    if(this.tickets!==10)
    this.tickets++;
  console.log('cancled Tickets', this.tickets);
  alert('Are You Sure Want to Canclled Tickets');
  }
}
