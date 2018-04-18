$(document).ready(function () {
    // Materialize Modal
    $('.modal').modal();
    // Select initialization
    $('select').formSelect();
    // Collapsible
    $('.collapsible').collapsible();
    
    // Google Sign In
    onSignIn = (googleUser) => {
        var profile = googleUser.getBasicProfile();
        console.log(profile)
        const googleProfileEmail = {
            googleProfileEmail: profile.getEmail()
        }
        fetch("/loginWithGoogle",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(googleProfileEmail)
            })
            .then(res => res.json())
            .then(body => {
                console.log(body)
                localStorage.removeItem("RCB_USER");
                localStorage.setItem("RCB_USER", JSON.stringify(body));
                if (body.RCB_NO_GOOLE_USER_IN_DB) {                    
                    const messageDiv = `
                        <p>
                            Your are currently logged into Google as: <b> <span id="google_account_email"></span> </b> <br/>
                            That user does not exist in our system. <br/>
                            Please login with your email or <a href="/signup">Create an account</a>.
                        </p>
                    `;
                    
                    $("#rcb_no_user").html(messageDiv);
                    $("#google_account_email").text(profile.getEmail());
                    $("#rcb_no_user").removeClass("hide");
                    setTimeout(() => {
                        $("#rcb_no_user").addClass("hide");
                    }, 15000);                    
                }else{
                    window.location.href = "/portfolio";
                }             
            }
        );//end of response
    }
    // Client Side Form Validation
    function validateMyEmail (whichEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(whichEmail)) {
            return true;
        }
        else {
            return false;
        }
    };

    var  firstName = $("#firstName").val(),
        lastName = $("#lastName").val(),
        email = $("#email").val(),
        password = $("#password").val();

    $(".signUpButton").prop("disabled", true);
    $('#firstName, #lastName, #email, #password').change(function () {
        if ($("#firstName").val() != '' && $("#lastName").val() != '' && $("#email").val() != '' && $("#password").val() != '') {            
            if (validateMyEmail($("#email").val())) {
                $(".signUpButton").prop("disabled", false);
            }else{
                $("#email").addClass("red white-text col");
                setTimeout(() => {
                    $("#email").removeClass("red white-text");
                }, 7000);
            }            
        }else{
            $(".signUpButton").prop("disabled", true);
        }
    });

    $('#prof').change(function(){
        console.log($('#prof').val());
        if($('#prof').val() === 'profession'){
            $('#searchIcon').attr('disabled', true)
        }else {
            $('#searchIcon').attr('disabled', false)
        }
       
    })

    $('#searchIcon').click(function(){
       document.getElementById('test').setAttribute('class', 'hide');
    })
});