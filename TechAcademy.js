var role="Master"

if(role==Master){
    console.log("view add delete create update");
}elseif(role==Admin){
    console.log("view and create");
}else(role==User){
    console.log("view and edit");
}

role="Admin"
switch(role)
{
    case "Master":    console.log("view add delete create update");
    break;
    case "Admin":    console.log("view and create");
    break;
    case "User":    console.log("view and edit");
    break;
}