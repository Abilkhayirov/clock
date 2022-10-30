var clock = Number(prompt('Введите время'))

if(clock == 1 || clock == 21){
    console.log(`${clock} час ночи`);
}
else if(clock > 1 && clock <= 4){
    console.log(`${clock} часа ночи`);
}
else if(clock > 4 && clock < 12){
    console.log(`${clock} часов утра`);
}
else if(clock >= 12 && clock < 18){
    console.log(`${clock} часов дня`);
}
else if(clock >= 18 && clock <= 20){
    console.log(`${clock} часов вечера`);
}
else if(clock >= 22 && clock <= 24){
    console.log(`${clock} часа ночи`);
}