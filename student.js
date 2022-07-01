class Student {
    constructor(id, name, surname, dob, imageUrl) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.imageUrl = imageUrl;
    }

    get dateOfBirth() {
        return new Date(this.dob);
    }

    set dateOfBirth(value) {
        this.dob = value.toISOString;
    }

    getDaysToBirthday() {
    //     const today = new Date();
    //     const todayInMillisecond = today.getTime();
    //     const dobInMillisecond = this.dateOfBirth.getTime();
    //     const toBirthday = todayInMillisecond - dobInMillisecond;
    //     const toBirthdayInDate = toBirthday / 1000 / 60 / 60 / 24;
    //     const roundedBirthday = Math.floor(toBirthdayInDate);
    //     return roundedBirthday;
        const today = new Date();
        const todayInMillis = today.getTime(); 
        const birthDayClone = new Date(this.dateOfBirth.getTime());
        birthDayClone.setFullYear(today.getFullYear()); 
        const birthdayInMillis = birthDayClone.getTime(); 
//  let non deve essere subito inizializzata;
        let diff;
        if (todayInMillis > birthdayInMillis) {
            birthDayClone.setFullYear(today.getFullYear() + 1); 
            const newYearBrithDayInMIllis = birthDayClone.getTime(); 
            diff = newYearBrithDayInMIllis - todayInMillis; 
            const toBirthdayInDate = diff / 1000 / 60 / 60 / 24;
            const roundedBirthday = Math.floor(toBirthdayInDate);
            return roundedBirthday;
        } else { 
            diff = birthdayInMillis - todayInMillis; 
        }
        
        const toBirthdayInDate = diff / 1000 / 60 / 60 / 24;
        const roundedBirthday = Math.floor(toBirthdayInDate);
        return roundedBirthday; 

        console.log('today', today); 
        console.log('birthday', birthDayClone);
    } 
    
    static fromObj(obj) {
        return new Student(obj.id, obj.name, obj.surname, obj.dob, obj.avatar);
    }
}

