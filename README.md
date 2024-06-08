# DEVELOP AVERAGE CALCULATOR MICROSERVICE

## DESCRIPTION
This app takes numberid parameter from user and based on the value provided, it gives average of all the numbers present in the array.

The numberid can be
1. p for prime numbers
2. e for even numbers
3. f for fibonacci numbers
4. r for random numbers

To see the response, hit the GET Api with numberid as parameter for e.g. 
let's assume out project is hosted locally at port 3000, then

```http://localhost:3000/api/v1/numbers/e```

NOTE :- It will only work if Access token is valid, so before making the request you need to update Authorization header in .env file

## SOME INSIGHTS OF PROJECT
* It uses MVC Architecture pattern for its implementation making it scalable.
* It uses Axios for making network request from server to another server.
* It uses Http-errors module for throwing Errors.
* Uses Modern Coding Methodology.

## DEPENDENCIES USED
* axios
* cors
* dotenv
* express
* http-errors
* mongoose

## SCREENSHOTS

When there is no data stored in mongodb database

![Screenshot (4542)](https://github.com/itssinghankit/2100270100024/assets/113197480/cf20831f-d66c-4fd3-bce1-6eeb76e2153a)

Making Request for first time

![Screenshot (4543)](https://github.com/itssinghankit/2100270100024/assets/113197480/8d6aba0d-f463-4292-96e5-6717ff63cabd)

NOTE :- windowPrevState Array is Empty.

MongoDB database screenshot

![Screenshot (4544)](https://github.com/itssinghankit/2100270100024/assets/113197480/ad1f091b-b554-4bcd-85ed-412172128aac)

Making Request for second time

![Screenshot (4545)](https://github.com/itssinghankit/2100270100024/assets/113197480/1ebb1856-5432-4ebe-9f02-08f1846d678e)

MongoDB database screenshot

![Screenshot (4546)](https://github.com/itssinghankit/2100270100024/assets/113197480/900d1452-143b-4b60-9f75-9bd65b5bf2a7)



