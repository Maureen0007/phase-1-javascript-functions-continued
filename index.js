function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
    
}
saturdayFun()
saturdayFun("bathe my dog")

const mondayWork= function (activity="go to the office") {
    return `This Monday, I will ${activity}.`
    
}
mondayWork()
mondayWork("work from home")
 
function wrapAdjective(type = ' * ') {
    return function anotherFunction(wrap = 'special') {
        return `You are ${type}${wrap}${type}!`;  
        
    }
    
}
const final =wrapAdjective('*  ')('')