const readline = require(`readline`);
const r1 = readline.createInterface({
input:process.stdin,
output:process.stdout
});
function displayPhoneMenu(options){
    if(!options){
        console.log("Options are undefined");
        return;

    }
    console.log("Nokia Phone Menu");
    options.forEach((option ,index) => {
        console.log(`${index + 1}. ${option.name}`);
        });
}   

const phoneMenuOptions = [
    {name: "Phone Book" , submenu:[
        {name: "Search"},
        {name: "Service Nos"},
        {name: "Add name"},
        {name: "Erase"},
        {name: "Edit"},
        {name: "Assign tone"},
        {name: "Send b'card"},
        {name: "Options", submenu:[
            {name: "Type of View"},
            {name: "Memory Status"},
        ]},
        {name:"Speed Dials"},
        {name: "Voice Tags"},
     ]},
    {name: "Messages" , submenu:[
        {name: "Write Messages"},
        {name: "Inbox"},
        {name: "Outbox"},
        {name: "Picture Messages"},
        {name: "Templates"},
        {name: "Smileys"},
        {name: " Message Settings", submenu:[
            {name: "Set" , submenu:[
                {name: "Message Centre number"},
                {name: "Message sent as"},
                {name: "Message Validity"},
            ]},
            {name: "Common" ,submenu:[
                {name: "Delivery reports"},
                {name: "Reply via same centre"},
                {name: "Characte support"},
            ]},
        ]},
        {name:"Info service"},
        {name: "Voice mailbox number"},
        {name: "Service command editor"},
    ]},
    {name: "Chat"},
    {name: " Call register" , submenu:[
        {name: "Missed calls"},
        {name: " Received calls"},
        {name: "Dialled numbers"},
        {name: "Erase recent call lists"},
        {name: "Show call duration", submenu:[
            {name: "Last call duration"},
            {name: "All calls duration"},
            {name: " Recived calls duration"},
            {name: "Dialled calls duration"},
            {name: "Clear timers"},
        ]},
        {name: "Show call costs" ,submenu:[
            {name: "Last call costs"},
            {name: "All calls' cost"},
            {name: "Clear counters"},
        ]},
        {name: "Call cost settings", submenu:[
            {name: "Call cost limit"},
            {name: "Show costs in"},
        ]},
        {name: "Prepaid credit"}
    ]},
    {name: "Tones" , submenu:[
        {name: "Ringing Tone"},
        {name: "Ringing Volume"},
        {name: "Incoming call alert"},
        {name: "Composer"},
        {name: "Message alert tone"},
        {name: "Keypad tones"},
        {name:"Warning and game tones"},
        {name: "Vibrating alert"},
        {name: "Screen saver"}
    ]},
    {name: "Settings", submenu:[
        {name: "Call settings", submenu:[
            {name: "Automatic redial"},
            {name: "Speed dialing"},
            {name: "Call waiting options"},
            {name: "Own number sending"},
            {name: "Phone line in use"},
            {name: "Automatic answer"},
        ]},
        {name: "Phone settings", submenu:[
            {name: "Language"},
            {name: "Cell info display"},
            {name: "Welcome note"},
            {name: "Network selection"},
            {name: "Lights"},
            {name: "Confirm SIM service actions"}
        ]},
        {name: "Security settings", subsubmenu: [
            {name: "PIN code request"},
            {name: "Call barring service"},
            {name: "Fixed dialling"},
            {name: "Closed user group"},
            {name: "Phone security"},
            {name: "Change access codes"},
        ]},
        {name: "Restore factory settings"}
    ]},
    {name: "Call divert"},
    {name: "Games"},
    {name: "Calculator"},
    {name: "Reminders"},
    {name: "Clock" , submenu: [
        {name: "Alarm clock"},
        {name: "Clock settings"},
        {name: "Date Settings"},
        {name: "Stopwatch"},
        {name: "Countdown timer"},
        {name: "Auto update of date and time"},
    ]},
    {name: "Profiles"},
    {name: "SIM services"}
];
console.log("phone menu options:",phoneMenuOptions);
displayPhoneMenu(phoneMenuOptions);



r1.question("Enter the number of your choice: ", (input) =>  {
    input = parseInt(input);
    if(!isNaN(input) && input >= 1 && input <= phoneMenuOptions.length){
        const inputSelected = phoneMenuOptions[input - 1];
        if(inputSelected && inputSelected.submenu && inputSelected){
            displayPhoneMenu(inputSelected && inputSelected.submenu);
        }else{
            console.log("Invalid input")
        }
        r1.close();
    }
});

