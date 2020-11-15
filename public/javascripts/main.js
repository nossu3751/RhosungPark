$(()=>{
    $("#hamburger").click(()=>{
        $(".nav-menu").toggleClass("nav-open");
    });
});

$(()=>{
    $("#homepage-image").click(()=>{
        $('#resume-modal').modal('toggle');
    })
});

$(()=>{
    $(".developing").click(()=>{
        $("#developing-alert-modal").modal('toggle');
    });
});

$(() => {
    $('#contact-form').on('submit', (event)=>{
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var comment = $('#comment').val();
        
        console.log(name);
        console.log(email);
        console.log(comment);
        $.ajax({
            url: '/',
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify({
                name,
                email,
                comment
            }),
            success: (response) => {
                console.log(name);
                console.log(response);
            },
            fail: (error) => {
                console.log(error);
            }
        });

        $("#name").val('');
        $("#email").val('');
        $("#comment").val('');

        $('#contact-submit-modal').modal('toggle');
    });
});