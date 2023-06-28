# QR_Ticket_app
![enter image description here](https://media.licdn.com/dms/image/D4D12AQFQ0Km6ryv2pg/article-cover_image-shrink_423_752/0/1684268425268?e=1691020800&v=beta&t=ly433CviXvlnRFCyVvfWMAKxPljU4GjBdeIZBctskgM) 
### How we handled 4000+ footfalls at Annual cultural fest of BIT Mesra ?

Original Post -  https://www.linkedin.com/pulse/how-we-handled-4000-footfalls-annual-cultural-fest-bit-mayukh-pankaj/ 

The stage was set, and exhilaration was in the air for BITOTSAV ’23 , The annual cultural fest of BIT Mesra. A break from monotonous schedule, The campus was going to buzz with celebrities like Papon performing, 200+ sponsors, 50+ colleges participating and 70+ events organized by various clubs & societies of BIT. It was a highly anticipated event and we were expecting four thousand footfalls.

Until now we relied on printed passes for entries to concerts, events. Printing them was expensive & handing out to each attendee is tedious.

we wanted to solve this problem, with a solution that is hassle-free yet secure, cannot be counterfeited, and proves the validity of the ticket

we came up with a QR ticketing system, scanning QR codes for ticket validation. A unique QR code would be generated for each user and rendered on the dashboard of our fest website, [www.bitotsav.in](http://www.bitotsav.in/)

On scanned by the app with security team, the QR scanner returns the userid and then the app makes an API call to the backend with userid as payload. It validates and checks for **Entry** variable in the database.

without going much into the codebase, here's an illustration of how it worked.
![No alt text provided for this image](https://media.licdn.com/dms/image/D4D12AQFu4GZAfADcAw/article-inline_image-shrink_1000_1488/0/1682862589822?e=1691020800&v=beta&t=fsoUFNNDVN7iOZ8p5wRee17383T7ajjLy3YFXdhBTT4)
If the variable is  **true**, It changes it to false and returns true to the app, green tick pops up on the app.

If the API returns  **false**, you guessed right the ticket has scanned before & shows an alert.

We were able to flag attendees who tried to counterfeit, used screenshot of pass.
![No alt text provided for this image](https://media.licdn.com/dms/image/D4D12AQG-gjMkzoZT2Q/article-inline_image-shrink_1500_2232/0/1682863013551?e=1691020800&v=beta&t=8IKGOgWES5QSXXPLVACtkMwilREP8VhYlILJF054bHA)

That's how we managed more than four thousand footfalls at bitotsav'23. We could have used paid third party apps, but building our platform from scratch gave freedom & flexibility.

It felt awesome to see something you build solving a real life problem.

Huge shout out to my colleagues Pawan & Bhavy who made it possible. Pawan who worked on backend, wrote a script to generate QRs and host them on multiple cloudinary instances as we ran out of bandwidth qouta. Bhavy worked on the frontend, solved event queries and Tanish Gupta for coordinating everything.

  

Github Repos

backend -  [https://github.com/mayukhpankaj/bitotsav-backend](https://github.com/mayukhpankaj/bitotsav-backend)

Scanner app -  [https://github.com/mayukhpankaj/QRcode_Entry](https://github.com/mayukhpankaj/QRcode_Entry)

Thanks.

