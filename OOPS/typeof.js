var favHobbies = function (hobby) {
    if (typeof hobby === 'object' && Array.isArray(hobby)) {
        return hobby.map(function (hobby) {
            console.log("This is from array :", hobby);
        });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("coding");
favHobbies(['coding', 'acting']);
