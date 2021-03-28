SessionId = document.cookie;

function GetSaved()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "/saved", false );
    xmlHttp.send(SessionId);

    var Response = xmlHttp.responseText; 

    for(var i = 0; i < Response.lenght; i++)
    {
        var Id = Response[i]["Id"];
        var Name = Response[i]["Name"];
        var Photo = Response[i]["Photo"];
        var CovidRisk = Response[i]["CovidRisk"];
        var Weather = Response[i]["Weather"];

        RenderResult(Id, Name, Photo, CovidRisk, Weather);
    }
}

function RenderResult(Id, Name, Photo, CovidRisk, Weather)
{
    /* 
        <div class = "ResultPost">
            <div class = "BackgroundImage ResultImage ResultImageRight" style = "background-image: url(../statics/Images/Placeholder.png);"></div>

            <div class = "ResultTextContainer ResultTextRight BackgroundAccentPrimary text-center">
                <h1 class = "SubTitle ResultTitle" id = "ResultElement">Locatie</h1>
                
                <p class = "ResultText TextMedium">Covid Risk: </p>
                <p class = "ResultText TextMedium">Weather: </p>

                <p class = "ResultText TextMedium" onclick = "SaveResult('');">Save Result <i class = "far fa-star" id = "SaveIcon"></i></p>

                <div class = "AnimationIncrease0">
                    <a class = "ButtonTransparentMedium ResultReadMore" href = "PlanTrip.html">Plan trip <i class = "fas fa-angle-right ReadMoreIcon"></i></a>
                </div>
            </div>
        </div>
    */
    
    Post = document.createElement("div"); 
    PostString = '<div class = "ResultPost"><div class = "BackgroundImage ResultImage ResultImageRight" style = "background-image: url(' + Photo + ');"></div><div class = "ResultTextContainer ResultTextRight BackgroundAccentPrimary text-center"><h1 class = "SubTitle ResultTitle" id = "ResultElement">' + Name + '</h1><p class = "ResultText TextMedium">Covid Safeness: ' + CovidRisk + '</p><p class = "ResultText TextMedium">Weather: ' + Weather + ' Degrees</p><p class = "ResultText TextMedium" id = "' + Id + '">Save Result <i class = "fas fa-star" id = "SaveIcon"></i></p><div class = "AnimationIncrease0"><a class = "ButtonTransparentMedium ResultReadMore" href = "PlanTrip.html">Plan trip <i class = "fas fa-angle-right ReadMoreIcon"></i></a>';
    Post.innerHTML = PostString;
    document.getElementById("SavedResultRow").appendChild(Post);
}
