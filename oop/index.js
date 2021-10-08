console.log('hi')

function a(_number) {
    _number++
}
a('hello')

class PersonRepo {
    getPersonById() {
        // goes to DAO
    }
}
class Person 
{
    id;
    name;
    age;
    constructor({id, name, age}) {
        this.id = id
        this.name = name
        this.age = age
    }
    talk() {
    }
    dance() {
    }
}
moshe = new Person({name: 'danny', id: 1, age: 20})


// class Flight  -- id, origin_country, departure_time, landing_time, remaining_tickets
// functions: purchase_ticket(), cancel_ticket()

class Flight {
    // fields -- data
    id; origin_country; departure_time; landing_time; remaining_tickets;
    // ctor
    constructor({id, origin_country, departure_time, landing_time, remaining_tickets}) {
        this.id = id
        this.origin_country = origin_country
        this.departure_time = departure_time
        this.landing_time = landing_time
        this.remaining_tickets = remaining_tickets
    }
    // functionallity
    purchaseTicket() {
        this.remaining_tickets--;
    }
    cancelTicket() {
        this.remaining_tickets++;
    }    
}
flight_1 = new Flight({id :1, origin_country: 'Israel', 
                        departure_time: new Date('2021-10-08 09:00:00'), 
                        landing_time: new Date('2021-10-09 09:00:00'), 
                        remaining_tickets: 300})
function print(msg) {
    console.log(msg)
}
print(flight_1)
flight_1.purchaseTicket()
print(flight_1)

